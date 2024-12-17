import React from 'react';

const WaveAnimation = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="wave-parallax1">
            <use href="#wave" x="50" y="3" fill="rgba(59,130,246,0.1)" />
          </g>
          <g className="wave-parallax2">
            <use href="#wave" x="50" y="0" fill="rgba(147,51,234,0.1)" />
          </g>
          <g className="wave-parallax3">
            <use href="#wave" x="50" y="9" fill="rgba(59,130,246,0.05)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default WaveAnimation;