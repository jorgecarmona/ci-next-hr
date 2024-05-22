import {useGetUsersQuery} from "../store/api-slice/users-slice";

function PlayGround() {
  const {data} = useGetUsersQuery();

  console.log(data);

  return <h1>PlayGround</h1>;
}

export default PlayGround;
