import {useEffect, useState} from "react";
import {PHService} from "../../../services/api.services.tsx";
import type {IPostPH} from "../../../models/IPostPH.ts";
import PostjsonPlaceHolderComponent from "./PostjsonPlaceHolderComponent.tsx";

const PostsjsonPlaceHolderComponent = ()=> {
    const [posts, setPosts] = useState<IPostPH[]>([]);

    useEffect(()=>{
        PHService.getPosts()
            .then(json => setPosts(json))
    },[])

    return (
        <div>
            {
                posts.map(value => <PostjsonPlaceHolderComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export default PostsjsonPlaceHolderComponent;