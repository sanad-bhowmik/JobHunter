import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="chat-container">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" alt="avatar" />
          </div>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://1000logos.net/wp-content/uploads/2023/02/ChatGPT-Logo.png" alt="avatar" />
          </div>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen</div>
      </div>
    </div>
  );
};

export default Blog;
