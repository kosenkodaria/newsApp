const apiUrl = ' http://eventregistry.org/api/v1';
const apiKey = process.env.REACT_APP_API_KEY;

export   const defaultData = {
    keyword: 'Elon Musk',
    resultType: "articles",
    articlesSortBy: "date",
    dataType: ["news","blog"],
    lang: ["eng","rus"],
    dateStart: "2023-06-01",
  };

export async function getArticles(params) {
    const urlParams = new URLSearchParams ({...params, apiKey});

    const response = await fetch(`${apiUrl}/article/getArticles?${urlParams}`);
    return await response.json();
}