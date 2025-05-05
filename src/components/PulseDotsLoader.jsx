import React from 'react';

function PulseDotsLoader() {
  return (
    <div className="flex justify-center items-center h-screen space-x-2">
      <span className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></span>
      <span className="w-4 h-4 bg-yellow-500 rounded-full animate-ping [animation-delay:-0.2s]"></span>
      <span className="w-4 h-4 bg-green-500 rounded-full animate-ping [animation-delay:-0.4s]"></span>
    </div>
  );
}

export default PulseDotsLoader;
