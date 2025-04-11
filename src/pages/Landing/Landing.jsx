import { Hero, NewCourses, News, BestSellers, Services, SiteStats, CourseCategories } from '../../components/Landing';
import Footer from '../Layout/Footer';
import bgShape from '../../assets/landing/Path1.png';

function Landing() {
  return (
    <>
      <div className=" gap-8 flex flex-col text-black bg-[url({bgShape})] dark:bg-gray-900 dark:text-white duration-200 align-center ">
      <div className='relative w-300 h-200'>
      </div>
        <Hero/>
        <NewCourses />
        <News />
        <BestSellers />
        <Services />
        <SiteStats />
        <CourseCategories />
        <Footer />
      </div>
    </>
  );
}

export default Landing;
