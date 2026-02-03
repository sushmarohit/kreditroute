'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import type { ComponentType } from 'react'

interface ServiceCardProps {
  IconComponent: ComponentType
  title: string
  href: string
  badge?: string
  index?: number
  imageSrc?: string
  imageAlt?: string
}

export function ServiceCard({
  IconComponent,
  title,
  href,
  badge,
  index = 0,
  imageSrc,
  imageAlt
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        y: -8,
        scale: 1.03
      }}
      className="w-full"
    >
      <Link
        href={href}
        className="group relative flex flex-col items-center justify-center bg-white/60 backdrop-blur-md border-2 border-black/10 rounded-xl p-4 sm:p-5 md:p-6 hover:border-black/30 hover:shadow-[0_15px_35px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5)] transition-all duration-300 h-full shadow-[0_8px_25px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.5)]"
        style={{
          transform: 'perspective(1000px) rotateX(1deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Badge - Absolutely positioned on top with triangular fold */}
        {badge && (
          <motion.div 
            className="absolute -top-2 left-1/2 -translate-x-1/2 z-10"
            whileHover={{ scale: 1.1 }}
          >
            <div className="relative">
              <span className="block text-[10px] sm:text-xs font-bold bg-gradient-to-r from-green-500 to-green-600 text-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-tl-md rounded-tr-md shadow-[0_2px_8px_rgba(34,197,94,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] whitespace-nowrap">
                {badge}
              </span>
              {/* Triangular fold effect */}
              <div className="absolute -right-1 top-0 w-0 h-0 border-l-[6px] border-l-green-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
            </div>
          </motion.div>
        )}
        
        {/* Icon Container - Centered */}
        <motion.div 
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-gray-50 to-gray-100 backdrop-blur-sm rounded-lg flex items-center justify-center overflow-visible relative border border-black/10 shadow-[0_4px_12px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.2)] mb-3 sm:mb-4"
          whileHover={{ 
            rotate: [0, -15, 15, -15, 0],
            scale: 1.15,
            transition: { duration: 0.5 }
          }}
        >
          <div className="w-full h-full flex items-center justify-center p-2 [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-none [&>svg]:max-h-none">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                fill
                sizes="64px"
                className="object-contain p-1"
              />
            ) : (
              <IconComponent />
            )}
          </div>
        </motion.div>
        
        {/* Title - Centered */}
        <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 group-hover:text-black transition-colors text-center leading-tight">
          {title}
        </h4>
      </Link>
    </motion.div>
  )
}
