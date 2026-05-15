import apiClient from './apiClient';

export const getCards = () => apiClient.get('/cartas');
