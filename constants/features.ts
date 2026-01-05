import { Zap, FileCheck, Percent, Calculator } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

export const featuresContent = {
  title: 'Why Choose KreditRoute?',
  features: [
    {
      icon: Zap,
      title: 'One Stop Financial Solutions',
      description: 'Get access to loans, credit cards, investments, insurance, and bill payments - all in one platform. No need to visit multiple websites.',
    },
    {
      icon: FileCheck,
      title: 'Quick & Easy Process',
      description: 'Apply for loans, credit cards, or check your credit score in minutes. Our streamlined process ensures quick approvals with minimal documentation.',
    },
    {
      icon: Percent,
      title: 'Best Rates & Offers',
      description: 'Compare and choose from the best interest rates, credit card offers, and investment returns. We partner with leading financial institutions.',
    },
    {
      icon: Calculator,
      title: 'Transparent & Secure',
      description: 'Complete transparency in terms, rates, and fees. Your financial data is protected with bank-level security and encryption.',
    },
  ] as Feature[],
}

