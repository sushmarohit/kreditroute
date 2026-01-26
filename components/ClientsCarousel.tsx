'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Building2, Briefcase, TrendingUp, Shield } from 'lucide-react'
import { RamFincorpLogo, FLotLogo, ZypeLogo, FDPLFinanceLogo, PayMeLogo } from '@/components/logos/CompanyLogos'
import type { ComponentType } from 'react'

export function ClientsCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Client logos - using actual company logos
  const clients: Array<{ name: string; LogoComponent: ComponentType }> = [
    { name: 'Ram Fincorp', LogoComponent: RamFincorpLogo },
    { name: 'FLot', LogoComponent: FLotLogo },
    { name: 'zype', LogoComponent: ZypeLogo },
    { name: 'FDPL Finance', LogoComponent: FDPLFinanceLogo },
    { name: 'Pay Me', LogoComponent: PayMeLogo },
  ]

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients]

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const scrollContent = carousel.querySelector('div') as HTMLElement
    if (!scrollContent) return

    let animationFrameId: number | null = null
    let intervalId: NodeJS.Timeout | null = null
    let scrollPosition = 0

    const startAnimation = () => {
      const contentWidth = scrollContent.scrollWidth
      const containerWidth = carousel.clientWidth
      
      // If content not ready or content fits in container, wait and try again
      if (contentWidth === 0 || contentWidth <= containerWidth) {
        animationFrameId = requestAnimationFrame(startAnimation)
        return
      }

      // Calculate the width of one set of clients (we have 3 duplicates)
      const singleSetWidth = contentWidth / 3
      const scrollSpeed = 0.5

      // Reset scroll position to start
      scrollPosition = 0
      carousel.scrollLeft = 0

      const animate = () => {
        if (carousel && scrollContent) {
          if (!isPaused) {
            scrollPosition += scrollSpeed
            
            // When we reach one full set, wrap around for seamless loop
            if (scrollPosition >= singleSetWidth) {
              scrollPosition = scrollPosition - singleSetWidth
            }
            
            carousel.scrollLeft = scrollPosition
          }
        }
      }

      intervalId = setInterval(animate, 16) // ~60fps smooth animation
    }

    // Start animation after a brief delay to ensure content is measured
    const timeoutId = setTimeout(() => {
      startAnimation()
    }, 150)

    return () => {
      clearTimeout(timeoutId)
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId)
      if (intervalId !== null) clearInterval(intervalId)
    }
  }, [isPaused])

  return (
    <section className="py-16 md:py-4 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Financial Institutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Partnered with top banks, NBFCs, and financial institutions across India
          </p>
        </motion.div>

        {/* Carousel Container - No cards, just logos on white background */}
        <div
          ref={carouselRef}
          className="overflow-x-auto relative py-8 scrollbar-hide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex gap-16 items-center" style={{ width: 'max-content', display: 'flex' }}>
            {duplicatedClients.map((client, index) => {
              const LogoComponent = client.LogoComponent
              return (
                <motion.div
                  key={`${client.name}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 flex items-center justify-center group cursor-pointer opacity-70 hover:opacity-100 transition-all duration-300"
                  transition={{ duration: 0.3 }}
                >
                  <LogoComponent />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Partner Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Partner Banks', value: '50+', icon: Building2 },
            { label: 'NBFC Partners', value: '30+', icon: Briefcase },
            { label: 'Insurance Partners', value: '15+', icon: Shield },
            { label: 'Total Partners', value: '80+', icon: TrendingUp }
          ].map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-gray-600">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
