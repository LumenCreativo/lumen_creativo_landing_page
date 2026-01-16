import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { nombre, email, whatsapp, institucion, necesidad } = body;

        // 1. Validar datos básicos
        if (!nombre || !email || !whatsapp) {
            return NextResponse.json(
                { error: "Faltan datos obligatorios" },
                { status: 400 }
            );
        }

        const apiUrl = process.env.ERPNEXT_URL;
        const apiKey = process.env.ERPNEXT_API_KEY;
        const apiSecret = process.env.ERPNEXT_API_SECRET;

        if (!apiUrl || !apiKey || !apiSecret) {
            console.error("Faltan variables de entorno de ERPNext");
            return NextResponse.json(
                { error: "Error de configuración del servidor" },
                { status: 500 }
            );
        }

        // 2. Crear Lead en ERPNext
        // Mapeamos los campos del formulario a los campos de ERPNext
        // Nota: 'custom_fields' depende de lo que tengas configurado. 
        // Usaremos notas para lo que no calce directo por seguridad.
        const leadData = {
            lead_name: nombre,
            email_id: email,
            mobile_no: whatsapp,
            company: "Lumen Creativo", // Ajusta si tu company se llama distinto
            status: "Lead",
            source: "Website",
            territory: "All Territories", // Valor por defecto seguro
            title: institucion, // Usamos el campo title para la institución/cargo
        };

        const response = await fetch(`${apiUrl}/api/resource/Lead`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${apiKey}:${apiSecret}`,
            },
            body: JSON.stringify(leadData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error ERPNext Lead:", errorData);
            return NextResponse.json(
                { error: "Error al crear Lead en ERPNext", details: errorData },
                { status: response.status }
            );
        }

        const result = await response.json();
        const leadName = result.data.name;

        // 3. Agregar Nota con los detalles completos (Necesidad)
        // ERPNext usa 'Note' o 'Comment' vinculado al doctype
        const noteContent = `
      <b>Nueva solicitud desde Web:</b><br>
      <b>Institución:</b> ${institucion}<br>
      <b>Necesidad:</b> ${necesidad}<br>
    `;

        const noteResponse = await fetch(`${apiUrl}/api/resource/Note`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${apiKey}:${apiSecret}`,
            },
            body: JSON.stringify({
                title: `Mensaje de ${nombre}`,
                content: noteContent,
                public: 0,
                // Relación con el Lead (depende de la versión, a veces se usa Links)
            })
        });

        // Alternativa más robusta: Crear un Comentario en el Lead
        await fetch(`${apiUrl}/api/resource/Comment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `token ${apiKey}:${apiSecret}`,
            },
            body: JSON.stringify({
                reference_doctype: "Lead",
                reference_name: leadName,
                content: `Institución: ${institucion} \nNecesidad: ${necesidad}`,
                comment_type: "Comment",
            })
        });

        return NextResponse.json({ success: true, lead: leadName });

    } catch (error) {
        console.error("Error general API:", error);
        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500 }
        );
    }
}
