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
    gradient: 'from-gray-900 via-gray-800 to-black',
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
    gradient: 'from-black via-gray-900 to-gray-800',
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
    gradient: 'from-gray-800 via-black to-gray-900',
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
    gradient: 'from-black via-gray-800 to-gray-900',
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
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-200">
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
          style={{
            boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.5), 0 20px 60px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* Background Pattern - 3D Effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          {/* 3D Border Shadow Effect */}
          <div className="absolute inset-0 border-4 border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.1),inset_0_0_40px_rgba(0,0,0,0.3)]"></div>

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
                    className="inline-block bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]"
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
                        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(255, 255, 255, 0.1)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/30 shadow-[0_8px_25px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-white/20 hover:border-white/40 transition-all relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
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
                    className="absolute inset-0 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_0_40px_rgba(0,0,0,0.3)] border-2 border-white/20"
                    style={{
                      transform: 'perspective(1000px) rotateY(-2deg) rotateX(2deg)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <Image
                      src={banners[currentIndex].image || 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'}
                      alt={banners[currentIndex].title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay Gradient - Black and White */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30 backdrop-blur-[1px]" />
                  </motion.div>
                  
                  {/* Floating Decorative Element - 3D */}
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
                    className="absolute -top-4 -right-4 w-32 h-32 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/20 shadow-[0_8px_25px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]"
                    style={{
                      transform: 'perspective(500px) rotateY(5deg)',
                      transformStyle: 'preserve-3d'
                    }}
                  />
                  
                  {/* Bottom Decorative Element - 3D */}
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
                    className="absolute -bottom-4 -left-4 w-24 h-24 bg-black/20 backdrop-blur-md rounded-xl border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
                    style={{
                      transform: 'perspective(500px) rotateY(-5deg)',
                      transformStyle: 'preserve-3d'
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - 3D */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all border border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all border border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]"
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

