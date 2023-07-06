import { useEffect, useState } from "react";
import { getEvents } from "../services/apiService";
import { useParams } from "react-router-dom";
import DataList from "./DataList";
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage } from "../services/stateService";

function Events({ info, setInfo }) {
  const searchData = useSelector((state) => state.searchData);

  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(1);
  const { keyword } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    getEvents({
      ...searchData,
      resultType: "events",
      eventsPage: page,
      ...(keyword ? { keyword } : {}),
    })
      .then(({ events, info }) => {
        events &&
        setDataList((prevDataList) => [...prevDataList, ...events.results]);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => dispatch(setErrorMessage(error.toString())));
  }, [setDataList, setInfo, page, keyword, searchData, dispatch]);

  return (
    <DataList info={info} dataList={dataList} page={page} setPage={setPage} />
  );
}
export default Events;
