import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../config';
import { API_URL } from '../api/apiClient';


const BASE_URL = API_URL.replace('/api', '');

const Avatar = ({ 
  fotoPerfil, 
  nombre,  
  size = "w-40 h-40", 
  textSize = "text-6xl",
  borderColor = "border-[#2d2a3e]"
}) => {
  const [fotoError, setFotoError] = useState(false);
  const [fotoUrl, setFotoUrl] = useState(null);
  const [forceFallback, setForceFallback] = useState(false);

  useEffect(() => {
    if (!fotoPerfil || forceFallback) {
      setFotoUrl(null);
      return;
    }

    // Si es blob: (imagen temporal)
    if (fotoPerfil.startsWith('blob:')) {
      setFotoUrl(fotoPerfil);
      setFotoError(false);
      return;
    }

    
    if (fotoPerfil.startsWith('http://') || fotoPerfil.startsWith('https://')) {
      setFotoUrl(fotoPerfil);
      setFotoError(false);
      return;
    }

    let url = null;
    if (fotoPerfil.startsWith('/uploads')) {
      url = `${BASE_URL}${fotoPerfil}`;
    } else if (fotoPerfil.startsWith('/')) {
      url = `${BASE_URL}${fotoPerfil}`;
    } else {
      url = `${BASE_URL}/uploads/perfiles/${fotoPerfil}`;
    }
    
    console.log('Cargando avatar desde:', url);
    setFotoUrl(url);
    setFotoError(false);
  }, [fotoPerfil, forceFallback]);

  const getInitiales = () => {
    if (!nombre) return '??';
    return nombre
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Si no hay foto o hubo error, mostrar iniciales
  if (!fotoPerfil || fotoError || forceFallback) {
    return (
      <div className={`${size} bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-xl border-4 ${borderColor}`}>
        <span className={`${textSize} font-bold text-white`}>
          {getInitiales()}
        </span>
      </div>
    );
  }

  return (
    <div className={`${size} rounded-full overflow-hidden shadow-xl border-4 ${borderColor}`}>
      <img
        key={fotoUrl}
        src={fotoUrl}
        alt={`Foto de ${nombre}`}
        className="w-full h-full object-cover"
        onError={() => {
          console.warn('Error cargando avatar desde:', fotoUrl);
          setForceFallback(true);
        }}
        onLoad={() => {
          console.log('Avatar cargado correctamente desde:', fotoUrl);
          setFotoError(false);
        }}
      />
    </div>
  );
};

export default Avatar;