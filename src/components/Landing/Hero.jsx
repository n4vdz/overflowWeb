import React from "react";
import HeroImg from "../../assets/landing/heroimg.png";
import bgShape from "../../assets/landing/Path1.png";
import search from "../../assets/landing/search.png";
function Hero() {
  return (
    <section className="px-30 py-16 dark:bg-gray-900">
      <img
        src={bgShape}
        alt="Background Shape"
        className="z-0 absolute w-[1099px] h-[1099px] opacity-98 top-0 -right-20 "
      />
      <div className="relative z-10 flex items-center justify-between w-full">
        {/* Image Section */}
        <img
          src={HeroImg}
          alt="آموزش"
          className=" max-w-[900px] w-full h-auto"
        />

        {/* right section */}
        <div className=" w-full flex-shrink-2 flex  flex-col justify-start items-end md:w-1/2  space-y-6">
          <h1 className=" text-[59px]  font-extrabold font-peyda  text-deep-blue dark:text-white">
            دنبال چی می‌گردی؟
          </h1>
          <p className="text-gray-500  dark:text-gray-300">
            دیگه وقتشه یه نقشه‌ای به خودت بدی...
          </p>

          {/* Search Input */}
          <div className="flex flex-row-reverse max-w-[590px] justify-between p-2 items-center gap-4 border-3 border-deep-blue rounded-3xl ">
            <input
              type="text"
              placeholder="...دوره فقط اسم ببر"
              className="w-full md:w-[300px] h-[50px] rounded-full border border-none px-4 text-right focus:outline-none"
            />
            <button className="w-[55px] h-[53px] flex-shrink-0 bg-deep-blue text-white rounded-2xl">
              <img src={search} className="w-[38px] h-[38px] mx-auto my-auto" />
            </button>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            آکادمی آموزشی سپهر مکانی برای پیشرفت تو با تمرین مهارت‌های موردنیاز
            برای طراحی وب و هرچه سریع‌تر با بهترین روش یاد بگیری
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
