import { HomeHero } from '@/components/HomeHero'
import { FinancialServices } from '@/components/FinancialServices'
import { Features } from '@/components/Features'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'

export default function Home() {
  return (
    <div className="pt-16 md:pt-20">
      <HomeHero />
      <FinancialServices />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  )
}

