import React from "react";

import {useGetUsersQuery} from "../store/api-slice/users-slice";

import PasswordTextField from "../atoms/textfield-password";

function PlayGround() {
  const {data} = useGetUsersQuery();

  console.log(data);

  return (
    <>
      <h1>TextField Password</h1>
    </>
  );
}

export default PlayGround;
