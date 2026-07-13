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
import type { Locale } from "@/lib/i18n"
import { LocalePreferenceRedirect } from "@/components/locale-preference-redirect"

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      {locale === "en" && <LocalePreferenceRedirect />}
      <div className="grid-bg" />
      <Navbar locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <Marquee locale={locale} />
        <IsThisForYou locale={locale} />
        <Services locale={locale} />
        <HowItWorks locale={locale} />
        <UseCases locale={locale} />
        <ToolsSection locale={locale} />
        <Workshops locale={locale} />
        <WorkshopCTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}
