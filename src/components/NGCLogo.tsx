import React from 'react';
import { motion } from 'motion/react';

interface NGCLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export const NGCLogo: React.FC<NGCLogoProps> = ({
  className = '',
  size = 48,
  showText = true,
  textColor = 'text-slate-800'
}) => {
  return (
    <motion.div 
      className={`flex items-center gap-3.5 group cursor-pointer ${className}`} 
      id="ngc-logo-container"
      style={{ perspective: 1000 }}
      whileHover="hover"
    >
      {/* Modern crisp scaling SVG Emblem replicating the red & blue diamond logo with modern gold flare */}
      <motion.div
        variants={{
          hover: {
            scale: 1.08,
            filter: 'drop-shadow(0 0 16px rgba(37, 99, 235, 0.5))'
          }
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="relative shrink-0"
        style={{ 
          transform: 'translate3d(0, 0, 0)', 
          backfaceVisibility: 'hidden',
          willChange: 'transform'
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg select-none"
          id="ngc-logo-svg"
          style={{ 
            imageRendering: 'auto',
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden'
          }}
        >
          <defs>
            {/* Metallic Blue Gradients */}
            <linearGradient id="blueMetallic" x1="10" y1="10" x2="190" y2="190" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="35%" stopColor="#1d4ed8" />
              <stop offset="70%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            
            <linearGradient id="bevelHighlight" x1="100" y1="10" x2="100" y2="190" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#000000" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.6" />
            </linearGradient>

            {/* Red 3D Text Gradients */}
            <linearGradient id="red3D" x1="100" y1="75" x2="100" y2="125" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF4141" />
              <stop offset="100%" stopColor="#B30000" />
            </linearGradient>

            {/* Premium Gold Gradient Sweep on Hover */}
            <linearGradient id="goldSweeper" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FACC15" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            {/* Drop Shadows and Filters */}
            <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.35" />
            </filter>
            
            <filter id="textShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="1" dy="3" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.65" />
            </filter>
          </defs>

          {/* 1. Main Blue Diamond Shape (Split into quadrants with a horizontal gap between North and South) */}
          {/* Top Half (North) of Diamond */}
          <path
            d="M 100,8 L 190,98 L 100,98 Z"
            fill="url(#blueMetallic)"
            shapeRendering="geometricPrecision"
          />
          <path
            d="M 100,8 L 10,98 L 100,98 Z"
            fill="url(#blueMetallic)"
            shapeRendering="geometricPrecision"
          />
          
          {/* Bottom Half (South) of Diamond */}
          <path
            d="M 100,192 L 190,102 L 10,102 Z"
            fill="url(#blueMetallic)"
            shapeRendering="geometricPrecision"
          />

          {/* Clean Outer Border for each part of the Diamond (Symmetrical triangular caps) */}
          <polygon
            points="100,8 190,98 10,98"
            fill="none"
            stroke="#1e40af"
            strokeWidth="2.5"
            shapeRendering="geometricPrecision"
          />
          <polygon
            points="100,192 190,102 10,102"
            fill="none"
            stroke="#1e40af"
            strokeWidth="2.5"
            shapeRendering="geometricPrecision"
          />

          {/* Bevel Overlay for Metallic Shine */}
          <path
            d="M 100,8 L 190,98 L 10,98 Z"
            fill="url(#bevelHighlight)"
            style={{ mixBlendMode: 'overlay' }}
            shapeRendering="geometricPrecision"
          />
          <path
            d="M 100,192 L 190,102 L 10,102 Z"
            fill="url(#bevelHighlight)"
            style={{ mixBlendMode: 'overlay' }}
            shapeRendering="geometricPrecision"
          />

          {/* Inner White/Silver Circle Backing */}
          <circle 
            cx="100" 
            cy="100" 
            r="54" 
            fill="#FFFFFF" 
            stroke="#1d4ed8" 
            strokeWidth="2.5" 
            filter="url(#shadow)" 
            shapeRendering="geometricPrecision"
          />

          {/* 2. Red "NGC" Letters with 3D Border & Stroke */}
          <g filter="url(#textShadow)" id="ngc-letters">
            {/* 3D Underlay Stroke */}
            <text
              x="100"
              y="118"
              fontFamily="'Impact', 'Arial Black', sans-serif"
              fontSize="55"
              fontWeight="900"
              textAnchor="middle"
              fill="#500000"
              stroke="#000"
              strokeWidth="8"
              strokeLinejoin="round"
              letterSpacing="-2"
              textRendering="geometricPrecision"
            >
              NGC
            </text>
            {/* White Outer Stroke Outline */}
            <text
              x="100"
              y="118"
              fontFamily="'Impact', 'Arial Black', sans-serif"
              fontSize="55"
              fontWeight="900"
              textAnchor="middle"
              fill="#FFFFFF"
              stroke="#FFFFFF"
              strokeWidth="5"
              strokeLinejoin="round"
              letterSpacing="-2"
              textRendering="geometricPrecision"
            >
              NGC
            </text>
            {/* Red Main Front Fill */}
            <text
              x="100"
              y="118"
              fontFamily="'Impact', 'Arial Black', sans-serif"
              fontSize="55"
              fontWeight="900"
              textAnchor="middle"
              fill="url(#red3D)"
              letterSpacing="-2"
              textRendering="geometricPrecision"
            >
              NGC
            </text>
          </g>
        </svg>

        {/* Dynamic sweeping shimmer effect across the diamond */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -left-[100%] group-hover:animate-shine pointer-events-none rounded-full" />
      </motion.div>

      {/* Brand Title text label with luxury layout transformations */}
      {showText && (
        <div className="flex flex-col select-none leading-tight" id="ngc-brand-text">
          <span 
            className={`text-2xl md:text-3xl font-extrabold tracking-tight transition-all duration-300 group-hover:text-[#FACC15] ${textColor}`}
          >
            NGC
          </span>
          <span 
            className="text-[9px] md:text-xs font-bold tracking-wider text-blue-500 uppercase transition-all duration-500 group-hover:tracking-[0.14em] group-hover:text-amber-400"
            style={{ transformOrigin: 'left' }}
          >
            Industrial Pump Trading & Services
          </span>
        </div>
      )}
    </motion.div>
  );
};
