const API_KEY = '43111947-de2162102976d485b612f31fc';
const baseURL = 'https://pixabay.com/api/';

export async function fetchImages(searchQuery) {
  const url = `${baseURL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await fetch(url);
  const data = await response.json();
  return data.hits;
}