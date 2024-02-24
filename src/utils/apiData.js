const BASE_URL = "https://cricbuzz-cricket.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_API_KEY,
    "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
  },
};

const apiData = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
