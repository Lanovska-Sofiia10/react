import type {IPostD} from "../../../models/IPostD.ts";
import type {FunctionComponent} from "react";

type PostsProps = {
    item: IPostD
}
const PostDummyjsonComponent:FunctionComponent<PostsProps> = ({item})=> {

  return (
       <div>
           <h3>{item.title}</h3>
           <p>{item.body}</p>
       </div>
  );
};

export default PostDummyjsonComponent;