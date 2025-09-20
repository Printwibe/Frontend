import { FaEnvelope } from "react-icons/fa";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center space-x-3 ">
          <h1 className="text-xl md:text-xl text-white">Printwibe</h1>
        </div>
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight">
          COMING
          <br />
          <span className="text-gray-400"> SOON</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Your custom printing destination is launching soon.
          <br />
          Get ready for premium quality apparel and designs.
        </p>

        <a
          href="mailto:contact@print.com"
          className="inline-flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
        >
          <FaEnvelope className="text-xl group-hover:animate-bounce text-black" />
          <span>contact@printwibe.com</span>
        </a>

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-800 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gray-700 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-gray-600 rounded-full opacity-30 animate-pulse delay-500"></div>
        </div>
      </div>
    </div>
  );
}
