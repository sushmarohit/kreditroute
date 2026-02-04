'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    // { href: '/', label: 'Home' },
    { href: '/loans', label: 'Loans' },
    { href: '/credit-cards', label: 'Credit Cards' },
    { href: '/credit-score', label: 'Credit Score' },
    { href: '/investments', label: 'Investments' },
    { href: '/insurance', label: 'Insurance' },
    { href: '/bill-payments', label: 'Bill Payments' },
    { href: '/about-us', label: 'About Us' },
    { href: '/faqs', label: "FAQ's" },
    { href: '/contact-us', label: 'Contact Us' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-12 relative flex-shrink-0">
                {/* Top chevron - Orange/Yellow, elongated, angled upwards and to the right */}
                {/* <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 40 40" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0"
                >
                  <path d="M4 4 L28 4 L20 18 L4 18 Z" fill="#f97316" />
                  <path d="M4 18 L20 18 L28 36 L4 36 Z" fill="#16a34a" />
                </svg> */}
                <Image src="/KR_LOGO_no_bg.png" alt="KreditRoute" width={40} height={40} />
              </div>
              <span className="text-2xl md:text-3xl font-bold italic bg-gradient-to-r from-accent-600 to-primary-700 bg-clip-text text-transparent">
                KreditRoute
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation - nav links and CTA in separate containers to prevent hover bleed */}
          <div className="hidden lg:flex items-center gap-0">
            {/* Nav links only - no shared hover context with CTA */}
            <div className="flex items-center space-x-1" style={{ isolation: 'isolate' }}>
              {navItems.slice(0, 7).map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="hover:-translate-y-0.5 transition-transform"
                >
                  <Link
                    href={item.href}
                    className="group/link px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors relative block"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 scale-x-0 origin-left transition-transform duration-300 group-hover/link:scale-x-100 pointer-events-none" aria-hidden />
                  </Link>
                </motion.div>
              ))}
              <div className="relative group/more" style={{ isolation: 'isolate' }}>
                <button
                  type="button"
                  className="group/morebtn px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 relative hover:-translate-y-0.5 transition-all duration-200"
                >
                  More
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 scale-x-0 origin-left transition-transform duration-300 group-hover/morebtn:scale-x-100 pointer-events-none" aria-hidden />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover/more:opacity-100 group-hover/more:visible transition-all duration-200 z-40 py-1 min-w-max">
                  {navItems.slice(7).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-900 hover:bg-primary-50 hover:text-primary-600 first:rounded-t-md last:rounded-b-md transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* CTA - isolated so nav hover never affects it */}
            <div className="relative z-[100] ml-4" style={{ isolation: 'isolate' }}>
              <Link
                href="/apply"
                className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg hover:from-accent-600 hover:to-accent-700 transition-colors font-medium relative overflow-hidden group/cta"
              >
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/cta:translate-x-[100%] transition-transform duration-500" aria-hidden />
                <span className="relative z-10">Check Offers</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
              >
                <Link
                  href="/apply"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-lg hover:from-accent-600 hover:to-accent-700 text-center font-medium mt-4"
                >
                  Check Offers
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

