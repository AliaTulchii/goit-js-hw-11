import axios from 'axios';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 5;
  }

  async fetchGallery() {
    const key = '34679822-1c5a5d4931a74610a4cbe01cd';
    const url = 'https://pixabay.com/api/';
    const filter = `&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`;

    return await axios
      .get(`${url}?key=${key}${filter}`)
      .then(responce => responce.data) ;
    
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage(){
    this.page = 1;
  }

  quantityPage() {
   return this.page *  this.perPage
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}