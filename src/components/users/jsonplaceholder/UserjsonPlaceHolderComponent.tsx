import type {IUserPH} from "../../../models/IUserPH.ts";
import type {FunctionComponent} from "react";

type UsersProps ={
    item: IUserPH;
}
const UserjsonPlaceHolderComponent:FunctionComponent<UsersProps> = ({item})=> {

  return (
       <div>
           <h2>{item.name}</h2>
           <p>{item.username}</p>
           <p>{item.email}</p>
       </div>
  );
};

export default UserjsonPlaceHolderComponent;