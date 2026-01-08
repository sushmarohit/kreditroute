'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: [
      { href: '/loans', label: 'Loans' },
      { href: '/credit-cards', label: 'Credit Cards' },
      { href: '/credit-score', label: 'Credit Score' },
      { href: '/investments', label: 'Investments' },
      { href: '/insurance', label: 'Insurance' },
      { href: '/bill-payments', label: 'Bill Payments' },
    ],
    company: [
      { href: '/about-us', label: 'About Us' },
      { href: '/faqs', label: "FAQ's" },
      { href: '/contact-us', label: 'Contact Us' },
    ],
    support: [
      { href: '/contact-us', label: 'Help Center' },
      { href: '/faqs', label: 'FAQs' },
      { href: '#', label: 'Privacy Policy' },
      { href: '#', label: 'Terms & Conditions' },
    ],
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 relative flex-shrink-0">
                {/* Top chevron - Orange/Yellow, elongated, angled upwards and to the right */}
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 40 40" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0"
                >
                  <path d="M4 4 L28 4 L20 18 L4 18 Z" fill="#f97316" />
                  {/* Bottom chevron - Deep Green, elongated, angled downwards and to the right */}
                  <path d="M4 18 L20 18 L28 36 L4 36 Z" fill="#16a34a" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold italic bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                KreditRoute
              </h3>
            </div>
            <p className="text-sm mb-6 text-gray-400">
              India's best platform for loans, credit cards, and investments. One-stop financial solutions that are quick, easy, and hassle-free.
            </p>
            <div className="space-y-3 text-sm">
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <p className="font-semibold text-white mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                  Sales Enquiry
                </p>
                <p className="text-gray-400 text-xs">Call Us: 1800 XXX XXXX</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <p className="font-semibold text-white mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Service Helpline
                </p>
                <p className="text-gray-400 text-xs">Call Us: 1800 XXX XXXX</p>
              </div>
              <p className="text-xs text-gray-500 mt-3">Available 7 days a week, 9:30 AM - 6:30 PM</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-primary-500 to-accent-500 rounded"></span>
              Products
            </h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <Link 
                    href={link.href} 
                    className="hover:text-primary-400 transition-all duration-200 text-sm text-gray-400 flex items-center gap-2 group"
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-accent-500"
                      whileHover={{ width: "0.375rem" }}
                      transition={{ duration: 0.2 }}
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-accent-500 to-primary-500 rounded"></span>
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <Link 
                    href={link.href} 
                    className="hover:text-primary-400 transition-all duration-200 text-sm text-gray-400 flex items-center gap-2 group"
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-accent-500"
                      whileHover={{ width: "0.375rem" }}
                      transition={{ duration: 0.2 }}
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-gradient-to-b from-primary-500 to-accent-500 rounded"></span>
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <Link 
                    href={link.href} 
                    className="hover:text-primary-400 transition-all duration-200 text-sm text-gray-400 flex items-center gap-2 group"
                  >
                    <motion.span 
                      className="w-0 h-0.5 bg-accent-500"
                      whileHover={{ width: "0.375rem" }}
                      transition={{ duration: 0.2 }}
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                &copy; {currentYear} <span className="text-white font-semibold">KreditRoute</span>. All rights reserved.
              </p>
              <p className="mt-2 text-xs text-gray-500">CIN No. U74900XX2011PTCXXXXXX</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                Made with ❤️ in India
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

