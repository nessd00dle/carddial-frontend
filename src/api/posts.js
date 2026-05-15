import apiClient from './apiClient';

export const getFeed = () => apiClient.get('/publicaciones?tipo=feed');
export const getCollectionPosts = () => apiClient.get('/publicaciones?tipo=coleccion');
export const getPostDetail = (id) => apiClient.get(`/publicaciones/${id}`);
export const createPost = (formData) => apiClient.post('/publicaciones', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
export const getPostReactions = (id) => apiClient.get(`/publicaciones/${id}/reacciones`);
export const getMyReaction = (id) => apiClient.get(`/publicaciones/${id}/reacciones/mi-reaccion`);
export const toggleReaction = (id, tipo) => apiClient.post(`/publicaciones/${id}/reacciones`, { tipo });
