import apiClient from './apiClient';

export const getComments = (postId) => apiClient.get(`/publicaciones/${postId}/comentarios`);
export const addComment = (postId, texto) => apiClient.post(`/publicaciones/${postId}/comentarios`, { texto });
