import { motion, AnimatePresence } from "framer-motion";

// Image imports
import strawberryBig from "../assets/strawberryBig.png";
import blueberryBig from "../assets/blueberryBig.png";
import chocolateBig from "../assets/chocolateBig.png";
import evergreenBig from "../assets/evergreenBig.png";

import strawberrySmall from "../assets/strawberrySmall.png";
import blueberrySmall from "../assets/blueberrySmall.png";
import chocolateSmall from "../assets/chocolateSmall.png";
import evergreenSmall from "../assets/evergreenSmall.png";

export default function Hero({ selectedFlavor, setSelectedFlavor }) {
  const flavors = [
    {
      id: "strawberry",
      name: "Strawberry",
      title: "icecream",
      image: strawberryBig,
      thumbnail: strawberrySmall,
      bg: "bg-gradient-to-r from-pink-700 to-pink-400",
    },
    {
      id: "blueberry",
      name: "Blueberry",
      title: "icecream",
      image: blueberryBig,
      thumbnail: blueberrySmall,
      bg: "bg-gradient-to-r from-blue-600 to-sky-400",
    },
    {
      id: "chocolate",
      name: "Chocolate",
      title: "icecream",
      image: chocolateBig,
      thumbnail: chocolateSmall,
      bg: "bg-gradient-to-r from-orange-800 to-rose-200",
    },
    {
      id: "evergreen",
      name: "Evergreen",
      title: "icecream",
      image: evergreenBig,
      thumbnail: evergreenSmall,
      bg: "bg-gradient-to-r from-green-600 to-green-400",
    },
  ];

  const currentFlavor = flavors.find((f) => f.id === selectedFlavor);

  return (
    <div
      className={`w-full relative overflow-hidden ${currentFlavor?.bg} transition-all duration-700`}
    >
      {/* Container */}
      <div className="max-w-[1200px] w-full mx-auto min-h-[calc(100vh-100px)] px-4 sm:px-6 lg:px-8 relative flex flex-col justify-center">

        {/* ICECREAM title */}
        <h1 className="text-[10vw] md:text-[8vw] lg:text-[6vw] font-pacifico text-white/90 leading-none">
          {currentFlavor?.title}
        </h1>

        {/* Flavor name */}
        <h2 className="mt-2 text-[5vw] md:text-[4vw] lg:text-[3vw] font-poppins font-extrabold text-white">
          {currentFlavor?.name} cone
        </h2>



        {/* Description with first paragraph in 3 lines */}
        <div className="mt-6 space-y-4 max-w-[600px]">
          <p className="text-[2vw] md:text-lg leading-relaxed text-white/90">
            Embark on a culinary journey of delight as you immerse yourself in
            our artisan-crafted ice cream collection—each flavor a story, each
            scoop an unforgettable chapter in your sweet odyssey!
          </p>

          <p className="text-[2vw] md:text-lg leading-relaxed text-white/90">
            Indulge in a world of imagination, where every scoop unveils a new
            taste adventure! Choose your favorite.
          </p>
        </div>

                {/* Thumbnails on top */}
                <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
          {flavors.map((flavor) => (
            <motion.div
              key={flavor.id}
              className="w-[70px] h-[80px] sm:w-[90px] sm:h-[100px] rounded-lg cursor-pointer flex items-center justify-center transition"
              onClick={() => setSelectedFlavor(flavor.id)}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <img
                src={flavor.thumbnail}
                alt={`${flavor.name} ice cream`}
                className="w-full h-full object-cover rounded-md"
              />
            </motion.div>
          ))}
        </div>

        {/* Big Ice Cream Image */}
        <motion.div className="absolute top-0 right-0 w-[50%] max-w-[350px] sm:w-[40%] md:w-[35%] lg:w-[30%] mt-8">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentFlavor?.id}
              src={currentFlavor?.image}
              alt={`${currentFlavor?.name} ice cream`}
              className="w-full h-auto object-contain drop-shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
