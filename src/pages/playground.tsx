import React from "react";
import {useGetUsersQuery} from "../store/api-slice/users-slice";
import {BreadCrumbs} from "../atoms";

const NavigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Employers', path: '/employers' },
  { label: 'Company', path: '/company' },
  { label: 'Settings', path: '/settings' },
  { label: 'My Page', path: '/mypage' }
];

function PlayGround() {
  const {data} = useGetUsersQuery();

  console.log(data);

  function handleClick(event: React.MouseEvent) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <div >
      <BreadCrumbs separator=">" items={NavigationItems} onClick={handleClick}/>
    </div>
  )
}

export default PlayGround;
