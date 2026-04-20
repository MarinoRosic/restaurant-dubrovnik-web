import { Carousel } from "@material-tailwind/react";
 
export function CarouselComponent(props) {
  const {img} = props;
  return (
    <Carousel
      className="rounded-xl md:w-[65%]"
      autoplay={true}
      loop={true}
      transition={{ type: "tween", duration: 0.5 }}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {img.map((slide, index) => (
        <div
          key={index}
        >
          <img className="h-full w-full object-cover" src={slide.src} alt={slide.description} loading="lazy" decoding="async" />
        </div>
      ))}
    </Carousel>
  );
}