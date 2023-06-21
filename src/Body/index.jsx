import News from "./News";
import SideBar from "./SideBar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Events from "./Events";

function Body() {
  const [dataList, setDataList] = useState(null);
  const [info, setInfo] = useState(null);

  const props = {
    info,
    setInfo,
    dataList,
    setDataList,
  };

  return (
    <>
      <SideBar setDataList={setDataList} setInfo={setInfo} />

      <Routes>

        <Route path="/" element={<News {...props} />} />
        <Route path="/:keyword" element={<News {...props} />} />

        <Route path="/events" element={<Events {...props} />} />
        <Route path="/events/:keyword" element={<Events {...props} />} />
        
      </Routes>
    </>
  );
}
export default Body;
