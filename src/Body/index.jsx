import News from "./News";
import SideBar from "./SideBar";
import { useState } from "react";

function Body() {
  const [newsList, setNewsList] = useState(null);
  const [info, setInfo] = useState(null);
  return (
    <>
      <SideBar setNewsList={setNewsList} setInfo={setInfo} />
      <News
        newsList={newsList}
        setNewsList={setNewsList}
        info={info}
        setInfo={setInfo}
      />
    </>
  );
}
export default Body;
