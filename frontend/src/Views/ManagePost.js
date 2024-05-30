import React, { useState } from 'react'
import axios from 'axios';

// const axios = require('axios');

const accessToken = 'IGQWRPZAlp0WHlidldrdGY4ZAUJ2TjBnaFgySHNCcEpHdHVzblZArcHlEX0FWc0FQeFktUTh2ZA2ZAGLTlIdkU0d0tPN3FQNHhfWWhCS3pQZAzV3S1Y0eU1aWnJNMF9ad2g5TGs0VjBCMUsyd0xqNVdLbUE2YU0zN2VVbG8ZD';
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
