const apiUrl = ' http://eventregistry.org/api/v1';
const apiKey = process.env.REACT_APP_API_KEY;

export   const defaultData = {
    keyword: 'Elon Musk',
    resultType: "articles",
    articlesSortBy: "date",
    dataType: "news",
    lang: "eng",
    dateStart: "2023-06-01",
  };

export async function getArticles(params = null) {
    const urlParams = new URLSearchParams ({...(params || defaultData), apiKey});

    const response = await fetch(`${apiUrl}/article/getArticles?${urlParams}`);
    return await response.json();
}