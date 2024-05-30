import React from "react";

import {useLoginMutation} from "../store/api-slice/auth-slice";

import {Button} from "../atoms";
import {ButtonType} from "../atoms/button";

export default function ApiPlayground() {
  const [login, {isLoading, error, data: loginData}] = useLoginMutation();
  const [token, setToken] = React.useState("");

  const handleLogin = async () => {
    try {
      const result = await login({email: "nancy.blanco.suarez@gmail.com", password: "Hello123"}).unwrap();

      setToken(result.token);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <>
      <h1>API Examples</h1>

      <h4>Login Api</h4>
      <p>
        <Button buttonType={ButtonType.Primary} onClick={handleLogin}>
          Login
        </Button>
      </p>
      <p>
        token: <span style={{width: "350px"}}>{token}</span>
      </p>
    </>
  );
}
