export const getArticles = async (search) => {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?apiKey=613abcbaca314352adb07b1c6f1b48ad&country=us&pageSize=10&q`)
  const data = await handleErrors(response)
  return data;
}

const handleErrors = (response) => {
  if(response.ok) {
    return response.json();
  } else {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
}
