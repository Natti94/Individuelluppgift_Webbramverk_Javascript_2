export async function searchData(query) {
  const API_KEY = import.meta.env.VITE_SERP_API;
  const URL = `https://serpapi.com/search.json?q=${encodeURIComponent(
    query
  )}&engine=google_shopping&api_key=${API_KEY}`;
  const DB = import.meta.env.MongoDB;
}
