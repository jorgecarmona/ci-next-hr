import React from "react";

import {useGetUsersQuery} from "../store/api-slice/users-slice";

import PasswordTextField from "../atoms/textfield-password";

function PlayGround() {
  const {data} = useGetUsersQuery();

  console.log(data);

  const [password, setPassword] = React.useState("");

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value); 
};
  const response = {
    error: false
  };

  return (
    <>
      <h1>TextField Password</h1>
      <PasswordTextField 
      error={response.error}
      errorHelperText="Usuario o contraseña incorrectas"
      fullWidth
      handlePassword={handlePassword}
      helperText="ingresa tu contraseña"
      icon
      label="Password"
      password={password}
      />
    </>
  )
}

export default PlayGround;
