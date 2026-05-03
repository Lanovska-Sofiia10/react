import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import UserPage from "../pages/UserPage.tsx";
import PostPage from "../pages/PostPage.tsx";
import CommentPage from "../pages/CommentPage.tsx";
import ProductPage from "../pages/ProductPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element:<Layout/>, children: [
            {path: 'users', element: <UserPage/>},
            {path: 'posts', element: <PostPage/>},
            {path: 'comments', element: <CommentPage/>},
            {path: 'products', element: <ProductPage/>},
        ]},
])