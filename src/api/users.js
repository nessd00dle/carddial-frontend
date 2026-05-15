import apiClient from './apiClient';

export const login = (correo, contrasena) => 
  apiClient.post('/usuarios/login', { correo, contrasena });

export const register = (userData) => 
  apiClient.post('/usuarios/registro', userData);

export const registerWithPhoto = (formData) => 
  apiClient.post('/usuarios/registro-con-foto', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });

export const updateProfile = (datos) => 
  apiClient.put('/usuarios/perfil', datos);

export const updateProfilePhoto = (formData) => 
  apiClient.put('/usuarios/perfil/foto', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });

export const searchUsers = (query) => 
  apiClient.get(`/usuarios/buscar?q=${encodeURIComponent(query)}`);

export const getUserProfile = (userId) => 
  apiClient.get(`/usuarios/${userId}`);
