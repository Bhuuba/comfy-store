import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      setWidth(carousel.scrollWidth - carousel.offsetWidth);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      {/* Text content */}
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Ми змінюємо спосіб, у який люди роблять покупки.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Ми робимо покупки простими та приємними, пропонуючи лише якісні товари
          від перевірених виробників.
        </p>
        <div className="mt-10">
          <Link to="products" className="btn btn-primary">
            Наші товари
          </Link>
        </div>
      </div>

      {/* Image carousel */}
      <div className="hidden lg:block select-none">
        <motion.div
          ref={carouselRef}
          className="overflow-hidden cursor-grab bg-neutral p-4 rounded-box"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex space-x-4"
          >
            {carouselImages.map((image, index) => (
              <motion.div
                key={index}
                className="min-w-[320px] h-[28rem] rounded-box overflow-hidden"
                whileTap={{ cursor: "grabbing" }}
              >
                <img
                  src={image}
                  alt={`carousel-${index}`}
                  className="w-full h-full object-cover rounded-box pointer-events-none"
                  draggable={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <p className="text-sm text-muted-foreground mt-2 text-center">
          Перетягни, щоб переглянути →
        </p>
      </div>
    </div>
  );
};

export default Hero;
