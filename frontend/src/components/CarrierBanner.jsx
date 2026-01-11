import React from 'react';

const CarrierBanner = () => {
  return (
    <div className="mx-auto my-10 w-full max-w-[1100px] overflow-hidden rounded-2xl bg-[#0a1428] font-sans text-white shadow-2xl">
      <div className="relative z-10 px-8 py-12 md:px-12 md:py-16">
        
        {/* Header Section */}
        <h2 className="mb-6 text-4xl font-bold leading-[1.15] md:text-5xl lg:text-[3.1rem] ">
          A professional opportunity that<br />
          <span className="font-extrabold text-[#00d4ff]">complements</span> your career.
        </h2>

        <p className="mb-12 text-xl opacity-90 md:text-[1.35rem]">
          You don't have to leave your current role.<br />
          Our platform is designed for working professionals.
        </p>

        {/* Features Grid */}
        <div className="mb-16 flex flex-wrap gap-10 md:gap-16">
          <div className="text-lg leading-relaxed md:text-[1.3rem]">
            <strong className="text-xl md:text-[1.55rem]">Convenient Timings:</strong><br />
            <span className="opacity-90">All classes are scheduled<br />after school hours</span>
          </div>

          <div className="text-lg leading-relaxed md:text-[1.3rem]">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <strong className="text-xl md:text-[1.55rem]">Flexible Commitment:</strong><br />
              <span className="opacity-90">A minimum teaching commitment of just</span>
              <div className="mt-2 text-6xl font-black leading-none text-[#00eaff] md:text-[3.8rem]">
                3
              </div>
              <span className="text-sm uppercase tracking-wider opacity-80">hours per week</span>
            </div>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="relative mt-8">
          <div className="flex h-20 items-center overflow-hidden rounded-xl bg-[#1a253f]">
            {/* School Hours Block */}
            <div className="flex h-full flex-1 items-center justify-center bg-gradient-to-r from-[#2a3b5e] to-[#1e2f52] px-4 text-center text-lg font-semibold md:text-xl">
              School Hours
            </div>
            
            {/* Jyamiti Block */}
            <div className="flex h-full w-48 items-center justify-center bg-gradient-to-br from-[#00d4ff] to-[#0095ff] px-4 text-center leading-tight text-[#0a1428] md:w-[260px]">
              <span className="text-lg font-extrabold md:text-[1.55rem]">
                Jyamiti<br />Classes
              </span>
            </div>
          </div>
          
          {/* Time Labels */}
          <div className="mt-3 flex justify-between px-1 text-sm font-medium opacity-60 md:text-lg">
            <span>Morning</span>
            <span>Evening</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrierBanner;