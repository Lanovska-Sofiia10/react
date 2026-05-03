import {Outlet} from "react-router-dom";
import PostsComponent from "../components/posts/PostsComponent.tsx";

const PostPage = ()=> {

  return (
       <>
           <PostsComponent/>
           <Outlet/>
       </>
  );
};

export default PostPage;