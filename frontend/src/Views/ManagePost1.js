import React, { useState } from 'react'
import axios from 'axios';
// const axios = require('axios');

// Replace these values with your actual access token and user ID
const ACCESS_TOKEN = 'IGQWRQT1hYU0h3VFRZAa09lZAHFsRm1yV2NFQU0tNGFCcUtqeTVsWmphckpvWVd5V1pCSGpUUGlUVzlpQU9sekU4dHA2Und5Mjk3UEU3cG5OVExjUzdzc0xqa1hTaW05MFZAOZAjc2akZA4RDN6c3NhOUx3RXdjZA3djZAlUZD';
const USER_ID = '7404759666288553';
const newCaption = 'Updated Caption';
// Fetch posts
async function fetchPosts() {
  try {
    const response = await axios.get(`https://graph.instagram.com/${USER_ID}/media`, {
      params: {
        access_token: ACCESS_TOKEN,
        fields: 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp'
      }
    });
    console.log('Fetched Posts:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching posts:', error.response ? error.response.data : error.message);
  }
}

async function fetchComments() {
    try {
      const response = await axios.get(`https://graph.instagram.com/${18030023407895834}/comments`, {
        params: {
          access_token: ACCESS_TOKEN
        }
      });
      console.log('Fetched Comments:', response.data.data);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching comments:', error.response ? error.response.data : error.message);
      throw error;
    }
  }

// Edit a post (editing caption as an example)
async function editPost(mediaId, newCaption) {
    try {
      const response = await axios.post(`https://graph.instagram.com/${mediaId}`, null, {
        params: {
          access_token: ACCESS_TOKEN,
          caption: newCaption,
          comment_enabled: true
        }
      });
      console.log('Post Edited:', response.data);
    } catch (error) {
      console.error('Error editing post:', error.response ? error.response.data : error.message);
    }
  }
// Delete a post
async function deletePost(mediaId) {
  try {
    const response = await axios.delete(`https://graph.instagram.com/${mediaId}`, {
      params: {
        access_token: ACCESS_TOKEN
      }
    });
    console.log('Post Deleted:', response.data);
  } catch (error) {
    console.error('Error deleting post:', error.response ? error.response.data : error.message);
  }
}




const ManagePost1 = () => {
  const [posts, setPosts] = useState([]);
  (async () => {
    const posts = await fetchPosts();
    fetchComments();
  
    // Example mediaId and newCaption for editing
    if (posts.length > 0) {
      const mediaId = posts[0].id;
      await editPost(mediaId, newCaption);
  
      // Example mediaId for deleting
      if (posts.length > 1) {
        const mediaIdToDelete = posts[1].id;
        await deletePost(mediaIdToDelete);
      }
     }
  })()
  
  return (
    <div>
      <h1>Manage Posts</h1>
      <p>Use this feature to get and publish posts and get basic profile information, photos and videos from instagram public accounts.</p>
    </div>

  )
};

export default ManagePost1
