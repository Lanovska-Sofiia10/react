import {Outlet} from "react-router-dom";
import UsersComponent from "../components/users/UsersComponent.tsx";

const UserPage = ()=> {

  return (
       <>
           <UsersComponent/>
           <Outlet/>
       </>
  );
};

export default UserPage;