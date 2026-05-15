import apiClient from './apiClient';

export const getUserStats = () => apiClient.get('/estadisticas/usuario');
export const getChartData = (periodo) => apiClient.get(`/estadisticas/grafica?periodo=${periodo}`);
export const getDistribution = () => apiClient.get('/estadisticas/distribucion');
