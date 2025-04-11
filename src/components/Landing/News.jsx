import React, { useEffect, useState } from "react";
import { getApi } from "../../core/services/api/getApi";
import newsBack from "../../assets/landing/Path1.png";
import newsDef from "../../assets/News/NewsDef.png";
import SmartImage from "../Common/SmartImage";
import up from "../../assets/News/up.png";

function News() {
  const URL =
    "/News?PageNumber=1&RowsOfPage=4&SortingCol=InsertDate&SortType=DESC";

  const [newsData, setNewsData] = useState([""]);
  useEffect(() => {
    getNews();
  }, []);
  const getNews = async () => {
    const response = await getApi(URL, "news");
    setNewsData(response);
    // console.log(response);
  };

  return (
    <div className="border-2 relative flex flex-col container mx-auto py-10">
      <img
        src={newsBack}
        alt=""
        className="absolute z-0  w-[1511px] h-[1511px] opacity-98 top-0 -left-68 "
      />
      <h2 className="relative mb-14 text-5xl z-10 font-peyda font-black text-deep-blue">
        آخرین اخبار
      </h2>
      <section className=" justify-center flex overflow-hidden relative z-10">
     
        <div className=" w-264 h-119 relative items-center flex flex-col space-y-6">
          <div className="absolute   bg-white opacity-80 w-264 h-99 rounded-sm  shadow-[0px_5px_27.5px_rgba(0,0,0,0.16)] "></div>

          {newsData &&
            newsData.map((newsItem, index) => (
              <div className="mt-11 mr-16 z-10 ">
                <div
                  key={index}
                  className="bg-white w-264 h-99 rounded-sm  shadow-[0px_5px_27.5px_rgba(0,0,0,0.16)] py-8 px-11 flex flex-col md:flex-row-reverse gap-6 text-right"
                >
                  {/* Image */}
                  <div className="md:w-1/3 w-full flex justify-center">
                    <SmartImage
                      src={newsItem.currentImageAddressTumb}
                      fallback={newsDef}
                      alt="News"
                      className="w-[328px] h-[328px] object-cover rounded-md"
                    />
                  </div>

                  {/* Text content */}
                  <div className="md:w-2/3 w-full space-y-4 ">
                    <h3 className="mt-16 text-5xl font-kalameh font-bold text-gray-700">
                      {newsItem.title}
                    </h3>
                    <p className="text-gray-600 text-2xl font-vazir leading-relaxed">
                      {newsItem.miniDescribe}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex items-center  mb-6">
          <div className="flex flex-col items-center ml-8 space-x-2">
            <img src={up} className="w-4 hover:cursor-pointer" />
            <div className="font-vazir my-2 text-2xl font-bold text-gray-700 ">1 / 4</div>
            <img src={up} className="rotate-180 w-4 hover:cursor-pointer " />

          </div>
        </div>
      </section>
      <div className=" text-left w-full">
        <button className="text-gray-700 font-bold font-vazir text-2xl hover:cursor-pointer self-start">
          مشاهده همه اخبار
        </button>
      </div>
    </div>
  );
}

export default News;
