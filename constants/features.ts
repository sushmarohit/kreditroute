import { OneStopIcon, QuickEasyIcon, BestRatesIcon, TransparentIcon } from '@/components/icons/IconLibrary'
import type { ComponentType } from 'react'

export interface Feature {
  IconComponent: ComponentType
  title: string
  description: string
}

export const featuresContent = {
  title: 'Why Choose KreditRoute?',
  features: [
    {
      IconComponent: OneStopIcon,
      title: 'One Stop Financial Solutions',
      description: 'Get access to loans, credit cards, investments, insurance, and bill payments - all in one platform. No need to visit multiple websites.',
    },
    {
      IconComponent: QuickEasyIcon,
      title: 'Quick & Easy Process',
      description: 'Apply for loans, credit cards, or check your credit score in minutes. Our streamlined process ensures quick approvals with minimal documentation.',
    },
    {
      IconComponent: BestRatesIcon,
      title: 'Best Rates & Offers',
      description: 'Compare and choose from the best interest rates, credit card offers, and investment returns. We partner with leading financial institutions.',
    },
    {
      IconComponent: TransparentIcon,
      title: 'Transparent & Secure',
      description: 'Complete transparency in terms, rates, and fees. Your financial data is protected with bank-level security and encryption.',
    },
  ] as Feature[],
}

