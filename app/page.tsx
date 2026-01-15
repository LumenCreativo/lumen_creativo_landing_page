import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Purpose from "@/components/sections/Purpose";
import Services from "@/components/sections/Services";
import Philosophy from "@/components/sections/Philosophy";
import CtaFinal from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <main className="min-h-screen bg-lumen-clarity">
      <Navbar />
      <Hero />
      <Purpose />
      <Services />
      <Philosophy />
      <CtaFinal />
      <Footer />
    </main>
  );
}
