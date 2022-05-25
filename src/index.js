import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Comment from './comments/Comment';
import Clock from './Clock';
import Login from './forms/Login';

// const content = {
//   date: new Date().toLocaleString(),
//   author:{
//     name:'Marilyn',
//     avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/512px-Breezeicons-actions-22-im-user.svg.png'
//   },
//   text : 'Hi everybody'
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Comment text={content.text} author={content.author} date={content.date} />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Login />
);


reportWebVitals();
