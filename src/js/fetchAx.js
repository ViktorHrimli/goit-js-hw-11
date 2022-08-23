import axios from 'axios';
import Notiflix from 'notiflix';
import { card } from '../index';
axios.defaults.baseURL = 'https://pixabay.com/api/';
// async function getFetchData(tags, PAGE) {
//   const get = await axios
//     .get('', {
//       params: {
//         key: '29353874-6524bfeaf443742d489eb2baf',
//         q: `${tags}`,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//         per_page: 40,
//         page: `${PAGE}`,
//       },
//     })
//     .catch(function (error) {
//       Notiflix.Notify.failure(
//         'Sorry, there are no images matching your search query. Please try again.'
//       );
//       return null;
//     });
//   return get;
// }

// export async function onFetchArticle(query, PAGE) {
//   try {
//     getFetchData(query, PAGE).then(res => {
//       if (res === null || res.status !== 200) return;
//       const { data } = res;
//       if (data.hits.length === 0 && data.totalHits > 0) {
//         return Notiflix.Notify.failure(
//           "We're sorry, but you've reached the end of search results."
//         );
//       }

//       if (data.hits.length === 0) {
//         return Notiflix.Notify.failure(
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//       }
//       if (PAGE === 1) {
//         Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
//       }
//       return card(data.hits);
//     });
//   } catch (error) {
//     if (response.status) return console.log(error);
//   }
// }

export class FetchBictchWorking {
  constructor() {}
  async getFetchData(tags, PAGE) {
    const get = await axios
      .get('', {
        params: {
          key: '29353874-6524bfeaf443742d489eb2baf',
          q: `${tags}`,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: false,
          per_page: 40,
          page: `${PAGE}`,
        },
      })
      .catch(function (error) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return null;
      });
    return get;
  }

  async onFetchArticle(query, PAGE) {
    try {
      wtf.getFetchData(query, PAGE).then(res => {
        if (res === null || res.status !== 200) return;
        const { data } = res;
        if (data.hits.length === 0 && data.totalHits > 0) {
          return Notiflix.Notify.failure(
            "We're sorry, but you've reached the end of search results."
          );
        }

        if (data.hits.length === 0) {
          return Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        if (PAGE === 1) {
          Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
        }
        return card(data.hits);
      });
    } catch (error) {
      if (response.status) return console.log(error);
    }
  }
}

const wtf = new FetchBictchWorking();

// ===========================
// export function onFetchArticle(e, PAGE) {
//   axios
//     .get('', {
//       params: {
//         key: '29353874-6524bfeaf443742d489eb2baf',
//         q: `${e}`,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: true,
//         per_page: 40,
//         page: `${PAGE}`,
//       },
//     })
//     .then(res => {
//       const { data } = res;
//       if (data.hits.length === 0 && data.totalHits > 0) {
//         return Notiflix.Notify.failure(
//           "We're sorry, but you've reached the end of search results."
//         );
//       }

//       if (data.hits.length === 0) {
//         Notiflix.Notify.failure(
//           'Sorry, there are no images matching your search query. Please try again.'
//         );
//         throw new Error(response.status);
//       }
//       if (PAGE === 1) {
//         Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
//       }
//       return card(data.hits);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }
