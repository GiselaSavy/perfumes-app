import { createContext, useState, useEffect } from "react";
export const UserContext = createContext();
export function UserProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("usuario"));
    if (storedUser) setUsuario(storedUser);
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    const userFound = users.find((u) => u.email === email && u.password === password);

    if (userFound) {
      setUsuario(userFound);
      localStorage.setItem("usuario", JSON.stringify(userFound));
      return true;
    }
    return false;
  };

  const register = (email, password) => {
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];
    const newUser = { email, password, nombre: email.split("@")[0] };
    users.push(newUser);
    localStorage.setItem("usuarios", JSON.stringify(users));
  };

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("usuario");
  };

  return (
  <UserContext.Provider value={{ usuario, setUsuario, login, register, logout }}>
    {children}
  </UserContext.Provider>
);
}