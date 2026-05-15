import apiClient from './apiClient';

export const getFranchises = () => apiClient.get('/franquicias');
