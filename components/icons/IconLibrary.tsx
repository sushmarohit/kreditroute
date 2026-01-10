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
      <linearGradient id="bagSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#C2410C" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#9A3412" stopOpacity="0.6" />
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
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Money Bag - Enhanced 3D */}
    <g filter="url(#bagShadow)">
      {/* Bag Shadow */}
      <ellipse cx="26" cy="36" rx="10" ry="3" fill="#EA580C" opacity="0.3" />
      {/* Bag Side View for 3D depth */}
      <path d="M 34 18 Q 34 16 32 16 L 32 32 Q 32 34 34 34 L 34 36 Q 34 36 32 36 L 32 32 Q 32 30 30 32 Z" fill="url(#bagSide)" />
      {/* Bag Body - 3D Front */}
      <path d="M 14 18 Q 14 12 20 12 L 28 12 Q 34 12 34 18 L 34 32 Q 34 36 30 36 L 18 36 Q 14 36 14 32 Z" fill="url(#moneyBagGradient)" />
      {/* Bag Top Opening - More 3D */}
      <ellipse cx="26" cy="18" rx="7" ry="4" fill="#C2410C" opacity="0.7" />
      <ellipse cx="24" cy="18" rx="5" ry="3" fill="#9A3412" opacity="0.5" />
      {/* Bag Highlight - More visible */}
      <path d="M 18 16 Q 18 14 20 14 L 24 14 Q 26 14 28 16" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.5" fill="none" />
      {/* Bag Strap */}
      <path d="M 20 12 Q 20 10 24 10 Q 28 10 28 12" stroke="#92400E" strokeWidth="2" fill="none" />
    </g>
    {/* Coins - Enhanced 3D with CompareIcon3D style */}
    <g>
      {/* Coin 1 - 3D */}
      <ellipse cx="22" cy="24" rx="1.5" ry="3.5" fill="#D97706" opacity="0.6" />
      <circle cx="20" cy="24" r="4" fill="url(#coinGradient)" />
      <ellipse cx="19" cy="23" rx="2.5" ry="3" fill="rgba(255, 255, 255, 0.4)" />
      <circle cx="20" cy="24" r="2.8" fill="#FCD34D" opacity="0.7" />
      <text x="20" y="26" textAnchor="middle" fontSize="5" fill="#92400E" fontWeight="bold">₹</text>
      {/* Coin 2 - 3D */}
      <ellipse cx="30" cy="22" rx="1.5" ry="3.5" fill="#D97706" opacity="0.6" />
      <circle cx="28" cy="22" r="4" fill="url(#coinGradient)" />
      <ellipse cx="27" cy="21" rx="2.5" ry="3" fill="rgba(255, 255, 255, 0.4)" />
      <circle cx="28" cy="22" r="2.8" fill="#FCD34D" opacity="0.7" />
      <text x="28" y="24" textAnchor="middle" fontSize="5" fill="#92400E" fontWeight="bold">₹</text>
      {/* Coin 3 - Bottom 3D */}
      <ellipse cx="26" cy="28" rx="1.5" ry="3" fill="#D97706" opacity="0.5" />
      <ellipse cx="24" cy="28" rx="3.5" ry="3" fill="url(#coinGradient)" opacity="0.9" />
      <ellipse cx="23" cy="27" rx="2.5" ry="2.5" fill="rgba(255, 255, 255, 0.3)" />
      <text x="24" y="30" textAnchor="middle" fontSize="4" fill="#92400E" fontWeight="bold">₹</text>
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
      <linearGradient id="roofSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#C2410C" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#9A3412" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="houseWall" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F3F4F6" stopOpacity="1" />
        <stop offset="100%" stopColor="#E5E7EB" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="wallSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D1D5DB" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#9CA3AF" stopOpacity="0.5" />
      </linearGradient>
      <filter id="houseShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* House Shadow */}
    <ellipse cx="26" cy="38" rx="12" ry="3" fill="#EA580C" opacity="0.2" />
    {/* House Roof - Enhanced 3D */}
    <g filter="url(#houseShadow)">
      {/* Roof Right Side */}
      <path d="M 36 24 L 38 26 L 38 26 L 36 26 Z" fill="url(#roofSide)" />
      {/* Roof Left Side */}
      <path d="M 12 24 L 14 26 L 24 16 L 24 14 Z" fill="#C2410C" opacity="0.7" />
      {/* Roof Front */}
      <path d="M 12 24 L 24 14 L 36 24 L 36 26 L 12 26 Z" fill="url(#houseRoof)" />
      {/* Roof Highlight - More visible */}
      <path d="M 20 19 L 24 16 L 28 19" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.2" fill="none" />
      {/* Chimney */}
      <rect x="28" y="12" width="3" height="8" fill="#92400E" rx="0.5" />
      <path d="M 28 12 L 31 12 L 31 11 L 28 11 Z" fill="#78350F" />
    </g>
    {/* House Body - Enhanced 3D */}
    <g>
      {/* Wall Right Side */}
      <path d="M 36 26 L 38 28 L 38 38 L 36 38 Z" fill="url(#wallSide)" />
      {/* Wall Front */}
      <rect x="12" y="26" width="24" height="12" fill="url(#houseWall)" />
      {/* Door - More colorful */}
      <rect x="19" y="30" width="8" height="8" fill="#92400E" rx="1" />
      <rect x="20" y="31" width="6" height="6" fill="#78350F" rx="0.5" />
      <circle cx="25" cy="34" r="0.8" fill="#FBBF24" />
      {/* Door handle highlight */}
      <circle cx="25" cy="34" r="1.2" fill="#FCD34D" opacity="0.5" />
      {/* Window - More colorful */}
      <rect x="26" y="28" width="6" height="6" fill="#3B82F6" rx="0.5" />
      <rect x="27" y="29" width="4" height="4" fill="#60A5FA" rx="0.3" />
      <line x1="29" y1="28" x2="29" y2="34" stroke="#1E40AF" strokeWidth="1" />
      <line x1="26" y1="31" x2="32" y2="31" stroke="#1E40AF" strokeWidth="1" />
      {/* Window frame */}
      <rect x="26" y="28" width="6" height="6" fill="none" stroke="#1E40AF" strokeWidth="0.8" rx="0.5" />
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
      <linearGradient id="briefcaseSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#78350F" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#65350F" stopOpacity="0.6" />
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
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Briefcase Shadow */}
    <ellipse cx="26" cy="36" rx="10" ry="3" fill="#78350F" opacity="0.3" />
    {/* Briefcase - Enhanced 3D */}
    <g filter="url(#briefShadow)">
      {/* Briefcase Right Side */}
      <path d="M 34 20 L 36 22 L 36 34 L 34 32 Z" fill="url(#briefcaseSide)" />
      {/* Briefcase Top - Side View */}
      <path d="M 14 20 L 16 22 L 34 22 L 34 20 Z" fill="#78350F" opacity="0.6" />
      {/* Briefcase Body Front */}
      <rect x="14" y="20" width="20" height="14" rx="1" fill="url(#briefcaseGradient)" />
      {/* Briefcase Handle - More visible */}
      <path d="M 20 20 Q 20 16 24 16 Q 28 16 28 20" stroke="#FBBF24" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="24" cy="16" r="2" fill="#FBBF24" />
      <circle cx="24" cy="16" r="1.2" fill="#FCD34D" />
      {/* Lock - Enhanced */}
      <circle cx="24" cy="26" r="2.5" fill="#FBBF24" />
      <circle cx="24" cy="26" r="1.8" fill="#92400E" />
      <rect x="22.5" y="26" width="3" height="4" fill="#FBBF24" rx="0.3" />
      {/* Briefcase Highlight */}
      <rect x="14" y="20" width="20" height="4" fill="rgba(255, 255, 255, 0.15)" rx="1" />
      {/* Lock keyhole */}
      <circle cx="24" cy="27" r="0.8" fill="#FBBF24" />
    </g>
    {/* Coin next to briefcase - Enhanced 3D */}
    <g>
      <ellipse cx="36" cy="22" rx="2" ry="4.5" fill="#D97706" opacity="0.6" />
      <circle cx="32" cy="22" r="4.5" fill="url(#coinGrad)" />
      <ellipse cx="31" cy="21" rx="3" ry="3.5" fill="rgba(255, 255, 255, 0.4)" />
      <circle cx="32" cy="22" r="3.2" fill="#FCD34D" opacity="0.8" />
      <text x="32" y="24.5" textAnchor="middle" fontSize="6" fill="#92400E" fontWeight="bold">₹</text>
      {/* Coin highlight */}
      <ellipse cx="30" cy="20" rx="2" ry="2.5" fill="rgba(255, 255, 255, 0.3)" />
    </g>
  </svg>
)

export const CreditCardIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="card1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="100%" stopColor="#059669" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="card1Side" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#047857" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#065F46" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="card2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1F2937" stopOpacity="1" />
        <stop offset="100%" stopColor="#111827" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="card2Side" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#374151" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#1F2937" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="card3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F3F4F6" stopOpacity="1" />
        <stop offset="100%" stopColor="#E5E7EB" stopOpacity="1" />
      </linearGradient>
      <filter id="cardShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Card 3 - Bottom - Enhanced 3D */}
    <g filter="url(#cardShadow)">
      <rect x="12" y="28" width="24" height="16" rx="2" fill="url(#card3Grad)" />
      <path d="M 36 28 L 38 30 L 38 44 L 36 42 Z" fill="#D1D5DB" opacity="0.5" />
      <rect x="14" y="30" width="20" height="12" rx="1" fill="#FFFFFF" opacity="0.6" />
      <rect x="16" y="32" width="8" height="1.5" fill="#9CA3AF" rx="0.3" />
      <rect x="16" y="34" width="12" height="1.5" fill="#9CA3AF" rx="0.3" />
    </g>
    {/* Card 2 - Middle - Enhanced 3D */}
    <g filter="url(#cardShadow)">
      <rect x="14" y="24" width="24" height="16" rx="2" fill="url(#card2Grad)" />
      <path d="M 38 24 L 40 26 L 40 40 L 38 38 Z" fill="url(#card2Side)" />
      <rect x="18" y="27" width="16" height="2.5" fill="rgba(255, 255, 255, 0.4)" rx="1" />
      <rect x="18" y="31" width="8" height="1.5" fill="rgba(255, 255, 255, 0.7)" rx="0.3" />
      <rect x="18" y="33" width="12" height="1.5" fill="rgba(255, 255, 255, 0.7)" rx="0.3" />
    </g>
    {/* Card 1 - Top - Enhanced 3D */}
    <g filter="url(#cardShadow)">
      <rect x="16" y="20" width="24" height="16" rx="2" fill="url(#card1Grad)" />
      <path d="M 40 20 L 42 22 L 42 36 L 40 34 Z" fill="url(#card1Side)" />
      {/* Card Highlight */}
      <rect x="16" y="20" width="24" height="4" fill="rgba(255, 255, 255, 0.2)" rx="2" />
      {/* Chip - More visible */}
      <rect x="20" y="23" width="7" height="5" fill="#FBBF24" rx="0.8" />
      <rect x="21" y="24" width="5" height="3" fill="#92400E" rx="0.5" />
      <rect x="21.5" y="24.5" width="1.5" height="1" fill="#FCD34D" />
      <rect x="24" y="24.5" width="1.5" height="1" fill="#FCD34D" />
      {/* Card Numbers */}
      <rect x="18" y="28" width="14" height="2" fill="rgba(255, 255, 255, 0.8)" rx="0.5" />
      <rect x="18" y="31" width="10" height="1.5" fill="rgba(255, 255, 255, 0.9)" rx="0.3" />
      <rect x="18" y="33" width="12" height="1.5" fill="rgba(255, 255, 255, 0.9)" rx="0.3" />
      {/* Badge - More colorful */}
      <rect x="26" y="22" width="12" height="3.5" fill="#F97316" rx="1.8" opacity="0.95" />
      <text x="32" y="24.5" textAnchor="middle" fontSize="2.5" fill="#FFFFFF" fontWeight="bold">FREE</text>
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
      <linearGradient id="gaugeSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9CA3AF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#6B7280" stopOpacity="0.6" />
      </linearGradient>
      <filter id="gaugeShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Gauge/Speedometer - Enhanced 3D with CompareIcon3D style */}
    {/* Gauge Shadow - Enhanced */}
    <ellipse cx="26" cy="38" rx="12" ry="4" fill="#10B981" opacity="0.25" />
    
    {/* Gauge Container - Enhanced 3D */}
    <g filter="url(#gaugeShadow)">
      {/* Gauge Background Circle - Side - Enhanced 3D */}
      <ellipse cx="28" cy="24" rx="2.5" ry="16" fill="url(#gaugeSide)" />
      
      {/* Gauge Background Circle - Front (White for visibility) */}
      <circle cx="24" cy="24" r="16" fill="#FFFFFF" stroke="#D1D5DB" strokeWidth="2" />
      <circle cx="24" cy="24" r="15" fill="#F9FAFB" />
      
      {/* Gauge Inner Ring */}
      <circle cx="24" cy="24" r="14" fill="none" stroke="#D1D5DB" strokeWidth="1.5" opacity="0.8" />
      
      {/* Gauge Arc - Red - 3D (Poor: 0-33%) - Visible */}
      <path d="M 24 10 A 14 14 0 0 1 36 24" stroke="#EF4444" strokeWidth="5" fill="none" strokeLinecap="round" opacity="1" />
      <path d="M 24 11 A 13 13 0 0 1 35 24" stroke="#DC2626" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.9" />
      
      {/* Gauge Arc - Yellow - 3D (Fair: 33-66%) - Visible */}
      <path d="M 36 24 A 14 14 0 0 1 29 36" stroke="#FBBF24" strokeWidth="5" fill="none" strokeLinecap="round" opacity="1" />
      <path d="M 35 24 A 13 13 0 0 1 29 35" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.9" />
      
      {/* Gauge Arc - Green - 3D (Good: 66-100%) - Visible */}
      <path d="M 29 36 A 14 14 0 0 1 24 10" stroke="#10B981" strokeWidth="5" fill="none" strokeLinecap="round" opacity="1" />
      <path d="M 29 35 A 13 13 0 0 1 24 11" stroke="#059669" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.9" />
      
      {/* Gauge Markers - Visible */}
      <circle cx="24" cy="10" r="2" fill="#EF4444" />
      <circle cx="36" cy="24" r="2" fill="#FBBF24" />
      <circle cx="29" cy="36" r="2" fill="#10B981" />
      
      {/* Center Circle - 3D Base - Visible */}
      <circle cx="25" cy="25" r="4.5" fill="#1F2937" opacity="0.4" />
      <circle cx="24" cy="24" r="4.5" fill="#374151" />
      <circle cx="24" cy="24" r="3.5" fill="#4B5563" />
      <circle cx="24" cy="24" r="2.5" fill="#6B7280" />
      
      {/* Needle - 3D (Pointing to Good/Green zone) - Visible */}
      <line x1="24" y1="24" x2="17" y2="13" stroke="#1F2937" strokeWidth="4.5" strokeLinecap="round" opacity="0.5" />
      <line x1="24" y1="24" x2="17" y2="13" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="24" y1="24" x2="18" y2="14" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" opacity="0.9" />
      
      {/* Needle Center - Visible */}
      <circle cx="24" cy="24" r="3" fill="#10B981" />
      <circle cx="24" cy="24" r="2" fill="#34D399" />
      <circle cx="24" cy="24" r="1.2" fill="#FFFFFF" />
    </g>
    
    {/* Score Text - Outside filter for clarity and visibility */}
    <text x="24" y="36" textAnchor="middle" fontSize="8" fill="#10B981" fontWeight="bold" fontFamily="Arial, sans-serif" opacity="1">750</text>
    <text x="24" y="42" textAnchor="middle" fontSize="4" fill="#6B7280" fontWeight="600" fontFamily="Arial, sans-serif" opacity="0.9">Score</text>
  </svg>
)

export const BillPaymentIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="receiptGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
        <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="receiptSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="checkMarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="100%" stopColor="#059669" stopOpacity="1" />
      </linearGradient>
      <filter id="receiptShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Receipt/Invoice - Enhanced 3D with CompareIcon3D style */}
    <g filter="url(#receiptShadow)">
      {/* Receipt Shadow Side - Enhanced 3D */}
      <path d="M 32 12 L 34 14 L 34 38 L 32 36 Z" fill="url(#receiptSide)" />
      {/* Receipt Top Edge */}
      <path d="M 14 12 L 32 12 L 34 14 L 16 14 Z" fill="#1E40AF" opacity="0.6" />
      {/* Receipt Body - More colorful */}
      <rect x="14" y="12" width="18" height="26" rx="1" fill="url(#receiptGrad)" />
      {/* Receipt Highlight */}
      <rect x="14" y="12" width="18" height="4" fill="rgba(255, 255, 255, 0.25)" rx="1" />
      {/* Perforated Edge - More visible */}
      <path d="M 14 18 L 16 18 M 14 20 L 16 20 M 14 22 L 16 22" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      {/* Receipt Lines - More visible */}
      <line x1="18" y1="16" x2="28" y2="16" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
      <line x1="18" y1="20" x2="28" y2="20" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
      <line x1="18" y1="23" x2="24" y2="23" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
      <line x1="18" y1="26" x2="30" y2="26" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
      <line x1="18" y1="29" x2="26" y2="29" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.7" />
      {/* Total Line - Bold */}
      <line x1="18" y1="32" x2="30" y2="32" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
      {/* Checkmark Badge */}
      <circle cx="30" cy="16" r="3.5" fill="url(#checkMarkGrad)" />
      <path d="M 28 16 L 30 18 L 32 14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Amount - More visible */}
      <text x="26" y="30" textAnchor="end" fontSize="5" fill="#FFFFFF" fontWeight="bold" opacity="0.95">₹1,500</text>
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
      <linearGradient id="bulbSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D97706" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#B45309" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="bulbGlow" x1="50%" y1="50%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.3" />
      </linearGradient>
      <filter id="bulbShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Light Glow - Enhanced */}
    <ellipse cx="24" cy="32" rx="14" ry="7" fill="url(#bulbGlow)" />
    {/* Light Bulb - Enhanced 3D with CompareIcon3D style */}
    <g filter="url(#bulbShadow)">
      {/* Bulb Shadow */}
      <ellipse cx="26" cy="32" rx="10" ry="3" fill="#F59E0B" opacity="0.3" />
      {/* Bulb Glass - Side View */}
      <path d="M 30 16 Q 30 14 28 14 Q 28 18 30 18 L 30 26 Q 30 28 32 26 L 32 18 Q 30 16 30 16" fill="url(#bulbSide)" />
      {/* Bulb Glass - Front */}
      <path d="M 20 14 Q 20 8 24 8 Q 28 8 28 14 Q 28 16 30 18 L 30 26 Q 30 28 28 28 L 20 28 Q 18 28 18 26 L 18 18 Q 20 16 20 14 Z" fill="url(#bulbGrad)" />
      {/* Bulb Highlight - More visible */}
      <ellipse cx="22" cy="18" rx="3" ry="4" fill="rgba(255, 255, 255, 0.5)" />
      {/* Lightning bolt inside */}
      <path d="M 22 18 L 24 20 L 23 20 L 25 24 L 22 22 L 23 22 L 21 26" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.9" />
      {/* Bulb Base - Enhanced 3D */}
      <rect x="20" y="28" width="8" height="4" rx="1" fill="#374151" />
      <rect x="20.5" y="28.5" width="7" height="3" fill="#1F2937" rx="0.5" />
      <rect x="21" y="32" width="6" height="2" rx="0.5" fill="#111827" />
      {/* Filament - More visible */}
      <path d="M 22 22 Q 24 20 26 22" stroke="#78350F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="24" cy="22" r="1.2" fill="#F59E0B" />
      <circle cx="24" cy="22" r="0.8" fill="#FCD34D" opacity="0.8" />
      {/* Decorative sparks */}
      <circle cx="26" cy="18" r="0.8" fill="#FBBF24" opacity="0.9" />
      <circle cx="22" cy="24" r="0.6" fill="#FCD34D" opacity="0.8" />
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
      <linearGradient id="heartSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#B91C1C" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#991B1B" stopOpacity="0.6" />
      </linearGradient>
      <filter id="heartShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Heart - Enhanced 3D with CompareIcon3D style */}
    <g filter="url(#heartShadow)">
      {/* Heart Shadow */}
      <ellipse cx="26" cy="28" rx="8" ry="6" fill="#DC2626" opacity="0.3" />
      {/* Heart Shadow Side - Enhanced 3D */}
      <path d="M 28 18 L 30 20 L 30 26 L 28 24 Z" fill="url(#heartSide)" />
      {/* Heart Body */}
      <path d="M 24 16 Q 20 12 18 14 Q 16 16 16 20 Q 16 24 24 32 Q 32 24 32 20 Q 32 16 30 14 Q 28 12 24 16 Z" fill="url(#heartGrad)" />
      {/* Heart Inner Glow */}
      <path d="M 24 18 Q 22 16 20 17 Q 19 18 19 20 Q 19 22 24 28 Q 29 22 29 20 Q 29 18 28 17 Q 26 16 24 18 Z" fill="rgba(255, 255, 255, 0.2)" />
      {/* Heart Highlight - More visible */}
      <path d="M 22 18 Q 20 16 19 17 Q 18 18 18 20" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cross - More visible */}
      <rect x="22" y="20" width="4" height="2" rx="0.5" fill="#FFFFFF" opacity="0.95" />
      <rect x="23.5" y="18.5" width="2" height="5" rx="0.5" fill="#FFFFFF" opacity="0.95" />
      {/* Pulse effect */}
      <circle cx="24" cy="24" r="2" fill="#FFFFFF" opacity="0.4" />
      <circle cx="24" cy="24" r="1.5" fill="#FFFFFF" opacity="0.6" />
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
      <linearGradient id="umbrellaSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.6" />
      </linearGradient>
      <filter id="umbrellaShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Umbrella - Enhanced 3D with CompareIcon3D style */}
    <g filter="url(#umbrellaShadow)">
      {/* Umbrella Shadow */}
      <ellipse cx="26" cy="42" rx="8" ry="3" fill="#2563EB" opacity="0.3" />
      {/* Umbrella Canopy - Front - Enhanced 3D */}
      <path d="M 24 16 Q 14 16 14 24 Q 14 28 18 30 Q 22 32 24 32 Q 26 32 30 30 Q 34 28 34 24 Q 34 16 24 16 Z" fill="url(#umbrellaGrad)" />
      {/* Umbrella Canopy - Side - Enhanced 3D */}
      <path d="M 34 16 Q 34 16 34 24 Q 34 28 36 27 Q 36 26 36 24 Q 36 18 34 16" fill="url(#umbrellaSide)" />
      {/* Umbrella Highlight */}
      <path d="M 24 16 Q 20 16 18 18 Q 18 20 20 22" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" fill="none" />
      {/* Umbrella Ribs - More visible */}
      <path d="M 24 16 L 18 28 M 24 16 L 30 28 M 24 16 L 14 24 M 24 16 L 34 24" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1" strokeLinecap="round" />
      {/* Umbrella Handle - Enhanced 3D */}
      <rect x="23" y="32" width="2" height="8" fill="#92400E" rx="1" />
      <rect x="23.5" y="32.5" width="1" height="7" fill="#78350F" rx="0.5" />
      <path d="M 24 40 Q 26 42 26 44" stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M 24 40 Q 25 41 25.5 42" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Protection badge */}
      <circle cx="28" cy="20" r="2.5" fill="#10B981" />
      <path d="M 27 20 L 28 21 L 29 19" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  </svg>
)

export const CarInsuranceIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="carGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" stopOpacity="1" />
        <stop offset="100%" stopColor="#DC2626" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="carSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#B91C1C" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#991B1B" stopOpacity="0.6" />
      </linearGradient>
      <filter id="carShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Car - Enhanced 3D with CompareIcon3D style */}
    <g filter="url(#carShadow)">
      {/* Car Shadow */}
      <ellipse cx="26" cy="36" rx="12" ry="3" fill="#DC2626" opacity="0.3" />
      {/* Car Body - Side View - Enhanced 3D */}
      <path d="M 34 28 L 36 30 L 36 32 L 34 32 Z" fill="url(#carSide)" />
      {/* Car Body - Front */}
      <path d="M 12 28 L 14 26 L 16 24 L 30 24 L 32 26 L 34 28 L 34 30 L 32 32 L 30 32 L 28 34 L 16 34 L 14 32 L 12 32 Z" fill="url(#carGrad)" />
      {/* Car Highlight */}
      <path d="M 16 24 L 30 24 L 32 26 L 34 28 L 28 28" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" fill="none" />
      {/* Car Windows - More colorful */}
      <path d="M 18 26 L 28 26 L 28 28 L 18 28 Z" fill="#3B82F6" opacity="0.8" />
      <rect x="18.5" y="26.5" width="9" height="1.5" fill="#60A5FA" opacity="0.6" />
      <line x1="23" y1="26" x2="23" y2="28" stroke="#FFFFFF" strokeWidth="1" opacity="0.8" />
      {/* Car Wheels - Enhanced 3D */}
      <circle cx="18" cy="32" r="3.5" fill="#1F2937" />
      <circle cx="18" cy="32" r="3" fill="#374151" />
      <circle cx="18" cy="32" r="2" fill="#4B5563" />
      <circle cx="18" cy="32" r="1" fill="#6B7280" />
      <circle cx="30" cy="32" r="3.5" fill="#1F2937" />
      <circle cx="30" cy="32" r="3" fill="#374151" />
      <circle cx="30" cy="32" r="2" fill="#4B5563" />
      <circle cx="30" cy="32" r="1" fill="#6B7280" />
      {/* Shield on Car - More colorful */}
      <path d="M 22 24 Q 22 22 24 22 Q 26 22 26 24 Q 26 26 24 28 Q 22 26 22 24 Z" fill="#10B981" />
      <path d="M 23 23 Q 23 22 24 22 Q 25 22 25 23 Q 25 24 24 25 Q 23 24 23 23 Z" fill="#34D399" opacity="0.8" />
      <path d="M 24 24 L 24 26 M 23 25 L 25 25" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
      {/* Decorative elements */}
      <circle cx="20" cy="26" r="0.8" fill="#FFFFFF" opacity="0.6" />
      <circle cx="28" cy="26" r="0.8" fill="#FFFFFF" opacity="0.6" />
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
      <linearGradient id="goldSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D97706" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#B45309" stopOpacity="0.6" />
      </linearGradient>
      <filter id="goldShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Gold Bars Stack - Enhanced 3D with CompareIcon3D style */}
    <g filter="url(#goldShadow)">
      {/* Bar 3 - Bottom - Enhanced 3D */}
      <path d="M 36 28 L 38 30 L 38 34 L 36 32 Z" fill="url(#goldSide)" opacity="0.6" />
      <rect x="12" y="28" width="24" height="6" rx="1" fill="url(#goldGrad)" opacity="0.9" />
      <path d="M 12 28 L 36 28 L 38 30 L 14 30 Z" fill="#D97706" opacity="0.5" />
      <rect x="14" y="29" width="20" height="4" fill="#FCD34D" opacity="0.7" />
      {/* Bar 2 - Middle - Enhanced 3D */}
      <path d="M 38 22 L 40 24 L 40 28 L 38 26 Z" fill="url(#goldSide)" opacity="0.7" />
      <rect x="14" y="22" width="24" height="6" rx="1" fill="url(#goldGrad)" />
      <path d="M 14 22 L 38 22 L 40 24 L 16 24 Z" fill="#D97706" opacity="0.6" />
      <rect x="16" y="23" width="20" height="4" fill="#FCD34D" opacity="0.8" />
      {/* Bar 1 - Top - Enhanced 3D */}
      <path d="M 40 16 L 42 18 L 42 22 L 40 20 Z" fill="url(#goldSide)" opacity="0.8" />
      <rect x="16" y="16" width="24" height="6" rx="1" fill="url(#goldGrad)" />
      <path d="M 16 16 L 40 16 L 42 18 L 18 18 Z" fill="#D97706" opacity="0.7" />
      <rect x="18" y="17" width="20" height="4" fill="#FCD34D" opacity="0.9" />
      {/* Percentage Sign - More visible */}
      <text x="28" y="21.5" textAnchor="middle" fontSize="7" fill="#92400E" fontWeight="bold" fontFamily="Arial, sans-serif">13.25%</text>
      {/* Highlight on top bar - More visible */}
      <rect x="18" y="17" width="20" height="2" fill="rgba(255, 255, 255, 0.5)" />
      {/* Decorative sparkles */}
      <circle cx="20" cy="19" r="0.8" fill="#FCD34D" opacity="0.9" />
      <circle cx="36" cy="19" r="0.8" fill="#FCD34D" opacity="0.9" />
    </g>
  </svg>
)

export const FixedDepositIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="safeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="100%" stopColor="#059669" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="safeSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#047857" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#065F46" stopOpacity="0.6" />
      </linearGradient>
      <filter id="safeShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Safe/Vault - Enhanced 3D with CompareIcon3D style */}
    <g filter="url(#safeShadow)">
      {/* Safe Shadow */}
      <ellipse cx="26" cy="36" rx="12" ry="3" fill="#047857" opacity="0.3" />
      {/* Safe Body - Side - Enhanced 3D */}
      <path d="M 32 14 L 34 16 L 34 34 L 32 32 Z" fill="url(#safeSide)" />
      {/* Safe Top - Enhanced 3D */}
      <path d="M 10 12 L 32 12 L 34 14 L 12 14 Z" fill="#047857" opacity="0.7" />
      {/* Safe Body - Front */}
      <rect x="10" y="14" width="22" height="20" rx="2" fill="url(#safeGrad)" />
      {/* Safe Highlight */}
      <rect x="10" y="14" width="22" height="4" fill="rgba(255, 255, 255, 0.2)" rx="2" />
      {/* Safe Door Frame */}
      <rect x="12" y="16" width="18" height="16" rx="1" fill="#047857" opacity="0.9" />
      {/* Safe Lock/Dial - More colorful */}
      <circle cx="21" cy="24" r="4.5" fill="#FBBF24" />
      <circle cx="21" cy="24" r="3.5" fill="#FCD34D" />
      <circle cx="21" cy="24" r="2.5" fill="#FBBF24" />
      <circle cx="21" cy="24" r="1.5" fill="#FFFFFF" />
      {/* Lock Handle - Enhanced */}
      <rect x="19" y="28" width="4" height="2.5" fill="#FBBF24" rx="0.5" />
      <rect x="19.5" y="28.5" width="3" height="1.5" fill="#FCD34D" rx="0.3" />
      {/* Handle - Enhanced */}
      <rect x="26" y="22" width="3.5" height="6" fill="#FBBF24" rx="1" />
      <rect x="26.5" y="22.5" width="2.5" height="5" fill="#FCD34D" rx="0.5" />
      {/* Safe Top */}
      <rect x="10" y="12" width="22" height="3" fill="#065F46" />
      {/* Badge - More colorful */}
      <rect x="13" y="17" width="14" height="3.5" fill="#3B82F6" rx="1.5" opacity="0.95" />
      <text x="20" y="19.5" textAnchor="middle" fontSize="3" fill="#FFFFFF" fontWeight="bold">8%</text>
      {/* Money icon */}
      <circle cx="28" cy="20" r="2" fill="#FBBF24" opacity="0.9" />
      <text x="28" y="21.5" textAnchor="middle" fontSize="2.5" fill="#92400E" fontWeight="bold">₹</text>
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
      <linearGradient id="chartSide1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#059669" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#047857" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient id="chartSide2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#2563EB" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.5" />
      </linearGradient>
      <filter id="chartShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Chart Background - Enhanced 3D */}
    <g filter="url(#chartShadow)">
      <rect x="12" y="14" width="24" height="20" rx="1" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="1" />
      <path d="M 36 14 L 38 16 L 38 34 L 36 32 Z" fill="#E5E7EB" opacity="0.6" />
    </g>
    {/* Chart Bars - Enhanced 3D with CompareIcon3D style */}
    <g filter="url(#chartShadow)">
      {/* Bar 1 - Green */}
      <path d="M 20 26 L 21 25 L 21 34 L 20 34 Z" fill="url(#chartSide1)" />
      <rect x="16" y="26" width="4" height="8" fill="url(#chartGrad1)" />
      <rect x="16.5" y="26" width="3" height="8" fill="#34D399" opacity="0.9" />
      {/* Bar 2 - Blue */}
      <path d="M 26 22 L 27 21 L 27 34 L 26 34 Z" fill="url(#chartSide2)" />
      <rect x="22" y="22" width="4" height="12" fill="url(#chartGrad2)" />
      <rect x="22.5" y="22" width="3" height="12" fill="#60A5FA" opacity="0.9" />
      {/* Bar 3 - Yellow/Orange */}
      <path d="M 32 18 L 33 17 L 33 34 L 32 34 Z" fill="#D97706" opacity="0.7" />
      <rect x="28" y="18" width="4" height="16" fill="url(#chartGrad3)" />
      <rect x="28.5" y="18" width="3" height="16" fill="#FBBF24" opacity="0.9" />
      {/* Bar 4 - Green (tallest) */}
      <path d="M 38 14 L 39 13 L 39 34 L 38 34 Z" fill="url(#chartSide1)" />
      <rect x="34" y="14" width="4" height="20" fill="url(#chartGrad1)" />
      <rect x="34.5" y="14" width="3" height="20" fill="#34D399" opacity="0.9" />
    </g>
    {/* Grid Lines - More visible */}
    <line x1="12" y1="20" x2="38" y2="20" stroke="#E5E7EB" strokeWidth="1" opacity="0.8" />
    <line x1="12" y="26" x2="38" y2="26" stroke="#E5E7EB" strokeWidth="1" opacity="0.8" />
    <line x1="12" y1="32" x2="38" y2="32" stroke="#E5E7EB" strokeWidth="1" opacity="0.8" />
    {/* Trending arrow */}
    <path d="M 38 12 L 40 14 L 38 14 Z" fill="#10B981" />
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
      {/* Bag Shadow */}
      <ellipse cx="26" cy="32" rx="10" ry="3" fill="#059669" opacity="0.3" />
      {/* Bag Side */}
      <path d="M 34 18 Q 34 16 32 16 L 32 30 Q 32 32 34 32 Z" fill="#047857" opacity="0.5" />
      {/* Bag Body Front */}
      <path d="M 14 18 Q 14 14 18 14 L 30 14 Q 34 14 34 18 L 34 30 Q 34 32 32 32 L 20 32 Q 18 32 18 30 L 18 18 Z" fill="url(#walletGrad)" />
      {/* Bag Top - 3D */}
      <ellipse cx="24" cy="18" rx="8" ry="3" fill="#047857" opacity="0.7" />
      <ellipse cx="26" cy="18" rx="6" ry="2" fill="#065F46" opacity="0.5" />
      {/* Bag Highlight */}
      <path d="M 18 16 Q 18 15 24 15 Q 30 15 30 16" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" fill="none" />
      {/* EMI Text */}
      <text x="24" y="26" textAnchor="middle" fontSize="5" fill="#FFFFFF" fontWeight="bold">EMI</text>
      {/* Inner Glow */}
      <path d="M 20 20 Q 20 19 24 19 Q 28 19 28 20" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.5" fill="none" />
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
      <linearGradient id="deviceSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.6" />
      </linearGradient>
      <filter id="deviceShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Mobile Device - Enhanced 3D */}
    <g filter="url(#deviceShadow)">
      {/* Device Shadow */}
      <ellipse cx="24" cy="36" rx="8" ry="2" fill="#2563EB" opacity="0.3" />
      {/* Device Body - Side View */}
      <rect x="30" y="14" width="2.5" height="20" fill="url(#deviceSide)" />
      {/* Device Top Edge */}
      <path d="M 16 14 L 30 14 L 32 16 L 18 16 Z" fill="#1E40AF" opacity="0.6" />
      {/* Device Body - Front */}
      <rect x="16" y="14" width="14" height="20" rx="2" fill="url(#deviceGrad)" />
      {/* Device Highlight */}
      <rect x="16" y="14" width="14" height="4" fill="rgba(255, 255, 255, 0.2)" rx="2" />
      {/* Screen - More visible */}
      <rect x="18" y="16" width="10" height="16" rx="1" fill="#1E293B" />
      {/* Screen Glow */}
      <rect x="18" y="16" width="10" height="16" fill="none" stroke="#3B82F6" strokeWidth="0.5" opacity="0.5" rx="1" />
      {/* Screen Content - Checkmarks - More colorful */}
      <circle cx="21" cy="20" r="1.5" fill="#10B981" />
      <path d="M 20.3 20 L 21 20.7 L 21.7 19.3" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="21" cy="24" r="1.5" fill="#10B981" />
      <path d="M 20.3 24 L 21 24.7 L 21.7 23.3" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="21" cy="28" r="1.5" fill="#F59E0B" />
      <path d="M 20.3 28 L 21 28.7 L 21.7 27.3" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Button - More visible */}
      <rect x="23" y="30" width="6" height="1.5" rx="0.5" fill="#60A5FA" />
      <rect x="23.5" y="30.2" width="5" height="1.1" rx="0.3" fill="#3B82F6" />
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
      <linearGradient id="shieldSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#047857" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#065F46" stopOpacity="0.6" />
      </linearGradient>
      <filter id="shieldShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Shield - Enhanced 3D */}
    <g filter="url(#shieldShadow)">
      {/* Shield Shadow */}
      <ellipse cx="26" cy="32" rx="8" ry="2" fill="#047857" opacity="0.3" />
      {/* Shield Body - Side View */}
      <path d="M 28 14 L 30 16 L 30 30 L 28 28 Z" fill="url(#shieldSide)" />
      {/* Shield Front */}
      <path d="M 18 14 Q 18 12 24 12 Q 30 12 30 14 Q 30 18 28 22 Q 26 26 24 30 Q 22 26 20 22 Q 18 18 18 14 Z" fill="url(#shieldGrad)" />
      {/* Shield Inner Ring */}
      <path d="M 20 16 Q 20 14 24 14 Q 28 14 28 16 Q 28 18 26.5 21 Q 25 24 24 26 Q 23 24 21.5 21 Q 20 18 20 16 Z" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
      {/* Shield Highlight - More visible */}
      <path d="M 20 16 Q 20 15 24 15 Q 28 15 28 16" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.2" fill="none" />
      {/* Checkmark - Bold and colorful */}
      <path d="M 22 20 L 24 22 L 26 19" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Checkmark glow */}
      <circle cx="24" cy="21" r="4" fill="#10B981" opacity="0.2" />
      {/* Decorative stars */}
      <circle cx="26" cy="16" r="0.8" fill="#FBBF24" opacity="0.9" />
      <circle cx="22" cy="16" r="0.8" fill="#60A5FA" opacity="0.8" />
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
      <linearGradient id="zapSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D97706" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#B45309" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="zapGlow" x1="50%" y1="50%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.2" />
      </linearGradient>
      <filter id="zapShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Lightning Bolt - Enhanced 3D */}
    <g filter="url(#zapShadow)">
      {/* Lightning Glow Effect */}
      <ellipse cx="24" cy="20" rx="8" ry="12" fill="url(#zapGlow)" />
      {/* Lightning Shadow Side */}
      <path d="M 26 14 L 28 16 L 26 28 L 24 26 Z" fill="url(#zapSide)" />
      {/* Lightning Front - More vibrant */}
      <path d="M 22 10 L 28 18 L 24 18 L 26 30 L 20 22 L 24 22 Z" fill="url(#zapGrad)" />
      {/* Lightning Inner Highlight */}
      <path d="M 23 13 L 27 19 L 24 19 L 25 27" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Lightning Core Glow */}
      <path d="M 23.5 14 L 27 18.5 L 24 18.5 L 25.5 26" stroke="#FCD34D" strokeWidth="0.8" fill="none" opacity="0.8" />
      {/* Decorative sparks */}
      <circle cx="28" cy="12" r="1" fill="#FBBF24" opacity="0.9" />
      <circle cx="20" cy="26" r="1.2" fill="#F59E0B" opacity="0.8" />
      <circle cx="26" cy="24" r="0.8" fill="#FCD34D" opacity="0.9" />
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
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* 3D Circle Badge - Enhanced with CompareIcon3D style */}
    <g filter="url(#checkShadow)">
      {/* Circle Shadow */}
      <ellipse cx="26" cy="28" rx="12" ry="3" fill="#047857" opacity="0.2" />
      {/* Circle Side View for 3D depth */}
      <ellipse cx="30" cy="24" rx="2" ry="14" fill="url(#checkSide)" />
      {/* Circle Front */}
      <circle cx="24" cy="24" r="14" fill="url(#checkGrad)" />
      {/* Circle Inner Ring */}
      <circle cx="24" cy="24" r="12" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
      {/* Circle Highlight */}
      <ellipse cx="20" cy="18" rx="6" ry="5" fill="rgba(255, 255, 255, 0.35)" />
      {/* Checkmark - Bold and visible */}
      <path d="M 18 24 L 22 28 L 30 18" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Decorative sparkles */}
      <circle cx="28" cy="16" r="1.5" fill="#FBBF24" opacity="0.9" />
      <circle cx="16" cy="20" r="1" fill="#60A5FA" opacity="0.8" />
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
        <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="arrowGradDoc" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="100%" stopColor="#059669" stopOpacity="1" />
      </linearGradient>
      <filter id="docShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* 3D Document - Enhanced with CompareIcon3D style */}
    <g filter="url(#docShadow)">
      {/* Document Shadow */}
      <rect x="34" y="14" width="20" height="24" rx="1" fill="#1E40AF" opacity="0.15" />
      {/* Document Side View for 3D depth */}
      <path d="M 34 12 L 36 14 L 36 36 L 34 34 Z" fill="url(#docSide)" />
      {/* Document Top Edge */}
      <path d="M 14 12 L 34 12 L 36 14 L 16 14 Z" fill="#1E40AF" opacity="0.6" />
      {/* Document Front */}
      <rect x="14" y="12" width="20" height="24" rx="1" fill="url(#docGrad)" />
      {/* Document Header/Highlight */}
      <rect x="14" y="12" width="20" height="5" fill="rgba(255, 255, 255, 0.25)" rx="1" />
      {/* Document Lines - More visible */}
      <rect x="16" y="16" width="14" height="2" fill="#FFFFFF" opacity="0.9" rx="0.5" />
      <rect x="16" y="19" width="16" height="2" fill="#FFFFFF" opacity="0.7" rx="0.5" />
      <rect x="16" y="22" width="14" height="2" fill="#FFFFFF" opacity="0.7" rx="0.5" />
      {/* Arrow/Down Arrow - Colorful and bold */}
      <path d="M 20 28 L 28 28 L 24 32 Z" fill="url(#arrowGradDoc)" />
      <path d="M 21 28 L 27 28 L 24 31 Z" fill="#FFFFFF" opacity="0.9" />
      {/* Checkmark badge */}
      <circle cx="26" cy="16" r="2.5" fill="#10B981" />
      <path d="M 25 16 L 26 17 L 27 15" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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
        <stop offset="0%" stopColor="#C2410C" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#9A3412" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="coinGlow" x1="50%" y1="50%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.3" />
      </linearGradient>
      <filter id="moneyShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* 3D Coin - Enhanced with CompareIcon3D style */}
    <g filter="url(#moneyShadow)">
      {/* Coin Glow Effect */}
      <ellipse cx="24" cy="28" rx="14" ry="4" fill="url(#coinGlow)" />
      {/* Coin Shadow */}
      <ellipse cx="26" cy="28" rx="10" ry="3" fill="#EA580C" opacity="0.3" />
      {/* Coin Side View for 3D depth */}
      <ellipse cx="30" cy="24" rx="2.5" ry="12" fill="url(#coinSide)" />
      {/* Coin Front */}
      <circle cx="24" cy="24" r="12" fill="url(#moneyIconGrad)" />
      {/* Coin Outer Ring */}
      <circle cx="24" cy="24" r="11" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.4" />
      {/* Coin Inner Ring */}
      <circle cx="24" cy="24" r="9" fill="none" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.3" />
      {/* Coin Highlight - More pronounced */}
      <ellipse cx="20" cy="18" rx="6" ry="5" fill="rgba(255, 255, 255, 0.35)" />
      {/* Rupee Symbol - Bold and colorful */}
      <text x="24" y="28" textAnchor="middle" fontSize="11" fill="#FFFFFF" fontWeight="bold" fontFamily="Arial, sans-serif">₹</text>
      {/* Decorative stars */}
      <circle cx="28" cy="18" r="1" fill="#FBBF24" opacity="0.9" />
      <circle cx="20" cy="14" r="0.8" fill="#60A5FA" opacity="0.8" />
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
        <stop offset="0%" stopColor="#D97706" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#B45309" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="starGlow" x1="50%" y1="50%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.2" />
      </linearGradient>
      <filter id="starShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* 3D Star - Enhanced */}
    <g filter="url(#starShadow)">
      {/* Star Glow Effect */}
      <ellipse cx="24" cy="26" rx="14" ry="8" fill="url(#starGlow)" />
      {/* Star Shadow */}
      <ellipse cx="26" cy="36" rx="10" ry="3" fill="#F59E0B" opacity="0.3" />
      {/* Star Side Points - More 3D depth */}
      <path d="M 28 20 L 30 22 L 34 22 L 31 25 L 32 29 L 28 27 L 24 29 L 25 25 L 22 22 L 26 22 Z" fill="url(#starSide)" opacity="0.7" transform="translate(1, 1)" />
      {/* Star Front - More vibrant */}
      <path d="M 24 12 L 28 20 L 36 22 L 30 28 L 31 36 L 24 32 L 17 36 L 18 28 L 12 22 L 20 20 Z" fill="url(#starGrad)" />
      {/* Star Inner Highlight - More visible */}
      <path d="M 22 16 L 24 18 L 26 16" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Star Points Highlight */}
      <path d="M 24 12 L 26 14 L 28 12" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M 36 22 L 34 24 L 36 26" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Star Center Glow - Enhanced */}
      <circle cx="24" cy="24" r="4" fill="#FCD34D" opacity="0.5" />
      <circle cx="24" cy="24" r="3" fill="#FBBF24" opacity="0.4" />
      {/* Inner Sparkle - More visible */}
      <circle cx="24" cy="24" r="2" fill="#FFFFFF" opacity="0.9" />
      <circle cx="24" cy="24" r="1" fill="#FCD34D" />
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

// Credit Score Specialized Icons
export const CreditReportIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="reportGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
        <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="reportSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.6" />
      </linearGradient>
      <filter id="reportShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* 3D Document/Report - Enhanced with CompareIcon3D style */}
    <g filter="url(#reportShadow)">
      {/* Report Shadow Side - Enhanced 3D */}
      <path d="M 34 12 L 36 14 L 36 36 L 34 34 Z" fill="url(#reportSide)" />
      {/* Report Top Edge - Enhanced 3D */}
      <path d="M 14 12 L 34 12 L 36 14 L 16 14 Z" fill="#1E40AF" opacity="0.6" />
      {/* Report Front */}
      <rect x="14" y="12" width="20" height="24" rx="1" fill="url(#reportGrad)" />
      {/* Report Highlight */}
      <rect x="14" y="12" width="20" height="4" fill="rgba(255, 255, 255, 0.25)" rx="1" />
      {/* Report Lines - More visible */}
      <rect x="16" y="16" width="14" height="2" fill="#FFFFFF" opacity="0.9" rx="0.5" />
      <rect x="16" y="19" width="16" height="2" fill="#FFFFFF" opacity="0.7" rx="0.5" />
      <rect x="16" y="22" width="14" height="2" fill="#FFFFFF" opacity="0.7" rx="0.5" />
      <rect x="16" y="25" width="12" height="2" fill="#FFFFFF" opacity="0.7" rx="0.5" />
      {/* Chart/Graph Section - More colorful */}
      <rect x="16" y="28" width="16" height="6" fill="#FFFFFF" opacity="0.4" rx="0.5" />
      <rect x="18" y="30" width="2.5" height="4" fill="#10B981" rx="0.5" />
      <rect x="21.5" y="31" width="2.5" height="3" fill="#FBBF24" rx="0.5" />
      <rect x="25" y="29" width="2.5" height="5" fill="#3B82F6" rx="0.5" />
      <rect x="28.5" y="30" width="2.5" height="4" fill="#10B981" rx="0.5" />
      {/* Play button for video */}
      <circle cx="28" cy="20" r="3.5" fill="#10B981" opacity="0.9" />
      <path d="M 26 19 L 26 21 L 29 20 Z" fill="#FFFFFF" />
    </g>
  </svg>
)

export const CreditInsightsIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="insightsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
        <stop offset="100%" stopColor="#7C3AED" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="insightsSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6D28D9" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#5B21B6" stopOpacity="0.6" />
      </linearGradient>
      <filter id="insightsShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* 3D Lightbulb/Analytics - Enhanced with CompareIcon3D style */}
    <g filter="url(#insightsShadow)">
      {/* Bulb Glow Effect */}
      <ellipse cx="24" cy="28" rx="14" ry="8" fill="#7C3AED" opacity="0.2" />
      {/* Bulb Shadow */}
      <ellipse cx="26" cy="32" rx="10" ry="3" fill="#7C3AED" opacity="0.3" />
      {/* Bulb Glass - Side - Enhanced 3D */}
      <path d="M 30 16 Q 30 12 28 12 Q 30 14 30 18 L 30 28 Q 30 30 32 28 L 32 18 Q 30 16 30 16" fill="url(#insightsSide)" />
      {/* Bulb Glass - Front */}
      <path d="M 20 16 Q 20 12 24 12 Q 28 12 28 16 Q 28 18 30 20 L 30 28 Q 30 30 28 30 L 20 30 Q 18 30 18 28 L 18 20 Q 20 18 20 16 Z" fill="url(#insightsGrad)" />
      {/* Bulb Highlight - More visible */}
      <ellipse cx="22" cy="20" rx="3" ry="4" fill="rgba(255, 255, 255, 0.5)" />
      {/* Analytics Lines - More colorful */}
      <path d="M 18 24 L 20 22 L 22 24 L 24 20 L 26 24 L 28 22 L 30 26" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Analytics dots */}
      <circle cx="18" cy="24" r="1.5" fill="#FFFFFF" opacity="0.9" />
      <circle cx="20" cy="22" r="1.5" fill="#60A5FA" />
      <circle cx="22" cy="24" r="1.5" fill="#FFFFFF" opacity="0.9" />
      <circle cx="24" cy="20" r="1.5" fill="#FBBF24" />
      <circle cx="26" cy="24" r="1.5" fill="#FFFFFF" opacity="0.9" />
      <circle cx="28" cy="22" r="1.5" fill="#60A5FA" />
      <circle cx="30" cy="26" r="1.5" fill="#34D399" />
      {/* Bulb Base - Enhanced 3D */}
      <rect x="20" y="30" width="8" height="4" rx="1" fill="#374151" />
      <rect x="20.5" y="30.5" width="7" height="3" fill="#1F2937" rx="0.5" />
      <rect x="21" y="34" width="6" height="2" rx="0.5" fill="#111827" />
      {/* Filament */}
      <path d="M 22 22 Q 24 20 26 22" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8" />
      <circle cx="24" cy="22" r="1.2" fill="#FBBF24" />
    </g>
  </svg>
)

export const CreditImprovementIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="improveGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="100%" stopColor="#34D399" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="improveSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#059669" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#047857" stopOpacity="0.6" />
      </linearGradient>
      <filter id="improveShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* 3D Trending Up Arrow/Chart - Enhanced with CompareIcon3D style */}
    <g filter="url(#improveShadow)">
      {/* Arrow Shadow */}
      <ellipse cx="26" cy="36" rx="8" ry="3" fill="#059669" opacity="0.3" />
      {/* Arrow Side - Enhanced 3D */}
      <path d="M 32 16 L 34 18 L 28 32 L 26 30 Z" fill="url(#improveSide)" />
      {/* Arrow Front */}
      <path d="M 16 32 L 28 32 L 32 24 L 32 16 L 28 12 L 20 12 L 18 20 Z" fill="url(#improveGrad)" />
      {/* Chart Bars - More colorful */}
      <rect x="18" y="28" width="3.5" height="4" fill="#EF4444" opacity="0.8" rx="0.5" />
      <rect x="18.5" y="28" width="2.5" height="4" fill="#F59E0B" opacity="0.7" rx="0.3" />
      <rect x="22" y="24" width="3.5" height="8" fill="#FBBF24" opacity="0.9" rx="0.5" />
      <rect x="22.5" y="24" width="2.5" height="8" fill="#10B981" opacity="0.7" rx="0.3" />
      <rect x="26" y="20" width="3.5" height="12" fill="#10B981" opacity="1" rx="0.5" />
      <rect x="26.5" y="20" width="2.5" height="12" fill="#34D399" opacity="0.8" rx="0.3" />
      {/* Arrow Head - More visible */}
      <path d="M 28 12 L 32 16 L 30 16 L 30 20 L 26 20 L 26 16 Z" fill="#FFFFFF" opacity="0.95" />
      <path d="M 29 13 L 31 15 L 29 15 L 29 18 L 27 18 L 27 15 Z" fill="#34D399" opacity="0.8" />
      {/* Highlight - More visible */}
      <path d="M 20 14 L 28 14 L 30 16" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.5" fill="none" />
      {/* Checkmark badge */}
      <circle cx="29" cy="14" r="2.5" fill="#10B981" />
      <path d="M 28 14 L 29 15 L 30 13" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  </svg>
)

export const CreditMonitoringIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="monitorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366F1" stopOpacity="1" />
        <stop offset="100%" stopColor="#4F46E5" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="monitorSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4338CA" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#3730A3" stopOpacity="0.6" />
      </linearGradient>
      <filter id="monitorShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* 3D Monitor/Screen - Enhanced with CompareIcon3D style */}
    <g filter="url(#monitorShadow)">
      {/* Monitor Shadow */}
      <ellipse cx="26" cy="38" rx="10" ry="3" fill="#4338CA" opacity="0.3" />
      {/* Monitor Stand */}
      <ellipse cx="26" cy="38" rx="6" ry="2" fill="#4338CA" opacity="0.5" />
      {/* Monitor Side - Enhanced 3D */}
      <path d="M 32 14 L 34 16 L 34 28 L 32 26 Z" fill="url(#monitorSide)" />
      {/* Monitor Top - Enhanced 3D */}
      <path d="M 14 14 L 32 14 L 34 16 L 16 16 Z" fill="#4338CA" opacity="0.7" />
      {/* Monitor Screen Front */}
      <rect x="14" y="14" width="18" height="14" rx="1" fill="url(#monitorGrad)" />
      {/* Screen Highlight */}
      <rect x="14" y="14" width="18" height="4" fill="rgba(255, 255, 255, 0.2)" rx="1" />
      {/* Screen Content */}
      <rect x="16" y="16" width="14" height="10" rx="0.5" fill="#1E293B" />
      {/* Graph Lines - More colorful */}
      <path d="M 18 24 L 20 22 L 22 24 L 24 20 L 26 24 L 28 22 L 30 24" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Graph dots */}
      <circle cx="18" cy="24" r="1.5" fill="#10B981" />
      <circle cx="22" cy="24" r="1.5" fill="#10B981" />
      <circle cx="24" cy="20" r="1.5" fill="#FBBF24" />
      <circle cx="26" cy="24" r="1.5" fill="#10B981" />
      <circle cx="28" cy="22" r="1.5" fill="#60A5FA" />
      <circle cx="30" cy="24" r="1.5" fill="#10B981" />
      {/* Monitor Base - Enhanced */}
      <rect x="20" y="28" width="8" height="2" rx="0.5" fill="#3730A3" />
      <rect x="21" y="28.2" width="6" height="1.6" rx="0.3" fill="#4338CA" />
    </g>
  </svg>
)

// Video Credit Report Icon - Enhanced 3D
export const VideoCreditReportIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="videoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" stopOpacity="1" />
        <stop offset="100%" stopColor="#DC2626" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="videoSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#B91C1C" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#991B1B" stopOpacity="0.6" />
      </linearGradient>
      <filter id="videoShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* 3D Video Camera/Document - Enhanced with CompareIcon3D style */}
    <g filter="url(#videoShadow)">
      {/* Document Shadow Side */}
      <path d="M 34 12 L 36 14 L 36 36 L 34 34 Z" fill="url(#videoSide)" />
      {/* Document Top Edge */}
      <path d="M 14 12 L 34 12 L 36 14 L 16 14 Z" fill="#B91C1C" opacity="0.6" />
      {/* Document Front */}
      <rect x="14" y="12" width="20" height="24" rx="1" fill="url(#videoGrad)" />
      {/* Document Highlight */}
      <rect x="14" y="12" width="20" height="4" fill="rgba(255, 255, 255, 0.25)" rx="1" />
      {/* Video Play Button - Large and colorful */}
      <circle cx="24" cy="22" r="6" fill="#FFFFFF" opacity="0.95" />
      <circle cx="24" cy="22" r="5" fill="url(#videoGrad)" opacity="0.9" />
      <path d="M 21 20 L 21 24 L 26 22 Z" fill="#FFFFFF" />
      {/* Document Lines */}
      <rect x="16" y="16" width="8" height="1.5" fill="#FFFFFF" opacity="0.7" rx="0.3" />
      <rect x="16" y="28" width="16" height="1.5" fill="#FFFFFF" opacity="0.6" rx="0.3" />
      <rect x="16" y="31" width="14" height="1.5" fill="#FFFFFF" opacity="0.6" rx="0.3" />
      {/* Video icon badge */}
      <circle cx="30" cy="16" r="2.5" fill="#FBBF24" opacity="0.95" />
      <circle cx="30" cy="16" r="2" fill="#DC2626" />
      <path d="M 29 15 L 29 17 L 31 16 Z" fill="#FFFFFF" />
    </g>
  </svg>
)

// National Pension Scheme (NPS) Icon - Enhanced 3D
export const NPSIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="npsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" stopOpacity="1" />
        <stop offset="100%" stopColor="#059669" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="npsSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#047857" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#065F46" stopOpacity="0.6" />
      </linearGradient>
      <filter id="npsShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* 3D Pension/Savings - Enhanced with CompareIcon3D style */}
    <g filter="url(#npsShadow)">
      {/* Shadow */}
      <ellipse cx="26" cy="36" rx="10" ry="3" fill="#047857" opacity="0.3" />
      {/* Piggy Bank Side */}
      <path d="M 34 16 L 36 18 L 36 32 L 34 30 Z" fill="url(#npsSide)" />
      {/* Piggy Bank Front */}
      <path d="M 14 16 Q 14 12 20 12 L 28 12 Q 34 12 34 16 L 34 30 Q 34 32 30 32 L 18 32 Q 16 32 16 30 L 16 18 Q 18 16 18 16" fill="url(#npsGrad)" />
      {/* Piggy Bank Top */}
      <ellipse cx="24" cy="16" rx="7" ry="4" fill="#047857" opacity="0.7" />
      {/* Coin Slot */}
      <rect x="21" y="14" width="6" height="1.5" rx="0.5" fill="#065F46" opacity="0.8" />
      {/* Coins Inside - Visible */}
      <circle cx="22" cy="24" r="2.5" fill="#FBBF24" opacity="0.9" />
      <circle cx="26" cy="22" r="2.5" fill="#FBBF24" opacity="0.9" />
      <circle cx="24" cy="26" r="2" fill="#FBBF24" opacity="0.8" />
      {/* Rupee Symbols */}
      <text x="22" y="25.5" textAnchor="middle" fontSize="3" fill="#92400E" fontWeight="bold">₹</text>
      <text x="26" y="23.5" textAnchor="middle" fontSize="3" fill="#92400E" fontWeight="bold">₹</text>
      {/* Highlight */}
      <ellipse cx="20" cy="20" rx="3" ry="4" fill="rgba(255, 255, 255, 0.3)" />
    </g>
  </svg>
)

// Two Wheeler Insurance Icon - Enhanced 3D
export const TwoWheelerInsuranceIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bikeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
        <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="bikeSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.6" />
      </linearGradient>
      <filter id="bikeShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* 3D Motorcycle - Enhanced with CompareIcon3D style */}
    <g filter="url(#bikeShadow)">
      {/* Bike Shadow */}
      <ellipse cx="26" cy="36" rx="10" ry="3" fill="#2563EB" opacity="0.3" />
      {/* Bike Body - Side */}
      <path d="M 34 24 L 36 26 L 36 30 L 34 28 Z" fill="url(#bikeSide)" />
      {/* Bike Body - Front */}
      <path d="M 12 28 Q 12 26 14 26 L 30 26 Q 34 26 34 28 L 34 30 Q 34 32 32 32 L 16 32 Q 14 32 14 30 L 14 28 Z" fill="url(#bikeGrad)" />
      {/* Front Wheel */}
      <circle cx="18" cy="32" r="4" fill="#1F2937" />
      <circle cx="18" cy="32" r="3" fill="#374151" />
      <circle cx="18" cy="32" r="2" fill="#4B5563" />
      {/* Rear Wheel */}
      <circle cx="28" cy="32" r="4" fill="#1F2937" />
      <circle cx="28" cy="32" r="3" fill="#374151" />
      <circle cx="28" cy="32" r="2" fill="#4B5563" />
      {/* Handlebar */}
      <rect x="30" y="24" width="1" height="6" fill="#1E40AF" rx="0.5" />
      {/* Shield Badge */}
      <path d="M 20 26 Q 20 24 24 24 Q 28 24 28 26 Q 28 28 26 29 Q 24 30 24 30 Q 22 30 20 29 Q 20 28 20 26 Z" fill="#10B981" />
      <path d="M 22 26 L 24 28 L 26 26" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Bike Highlight */}
      <rect x="14" y="26" width="20" height="2" fill="rgba(255, 255, 255, 0.2)" />
    </g>
  </svg>
)

// Retirement Plans Icon - Enhanced 3D
export const RetirementPlansIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="retireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" stopOpacity="1" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="1" />
      </linearGradient>
      <linearGradient id="retireSide" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#D97706" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#B45309" stopOpacity="0.6" />
      </linearGradient>
      <filter id="retireShadow">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="1" dy="2" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* 3D Retirement/Clock - Enhanced with CompareIcon3D style */}
    <g filter="url(#retireShadow)">
      {/* Clock Shadow */}
      <ellipse cx="26" cy="36" rx="10" ry="3" fill="#F59E0B" opacity="0.3" />
      {/* Clock Side */}
      <path d="M 34 14 L 36 16 L 36 32 L 34 30 Z" fill="url(#retireSide)" />
      {/* Clock Front */}
      <circle cx="24" cy="24" r="12" fill="url(#retireGrad)" />
      {/* Clock Inner Ring */}
      <circle cx="24" cy="24" r="10" fill="#FCD34D" opacity="0.9" />
      {/* Clock Numbers (12, 3, 6, 9) */}
      <circle cx="24" cy="14" r="1.5" fill="#92400E" />
      <circle cx="34" cy="24" r="1.5" fill="#92400E" />
      <circle cx="24" cy="34" r="1.5" fill="#92400E" />
      <circle cx="14" cy="24" r="1.5" fill="#92400E" />
      {/* Clock Hands */}
      <line x1="24" y1="24" x2="24" y2="16" stroke="#92400E" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="24" x2="28" y2="24" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
      {/* Center Circle */}
      <circle cx="24" cy="24" r="2" fill="#92400E" />
      <circle cx="24" cy="24" r="1" fill="#FCD34D" />
      {/* Coins around clock */}
      <circle cx="32" cy="16" r="2" fill="#FBBF24" opacity="0.9" />
      <text x="32" y="17.5" textAnchor="middle" fontSize="2.5" fill="#92400E" fontWeight="bold">₹</text>
      <circle cx="16" cy="18" r="1.5" fill="#FBBF24" opacity="0.8" />
      {/* Clock Highlight */}
      <ellipse cx="20" cy="20" rx="4" ry="5" fill="rgba(255, 255, 255, 0.35)" />
    </g>
  </svg>
)
