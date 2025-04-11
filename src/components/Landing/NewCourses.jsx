import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getApi } from "../../core/services/api/getApi";
import Card from "../Common/Card";
function NewCourses() {
  // console.log(params)
  const URL = "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=4&SortingCol=lastUpdate";

  const [newCoursesData, setNewCoursesData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getNewCoursesData();
  }, []);

  const getNewCoursesData = async () => {
    const response = await getApi(URL, "courseFilterDtos");
    setNewCoursesData(response);
    // console.log("NewCourse",response);
  };

  const handleNavigation = (id) => {
    console.log(id)
    navigate(`Courses/${id}`); 
  };

  return (
    <div className="border-2 border-amber-700 text-center py-8">
      <h2 className="text-4xl font-bold text-[#267dff] mb-6">جدید ترین دوره ها</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {newCoursesData&&newCoursesData.map((item, index) => (
          <Card
            item={item}
            index={index}
            handleNavigation={handleNavigation}
            key={index}
          />
        ))}
      </div>

      <a href="#" className="inline-block mt-6 text-blue-500 hover:underline">مشاهده همه</a>
    </div>
  );
}

export default NewCourses;