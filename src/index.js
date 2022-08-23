import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import OnlyScroll from 'only-scrollbar';
import _ from 'lodash.debounce';
import { refs } from './js/refs';
import createCard from './js/renderCard';
import { onFetchArticle } from './js/fetchAx';

let query = '';
let PAGE = 1;

const scroll = new OnlyScroll(window, {
  damping: 0.2,
  eventContainer: document.scrollingElement,
});

export function card(data) {
  data.map((item, indx) => {
    refs.galery.insertAdjacentHTML('beforeend', createCard(item));
  });
  let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionDelay: 250,
    overlayOpacity: 0.9,
    close: false,
  });
  gallery.on('show.simplelightbox');
}

function onSmoothScroll() {
  const { height: cardHeight } =
    refs.form.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

function handleOnSubmit(event) {
  PAGE = 1;
  refs.galery.innerHTML = '';
  event.preventDefault();
  const { searchQuery } = event.target;
  query = searchQuery.value;
  onFetchArticle(query, PAGE);
  onSmoothScroll();
}

function onEndnessScroll() {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    onFetchArticle(query, (PAGE += 1));
  }
}

// listener
window.addEventListener('scroll', _(onEndnessScroll, 500));
refs.form.addEventListener('submit', handleOnSubmit);
