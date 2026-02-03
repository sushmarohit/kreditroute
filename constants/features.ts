import { OneStopIcon, QuickEasyIcon, BestRatesIcon, TransparentIcon } from '@/components/icons/IconLibrary'
import type { ComponentType } from 'react'

export interface Feature {
  IconComponent: ComponentType
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
}

export const featuresContent = {
  title: 'Why Choose KreditRoute?',
  features: [
    {
      IconComponent: OneStopIcon,
      title: 'One Stop Financial Solutions',
      description: 'Get access to loans, credit cards, investments, insurance, and bill payments - all in one platform. No need to visit multiple websites.',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-dashboard-panel-layout-3d-icon-png-download-12430978@0.png?f=webp&h=700',
      imageAlt: '3D dashboard layout icon'
    },
    {
      IconComponent: QuickEasyIcon,
      title: 'Quick & Easy Process',
      description: 'Apply for loans, credit cards, or check your credit score in minutes. Our streamlined process ensures quick approvals with minimal documentation.',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-rocket-3d-icon-png-download-14103655.png?f=webp&h=700',
      imageAlt: '3D rocket icon'
    },
    {
      IconComponent: BestRatesIcon,
      title: 'Best Rates & Offers',
      description: 'Compare and choose from the best interest rates, credit card offers, and investment returns. We partner with leading financial institutions.',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-star-badge-3d-icon-png-download-3286975.png?f=webp&h=700',
      imageAlt: '3D star badge icon'
    },
    {
      IconComponent: TransparentIcon,
      title: 'Transparent & Secure',
      description: 'Complete transparency in terms, rates, and fees. Your financial data is protected with bank-level security and encryption.',
      imageSrc:
        'https://cdn3d.iconscout.com/3d/free/preview/free-secure-shield-3d-icon-png-download-4715757.png?f=webp&h=700',
      imageAlt: '3D secure shield icon'
    },
  ] as Feature[],
}

