import CarouselSlide from '../Components/HomePageComponents/Carousel/CarouselSlide';
import TinyHearts from '../Components/HomePageComponents/TinyHearts/TinyHearts';
import Banner from './../Components/HomePageComponents/Banner/Banner.jsx';
import DonateOurChild from './../Components/HomePageComponents/DonateOurChild/DonateOurChild';
import HelpUs from './../Components/HomePageComponents/HelpUs/HelpUs';
import OurServices from './../Components/HomePageComponents/OurServices/OurServices';
import Welcome from './../Components/HomePageComponents/Welcome/Welcome';
import WhoDonateUs from './../Components/HomePageComponents/WhoDonateUs/WhoDonateUs';
import OurEvents from './../Components/HomePageComponents/OurEvents/OurEvents';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-[1280px] mx-auto justify-between">
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
          <OurEvents />
        </div>




    </main>
  )
}
