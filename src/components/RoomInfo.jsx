import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rooms = [
  {
    id: "01",
    name: "Single Room",
    title: "Phenomenal comfort",
    description:
      "Do relax and get the homely feeling in our single room. It is very spacious and fitted with a semi double bed. Apart from this, you will get breakfast included, Lawn View, full AC, free wifi, free newspaper.",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: "02",
    name: "Double Room",
    title: "Spacious elegance",
    description:
      "Do relax and get the homely feeling in our Double room. It is very spacious and fitted with a semi double bed. Apart from this, you will get breakfast included, Lawn View, full AC, free wifi, free newspaper.",
    price: 4000,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80https://images.unsplash.com/photo-1578898886225-ee0cb6e9c18d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: "03",
    name: "Royal Suit",
    title: "Ultimate luxury",
    description:
      "Royal Stay experience with the quality premium service and comfort, speically design for the premium guest considering all the required facilites and comfortable features with king size king koil bed.",
    price: 8000,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: "04",
    name: "Delux Suit",
    title: "Premium comfort",
    description:
      "You will admire the beauty and beautiful view by the deluxe suites. You will not wish to leave the room because you will be enjoying many of the benefits like breakfast included, full ac, smart facilities, premium comfort.",
    price: 6500,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
  {
    id: "05",
    name: "Grand deluxe room",
    title: "Exceptional stay",
    description:
      "Experience the ultimate in luxury and comfort with our grand deluxe room featuring premium amenities and exceptional service for an unforgettable stay.",
    price: 7000,
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  },
];

const amenityLabels = [
  "Single Room",
  "Double Room",
  "Royal Suite",
  "Deluxe Suite",
  "Grand Deluxe Room",
];

const RoomInfo = () => {
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

  return (
    <div>
      <div className="text-center py-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#6D2C2C] tracking-tight mb-3 drop-shadow-sm">
          Our Royal Rooms At Swaranjali
        </h2>
        <h3 className="text-lg md:text-xl font-light text-stone-700 max-w-2xl mx-auto leading-relaxed">
          Every room at{" "}
          <span className="font-semibold text-[#6D2C2C]">Swaranjali Hotel</span>{" "}
          tells a story of comfort and class.
        </h3>
      </div>
      <div className="min-h-[80vh] bg-gradient-to-br from-amber-50 to-stone-100 flex">
        {/* Left Panel - Room List */}
        <div className="w-96 bg-gradient-to-b from-stone-200 to-stone-100 p-8 flex flex-col justify-center">
          <div className="space-y-6">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                className={`flex items-center justify-between p-4 rounded-md cursor-pointer transition-all duration-300 ${
                  selectedRoom.id === room.id
                    ? "bg-gradient-to-r from-[#6D2C2C] to-[#6D2C2C] text-white shadow-lg"
                    : "hover:bg-white/50 text-stone-700"
                }`}
                onClick={() => setSelectedRoom(room)}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-sm font-medium ${
                      selectedRoom.id === room.id
                        ? "text-white/80"
                        : "text-stone-500"
                    }`}
                  >
                    {room.id}
                  </span>
                  <span className="font-medium text-lg">
                    {amenityLabels[index]}
                  </span>
                </div>
                <motion.span
                  className={`text-xl transform transition-all duration-300 ${
                    selectedRoom.id === room.id
                      ? "translate-x-0 opacity-100 text-white"
                      : "-translate-x-2 opacity-60 text-stone-600"
                  }`}
                >
                  →
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 relative">
          {/* Room Image */}
          <motion.div className="absolute inset-0" key={selectedRoom.id}>
            <motion.img
              src={selectedRoom.image}
              alt={selectedRoom.name}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          </motion.div>

          {/* Right Info Panel */}
          <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-white via-white/95 to-white/80 p-8 flex flex-col justify-center">
            <motion.div
              key={selectedRoom.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Bottom Info Panel */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-white/95 p-8">
                <div className="flex justify-between items-end">
                  {/* Price and Book Button */}
                  <div className="flex items-center gap-8">
                    <div className="bg-stone-100 px-6 py-4 rounded-md">
                      <p className="text-stone-600 text-sm mb-1">
                        Starting from
                      </p>
                      <p className="text-3xl font-bold text-stone-900">
                        ₹{selectedRoom.price.toLocaleString()}
                      </p>
                    </div>

                    <motion.button
                      className="bg-stone-900 text-white px-8 py-4 rounded-md flex items-center gap-3 group shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="font-medium">BOOK NOW</span>
                      <motion.span className="transform transition-transform group-hover:translate-x-1">
                        →
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-amber-600 text-sm font-medium tracking-wider uppercase mb-2">
                  {selectedRoom.title}
                </p>
                <h1 className="text-4xl font-bold text-stone-900 mb-4 leading-tight">
                  {selectedRoom.name}
                </h1>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {selectedRoom.description}
                </p>
              </div>

              {/* Amenities
              <div className="grid grid-cols-3 gap-4 ">
                <div className="text-center">
                  <div className="w-10 h-10 bg-amber-100 rounded-md flex items-center justify-center mx-auto mb-2">
                    <span className="text-amber-600 text-lg">🍳</span>
                  </div>
                  <p className="text-xs font-medium text-stone-700">
                    BREAKFAST
                  </p>
                  <p className="text-xs text-stone-500">INCLUDED</p>
                </div>

                <div className="text-center">
                  <div className="w-10 h-10 bg-amber-100 rounded-md flex items-center justify-center mx-auto mb-2">
                    <span className="text-amber-600 text-lg">🧺</span>
                  </div>
                  <p className="text-xs font-medium text-stone-700">LAUNDRY</p>
                  <p className="text-xs text-stone-500">FACILITIES</p>
                </div>

                <div className="text-center">
                  <div className="w-10 h-10 bg-amber-100 rounded-md flex items-center justify-center mx-auto mb-2">
                    <span className="text-amber-600 text-lg">🚗</span>
                  </div>
                  <p className="text-xs font-medium text-stone-700">PICKUP</p>
                  <p className="text-xs text-stone-500">AND DROP</p>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
