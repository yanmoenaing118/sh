export const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .catch((err) => err);
