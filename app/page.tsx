import { Motion } from "@/components/motion"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Solutions from "@/components/solutions"
import RemovalStages from "@/components/removal-stages"
import HowItWorks from "@/components/how-it-works"
import CaseStudies from "@/components/case-studies"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Motion>
        <Hero />
      </Motion>
      <Motion delay={0.1}>
        <Features />
      </Motion>
      <Motion delay={0.2}>
        <Solutions />
      </Motion>
      <Motion delay={0.3}>
        <RemovalStages />
      </Motion>
      <Motion delay={0.4}>
        <HowItWorks />
      </Motion>
      <Motion delay={0.5}>
        <CaseStudies />
      </Motion>
      <Motion delay={0.6}>
        <Pricing />
      </Motion>
      <Motion delay={0.7}>
        <FAQ />
      </Motion>
      <Footer />
    </main>
  )
}
