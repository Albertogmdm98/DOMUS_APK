import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState(''); // Manejar el tipo de usuario

  const login = (id, type, name) => {
    setUser(type); // Asigna el tipo de usuario
    setUserId(id);
    setUserName(name);
    setUserType(type); // Guarda el tipo de usuario
  };

  const logout = () => {
    setUser(null);
    setUserId(null);
    setUserName('');
    setUserType(''); // Limpia el tipo de usuario
  };

  const register = (id, type, name) => {
    setUser(type);
    setUserId(id);
    setUserName(name);
    setUserType(type); // Asigna el tipo de usuario al registrar
  };

  const switchProfile = (newType) => {
    setUser(newType);
    setUserType(newType); // Cambia el tipo de usuario (perfil)
  };

  return (
    <AuthContext.Provider value={{ user, userId, userName, userType, login, logout, register, switchProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
