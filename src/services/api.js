function fetchImages(value, page) {
  const KEY = '26886697-f132e609f22bab827cfdbeee1';
  const URL = `https://pixabay.com/api/?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(URL).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('Oops, something went wrong'));
  });
}

const api = { fetchImages };

export default api;
