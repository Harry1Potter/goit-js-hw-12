import { fetchImages } from './js/pixabay-api.js';
import { displayImages } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imageUrl from './img/close.png';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const loader = document.getElementById('loader');
const gallery = document.getElementById('gallery');
const showMoreButton = document.getElementById('show-more-button');

loader.classList.add('loader');
loader.style.display = 'none';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});

let currentPage = 1;
let currentQuery = '';

searchForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  gallery.innerHTML = '';
  currentPage = 1;
  currentQuery = searchInput.value.trim();

  if (currentQuery === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
      position: 'topRight',
      titleColor: '#fff',
      titleSize: '16px',
      backgroundColor: 'red',
      messageColor: 'white',
      iconUrl: imageUrl,
      theme: 'dark',
    });
    return;
  }

  loader.style.display = 'inline-block';

  try {
    const data = await fetchImages(currentQuery, currentPage);
    loader.style.display = 'none';
    displayImages(data.hits);
    lightbox.refresh();
    showMoreButton.style.display = data.hits.length === 15 ? 'block' : 'none';
  } catch (error) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again.',
      position: 'topRight',
      titleColor: '#fff',
      titleSize: '16px',
      backgroundColor: 'red',
      messageColor: 'white',
      iconUrl: imageUrl,
      theme: 'dark',
    });
  }

  searchForm.reset();
});

showMoreButton.addEventListener('click', async () => {
  currentPage++;
  loader.style.display = 'inline-block';
  showMoreButton.style.display = 'none';

  try {
    const data = await fetchImages(currentQuery, currentPage);
    loader.style.display = 'none';
    displayImages(data.hits);
    lightbox.refresh();
    if (data.hits.length < 15) {
      iziToast.info({
        title: 'Info',
        message: 'No more images to load.',
        position: 'topRight',
      });
    } else {
      showMoreButton.style.display = 'block';
    }
  } catch (error) {
    loader.style.display = 'none';
    showMoreButton.style.display = 'block';
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again.',
      position: 'topRight',
      titleColor: '#fff',
      titleSize: '16px',
      backgroundColor: 'red',
      messageColor: 'white',
      iconUrl: imageUrl,
      theme: 'dark',
    });
  }
});
