import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import UserPage from "../pages/UserPage.tsx";
import PostPage from "../pages/PostPage.tsx";
import CommentPage from "../pages/CommentPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import CommentsjsonPlaceHolderComponent from "../components/comments/jsonplaceholder/CommentsjsonPlaceHolderComponent.tsx";
import CommentsDummyjsonComponent from "../components/comments/dummyjson/CommentsDummyjsonComponent.tsx";
import UsersjsonPlaceHolderComponent from "../components/users/jsonplaceholder/UsersjsonPlaceHolderComponent.tsx";
import UsersDummyjsonComponent from "../components/users/dummyjson/UsersDummyjsonComponent.tsx";
import PostsjsonPlaceHolderComponent from "../components/posts/jsonplaceholder/PostsjsonPlaceHolderComponent.tsx";
import PostsDummyjsonComponent from "../components/posts/dummyjson/PostsDummyjsonComponent.tsx";

export const routes = createBrowserRouter([
    {path: '/', element:<Layout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UserPage/>, children:[
                    {path:'jsonplaceholder', element:<UsersjsonPlaceHolderComponent/>},
                    {path:'dummyjson', element:<UsersDummyjsonComponent/>}

                ]},
            {path: 'posts', element: <PostPage/>, children:[
                {path:'jsonplaceholder', element:<PostsjsonPlaceHolderComponent/>},
                {path:'dummyjson', element:<PostsDummyjsonComponent/>}
                            ]},
            {path: 'comments', element: <CommentPage/>, children:[
                {path:'jsonplaceholder', element:<CommentsjsonPlaceHolderComponent/>},
                {path:'dummyjson', element:<CommentsDummyjsonComponent/>}
                            ]},
        ]},
])