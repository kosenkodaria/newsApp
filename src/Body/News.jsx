import { useEffect, useState } from "react";
import { getArticles } from "../services/apiService";
import { useParams } from "react-router-dom";
import DataList from "./DataList";
import { useDispatch, useSelector } from "react-redux";
import { setErrorMessage } from "../services/stateService";

function News({ info, setInfo }) {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.searchData);

  const [dataList, setDataList] = useState([]);
  const { keyword } = useParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getArticles({
      ...searchData,
      articlesPage: page,
      ...(keyword ? { keyword } : {}),
    })
      .then(({ articles, info }) => {
        articles &&
        setDataList((prevDataList) => [...prevDataList, ...articles.results]);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => dispatch(setErrorMessage(error.toString())));
  }, [setDataList, setInfo, page, keyword, searchData, dispatch]);

  return (
    <DataList info={info} dataList={dataList} page={page} setPage={setPage} />
  );
}

export default News;

// .then((data) => {
//   setNewsList(data.articles.results);
//   if (data.info) {
//     setInfo(data.info);
//   }
// })
