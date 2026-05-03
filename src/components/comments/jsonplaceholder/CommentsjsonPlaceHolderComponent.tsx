import {useEffect, useState} from "react";
import type {ICommentPH} from "../../../models/ICommentPH.ts";
import {PHService} from "../../../services/api.services.tsx";
import CommentjsonPlaceHolderComponent from "./CommentjsonPlaceHolderComponent.tsx";

const CommentsjsonPlaceHolderComponent = ()=> {
    const [comments, setComments] = useState<ICommentPH[]>([]);

    useEffect(() => {
        PHService.getComments()
                  .then(json => setComments(json))
    },[])

  return (
       <div>
           {
               comments.map(value => <CommentjsonPlaceHolderComponent key={value.id} item={value}/>)
           }
       </div>
  );
};

export default CommentsjsonPlaceHolderComponent;