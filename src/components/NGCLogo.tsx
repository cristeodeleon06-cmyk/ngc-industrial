import React from 'react';

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
    <div className={`flex items-center gap-3 ${className}`} id="ngc-logo-container">
      {/* SVG Emblem replicating the user's red & blue diamond logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md select-none transform hover:scale-105 transition-transform duration-300"
        id="ngc-logo-svg"
      >
        <defs>
          {/* Metallic Blue Gradients */}
          <linearGradient id="blueMetallic" x1="10" y1="10" x2="190" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#25A0FF" />
            <stop offset="35%" stopColor="#0072E5" />
            <stop offset="70%" stopColor="#004C99" />
            <stop offset="100%" stopColor="#002D66" />
          </linearGradient>
          
          <linearGradient id="bevelHighlight" x1="100" y1="10" x2="100" y2="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#000000" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
          </linearGradient>

          {/* Red 3D Text Gradients */}
          <linearGradient id="red3D" x1="100" y1="75" x2="100" y2="125" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF4141" />
            <stop offset="100%" stopColor="#B30000" />
          </linearGradient>

          {/* Drop Shadows and Filters */}
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#000000" floodOpacity="0.3" />
          </filter>
          
          <filter id="textShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="1" dy="3" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* 1. Main Blue Diamond Shape (Split into quadrants with a horizontal gap between North and South) */}
        {/* Top Half (North) of Diamond - Truncated at y = 98 for a 2px offset from center */}
        <path
          d="M 100,8 L 190,98 L 100,98 Z"
          fill="url(#blueMetallic)"
        />
        <path
          d="M 100,8 L 10,98 L 100,98 Z"
          fill="url(#blueMetallic)"
        />
        
        {/* Bottom Half (South) of Diamond - Truncated at y = 102 for a 2px offset from center */}
        <path
          d="M 100,192 L 190,102 L 100,102 Z"
          fill="url(#blueMetallic)"
        />
        <path
          d="M 100,192 L 10,102 L 100,102 Z"
          fill="url(#blueMetallic)"
        />

        {/* Clean Outer Border for each part of the Diamond (Symmetrical triangular caps) */}
        <polygon
          points="100,8 190,98 10,98"
          fill="none"
          stroke="#003366"
          strokeWidth="2"
        />
        <polygon
          points="100,192 190,102 10,102"
          fill="none"
          stroke="#003366"
          strokeWidth="2"
        />

        {/* Bevel Overlay for Metallic Shine (Aligned with truncated boundaries) */}
        <path
          d="M 100,8 L 190,98 L 10,98 Z"
          fill="url(#bevelHighlight)"
          style={{ mixBlendMode: 'overlay' }}
        />
        <path
          d="M 100,192 L 190,102 L 10,102 Z"
          fill="url(#bevelHighlight)"
          style={{ mixBlendMode: 'overlay' }}
        />

        {/* Inner White/Silver Circle Backing */}
        <circle cx="100" cy="100" r="54" fill="#FFFFFF" stroke="#002D66" strokeWidth="2" filter="url(#shadow)" />

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
          >
            NGC
          </text>
        </g>
      </svg>

      {/* Brand Title text label */}
      {showText && (
        <div className="flex flex-col select-none leading-tight" id="ngc-brand-text">
          <span className={`text-2xl md:text-3xl font-black tracking-tight ${textColor}`}>
            NGC
          </span>
          <span className="text-[10px] md:text-xs font-bold tracking-wider text-blue-500 uppercase">
            Industrial Pump Trading & Services
          </span>
        </div>
      )}
    </div>
  );
};
