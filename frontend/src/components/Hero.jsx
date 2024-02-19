import React from 'react';


const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen  overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <img
        src="/heroImage.jpg"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full blur-md"
      />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center mx-auto max-w-xl">
          {/* Catchy Line */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Health, Our Priority
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-8">
            Empowering you to live a healthier, happier life.
          </p>
        </div>

        {/* Photo */}
        <div className="hidden md:block w-1/2">
          <img
            src="/heroImage.jpg"
            alt="Photo"
            className="object-cover w-[80%] h-[70%] rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
