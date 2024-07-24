import { useState } from "react";
import RoleList from "../components/RoleList";
import UserList from "../components/UserList";
import Landing from "./Landing";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Home() {
    const [loggedIn, setLoggedIn] = useState(false);



    return (
      <>
        {loggedIn ? <Landing /> : <Register OnBackClick={()=> {return false;}}/>}
      </>
    );
  }