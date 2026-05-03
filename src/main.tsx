import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout.tsx";
import UserPage from "./pages/UserPage.tsx";
import PostPage from "./pages/PostPage.tsx";
import CommentPage from "./pages/CommentPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";

createRoot(document.getElementById('root')!)
    .render(<BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="users" element={<UserPage />} />
                <Route path="posts" element={<PostPage />} />
                <Route path="comments" element={<CommentPage />} />
                <Route path="products" element={<ProductPage />} />

            </Route>
        </Routes>
    </BrowserRouter>)
