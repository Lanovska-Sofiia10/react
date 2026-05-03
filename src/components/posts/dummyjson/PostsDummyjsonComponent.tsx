import {useEffect, useState} from "react";
import type {IPostD} from "../../../models/IPostD.ts";
import {DService} from "../../../services/api.services.tsx";
import PostDummyjsonComponent from "./PostDummyjsonComponent.tsx";

const PostsDummyjsonComponent = ()=> {
    const [posts, setPosts] = useState<IPostD[]>([]);
    useEffect(() => {
        DService.getPosts()
                  .then(json => setPosts(json));
    },[])

  return (
       <div>
           {
               posts.map(value => <PostDummyjsonComponent key={value.id} item={value}/>)
           }
       </div>
  );
};

export default PostsDummyjsonComponent;