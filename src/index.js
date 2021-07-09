import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {text:'Hello its my blog', likes:'5', dislikes:'9'},
    {text:'im new here', likes:'2', dislikes:'2'},
    {text:'wtf', likes:'5', dislikes:'2'},
]
let dialogs = [
    {id:1, name: 'Dima'},
    {id:2, name: 'Yana'},
    {id:3, name: 'Tanya'},
    {id:4, name: 'Kolya'},
]
let messages =[
    {id:1, mess: 'hi',time: '20:31', side:'left'},
    {id:2, mess: 'hello',time: '20:32', side:'right'},
    {id:3, mess: 'how u',time: '20:33', side:'left'},
    {id:4, mess: 'fine. U?',time: '20:34', side:'right'},
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
