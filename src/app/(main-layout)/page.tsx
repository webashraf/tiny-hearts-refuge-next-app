import CarouselSlide from '../Components/HomePageComponents/Carousel/CarouselSlide';
import NavBar from './../Components/Shared/NavBar/NavBar';
import Welcome from './../Components/HomePageComponents/Welcome/Welcome';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-[1280px] mx-auto justify-between">

      <NavBar></NavBar>
        <CarouselSlide></CarouselSlide>
       <div className="w-[1200px] mx-auto">
       <Welcome></Welcome>
       </div>







    </main>
  )
}
