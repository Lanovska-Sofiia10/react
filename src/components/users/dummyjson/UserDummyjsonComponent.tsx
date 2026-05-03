import type {FunctionComponent} from "react";
import type {IUserD} from "../../../models/IUserD.ts";

type UsersProps ={
    item: IUserD;
}

const UserDummyjsonComponent:FunctionComponent<UsersProps> = ({item})=> {

  return (
       <div>
           <div>
               <h2>{item.firstName} {item.lastName}</h2>
               <p>{item.username}</p>
               <p>{item.email}</p>
           </div>
       </div>
  );
};

export default UserDummyjsonComponent;