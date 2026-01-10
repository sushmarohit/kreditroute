// Company Logo Components - Based on actual company branding

export const RamFincorpLogo = () => (
  <div className="flex items-center gap-3 whitespace-nowrap">
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 via-teal-500 to-blue-500 flex items-center justify-center shadow-sm flex-shrink-0">
      <span className="text-white text-xl font-bold">₹</span>
    </div>
    <span className="text-gray-900 font-bold text-base">Ram Fincorp</span>
  </div>
)

export const FLotLogo = () => (
  <div className="flex items-center gap-3 whitespace-nowrap">
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 flex items-center justify-center shadow-sm relative overflow-hidden flex-shrink-0">
      {/* Hands holding banknote/rupee symbol */}
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Banknote/Rupee symbol in center */}
        <rect x="9" y="8" width="8" height="10" rx="1" fill="white" />
        <text x="13" y="16" textAnchor="middle" fontSize="6" fill="#7C3AED" fontWeight="bold" fontFamily="Arial, sans-serif">₹</text>
        {/* Left hand */}
        <path d="M5 10L6 14L4 16L3 12L5 10Z" fill="white" opacity="0.85" />
        {/* Right hand */}
        <path d="M21 10L20 14L22 16L23 12L21 10Z" fill="white" opacity="0.85" />
      </svg>
    </div>
    <div className="flex flex-col">
      <span className="text-purple-700 font-bold text-base leading-tight">FLot</span>
      <span className="text-gray-500 text-xs leading-tight">flexible loan on time</span>
    </div>
  </div>
)

export const ZypeLogo = () => (
  <div className="flex items-center gap-3 whitespace-nowrap">
    <div className="relative w-12 h-10 flex-shrink-0">
      {/* Blue-teal parallelogram (lower/background) */}
      <div className="absolute inset-0 transform skew-x-[-15deg] bg-gradient-to-br from-blue-400 via-teal-500 to-blue-500 rounded-sm"></div>
      {/* Orange-red parallelogram (upper/foreground) */}
      <div className="absolute inset-0 transform skew-x-[15deg] translate-x-0.5 -translate-y-0.5 bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-sm"></div>
    </div>
    <span className="text-gray-900 font-bold text-base">zype</span>
  </div>
)

export const FDPLFinanceLogo = () => (
  <div className="flex items-center gap-3 whitespace-nowrap">
    <div className="w-12 h-12 flex items-end justify-center gap-1 pb-1 flex-shrink-0">
      <div className="w-2 h-3 bg-purple-400 rounded-t"></div>
      <div className="w-2 h-4 bg-purple-500 rounded-t"></div>
      <div className="w-2 h-5 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-t shadow-sm"></div>
      <div className="w-2 h-6 bg-purple-600 rounded-t"></div>
    </div>
    <div className="flex flex-col">
      <span className="text-purple-700 font-bold text-base leading-tight">FDPL</span>
      <span className="text-gray-500 text-xs leading-tight">Finance Pvt. Ltd.</span>
    </div>
  </div>
)

export const PayMeLogo = () => (
  <div className="flex items-center whitespace-nowrap">
    <span className="text-gray-900 font-bold text-lg">Pay</span>
    <span className="text-orange-500 font-bold text-lg" style={{ fontFamily: 'system-ui, sans-serif', fontStyle: 'normal' }}>Me</span>
  </div>
)
