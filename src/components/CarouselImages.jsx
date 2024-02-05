import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function CarouselImages({ images }) {
  return (
    <Carousel interval="2000" autoPlay infiniteLoop>
      {images.map(({id, src}) => (
        <div className="demoCarousel" key={id}>
          <img className="demoCarousel-img" src={src} alt="" />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselImages;
