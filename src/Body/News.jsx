import { useEffect, useState } from "react";
import { getArticles } from "../services/apiService";
import ErrorModal from "../ErrorModal";
import { useParams } from "react-router-dom";
import DataList from "./DataList";

function News({ dataList, setDataList, info, setInfo }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const { keyword } = useParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getArticles({
      articlesPage: page,
      ...(keyword ? { keyword } : {}),
    })
      .then(({ articles, info }) => {
        articles && setDataList([...(dataList || []), ...articles.results]);
        info ? setInfo(info) : setInfo(null);
      })
      .catch((error) => setErrorMessage(error.toString()));
  }, [setDataList, setInfo, page, keyword]);

  return (
    <>
      <DataList info={info} dataList={dataList} page ={page} setPage ={setPage}/>
      <ErrorModal
        errorMessage={errorMessage}
        handleClose={() => setErrorMessage(null)}
      />
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
