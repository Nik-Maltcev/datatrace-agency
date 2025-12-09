import Navbar from "@/components/navbar"
import Background from "@/components/background"
import HeroNew from "@/components/hero-new"
import ServicesNew from "@/components/services-new"
import Team from "@/components/team"
import Process from "@/components/process"
import TechStack from "@/components/tech-stack"
import ClientPath from "@/components/client-path"
import Cases from "@/components/cases"
import FAQNew from "@/components/faq-new"
import CTA from "@/components/cta"
import FooterNew from "@/components/footer-new"

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-brand-black selection:bg-black selection:text-white">
      <Background />
      <Navbar />
      <main>
        <HeroNew />
        <ServicesNew />
        <Team />
        <Process />
        <TechStack />
        <ClientPath />
        <Cases />
        <FAQNew />
        <CTA />
      </main>
      <FooterNew />
    </div>
  )
}
