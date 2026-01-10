import { BannerCarousel } from '@/components/BannerCarousel'
import { StatisticsCounter } from '@/components/StatisticsCounter'
import { HomeHero } from '@/components/HomeHero'
import { FinancialServices } from '@/components/FinancialServices'
import { ClientsCarousel } from '@/components/ClientsCarousel'
import { SecuritySection } from '@/components/SecuritySection'
import { PartnersSection } from '@/components/PartnersSection'
import { ProcessSteps } from '@/components/ProcessSteps'
import { FinancialCalculators } from '@/components/FinancialCalculators'
import { Features } from '@/components/Features'
import { AppDownload } from '@/components/AppDownload'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'

export default function Home() {
  return (
    <div className="pt-16 md:pt-20">
      <BannerCarousel />
      <HomeHero />
      <FinancialServices />
      <ClientsCarousel />
      <SecuritySection />
      <PartnersSection />
      <ProcessSteps />
      <FinancialCalculators />
      <StatisticsCounter />
      <Features />
      <AppDownload />
      <Testimonials />
      <CTA />
    </div>
  )
}

