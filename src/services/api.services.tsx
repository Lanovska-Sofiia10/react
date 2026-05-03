import {urlPH} from "../constants/urlPH.ts";
import type {IUserPH} from "../models/IUserPH.ts";
import {urlD} from "../constants/urlD.ts";
import type {IUserD} from "../models/IUserD.ts";
import type {IPostPH} from "../models/IPostPH.ts";
import type {IPostD} from "../models/IPostD.ts";
import type {ICommentPH} from "../models/ICommentPH.ts";
import type {ICommentD} from "../models/ICommentD.ts";

export const PHService = {
    getUsers: async ():Promise<IUserPH[]> => {
        return await fetch(urlPH.users.allusers)
              .then(response => response.json())
    },
    getPosts: async ():Promise<IPostPH[]> => {
        const posts = await fetch(urlPH.posts.allposts)
            .then(response => response.json())

        return posts
    },
    getComments: async ():Promise<ICommentPH[]> => {
        return await fetch(urlPH.comments.allcomments)
            .then(response => response.json())

    }
}
export const DService = {
    getUsers: async ():Promise<IUserD[]> => {
        const data = await fetch(urlD.users.allusers)
            .then(response => response.json())

        return data.users;
    },
    getPosts: async ():Promise<IPostD[]> => {
        const data = await fetch(urlD.posts.allusers)
            .then(response => response.json())

        return data.posts;
    },
    getComments: async ():Promise<ICommentD[]> => {
        const data = await fetch(urlD.comments.allcomments)
            .then(response => response.json())

        return data.comments;
    },
}