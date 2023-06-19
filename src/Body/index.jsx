import News from "./News";
import SideBar from "./SideBar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Events from "./Events";

function Body() {
  const [newsList, setNewsList] = useState(null);
  const [eventsList, setEventsList] = useState(null);
  const [info, setInfo] = useState(null);
  return (
    <>
      <SideBar setNewsList={setNewsList} setInfo={setInfo} />

      <Routes>
        <Route
          path="/"
          element={
            <News
              newsList={newsList}
              setNewsList={setNewsList}
              info={info}
              setInfo={setInfo}
            />
          }
        />
        <Route
          path="/:keyword"
          element={
            <News
              newsList={newsList}
              setNewsList={setNewsList}
              info={info}
              setInfo={setInfo}
            />
          }
        />
        <Route
          path="/events"
          element={
            <Events
              eventsList={eventsList}
              setEventsList={setEventsList}
              info={info}
              setInfo={setInfo}
            />
          }
        />
        <Route
          path="/events/:keyword"
          element={
            <Events
              eventsList={eventsList}
              setEventsList={setEventsList}
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
