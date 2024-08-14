import { JwtPayload, jwtDecode } from "jwt-decode";
import StylesProvider from "./StylesProvider";
import RoutesProvider from "./RoutesProvider";
import UserContext from "./UserContext";
import { useEffect, useState } from "react";

interface UserLoggedType {
  name: string;
}

interface CustomJwtPayload extends JwtPayload {
  name?: string;
}

const AppProvider = () => {
  const [userLogged, setUserLogged] = useState<UserLoggedType | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("t");
    if (token) {
      const decodedToken = jwtDecode<CustomJwtPayload>(token.toString());
      setUserLogged({ name: decodedToken.name || "Unknown" });
    }
  }, []);

  return (
    <UserContext.Provider value={{ UserLogged: userLogged, setUserLogged }}>
      <StylesProvider>
        <RoutesProvider />
      </StylesProvider>
    </UserContext.Provider>
  );
};

export default AppProvider;
