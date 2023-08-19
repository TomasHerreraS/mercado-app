import Topbar from '../components/topbar/topbar';
import CarouselMain from '../components/carousel/carousel';
import Offers from '../components/offers/offers';
import Categories from '../components/categories/categories';
import PopularCategories from '../components/popular-categories/popular-categories';

const MainPage = () => {
  return (
    <>
      <Topbar/>
      <CarouselMain/>
      <Offers/>
      <Categories/>
      <PopularCategories/>
    </>
  )
}

export default MainPage;