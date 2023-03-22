import React from "react";
import { PostCard } from "../PostCard/PostCard";
import './PostList.style.css';


export function PostList(prop) {
    return(
        prop.posts.map(post => (
            <PostCard key={post.id} postId={post.id} postTitle={post.title} postBody={post.body} />
        ))
    )
}
