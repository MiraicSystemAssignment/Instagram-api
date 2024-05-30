import React, { useState } from 'react'
import axios from 'axios';

// const axios = require('axios');

const accessToken = 'IGQWRQZATRKWk44OWI0cWlnVnBrc29KZA2ppeG5xNmVmTjlCS04wSWZAITy1OamZAKVFZAXQ0FKa0l6cFF4a244cmpwdmR5ekt5SnQzbkdxZAW1zWmEtV082ZAUZAyazd0N2htYzlDZAEtxU01MZAUpBQXMxR0w3ZAEYzN1ppMlEZD';
const userId = '7404759666288553';
// const responseData = ["id", "caption", "media_url", "permalink"];
const url = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_url,permalink&access_token=${accessToken}`;


const ManagePost = () => {
  const [posts, setPosts] = useState([]);
  axios.get(url)
    .then(response => {
      if (response.status === 200) {
        // Extracting data from the response
        const posts = response.data.data.map(post => ({
            id: post.id,
            caption: post.caption,
            media_url: post.media_url,
            permalink: post.permalink
          }));
          
          setPosts(posts);
      } else {
        console.log("Failed to fetch posts");
      }
    })
    .catch(error => {
      console.error("Error fetching posts:", error);
    })
  return (
    <div>
      {
        posts.map(post => (
          <div key={post.id}>
            <p>{post.caption}</p>
            <img src={post.media_url} alt={post.caption} />
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">View on Instagram</a>
          </div>
        ))
      }
    </div>
  )
}

export default ManagePost
