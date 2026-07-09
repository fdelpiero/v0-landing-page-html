import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Marquee } from "@/components/marquee"
import { IsThisForYou } from "@/components/is-this-for-you"
import { Services } from "@/components/services"
import { HowItWorks } from "@/components/how-it-works"
import { UseCases } from "@/components/use-cases"
import { ToolsSection } from "@/components/tools-section"
import { Workshops } from "@/components/workshops"
import { WorkshopCTA } from "@/components/workshop-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      {/* Grid background */}
      <div className="grid-bg" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <Marquee />
        <IsThisForYou />
        <Services />
        <HowItWorks />
        <UseCases />
        <ToolsSection />
        <Workshops />
        <WorkshopCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
