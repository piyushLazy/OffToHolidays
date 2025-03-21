
import HomePage from '../components/homepage/HomePage';
// import  DetailsTourPackage from '../components/detailsTourPackagePage/DetailsTourPackage';
// import DetailsHotelPage from '../components/detailsHotelPage/DetailsHotelPage'
// import FilterComponent from '../components/packageFilterSlide/FilterComponent' ;
// import FilterComponent from '../components/hotelFilterSlide/FilterComponent';
import './page.css'

export default function Home() {
  return (
    <div className='homepage'>
    {/* <FilterComponent/> */}
    {/* <FilterComponent /> */}
      <HomePage/>
      {/* <DetailsTourPackage/> */}
      {/* <DetailsHotelPage/> */}
  </div>
  );
}


