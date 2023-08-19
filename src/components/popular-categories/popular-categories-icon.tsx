import Carousel from "react-multi-carousel";
import { icon } from "../../utils/popular-categories-icon-card";
import '../../styles/popular-categories.css';

const PopularCategoriesIcon = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel
      className="margin-carousel-popular-categories"
      draggable={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      responsive={responsive}
      slidesToSlide={6}
      >
      {icon.map((obj: any, index: number) => {
        return (
          <div key={index} className="div-white-background div-width-height margin-card-icon color-icon">
            {obj.icon}
            <p className="text-center">{obj.text}</p>
          </div>
        )
      })}
    </Carousel>
  )
}

export default PopularCategoriesIcon;