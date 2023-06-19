import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { getArticles } from "../services/apiService";
// import moment from "moment";
import ErrorModal from "../ErrorModal";

function SearchForm({
  closeSideBar,
  submittedData,
  setSubmittedData,
  handleRestore,
  setDataList,
  setInfo,
}) {
  const [articlesSortDisabled, setArticlesSortDisabled] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);


  const resultType = [
    "articles",
    "uriWgtList",
    "langAggr",
    "timeAggr",
    "sourceAggr",
    "sourceExAggr",
    "authorAggr",
    "keywordAggr",
    "locAggr",
    "conceptAggr",
    "conceptGraph",
    "categoryAggr",
    "dateMentionAggr",
    "sentimentAggr",
    "recentActivityArticles",
  ];

  const articlesSortBy = [
    "date",
    "rel",
    "sourceImportance",
    "sourceAlexaGlobalRank",
    "sourceAlexaCountryRank",
    "socialScore",
    "facebookShares",
  ];
  const dataType = ["news", "pr", "blog"];
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      keyword: event.target.keyword.value,
      resultType: event.target.resultType.value,
      articlesSortBy: event.target.articlesSortBy.value,
      dataType: event.target.dataType.value,
      lang: event.target.lang.value,
      dateStart: event.target.dateStart.value,
      dateEnd: event.target.dateEnd.value,
    };

    setSubmittedData(data);
    console.log("data", data);
    getArticles(data)
      .then(({ articles, info }) => {
        articles && setDataList(articles.results);
        info ? setInfo(info) : setInfo(null);
        closeSideBar();
      })
      .catch((error) => setErrorMessage(error.toString()));
    // .then((res) => {
    //   closeSideBar();
    //   setNewsList(res.articles.results);
    //   if (res.info) {
    //     setInfo(res.info);
    //   }
    // })

    // if (data.dateEnd > moment().calendar("sameDay")) {
    //   throw new Error("Unprocessable Entity, 422 Error");
    // }
  };

  const handleResultTypeChange = (event) => {
    if (event.target.value !== "articles") {
      setArticlesSortDisabled(true);
    } else {
      setArticlesSortDisabled(false);
    }
  };


  const languages = [
    {
      label: "English",
      value: "eng",
    },
    {
      label: "Eesti",
      value: "est",
    },
    {
      label: "Русский",
      value: "rus",
    },
    {
      label: "German",
      value: "deu",
    },
  ];

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Keywords</Form.Label>
          <Form.Control
            type="text"
            name="keyword"
            defaultValue={submittedData?.keyword}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Result Type</Form.Label>
          <Form.Select
            name="resultType"
            onChange={handleResultTypeChange}
            defaultValue={submittedData?.resultType}
          >
            {resultType.map((type) => (
              <option value={type} key={type}>
                {type}{" "}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Articles sort by</Form.Label>
          <Form.Select
            name="articlesSortBy"
            disabled={articlesSortDisabled}
            defaultValue={submittedData?.articlesSortBy}
          >
            {articlesSortBy.map((type) => (
              <option value={type} key={type}>
                {type}{" "}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Data type</Form.Label>
          {dataType.map((type) => (
            <Form.Check
              type="radio"
              label={type}
              key={type}
              name="dataType"
              value={type}
              defaultChecked={submittedData?.dataType.includes(type)}
            />
          ))}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Language</Form.Label>
          <Form.Select name="lang"  defaultValue={submittedData?.lang}>
            {languages.map(({ value, label }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date start:</Form.Label>
          <Form.Control
            type="date"
            name="dateStart"
            defaultValue={submittedData?.dateStart}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date end:</Form.Label>
          <Form.Control
            type="date"
            name="dateEnd"
            defaultValue={submittedData?.dateEnd}
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="w-100">
          Search
        </Button>

        <Button variant="light" className="w-100 mt-3" onClick={handleRestore}>
          Restore
        </Button>
      </Form>

      <ErrorModal
        errorMessage={errorMessage}
        handleClose={() => setErrorMessage(null)}
      />
    </>
  );
}

export default SearchForm;
