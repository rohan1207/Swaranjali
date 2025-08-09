import React from "react";
import { motion } from "framer-motion";
import {
  FaUtensils,
  
  FaTshirt,
  FaParking,
  FaBroom,
  
  FaSnowflake,
  FaUserShield,
  
  FaUserTie,
  FaSuitcaseRolling,
} from "react-icons/fa";
import { BsPeople } from "react-icons/bs";

const features = [
  {
    icon: FaUtensils,
    title: "Restaurant",
    description: "Savor delicious meals with premium service",
  },
 
  {
    icon: FaTshirt, // from react-icons/fa or BiCategory for laundry symbol
    title: "Laundry Service",
    description: "Fresh clothing with same-day laundry support",
  },
  {
    icon: FaParking, // from react-icons/fa
    title: "Parking",
    description: "Spacious and secure parking facility",
  },
  {
    icon: FaBroom, // for housekeeping or cleaning
    title: "Housekeeping",
    description: "Daily cleaning to keep your space fresh",
  },
 
  {
    icon: FaSnowflake, // for air conditioning
    title: "Air Conditioning",
    description: "Stay cool with climate-controlled rooms",
  },
  {
    icon: FaUserShield, // or FaUserCheck
    title: "Caretaker",
    description: "On-site support to assist you 24/7",
  },

  {
    icon: FaUserTie,
    title: "Concierge",
    description: "Tailored assistance for all your needs",
  },
  {
    icon: FaSuitcaseRolling,
    title: "Luggage Storage",
    description: "Safe and secure storage for your belongings",
  },
];

const FeatureBanner = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover="hover"
              initial="initial"
            >
              <div className="flex flex-col items-center text-center">
                {/* Circle Background */}
                <div className="relative w-32 h-32 mb-6">
                  {/* Static circle */}
                  <div className="absolute inset-0 rounded-full bg-[#FDF8F6]" />

                  {/* Animated circle stroke */}
                  <svg
                    className="absolute inset-0 w-full h-full -rotate-90 transform"
                    viewBox="0 0 100 100"
                  >
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="48"
                      stroke="#6D2C2C"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="301.59"
                      initial={{ strokeDashoffset: 301.59 }}
                      variants={{
                        hover: { strokeDashoffset: 0 },
                        initial: { strokeDashoffset: 301.59 },
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </svg>

                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      variants={{
                        hover: { scale: 1.1 },
                        initial: { scale: 1 },
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <feature.icon
                        className="w-12 h-12 text-[#6D2C2C]"
                        aria-hidden="true"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Text Content */}
                <motion.h3
                  className="text-xl font-semibold text-gray-900 mb-2"
                  variants={{
                    hover: { color: "#6D2C2C" },
                    initial: { color: "#1F2937" },
                  }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;
