import { useEffect, useState } from "react";
import { getEvents } from "../services/apiService";
import ErrorModal from "../ErrorModal";
import { useParams } from "react-router-dom";
import DataList from "./DataList";

function Events({ dataList, setDataList, info, setInfo }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [page, setPage] = useState(1);
  const { keyword } = useParams();

  useEffect(() => {
    getEvents({
      resultType: "events",
      eventsPage: page,
      ...(keyword ? { keyword } : {}),
    })
      .then(({ events, info }) => {
        events && setDataList([...(dataList || []), ...events.results]);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => setErrorMessage(error.toString()));
  }, [setDataList, setInfo, page, keyword]);

  return (
    <>
      <DataList info={info} dataList={dataList} page={page} setPage={setPage} />
      <ErrorModal
        errorMessage={errorMessage}
        handleClose={() => setErrorMessage(null)}
      />
    </>
  );
}
export default Events;
