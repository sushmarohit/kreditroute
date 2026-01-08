'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface DocumentCategory {
  title: string
  documents: string[]
}

interface DocumentsChecklistProps {
  title?: string
  subtitle?: string
  categories: DocumentCategory[]
}

export function DocumentsChecklist({ 
  title = "Documents You Need",
  subtitle = "A quick checklist of the necessary paperwork.",
  categories 
}: DocumentsChecklistProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          {subtitle && (
            <p className="text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary-500 hover:shadow-xl transition-all"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.documents.map((doc, docIndex) => (
                  <motion.li
                    key={docIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + docIndex * 0.05 }}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5 flex-shrink-0" />
                    <span>{doc}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

