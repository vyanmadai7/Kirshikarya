import React from 'react';

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Field / Ground */}
      <path 
        d="M10 80C30 75 70 75 90 80V90H10V80Z" 
        fill="#10B981" 
      />
      
      {/* Stylized K / Leaf */}
      <path 
        d="M40 20C40 20 20 40 20 60C20 80 40 90 40 90V20Z" 
        fill="#059669" 
      />
      <path 
        d="M40 50L70 20C70 20 85 30 85 50C85 70 70 85 70 85L40 60" 
        fill="#34D399" 
      />
      
      {/* Sun / Growth */}
      <circle cx="75" cy="25" r="8" fill="#F59E0B" />
    </svg>
  );
}
