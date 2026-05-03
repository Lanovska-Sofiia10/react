import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import UserPage from "../pages/UserPage.tsx";
import PostPage from "../pages/PostPage.tsx";
import CommentPage from "../pages/CommentPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import UserjsonPlaceHolderComponent from "../components/users/UserjsonPlaceHolderComponent.tsx";
import UserDummyjsonComponent from "../components/users/UserDummyjsonComponent.tsx";
import CommentserjsonPlaceHolderComponent from "../components/comments/CommentserjsonPlaceHolderComponent.tsx";
import PostDummyjsonComponent from "../components/posts/PostDummyjsonComponent.tsx";
import PostjsonPlaceHolderComponent from "../components/posts/PostjsonPlaceHolderComponent.tsx";

export const routes = createBrowserRouter([
    {path: '/', element:<Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UserPage/>, children:[
                    {path:'jsonplaceholder', element:<UserjsonPlaceHolderComponent/>},
                    {path:'dummyjson', element:<UserDummyjsonComponent/>}

                ]},
            {path: 'posts', element: <PostPage/>, children:[
                {path:'jsonplaceholder', element:<PostjsonPlaceHolderComponent/>},
                {path:'dummyjson', element:<PostDummyjsonComponent/>}
                            ]},
            {path: 'comments', element: <CommentPage/>, children:[
                {path:'jsonplaceholder', element:<CommentserjsonPlaceHolderComponent/>}
                            ]},
        ]},
])