const apiUrl = ' http://eventregistry.org/api/v1';
const apiKey = process.env.REACT_APP_API_KEY;

export async function getArticles(params) {
    const urlParams = new URLSearchParams ({...params, apiKey});

    const response = await fetch(`${apiUrl}/article/getArticles?${urlParams}`);
    return await response.json();
}