'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface BannerSlide {
  id: number
  title: string
  subtitle: string
  description?: string
  image?: string
  gradient: string
  ctaText: string
  ctaLink: string
  badge?: string
}

const banners: BannerSlide[] = [
  {
    id: 1,
    title: 'Upgrade the Way You Choose',
    subtitle: 'Loans & Credit Cards',
    description: 'Get instant approval at lowest interest rates',
    gradient: 'from-primary-600 via-primary-500 to-accent-500',
    ctaText: 'Apply Now',
    ctaLink: '/apply',
    badge: 'Quick Sanction',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Quick Disbursal',
    subtitle: 'Personal Loan',
    description: 'Paperless process at low rate',
    gradient: 'from-accent-600 via-accent-500 to-primary-500',
    ctaText: 'Apply Now',
    ctaLink: '/loans',
    badge: 'Instant',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Lowest EMI Ride',
    subtitle: 'New Car Loan',
    description: 'Drive away your dream car today',
    gradient: 'from-primary-500 via-accent-500 to-primary-600',
    ctaText: 'Apply Now',
    ctaLink: '/loans',
    badge: 'Best Rates',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop'
  },
  {
    id: 4,
    title: 'Rewards Unlimited',
    subtitle: 'Credit Card',
    description: 'Choose cards from all top banks',
    gradient: 'from-accent-500 via-primary-500 to-accent-600',
    ctaText: 'Apply Now',
    ctaLink: '/credit-cards',
    badge: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'
  }
]

export function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % banners.length)
    }, 5000) // Auto-rotate every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev + 1) % banners.length)
    } else {
      setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)
    }
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
          className={`absolute inset-0 bg-gradient-to-br ${banners[currentIndex].gradient} flex items-center justify-center`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white"
              >
                {banners[currentIndex].badge && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4"
                  >
                    {banners[currentIndex].badge}
                  </motion.span>
                )}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                >
                  {banners[currentIndex].title}
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-2xl md:text-3xl font-semibold mb-4"
                >
                  {banners[currentIndex].subtitle}
                </motion.h2>
                {banners[currentIndex].description && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg md:text-xl mb-8 opacity-90"
                  >
                    {banners[currentIndex].description}
                  </motion.p>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Link href={banners[currentIndex].ctaLink}>
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                        boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-accent-600 to-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-accent-700 hover:to-primary-700 transition-all relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-100"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10 text-white">
                        {banners[currentIndex].ctaText}
                      </span>
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Visual Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden lg:block"
              >
                <div className="relative w-full h-96">
                  {/* Main Image Container */}
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.03, 1]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src={banners[currentIndex].image || 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'}
                      alt={banners[currentIndex].title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 backdrop-blur-[2px]" />
                  </motion.div>
                  
                  {/* Floating Decorative Element */}
                  <motion.div
                    animate={{
                      rotate: [0, -10, 10, 0],
                      scale: [1, 0.95, 1],
                      y: [0, -20, 0]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -top-4 -right-4 w-32 h-32 bg-white/30 backdrop-blur-sm rounded-2xl border-2 border-white/40"
                  />
                  
                  {/* Bottom Decorative Element */}
                  <motion.div
                    animate={{
                      rotate: [0, 15, -15, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                    className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

