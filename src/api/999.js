import api from './api';

export const fetchSuggestions = (query) => api.get('suggestions', {params: {query}})
export const fetchProducts = (linkBase64) => {
    console.log('test');
    return api.get('products', {params: {linkBase64}})
}
export const fetchCategories = () => api.get('categories')
export const fetchItem = (link) => api.get('item', {params: {link}})

export const testFunction = function() {
    return 'test function';
}