import News from "./News";
import SideBar from "./SideBar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Events from "./Events";

function Body() {
  const [dataList, setDataList] = useState(null);
  const [info, setInfo] = useState(null);
  return (
    <>
      <SideBar setDataList={setDataList} setInfo={setInfo} />

      <Routes>
        <Route
          path="/"
          element={
            <News
              dataList={dataList}
              setDataList={setDataList}
              info={info}
              setInfo={setInfo}
            />
          }
        />
        <Route
          path="/:keyword"
          element={
            <News
              dataList={dataList}
              setDataList={setDataList}
              info={info}
              setInfo={setInfo}
            />
          }
        />
        <Route
          path="/events"
          element={
            <Events
              dataList={dataList}
              setDataList={setDataList}
              info={info}
              setInfo={setInfo}
            />
          }
        />
        <Route
          path="/events/:keyword"
          element={
            <Events
              dataList={dataList}
              setDataList={setDataList}
              info={info}
              setInfo={setInfo}
            />
          }
        />
      </Routes>
    </>
  );
}
export default Body;
