import type {ICommentD} from "../../../models/ICommentD.ts";
import type {FunctionComponent} from "react";

type CommentProps = {
    item: ICommentD;
}
const CommentDummyjsonComponent:FunctionComponent<CommentProps> = ({item})=> {

  return (
       <div>
           <h3>{item.body}</h3>
           <p>{item.likes}</p>
           <p>{item.user.fullName}</p>
           <p>{item.user.username}</p>
       </div>
  );
};

export default CommentDummyjsonComponent;