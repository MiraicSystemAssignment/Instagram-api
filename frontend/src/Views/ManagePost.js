import React, { useState } from 'react'
import axios from 'axios';

// const axios = require('axios');

const accessToken = 'IGQWRQT1hYU0h3VFRZAa09lZAHFsRm1yV2NFQU0tNGFCcUtqeTVsWmphckpvWVd5V1pCSGpUUGlUVzlpQU9sekU4dHA2Und5Mjk3UEU3cG5OVExjUzdzc0xqa1hTaW05MFZAOZAjc2akZA4RDN6c3NhOUx3RXdjZA3djZAlUZD';
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
