'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { heroContent } from '@/constants'

export function Hero() {
  const { title, titleHighlight, description, ctaButton } = heroContent

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Animation - 3D Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-black rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-900 rounded-full blur-3xl"></div>
      </div>
      {/* 3D Border Shadow */}
      <div className="absolute inset-0 border-4 border-transparent shadow-[inset_0_0_100px_rgba(0,0,0,0.05)]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/40 backdrop-blur-md rounded-3xl p-12 border-2 border-white/50 shadow-[0_20px_60px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5)]"
          style={{
            transform: 'perspective(1000px) rotateX(1deg)',
            transformStyle: 'preserve-3d'
          }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            {title}
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={ctaButton.href}
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-lg text-lg font-semibold hover:bg-gray-900 transition-colors shadow-[0_8px_25px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] border border-white/10"
            >
              {ctaButton.text}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

