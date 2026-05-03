import {useEffect, useState} from "react";
import type {ICommentD} from "../../../models/ICommentD.ts";
import {DService} from "../../../services/api.services.tsx";
import CommentDummyjsonComponent from "./CommentDummyjsonComponent.tsx";

const CommentsDummyjsonComponent = ()=> {
    const [comments, setComments] = useState<ICommentD[]>([]);

    useEffect(() => {
        DService.getComments()
                  .then(json => setComments(json));
    },[])

  return (
       <div>
           {
                comments.map(value => <CommentDummyjsonComponent key={value.id} item={value}/>)
           }
       </div>
  );
};

export default CommentsDummyjsonComponent;