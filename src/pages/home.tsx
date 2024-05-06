import React from "react";

import {Button} from "../atoms";

import {useGetUsersQuery} from "../store/api-slice/users-slice";

function Home() {
  const {data} = useGetUsersQuery();

  console.log(data);

  return (
    <>
      <h1>Home</h1>

      <Button icon="forward" buttonType="primary">
        Button Primary with Icon
      </Button>

      <h5>Primary fullWidth</h5>
      <Button buttonType="secondary" fullWidth>
        Button FullWidth
      </Button>
    </>
  );
}

export default Home;
