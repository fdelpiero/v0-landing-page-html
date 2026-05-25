import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Marquee } from "@/components/marquee"
import { IsThisForYou } from "@/components/is-this-for-you"
import { Services } from "@/components/services"
import { ToolsSection } from "@/components/tools-section"
import { WhoItsFor } from "@/components/who-its-for"
import { ProofSection } from "@/components/proof-section"
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
        <ToolsSection />
        <WhoItsFor />
        <ProofSection />
        <WorkshopCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
