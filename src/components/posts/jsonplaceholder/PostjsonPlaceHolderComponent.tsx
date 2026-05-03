import type {FunctionComponent} from "react";
import type {IPostPH} from "../../../models/IPostPH.ts";
type PostProps = {
    item: IPostPH;
}

const PostjsonPlaceHolderComponent:FunctionComponent<PostProps> = ({item})=> {

  return (
       <div>
           <h3>{item.title}</h3>
           <p>{item.body}</p>
       </div>
  );
};

export default PostjsonPlaceHolderComponent;