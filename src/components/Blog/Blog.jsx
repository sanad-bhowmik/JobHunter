import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
   <div>
    <h1 className='text-center text-5xl underline font-bold'><span className='text-red-300'>Q</span> & <span className='text-purple-300'>A</span></h1>
     <div className="chat-container ">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" alt="avatar" />
          </div>
        </div>
        <div className="chat-bubble bg-blue-500 text-lg"><span className='font-bold text-2xl'>Q-1:</span>When should you use context API?</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://1000logos.net/wp-content/uploads/2023/02/ChatGPT-Logo.png" alt="avatar" />
          </div>
        </div>
        <div className="chat-bubble mt-20 text-lg">You should use Context API in React when you need to share data between components that are not directly connected through the component tree.</div>
        <div className="chat-footer opacity-50">Seen</div>
      </div>
    </div>
     <div className="chat-container ">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" alt="avatar" />
          </div>
        </div>
        <div className="chat-bubble bg-blue-500 text-lg"><span className='font-bold text-2xl'>Q-2:</span> what is custom hook in react?</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://1000logos.net/wp-content/uploads/2023/02/ChatGPT-Logo.png" alt="avatar" />
          </div>
        </div>
        <div className="chat-bubble mt-20 text-lg">Custom hook in React is a JavaScript function that allows you to reuse stateful logic across components.</div>
        <div className="chat-footer opacity-50">Seen</div>
      </div>
    </div>
     <div className="chat-container ">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" alt="avatar" />
          </div>
        </div>
        <div className="chat-bubble bg-blue-500 text-lg"><span className='font-bold text-2xl'>Q-3:</span> What is useRef?</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://1000logos.net/wp-content/uploads/2023/02/ChatGPT-Logo.png" alt="avatar" />
          </div>
        </div>
        <div className="chat-bubble mt-20 text-lg">useRef in React is a hook that returns a mutable ref object whose .current property is initialized to a passed-in argument.</div>
        <div className="chat-footer opacity-50">Seen</div>
      </div>
    </div>
     <div className="chat-container ">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg" alt="avatar" />
          </div>
        </div>
        <div className="chat-bubble bg-blue-500 text-lg"><span className='font-bold text-2xl'>Q-4:</span>What is useMemo?</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://1000logos.net/wp-content/uploads/2023/02/ChatGPT-Logo.png" alt="avatar" />
          </div>
        </div>
        <div className="chat-bubble mt-20 text-lg">useMemo in React is a hook that memoizes a function's result and returns the cached value when the input dependencies remain the same.</div>
        <div className="chat-footer opacity-50">Seen</div>
      </div>
    </div>
   </div>
  );
};

export default Blog;
