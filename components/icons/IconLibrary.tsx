import React from 'react'

// 3D SVG Icon Components

export const CompareIcon3D = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="card1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
        <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="card1Side" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="card2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F97316" stopOpacity="1" />
        <stop offset="100%" stopColor="#EA580C" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="card2Side" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#C2410C" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#9A3412" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="100%" stopColor="#059669" stopOpacity="1" />
      </linearGradient>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="1" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#shadow)">
      <rect x="6" y="10" width="12" height="16" rx="2" fill="#1E40AF" opacity="0.15" />
      <path d="M 18 8 L 19.5 9.5 L 19.5 25.5 L 18 24 Z" fill="url(#card1Side)" />
      <rect x="6" y="8" width="12" height="16" rx="2" fill="url(#card1Gradient)" />
      <rect x="7" y="9" width="10" height="3" rx="1" fill="rgba(255, 255, 255, 0.35)" />
      <circle cx="9" cy="13" r="1.5" fill="rgba(255, 255, 255, 0.9)" />
      <line x1="8" y1="16" x2="16" y2="16" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1" />
      <line x1="8" y1="18" x2="14" y2="18" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.8" />
      <line x1="8" y1="20" x2="15" y2="20" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.8" />
    </g>
    <g filter="url(#shadow)">
      <rect x="28" y="10" width="12" height="16" rx="2" fill="#C2410C" opacity="0.15" />
      <path d="M 40 8 L 41.5 9.5 L 41.5 25.5 L 40 24 Z" fill="url(#card2Side)" />
      <rect x="28" y="8" width="12" height="16" rx="2" fill="url(#card2Gradient)" />
      <rect x="29" y="9" width="10" height="3" rx="1" fill="rgba(255, 255, 255, 0.35)" />
      <circle cx="31" cy="13" r="1.5" fill="rgba(255, 255, 255, 0.9)" />
      <line x1="30" y1="16" x2="38" y2="16" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1" />
      <line x1="30" y1="18" x2="37" y2="18" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.8" />
      <line x1="30" y1="20" x2="36" y2="20" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="0.8" />
    </g>
    <g>
      <path d="M 20 16 L 22 14 L 22 15 L 24 15 L 24 17 L 22 17 L 22 18 Z" fill="url(#arrowGradient)" opacity="0.9" />
      <path d="M 24 16 L 22 14 L 22 15 L 20 15 L 20 17 L 22 17 L 22 18 Z" fill="url(#arrowGradient)" opacity="0.9" />
      <circle cx="22" cy="16" r="3" fill="#10B981" opacity="0.15" />
      <circle cx="22" cy="16" r="2" fill="#10B981" opacity="0.3" />
      <circle cx="22" cy="16" r="1" fill="#10B981" />
    </g>
    <g opacity="0.9">
      <circle cx="22" cy="11" r="1" fill="#FBBF24" />
      <circle cx="22" cy="21" r="1" fill="#FBBF24" />
      <path d="M 22 10 L 21.5 11 L 22 11.5 L 22.5 11 Z" fill="#FCD34D" />
      <path d="M 22 21.5 L 21.5 22.5 L 22 23 L 22.5 22.5 Z" fill="#FCD34D" />
    </g>
  </svg>
)

export const PersonalLoanIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="moneyBagGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F97316" stopOpacity="1" />
        <stop offset="100%" stopColor="#EA580C" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" stopOpacity="1" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
      </linearGradient>
      <filter id="bagShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Money Bag */}
    <g filter="url(#bagShadow)">
      {/* Bag Shadow */}
      <ellipse cx="24" cy="34" rx="10" ry="3" fill="#EA580C" opacity="0.2" />
      {/* Bag Body - 3D */}
      <path d="M 14 18 Q 14 12 20 12 L 28 12 Q 34 12 34 18 L 34 32 Q 34 36 30 36 L 18 36 Q 14 36 14 32 Z" fill="url(#moneyBagGradient)" />
      {/* Bag Top Opening */}
      <ellipse cx="24" cy="18" rx="7" ry="4" fill="#C2410C" opacity="0.6" />
      {/* Bag Highlight */}
      <path d="M 18 16 Q 18 14 20 14 L 24 14 Q 26 14 26 16" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" fill="none" />
    </g>
    {/* Coins */}
    <g>
      {/* Coin 1 */}
      <circle cx="20" cy="24" r="3.5" fill="url(#coinGradient)" />
      <circle cx="20" cy="24" r="2.5" fill="#FCD34D" opacity="0.6" />
      <text x="20" y="25.5" textAnchor="middle" fontSize="4" fill="#92400E" fontWeight="bold">₹</text>
      {/* Coin 2 */}
      <circle cx="28" cy="22" r="3.5" fill="url(#coinGradient)" />
      <circle cx="28" cy="22" r="2.5" fill="#FCD34D" opacity="0.6" />
      <text x="28" y="23.5" textAnchor="middle" fontSize="4" fill="#92400E" fontWeight="bold">₹</text>
      {/* Coin 3 - Bottom */}
      <ellipse cx="24" cy="28" rx="3" ry="2.5" fill="url(#coinGradient)" opacity="0.8" />
    </g>
  </svg>
)

export const HomeLoanIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="houseRoof" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F97316" stopOpacity="1" />
        <stop offset="100%" stopColor="#EA580C" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="houseWall" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E5E7EB" stopOpacity="1" />
        <stop offset="100%" stopColor="#D1D5DB" stopOpacity="1" />
      </linearGradient>
      <filter id="houseShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.25" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* House Shadow */}
    <ellipse cx="24" cy="38" rx="12" ry="2" fill="#000" opacity="0.15" />
    {/* House Roof - 3D */}
    <g filter="url(#houseShadow)">
      {/* Roof Left Side */}
      <path d="M 12 24 L 24 14 L 36 24 L 32 24 L 24 18 L 16 24 Z" fill="#C2410C" opacity="0.7" />
      {/* Roof Front */}
      <path d="M 12 24 L 24 14 L 36 24 L 36 26 L 12 26 Z" fill="url(#houseRoof)" />
      {/* Roof Highlight */}
      <path d="M 20 19 L 24 16 L 28 19" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.8" fill="none" />
    </g>
    {/* House Body - 3D */}
    <g>
      {/* Wall Right Side */}
      <path d="M 36 26 L 36 38 L 28 38 L 28 26 Z" fill="#9CA3AF" opacity="0.6" />
      {/* Wall Front */}
      <rect x="12" y="26" width="24" height="12" fill="url(#houseWall)" />
      {/* Door */}
      <rect x="19" y="30" width="8" height="8" fill="#92400E" rx="1" />
      <circle cx="25" cy="34" r="0.8" fill="#FBBF24" />
      {/* Window */}
      <rect x="26" y="28" width="6" height="6" fill="#60A5FA" rx="0.5" />
      <line x1="29" y1="28" x2="29" y2="34" stroke="#2563EB" strokeWidth="0.5" />
      <line x1="26" y1="31" x2="32" y2="31" stroke="#2563EB" strokeWidth="0.5" />
    </g>
  </svg>
)

export const BusinessLoanIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="briefcaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#92400E" stopOpacity="1" />
        <stop offset="100%" stopColor="#78350F" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" stopOpacity="1" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
      </linearGradient>
      <filter id="briefShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Briefcase Shadow */}
    <ellipse cx="24" cy="36" rx="10" ry="2" fill="#78350F" opacity="0.2" />
    {/* Briefcase - 3D */}
    <g filter="url(#briefShadow)">
      {/* Briefcase Top - Side View */}
      <path d="M 14 20 L 14 30 L 20 30 L 20 20 Z" fill="#78350F" opacity="0.5" />
      {/* Briefcase Body */}
      <rect x="14" y="20" width="20" height="14" rx="1" fill="url(#briefcaseGradient)" />
      {/* Briefcase Handle */}
      <path d="M 20 20 Q 20 16 24 16 Q 28 16 28 20" stroke="#FBBF24" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="16" r="1.5" fill="#FBBF24" />
      {/* Lock */}
      <circle cx="24" cy="26" r="2" fill="#FBBF24" />
      <circle cx="24" cy="26" r="1.2" fill="#92400E" />
      <rect x="23" y="26" width="2" height="3" fill="#FBBF24" />
    </g>
    {/* Coin next to briefcase */}
    <circle cx="32" cy="22" r="4" fill="url(#coinGrad)" />
    <circle cx="32" cy="22" r="3" fill="#FCD34D" opacity="0.7" />
    <text x="32" y="24" textAnchor="middle" fontSize="5" fill="#92400E" fontWeight="bold">₹</text>
  </svg>
)

export const CreditCardIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="card1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="100%" stopColor="#059669" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="card2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1F2937" stopOpacity="1" />
        <stop offset="100%" stopColor="#111827" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="card3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F3F4F6" stopOpacity="1" />
        <stop offset="100%" stopColor="#E5E7EB" stopOpacity="1" />
      </linearGradient>
      <filter id="cardShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
        <feOffset dx="1" dy="1" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.25" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Card 3 - Bottom */}
    <g filter="url(#cardShadow)">
      <rect x="12" y="28" width="24" height="16" rx="2" fill="url(#card3Grad)" />
      <rect x="14" y="30" width="20" height="12" rx="1" fill="#FFFFFF" opacity="0.5" />
      <rect x="16" y="32" width="6" height="1" fill="#9CA3AF" />
      <rect x="16" y="34" width="10" height="1" fill="#9CA3AF" />
    </g>
    {/* Card 2 - Middle */}
    <g filter="url(#cardShadow)">
      <rect x="14" y="24" width="24" height="16" rx="2" fill="url(#card2Grad)" />
      <rect x="18" y="27" width="16" height="2" fill="rgba(255, 255, 255, 0.3)" rx="1" />
      <rect x="18" y="31" width="6" height="1" fill="rgba(255, 255, 255, 0.6)" />
      <rect x="18" y="33" width="10" height="1" fill="rgba(255, 255, 255, 0.6)" />
    </g>
    {/* Card 1 - Top */}
    <g filter="url(#cardShadow)">
      <rect x="16" y="20" width="24" height="16" rx="2" fill="url(#card1Grad)" />
      {/* Chip */}
      <rect x="20" y="23" width="6" height="4" fill="#FBBF24" rx="0.5" />
      <rect x="21" y="24" width="4" height="2" fill="#92400E" rx="0.3" />
      <rect x="18" y="28" width="12" height="1.5" fill="rgba(255, 255, 255, 0.7)" rx="0.5" />
      <rect x="18" y="31" width="8" height="1" fill="rgba(255, 255, 255, 0.8)" />
      <rect x="18" y="33" width="10" height="1" fill="rgba(255, 255, 255, 0.8)" />
      {/* Badge */}
      <rect x="26" y="22" width="12" height="3" fill="#10B981" rx="1.5" opacity="0.9" />
      <text x="32" y="24" textAnchor="middle" fontSize="2" fill="#FFFFFF" fontWeight="bold">FREE</text>
    </g>
  </svg>
)

export const CreditScoreIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="50%" stopColor="#FBBF24" stopOpacity="1" />
        <stop offset="100%" stopColor="#EF4444" stopOpacity="1" />
      </linearGradient>
      <filter id="gaugeShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.25" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Gauge/Speedometer - 3D */}
    <g filter="url(#gaugeShadow)">
      {/* Gauge Background Circle */}
      <circle cx="24" cy="24" r="16" fill="#F3F4F6" stroke="#D1D5DB" strokeWidth="1" />
      {/* Gauge Arc - Red */}
      <path d="M 24 8 A 14 14 0 0 1 38 24" stroke="#EF4444" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Gauge Arc - Yellow */}
      <path d="M 38 24 A 14 14 0 0 1 31 36" stroke="#FBBF24" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Gauge Arc - Green */}
      <path d="M 31 36 A 14 14 0 0 1 24 8" stroke="#10B981" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Center Circle */}
      <circle cx="24" cy="24" r="3" fill="#374151" />
      {/* Needle */}
      <line x1="24" y1="24" x2="20" y2="16" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="1.5" fill="#10B981" />
      {/* Score Text */}
      <text x="24" y="34" textAnchor="middle" fontSize="6" fill="#10B981" fontWeight="bold">750</text>
    </g>
  </svg>
)

export const BillPaymentIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="receiptGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
        <stop offset="100%" stopColor="#F3F4F6" stopOpacity="1" />
      </linearGradient>
      <filter id="receiptShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Receipt/Invoice - 3D */}
    <g filter="url(#receiptShadow)">
      {/* Receipt Shadow Side */}
      <path d="M 32 12 L 34 14 L 34 38 L 32 36 Z" fill="#D1D5DB" opacity="0.4" />
      {/* Receipt Body */}
      <rect x="14" y="12" width="18" height="26" rx="1" fill="url(#receiptGrad)" stroke="#D1D5DB" strokeWidth="0.5" />
      {/* Perforated Edge */}
      <path d="M 14 18 L 16 18 M 14 20 L 16 20 M 14 22 L 16 22" stroke="#9CA3AF" strokeWidth="1" strokeLinecap="round" />
      {/* Receipt Lines */}
      <line x1="18" y1="16" x2="28" y2="16" stroke="#374151" strokeWidth="1" />
      <line x1="18" y1="20" x2="28" y2="20" stroke="#6B7280" strokeWidth="0.8" />
      <line x1="18" y1="23" x2="24" y2="23" stroke="#6B7280" strokeWidth="0.8" />
      <line x1="18" y1="26" x2="30" y2="26" stroke="#6B7280" strokeWidth="0.8" />
      <line x1="18" y1="29" x2="26" y2="29" stroke="#6B7280" strokeWidth="0.8" />
      {/* Total Line */}
      <line x1="18" y1="32" x2="30" y2="32" stroke="#374151" strokeWidth="1.5" />
      {/* Amount */}
      <text x="26" y="30" textAnchor="end" fontSize="4" fill="#059669" fontWeight="bold">₹1,500</text>
    </g>
  </svg>
)

export const ElectricityBillIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bulbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" stopOpacity="1" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="bulbGlow" x1="50%" y1="50%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.2" />
      </linearGradient>
      <filter id="bulbShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Light Glow */}
    <ellipse cx="24" cy="32" rx="12" ry="6" fill="url(#bulbGlow)" />
    {/* Light Bulb - 3D */}
    <g filter="url(#bulbShadow)">
      {/* Bulb Glass */}
      <path d="M 20 14 Q 20 8 24 8 Q 28 8 28 14 Q 28 16 30 18 L 30 26 Q 30 28 28 28 L 20 28 Q 18 28 18 26 L 18 18 Q 20 16 20 14 Z" fill="url(#bulbGrad)" />
      {/* Bulb Highlight */}
      <ellipse cx="22" cy="18" rx="2" ry="3" fill="rgba(255, 255, 255, 0.4)" />
      {/* Bulb Base */}
      <rect x="20" y="28" width="8" height="4" rx="1" fill="#374151" />
      <rect x="21" y="32" width="6" height="2" rx="0.5" fill="#1F2937" />
      {/* Filament */}
      <path d="M 22 22 Q 24 20 26 22" stroke="#78350F" strokeWidth="0.8" fill="none" />
      <circle cx="24" cy="22" r="0.8" fill="#F59E0B" />
    </g>
  </svg>
)

export const HealthInsuranceIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" stopOpacity="1" />
        <stop offset="100%" stopColor="#DC2626" stopOpacity="1" />
      </linearGradient>
      <filter id="heartShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Heart - 3D */}
    <g filter="url(#heartShadow)">
      {/* Heart Shadow Side */}
      <path d="M 28 18 L 29 19 L 29 26 L 28 25 Z" fill="#DC2626" opacity="0.4" />
      {/* Heart Body */}
      <path d="M 24 16 Q 20 12 18 14 Q 16 16 16 20 Q 16 24 24 32 Q 32 24 32 20 Q 32 16 30 14 Q 28 12 24 16 Z" fill="url(#heartGrad)" />
      {/* Heart Highlight */}
      <path d="M 22 18 Q 20 16 19 17 Q 18 18 18 20" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1" fill="none" />
      {/* Cross */}
      <rect x="22" y="20" width="4" height="1.5" rx="0.5" fill="#FFFFFF" />
      <rect x="23.5" y="18.5" width="1.5" height="4" rx="0.5" fill="#FFFFFF" />
    </g>
  </svg>
)

export const TermLifeInsuranceIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="umbrellaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
        <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
      </linearGradient>
      <filter id="umbrellaShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Umbrella - 3D */}
    <g filter="url(#umbrellaShadow)">
      {/* Umbrella Canopy - Front */}
      <path d="M 24 16 Q 14 16 14 24 Q 14 28 18 30 Q 22 32 24 32 Q 26 32 30 30 Q 34 28 34 24 Q 34 16 24 16 Z" fill="url(#umbrellaGrad)" />
      {/* Umbrella Canopy - Side */}
      <path d="M 24 16 Q 34 16 34 24 Q 34 28 30 30 Q 30 28 24 28 Q 24 24 24 24" fill="#1E40AF" opacity="0.6" />
      {/* Umbrella Ribs */}
      <path d="M 24 16 L 18 28 M 24 16 L 30 28 M 24 16 L 14 24 M 24 16 L 34 24" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5" />
      {/* Umbrella Handle */}
      <rect x="23" y="32" width="2" height="8" fill="#92400E" rx="1" />
      <path d="M 24 40 Q 26 42 26 44" stroke="#92400E" strokeWidth="2" strokeLinecap="round" fill="none" />
    </g>
  </svg>
)

export const CarInsuranceIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="carGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" stopOpacity="1" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
      </linearGradient>
      <filter id="carShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Car - 3D */}
    <g filter="url(#carShadow)">
      {/* Car Body - Side View */}
      <path d="M 12 28 L 14 26 L 16 24 L 30 24 L 32 26 L 34 28 L 34 30 L 32 32 L 30 32 L 28 34 L 16 34 L 14 32 L 12 32 Z" fill="url(#carGrad)" />
      {/* Car Windows */}
      <path d="M 18 26 L 28 26 L 28 28 L 18 28 Z" fill="#1E40AF" opacity="0.6" />
      <line x1="23" y1="26" x2="23" y2="28" stroke="#FFFFFF" strokeWidth="0.5" />
      {/* Car Wheels */}
      <circle cx="18" cy="32" r="3" fill="#1F2937" />
      <circle cx="18" cy="32" r="2" fill="#374151" />
      <circle cx="30" cy="32" r="3" fill="#1F2937" />
      <circle cx="30" cy="32" r="2" fill="#374151" />
      {/* Shield on Car */}
      <path d="M 22 24 Q 22 22 24 22 Q 26 22 26 24 Q 26 26 24 28 Q 22 26 22 24 Z" fill="#10B981" />
      <path d="M 24 24 L 24 26 M 23 25 L 25 25" stroke="#FFFFFF" strokeWidth="0.5" />
    </g>
  </svg>
)

export const InvestmentBondsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" stopOpacity="1" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
      </linearGradient>
      <filter id="goldShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Gold Bars Stack - 3D */}
    <g filter="url(#goldShadow)">
      {/* Bar 3 - Bottom */}
      <rect x="12" y="28" width="24" height="6" rx="1" fill="url(#goldGrad)" opacity="0.8" />
      <rect x="14" y="29" width="20" height="4" fill="#FCD34D" opacity="0.5" />
      {/* Bar 2 - Middle */}
      <rect x="14" y="22" width="24" height="6" rx="1" fill="url(#goldGrad)" />
      <rect x="16" y="23" width="20" height="4" fill="#FCD34D" opacity="0.6" />
      {/* Bar 1 - Top */}
      <rect x="16" y="16" width="24" height="6" rx="1" fill="url(#goldGrad)" />
      <rect x="18" y="17" width="20" height="4" fill="#FCD34D" opacity="0.7" />
      {/* Percentage Sign */}
      <text x="28" y="21" textAnchor="middle" fontSize="6" fill="#92400E" fontWeight="bold">13.25%</text>
    </g>
  </svg>
)

export const FixedDepositIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="safeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6B7280" stopOpacity="1" />
        <stop offset="100%" stopColor="#4B5563" stopOpacity="1" />
      </linearGradient>
      <filter id="safeShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Safe/Vault - 3D */}
    <g filter="url(#safeShadow)">
      {/* Safe Body - Side */}
      <rect x="32" y="14" width="6" height="20" fill="#374151" opacity="0.6" />
      {/* Safe Body - Front */}
      <rect x="10" y="14" width="22" height="20" rx="2" fill="url(#safeGrad)" />
      {/* Safe Door Frame */}
      <rect x="12" y="16" width="18" height="16" rx="1" fill="#1F2937" />
      {/* Safe Lock/Dial */}
      <circle cx="21" cy="24" r="4" fill="#374151" />
      <circle cx="21" cy="24" r="3" fill="#1F2937" />
      <circle cx="21" cy="24" r="2" fill="#6B7280" />
      {/* Lock Handle */}
      <rect x="19" y="28" width="4" height="2" fill="#9CA3AF" rx="0.5" />
      {/* Handle */}
      <rect x="26" y="22" width="3" height="6" fill="#9CA3AF" rx="1" />
      {/* Safe Top */}
      <rect x="10" y="12" width="22" height="3" fill="#4B5563" />
      {/* Badge */}
      <rect x="13" y="17" width="14" height="3" fill="#10B981" rx="1" opacity="0.9" />
      <text x="20" y="19" textAnchor="middle" fontSize="2.5" fill="#FFFFFF" fontWeight="bold">NEW</text>
    </g>
  </svg>
)

export const MarketLinkedIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="chartGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="100%" stopColor="#34D399" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="chartGrad2" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
        <stop offset="100%" stopColor="#60A5FA" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="chartGrad3" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
        <stop offset="100%" stopColor="#FBBF24" stopOpacity="1" />
      </linearGradient>
      <filter id="chartShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
        <feOffset dx="0.5" dy="1" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.25" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Chart Background */}
    <rect x="12" y="14" width="24" height="20" rx="1" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="0.5" />
    {/* Chart Bars - 3D */}
    <g filter="url(#chartShadow)">
      {/* Bar 1 */}
      <rect x="16" y="26" width="4" height="8" fill="url(#chartGrad1)" />
      <rect x="16.5" y="26" width="3" height="8" fill="#34D399" opacity="0.7" />
      {/* Bar 2 */}
      <rect x="22" y="22" width="4" height="12" fill="url(#chartGrad2)" />
      <rect x="22.5" y="22" width="3" height="12" fill="#60A5FA" opacity="0.7" />
      {/* Bar 3 */}
      <rect x="28" y="18" width="4" height="16" fill="url(#chartGrad3)" />
      <rect x="28.5" y="18" width="3" height="16" fill="#FBBF24" opacity="0.7" />
      {/* Bar 4 */}
      <rect x="34" y="14" width="4" height="20" fill="url(#chartGrad1)" />
      <rect x="34.5" y="14" width="3" height="20" fill="#34D399" opacity="0.7" />
    </g>
    {/* Grid Lines */}
    <line x1="12" y1="20" x2="36" y2="20" stroke="#E5E7EB" strokeWidth="0.5" />
    <line x1="12" y1="26" x2="36" y2="26" stroke="#E5E7EB" strokeWidth="0.5" />
    <line x1="12" y1="32" x2="36" y2="32" stroke="#E5E7EB" strokeWidth="0.5" />
  </svg>
)

export const LoanRepaymentIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="walletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="100%" stopColor="#059669" stopOpacity="1" />
      </linearGradient>
      <filter id="walletShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Wallet/Money Bag with EMI - 3D */}
    <g filter="url(#walletShadow)">
      {/* Bag Body */}
      <path d="M 14 18 Q 14 14 18 14 L 30 14 Q 34 14 34 18 L 34 30 Q 34 32 32 32 L 20 32 Q 18 32 18 30 L 18 18 Z" fill="url(#walletGrad)" />
      {/* Bag Top */}
      <ellipse cx="24" cy="18" rx="8" ry="3" fill="#047857" opacity="0.7" />
      {/* EMI Text */}
      <text x="24" y="26" textAnchor="middle" fontSize="5" fill="#FFFFFF" fontWeight="bold">EMI</text>
    </g>
  </svg>
)

export const DigitalProcessIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="deviceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
        <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
      </linearGradient>
      <filter id="deviceShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Mobile Device - 3D */}
    <g filter="url(#deviceShadow)">
      {/* Device Body - Side */}
      <rect x="30" y="14" width="2" height="20" fill="#1E40AF" opacity="0.6" />
      {/* Device Body - Front */}
      <rect x="16" y="14" width="14" height="20" rx="2" fill="url(#deviceGrad)" />
      {/* Screen */}
      <rect x="18" y="16" width="10" height="16" rx="1" fill="#1E293B" />
      {/* Screen Content - Checkmarks */}
      <circle cx="21" cy="20" r="1" fill="#10B981" />
      <line x1="20.5" y1="20" x2="21" y2="20.5" stroke="#FFFFFF" strokeWidth="0.3" fill="none" />
      <circle cx="21" cy="24" r="1" fill="#10B981" />
      <circle cx="21" cy="28" r="1" fill="#10B981" />
      {/* Button */}
      <rect x="23" y="30" width="6" height="1" rx="0.5" fill="#3B82F6" />
    </g>
  </svg>
)

export const SecureIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="100%" stopColor="#059669" stopOpacity="1" />
      </linearGradient>
      <filter id="shieldShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Shield - 3D */}
    <g filter="url(#shieldShadow)">
      {/* Shield Body - Side */}
      <path d="M 28 14 L 29 15 L 29 30 L 28 29 Z" fill="#047857" opacity="0.5" />
      {/* Shield Front */}
      <path d="M 18 14 Q 18 12 24 12 Q 30 12 30 14 Q 30 18 28 22 Q 26 26 24 30 Q 22 26 20 22 Q 18 18 18 14 Z" fill="url(#shieldGrad)" />
      {/* Shield Highlight */}
      <path d="M 20 16 Q 20 15 24 15 Q 28 15 28 16" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.8" fill="none" />
      {/* Checkmark */}
      <path d="M 22 20 L 24 22 L 26 19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  </svg>
)

export const InstantFundsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="zapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" stopOpacity="1" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
      </linearGradient>
      <filter id="zapShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* Lightning Bolt - 3D */}
    <g filter="url(#zapShadow)">
      {/* Lightning Shadow Side */}
      <path d="M 26 14 L 27 15 L 25 28 L 24 27 Z" fill="#F59E0B" opacity="0.4" />
      {/* Lightning Front */}
      <path d="M 22 10 L 28 18 L 24 18 L 26 30 L 20 22 L 24 22 Z" fill="url(#zapGrad)" />
      {/* Lightning Highlight */}
      <path d="M 23 13 L 27 19 L 24 19 L 25 27" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="0.8" fill="none" />
    </g>
  </svg>
)

// Additional icons for other pages
export const EligibilityIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="checkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="100%" stopColor="#059669" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="checkSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#047857" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#065F46" stopOpacity="0.6" />
      </linearGradient>
      <filter id="checkShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* 3D Circle Badge */}
    <g filter="url(#checkShadow)">
      {/* Circle Shadow Side */}
      <ellipse cx="30" cy="26" rx="10" ry="12" fill="#047857" opacity="0.4" />
      {/* Circle Front */}
      <circle cx="24" cy="24" r="14" fill="url(#checkGrad)" />
      {/* Circle Highlight */}
      <ellipse cx="20" cy="18" rx="6" ry="4" fill="rgba(255, 255, 255, 0.3)" />
      {/* Checkmark */}
      <path d="M 18 24 L 22 28 L 30 18" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Inner glow */}
      <circle cx="24" cy="24" r="12" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
    </g>
  </svg>
)

export const ApplyIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
        <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="docSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.5" />
      </linearGradient>
      <filter id="docShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* 3D Document */}
    <g filter="url(#docShadow)">
      {/* Document Shadow Side */}
      <path d="M 34 12 L 36 14 L 36 36 L 34 34 Z" fill="url(#docSide)" />
      {/* Document Top Edge */}
      <path d="M 14 12 L 34 12 L 36 14 L 16 14 Z" fill="#1E40AF" opacity="0.5" />
      {/* Document Front */}
      <rect x="14" y="12" width="20" height="24" rx="1" fill="url(#docGrad)" />
      {/* Document Lines */}
      <rect x="16" y="16" width="12" height="1.5" fill="#FFFFFF" opacity="0.8" rx="0.3" />
      <rect x="16" y="19" width="16" height="1.5" fill="#FFFFFF" opacity="0.6" rx="0.3" />
      <rect x="16" y="22" width="14" height="1.5" fill="#FFFFFF" opacity="0.6" rx="0.3" />
      {/* Arrow/Down Arrow */}
      <path d="M 20 28 L 28 28 L 24 32 Z" fill="#FFFFFF" />
      {/* Document Highlight */}
      <rect x="14" y="12" width="20" height="3" fill="rgba(255, 255, 255, 0.15)" rx="1" />
    </g>
  </svg>
)

export const DisbursementIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="moneyIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F97316" stopOpacity="1" />
        <stop offset="100%" stopColor="#EA580C" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="coinSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#C2410C" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#9A3412" stopOpacity="0.5" />
      </linearGradient>
      <filter id="moneyShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* 3D Coin */}
    <g filter="url(#moneyShadow)">
      {/* Coin Shadow */}
      <ellipse cx="26" cy="28" rx="10" ry="3" fill="#EA580C" opacity="0.3" />
      {/* Coin Side */}
      <ellipse cx="30" cy="24" rx="2" ry="12" fill="url(#coinSide)" />
      {/* Coin Front */}
      <circle cx="24" cy="24" r="12" fill="url(#moneyIconGrad)" />
      {/* Coin Inner Ring */}
      <circle cx="24" cy="24" r="10" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.3" />
      {/* Coin Highlight */}
      <ellipse cx="20" cy="18" rx="5" ry="4" fill="rgba(255, 255, 255, 0.25)" />
      {/* Rupee Symbol */}
      <text x="24" y="28" textAnchor="middle" fontSize="10" fill="#FFFFFF" fontWeight="bold">₹</text>
      {/* Inner Glow */}
      <circle cx="24" cy="24" r="8" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.2" />
    </g>
  </svg>
)

export const EmailIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="envelopeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
        <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="envelopeSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.4" />
      </linearGradient>
      <filter id="envelopeShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* 3D Envelope */}
    <g filter="url(#envelopeShadow)">
      {/* Envelope Side */}
      <path d="M 36 16 L 38 17 L 38 35 L 36 34 Z" fill="url(#envelopeSide)" />
      {/* Envelope Top Flap */}
      <path d="M 12 16 L 24 24 L 36 16 L 36 17 L 24 25 L 12 17 Z" fill="#1E40AF" opacity="0.6" />
      {/* Envelope Front */}
      <rect x="12" y="16" width="24" height="18" rx="1" fill="url(#envelopeGrad)" />
      {/* Envelope Flap Fold Line */}
      <path d="M 12 16 L 24 24 L 36 16" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.8" />
      {/* Envelope Highlight */}
      <rect x="12" y="16" width="24" height="4" fill="rgba(255, 255, 255, 0.2)" rx="1" />
      {/* Mail Lines */}
      <line x1="16" y1="22" x2="32" y2="22" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.6" />
      <line x1="16" y1="26" x2="28" y2="26" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.5" />
    </g>
  </svg>
)

export const PhoneIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
        <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="phoneSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.4" />
      </linearGradient>
      <filter id="phoneShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* 3D Phone */}
    <g filter="url(#phoneShadow)">
      {/* Phone Shadow */}
      <ellipse cx="26" cy="38" rx="6" ry="2" fill="#2563EB" opacity="0.3" />
      {/* Phone Side */}
      <path d="M 32 12 L 34 13 L 34 35 L 32 36 Z" fill="url(#phoneSide)" />
      {/* Phone Top Edge */}
      <path d="M 16 12 L 32 12 L 34 13 L 18 13 Z" fill="#1E40AF" opacity="0.5" />
      {/* Phone Body Front */}
      <rect x="16" y="12" width="16" height="24" rx="3" fill="url(#phoneGrad)" />
      {/* Phone Screen */}
      <rect x="18" y="14" width="12" height="16" rx="1" fill="#1E293B" />
      {/* Screen Content - Signal Bars */}
      <rect x="20" y="16" width="1.5" height="3" fill="#10B981" rx="0.3" />
      <rect x="22.5" y="17" width="1.5" height="2" fill="#10B981" rx="0.3" />
      <rect x="25" y="18" width="1.5" height="1" fill="#10B981" rx="0.3" />
      {/* Home Button */}
      <circle cx="24" cy="32" r="1.5" fill="#FFFFFF" />
      <circle cx="24" cy="32" r="1" fill="#3B82F6" opacity="0.3" />
      {/* Phone Highlight */}
      <rect x="16" y="12" width="16" height="4" fill="rgba(255, 255, 255, 0.15)" rx="3" />
    </g>
  </svg>
)

export const MapIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" stopOpacity="1" />
        <stop offset="100%" stopColor="#DC2626" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="mapSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#B91C1C" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#991B1B" stopOpacity="0.4" />
      </linearGradient>
      <filter id="mapShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* 3D Map Pin/Marker */}
    <g filter="url(#mapShadow)">
      {/* Pin Shadow */}
      <ellipse cx="26" cy="34" rx="8" ry="2" fill="#DC2626" opacity="0.3" />
      {/* Pin Side */}
      <path d="M 34 16 L 35 17 L 35 31 L 34 30 Z" fill="url(#mapSide)" />
      {/* Pin Body Front */}
      <path d="M 14 16 L 24 12 L 34 16 L 34 32 L 24 36 L 14 32 Z" fill="url(#mapGrad)" />
      {/* Pin Top Highlight */}
      <path d="M 18 16 L 24 14 L 30 16" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.8" fill="none" />
      {/* Location Dot */}
      <circle cx="24" cy="24" r="3" fill="#FFFFFF" />
      <circle cx="24" cy="24" r="2" fill="#EF4444" />
      {/* Pin Inner Shadow */}
      <path d="M 20 20 L 24 18 L 28 20 L 28 28 L 24 30 L 20 28 Z" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.2" />
    </g>
  </svg>
)

export const CalculatorIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="calcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6B7280" stopOpacity="1" />
        <stop offset="100%" stopColor="#4B5563" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="calcSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#374151" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#1F2937" stopOpacity="0.5" />
      </linearGradient>
      <filter id="calcShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* 3D Calculator */}
    <g filter="url(#calcShadow)">
      {/* Calculator Shadow Side */}
      <path d="M 34 12 L 36 14 L 36 36 L 34 34 Z" fill="url(#calcSide)" />
      {/* Calculator Top Edge */}
      <path d="M 14 12 L 34 12 L 36 14 L 16 14 Z" fill="#374151" opacity="0.6" />
      {/* Calculator Body Front */}
      <rect x="14" y="12" width="20" height="24" rx="2" fill="url(#calcGrad)" />
      {/* Screen */}
      <rect x="16" y="16" width="16" height="8" fill="#1F2937" rx="1" />
      {/* Screen Display Text */}
      <text x="24" y="21" textAnchor="middle" fontSize="4" fill="#10B981" fontWeight="bold">123</text>
      {/* Button Row 1 */}
      <rect x="18" y="26" width="4" height="4" fill="#3B82F6" rx="0.5" />
      <rect x="18" y="26" width="3.5" height="3.5" fill="#60A5FA" rx="0.5" opacity="0.8" />
      <rect x="24" y="26" width="4" height="4" fill="#3B82F6" rx="0.5" />
      <rect x="24" y="26" width="3.5" height="3.5" fill="#60A5FA" rx="0.5" opacity="0.8" />
      <rect x="30" y="26" width="4" height="4" fill="#3B82F6" rx="0.5" />
      <rect x="30" y="26" width="3.5" height="3.5" fill="#60A5FA" rx="0.5" opacity="0.8" />
      {/* Button Row 2 */}
      <rect x="18" y="32" width="4" height="4" fill="#3B82F6" rx="0.5" />
      <rect x="18" y="32" width="3.5" height="3.5" fill="#60A5FA" rx="0.5" opacity="0.8" />
      <rect x="24" y="32" width="4" height="4" fill="#F97316" rx="0.5" />
      <rect x="24" y="32" width="3.5" height="3.5" fill="#FB923C" rx="0.5" opacity="0.8" />
      {/* Calculator Highlight */}
      <rect x="14" y="12" width="20" height="3" fill="rgba(255, 255, 255, 0.15)" rx="2" />
    </g>
  </svg>
)

export const OneStopIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="stopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
        <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="stopInner" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="1" />
      </linearGradient>
      <filter id="stopShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* 3D Multi-Layer Circle Badge */}
    <g filter="url(#stopShadow)">
      {/* Outer Circle Shadow */}
      <ellipse cx="28" cy="26" rx="12" ry="14" fill="#2563EB" opacity="0.3" />
      {/* Outer Circle */}
      <circle cx="24" cy="24" r="14" fill="url(#stopGrad)" />
      {/* Outer Highlight */}
      <ellipse cx="20" cy="18" rx="6" ry="5" fill="rgba(255, 255, 255, 0.25)" />
      {/* Inner Circle */}
      <circle cx="24" cy="24" r="10" fill="url(#stopInner)" />
      {/* Inner Highlight */}
      <ellipse cx="22" cy="20" rx="4" ry="3" fill="rgba(255, 255, 255, 0.2)" />
      {/* Checkmark */}
      <path d="M 18 24 L 22 28 L 30 20" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Inner Glow */}
      <circle cx="24" cy="24" r="8" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.8" />
    </g>
  </svg>
)

export const QuickEasyIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="quickGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="100%" stopColor="#059669" stopOpacity="1" />
      </linearGradient>
      <filter id="quickShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* 3D Circle Badge */}
    <g filter="url(#quickShadow)">
      {/* Circle Shadow */}
      <ellipse cx="26" cy="28" rx="10" ry="3" fill="#059669" opacity="0.3" />
      {/* Circle */}
      <circle cx="24" cy="24" r="12" fill="url(#quickGrad)" />
      {/* Circle Highlight */}
      <ellipse cx="20" cy="18" rx="6" ry="5" fill="rgba(255, 255, 255, 0.3)" />
      {/* Checkmark */}
      <path d="M 18 24 L 22 28 L 30 20" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Inner Ring */}
      <circle cx="24" cy="24" r="10" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
      {/* Glow Effect */}
      <circle cx="24" cy="24" r="8" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1.5" />
    </g>
  </svg>
)

export const BestRatesIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" stopOpacity="1" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="starSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D97706" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#B45309" stopOpacity="0.5" />
      </linearGradient>
      <filter id="starShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* 3D Star */}
    <g filter="url(#starShadow)">
      {/* Star Shadow */}
      <ellipse cx="26" cy="36" rx="10" ry="2" fill="#F59E0B" opacity="0.3" />
      {/* Star Side Points */}
      <path d="M 28 20 L 30 22 L 34 22 L 31 25 L 32 29 L 28 27 L 24 29 L 25 25 L 22 22 L 26 22 Z" fill="url(#starSide)" opacity="0.6" transform="translate(1, 1)" />
      {/* Star Front */}
      <path d="M 24 12 L 28 20 L 36 22 L 30 28 L 31 36 L 24 32 L 17 36 L 18 28 L 12 22 L 20 20 Z" fill="url(#starGrad)" />
      {/* Star Highlight */}
      <path d="M 22 16 L 24 18 L 26 16" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="0.8" fill="none" />
      {/* Star Center Glow */}
      <circle cx="24" cy="24" r="3" fill="#FCD34D" opacity="0.5" />
      {/* Inner Sparkle */}
      <circle cx="24" cy="24" r="1.5" fill="#FFFFFF" opacity="0.8" />
    </g>
  </svg>
)

export const TransparentIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="transGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="100%" stopColor="#059669" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="transSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#047857" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#065F46" stopOpacity="0.5" />
      </linearGradient>
      <filter id="transShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
      </filter>
    </defs>
    {/* 3D Card/Badge */}
    <g filter="url(#transShadow)">
      {/* Card Shadow Side */}
      <path d="M 34 14 L 36 16 L 36 34 L 34 32 Z" fill="url(#transSide)" />
      {/* Card Top Edge */}
      <path d="M 14 14 L 34 14 L 36 16 L 16 16 Z" fill="#047857" opacity="0.6" />
      {/* Card Front */}
      <rect x="14" y="14" width="20" height="20" rx="2" fill="url(#transGrad)" />
      {/* Card Highlight */}
      <rect x="14" y="14" width="20" height="5" fill="rgba(255, 255, 255, 0.2)" rx="2" />
      {/* Checkmark */}
      <path d="M 18 24 L 22 28 L 30 20" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Inner Glow */}
      <rect x="16" y="16" width="16" height="16" rx="1" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.8" />
    </g>
  </svg>
)

