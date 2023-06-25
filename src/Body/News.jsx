import { useEffect, useState } from "react";
import { getArticles } from "../services/apiService";
import { useParams } from "react-router-dom";
import DataList from "./DataList";
import { useDispatch, useSelector } from "react-redux";

function News({ info, setInfo }) {
  const searchData= useSelector((state) => state.searchData);

  const [dataList,setDataList] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const { keyword } = useParams();
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
 

  useEffect(() => {
    getArticles({
      ...searchData,
      articlesPage: page,
      ...(keyword ? { keyword } : {}),
    })
      .then(({ articles, info }) => {
        articles && setDataList(articles.results);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => dispatch(setErrorMessage(error.toString())));
  }, [setDataList, setInfo, page, keyword,searchData]);

  return (
    <>
      <DataList info={info} dataList={dataList} page ={page} setPage ={setPage}/>
    </>
  );
}

export default News;

// .then((data) => {
//   setNewsList(data.articles.results);
//   if (data.info) {
//     setInfo(data.info);
//   }
// })
