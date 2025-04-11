import React, { useEffect, useState } from "react";
import { getApi } from "../../core/services/api/getApi";
import serviceImges from "../../assets/landing/Path1.png";
import SmartImage from "../Common/SmartImage";

function Services() {
  const URL = "/Services?PageNumber=1&RowsOfPage=4&SortingCol=InsertDate&SortType=DESC";

  const [servicesData, setServicesData] = useState([""]);
  useEffect(() => {
    getServices();
  }, []);
  const getServices = async () => {
    const response = await getApi(URL, "services");
    setServicesData(response);
  };

  return (
    <div className=" relative flex flex-col container mx-auto py-10">
      <img
        src={serviceImges}
        alt=""
        className="absolute z-0 w-[1511px] h-[1511px] opacity-98 top-0 -left-68"
      />
      <h2 className="relative mb-14 text-5xl z-10 font-peyda font-black text-deep-blue">
        سرویس ها
      </h2>
      <section className=" justify-center flex overflow-hidden relative z-10">
        <div className=" w-264 h-119 relative items-center flex flex-col space-y-6">
          <div className="absolute bg-white opacity-80 w-264 h-99 rounded-sm shadow-[0px_5px_27.5px_rgba(0,0,0,0.16)] "></div>

          {servicesData && servicesData.map((service) => (
            <div className="mt-11 mr-16 z-10" key={service.id}>
              <div className="bg-white w-264 h-99 rounded-sm shadow-[0px_5px_27.5px_rgba(0,0,0,0.16)] py-8 px-11 flex flex-col md:flex-row-reverse gap-6 text-right">
                {/* Image */}
                <div className="md:w-1/3 w-full flex justify-center">
                  <img
                    src={serviceImges}
                    alt={service.title}
                    className="w-[328px] h-[328px] object-cover rounded-md"
                  />
                </div>

                {/* Text content */}
                <div className="md:w-2/3 w-full space-y-4 ">
                  <h3 className="mt-16 text-5xl font-kalameh font-bold text-gray-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-2xl font-vazir leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
