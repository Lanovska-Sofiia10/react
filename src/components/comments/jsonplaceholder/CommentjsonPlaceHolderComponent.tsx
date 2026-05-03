import type {ICommentPH} from "../../../models/ICommentPH.ts";
import type {FunctionComponent} from "react";

type CommentProps = {
    item: ICommentPH;
}
const CommentjsonPlaceHolderComponent:FunctionComponent<CommentProps> = ({item})=> {

  return (
       <div>
           <h3>{item.name}</h3>
           <p>{item.email}</p>
           <p>{item.body}</p>
       </div>
  );
};

export default CommentjsonPlaceHolderComponent;