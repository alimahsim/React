// import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import { Header } from "../index";

export const Layout = () => {
  // const navigate = useNavigate();
  
  // useEffect(()=>{
  //   if(localStorage('token')){
  //     navigate("/sign-in")
  //   }
  // }, [])
  
  return (
    <>
      <Header/>
      <Outlet/>    
    </>
  )
}
