import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiPlay, FiX } from "react-icons/fi";

// Array of images from public folder
const images = ["./swaranjali1.png"];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrent((prev) => (prev + 1) % images.length);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[current]})` }}
        />
      </AnimatePresence>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-4 mt-9">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-sm sm:text-lg md:text-xl font-light tracking-[0.1em] sm:tracking-[0.2em] mb-2 sm:mb-4"
        >
          Welcome To
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-7xl font-serif font-light tracking-wide sm:tracking-wider mb-4 sm:mb-6"
        >
          SWARANJALI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="max-w-xs sm:max-w-2xl text-sm sm:text-base md:text-lg text-gray-200 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
        >
          A luxury hotel & resort offering an unparalleled experience of
          comfort, elegance and personal service. With lavish amenities,
          sophisticated design and attention to detail, our luxury hotel caters
          to guests seeking a luxurious and exclusive stay.
        </motion.p>

        {/* Video Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="group flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowVideo(true)}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
            <FiPlay className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
          </div>
          <span className="text-xs sm:text-sm tracking-wider uppercase">
            Watch Our Story
          </span>
        </motion.button>

        {/* Check Availability Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-md p-4 sm:p-6 border border-white/20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-light tracking-wider">
                CHECK-IN
              </label>
              <input
                type="date"
                className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2.5 sm:px-4 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-sm transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-light tracking-wider">
                CHECK-OUT
              </label>
              <input
                type="date"
                className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2.5 sm:px-4 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-sm transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-light tracking-wider">
                GUESTS
              </label>
              <select className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2.5 sm:px-4 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-sm transition-all appearance-none cursor-pointer">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4+ Guests</option>
              </select>
            </div>
            <div className="space-y-2 sm:col-span-2 md:col-span-1">
              <label className="text-xs sm:text-sm font-light tracking-wider">
                PROMO CODE
              </label>
              <input
                type="text"
                placeholder="Optional"
                className="w-full bg-white/10 border border-white/20 rounded-md px-3 py-2.5 sm:px-4 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-orange-400 backdrop-blur-sm transition-all placeholder:text-white/50"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 sm:mt-6 w-full md:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-white text-gray-900 rounded-md font-medium text-sm sm:text-base tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:bg-orange-400 hover:text-white group min-h-[44px]"
          >
            BOOK NOW
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full transition-all duration-300 touch-manipulation ${
                idx === current
                  ? "bg-white w-4 sm:w-6"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Video Overlay */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setShowVideo(false);
              }
            }}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2 }}
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
            >
              <FiX className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Video Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
            >
              <video
                src="/swaranjalivideo.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error("Video failed to load:", e);
                }}
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
