import {useEffect, useState} from "react";
import {DService} from "../../../services/api.services.tsx";
import UserDummyjsonComponent from "./UserDummyjsonComponent.tsx";
import type {IUserD} from "../../../models/IUserD.ts";

const UsersDummyjsonComponent = ()=> {
    const [users, setUsers] = useState<IUserD[]>([]);

    useEffect(()=>{
        DService.getUsers()
            .then(json => setUsers(json))
    },[])

    return (
        <div>
            {
                users.map(value => <UserDummyjsonComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export default UsersDummyjsonComponent;