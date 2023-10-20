export default async function fetchMovieData(title: string) {
  const request = await fetch(
    `http://www.omdbapi.com/?apikey=1d4ce8d4&t=${title}`
  );
  const response = request.json();
  if (Object.keys(await response).includes("Error"))
    throw new Error(response.Error);
  return response;
}
