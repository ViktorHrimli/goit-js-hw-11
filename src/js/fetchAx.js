import axios from 'axios';
import Notiflix from 'notiflix';
import { card } from '../index';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export function onFetchArticle(e, PAGE) {
  axios
    .get('', {
      params: {
        key: '29353874-6524bfeaf443742d489eb2baf',
        q: `${e}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        page: `${PAGE}`,
      },
    })
    .then(res => {
      const { data } = res;
      if (data.hits.length === 0 && data.totalHits > 0) {
        return Notiflix.Notify.failure(
          "We're sorry, but you've reached the end of search results."
        );
      }

      if (data.hits.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        throw new Error(response.status);
      }
      if (PAGE === 1) {
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
      }
      return card(data.hits);
    })
    .catch(error => {
      console.log(error);
    });
}
