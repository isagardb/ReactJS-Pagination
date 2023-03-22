import React from 'react';
import { Card } from 'react-bootstrap';
import './PostCard.style.css'

export function PostCard({postId, postBody, postTitle}) {
    return (
        <Card key={postId} className='cardStyle'>
            <h4>{postTitle}</h4>
            <p>{postBody}</p>
        </Card>
    )
}
