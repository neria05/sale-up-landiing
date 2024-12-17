import React from 'react';

const TechBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-indigo-900/10 animate-gradient"></div>
      
      {/* Particle effect overlay */}
      <div className="absolute inset-0 bg-particle-pattern"></div>
    </div>
  );
};

export default TechBackground;