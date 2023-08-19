import { useState } from 'react';
import { Carousel } from "react-bootstrap";
import firstImage from '../../assets/carousel-image1.png';
import secondImage from '../../assets/carousel-image2.png'
import thirdImage from '../../assets/carousel-image3.png'

const CarouselMain = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={firstImage} alt="Destacado"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={secondImage} alt="Destacado"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={thirdImage} alt="Destacado"/>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselMain;