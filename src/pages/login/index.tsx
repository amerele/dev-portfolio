import { Stack } from "@chakra-ui/react";
import { useState } from "react";
import api from "../../service";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    if (!email || !password) {
      // Error Logic goes here

      try {
        const { data } = await api.post("login/", { email, password });
        localStorage.setItem("t", data.access_token);
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 0);
      } catch (error: any) {
        // Error Logic goes here
      }
    }
  };

  return (
    <Stack minH={"100%"} direction={"row"}>
      Login
    </Stack>
  );
};
