import CarouselSlide from '../Components/HomePageComponents/Carousel/CarouselSlide';
import NavBar from './../Components/Shared/NavBar/NavBar';
import Welcome from './../Components/HomePageComponents/Welcome/Welcome';
import TinyHearts from '../Components/HomePageComponents/TinyHearts/TinyHearts';
import OurServices from './../Components/HomePageComponents/OurServices/OurServices';
import Banner from './../Components/HomePageComponents/Banner/Banner.jsx';
import HelpUs from './../Components/HomePageComponents/HelpUs/HelpUs';
import WhoDonateUs from './../Components/HomePageComponents/WhoDonateUs/WhoDonateUs';
import DonateOurChild from './../Components/HomePageComponents/DonateOurChild/DonateOurChild';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-[1280px] mx-auto justify-between">

      <NavBar></NavBar>
        {/* <CarouselSlide /> */}
        <Banner />

        <div className="w-[1200px] mx-auto">
          <Welcome />
          <TinyHearts />
          <OurServices />
          <CarouselSlide />
          <HelpUs />
          <WhoDonateUs />
          <DonateOurChild />
        </div>




    </main>
  )
}
