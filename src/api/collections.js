import apiClient from './apiClient';

export const getUserCollections = () => apiClient.get('/colecciones/usuario');
export const getOtherUserCollections = (userId) => apiClient.get(`/colecciones/usuario/${userId}`);
