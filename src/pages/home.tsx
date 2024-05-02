import React from "react";

import {useGetUsersQuery} from "../store/api-slice/users-slice";

function Home() {
  const {data} = useGetUsersQuery();

  console.log(data);

  return <h1>Home</h1>;
}

export default Home;
