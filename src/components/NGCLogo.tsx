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

        {/* 1. Main Blue Diamond Shape (Split horizontally) */}
        {/* Top Half of Diamond */}
        <path
          d="M 100,8 L 192,100 L 170,100 C 165,65 135,35 100,30 L 100,8 Z"
          fill="url(#blueMetallic)"
          stroke="#003366"
          strokeWidth="1.5"
        />
        <path
          d="M 100,8 L 8,100 L 30,100 C 35,65 65,35 100,30 L 100,8 Z"
          fill="url(#blueMetallic)"
          stroke="#003366"
          strokeWidth="1.5"
        />
        
        {/* Bottom Half of Diamond */}
        <path
          d="M 100,192 L 192,100 L 170,100 C 165,135 135,165 100,170 L 100,192 Z"
          fill="url(#blueMetallic)"
          stroke="#003366"
          strokeWidth="1.5"
        />
        <path
          d="M 100,192 L 8,100 L 30,100 C 35,135 65,165 100,170 L 100,192 Z"
          fill="url(#blueMetallic)"
          stroke="#003366"
          strokeWidth="1.5"
        />

        {/* Bevel Overlay for Metallic Shine */}
        <path
          d="M 100,8 L 192,100 L 8,100 Z"
          fill="url(#bevelHighlight)"
          style={{ mixBlendMode: 'overlay' }}
        />
        <path
          d="M 100,192 L 192,100 L 8,100 Z"
          fill="url(#bevelHighlight)"
          style={{ mixBlendMode: 'overlay' }}
        />

        {/* Outer Circle Rim of the Bezel */}
        <circle cx="100" cy="100" r="70" fill="none" stroke="#004C99" strokeWidth="5" />
        <circle cx="100" cy="100" r="67" fill="none" stroke="#25A0FF" strokeWidth="1.5" />

        {/* Inner White/Silver Circle Backing */}
        <circle cx="100" cy="100" r="60" fill="#FFFFFF" stroke="#002D66" strokeWidth="2" filter="url(#shadow)" />

        {/* 2. Red "NGC" Letters with 3D Border & Stroke */}
        <g filter="url(#textShadow)" id="ngc-letters">
          {/* 3D Underlay Stroke */}
          <text
            x="100"
            y="118"
            fontFamily="'Impact', 'Arial Black', sans-serif"
            fontSize="45"
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
            fontSize="45"
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
            fontSize="45"
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
        <div className="flex flex-col select-none leading-none" id="ngc-brand-text">
          <span className={`text-xl font-black tracking-tight ${textColor}`}>
            NGC
          </span>
          <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase">
            Industrial Pump Trading & Services
          </span>
        </div>
      )}
    </div>
  );
};
