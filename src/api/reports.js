import apiClient from './apiClient';

export const getWeeklyActivity = () => apiClient.get('/reportes/actividad-semanal');
export const getTopFandoms = () => apiClient.get('/reportes/top-fandoms');
export const getTopPosts = () => apiClient.get('/reportes/top-publicaciones');
export const getTopUsers = () => apiClient.get('/reportes/top-usuarios');
