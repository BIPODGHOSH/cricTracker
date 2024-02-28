const BASE_URL = "https://cricbuzz-cricket.p.rapidapi.com";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_REACT_APP_API_KEY,
    "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
  },
};

export const apiData = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, options);
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.startsWith("image/")) {
      return response; // return the image response directly
    } else {
      const result = await response.json();
      return result; // return JSON response
    }
  } catch (error) {
    console.error(error);
  }
};
