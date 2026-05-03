import {useEffect, useState} from "react";
import type {IUserPH} from "../../../models/IUserPH.ts";
import {PHService} from "../../../services/api.services.tsx";
import UserjsonPlaceHolderComponent from "./UserjsonPlaceHolderComponent.tsx";

const UsersjsonPlaceHolderComponent = ()=> {
    const [users, setUsers] = useState<IUserPH[]>([]);

    useEffect(()=>{
        PHService.getUsers()
              .then(json => setUsers(json))
    },[])

    return (
        <div>
            {
                users.map(value => <UserjsonPlaceHolderComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export default UsersjsonPlaceHolderComponent;