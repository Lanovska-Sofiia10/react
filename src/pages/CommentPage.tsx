import {Outlet} from "react-router-dom";
import CommentsConponent from "../components/comments/CommentsComponent.tsx";

const CommentPage = ()=> {

  return (
       <>
           <CommentsConponent/>
           <Outlet/>
       </>
  );
};

export default CommentPage;