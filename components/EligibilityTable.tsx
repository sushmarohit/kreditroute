'use client'

import { motion } from 'framer-motion'

interface EligibilityRow {
  criterion: string
  requirement: string
}

interface EligibilityTableProps {
  title?: string
  subtitle?: string
  criteria: EligibilityRow[]
}

export function EligibilityTable({ 
  title = "Do You Qualify? See Eligibility Criteria Below",
  subtitle = "A quick overview of the eligibility criteria.",
  criteria 
}: EligibilityTableProps) {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden shadow-lg"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-accent-600 to-primary-600">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white">Criterion</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-white">Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {criteria.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="hover:bg-accent-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{row.criterion}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{row.requirement}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

