import { BannerCarousel } from '@/components/BannerCarousel'
import { StatisticsCounter } from '@/components/StatisticsCounter'
import { HomeHero } from '@/components/HomeHero'
import { FinancialServices } from '@/components/FinancialServices'
import { ProcessSteps } from '@/components/ProcessSteps'
import { FinancialCalculators } from '@/components/FinancialCalculators'
import { Features } from '@/components/Features'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'

export default function Home() {
  return (
    <div className="pt-16 md:pt-20">
      <BannerCarousel />
      <StatisticsCounter />
      <HomeHero />
      <FinancialServices />
      <ProcessSteps />
      <FinancialCalculators />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  )
}

