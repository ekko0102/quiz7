import React from 'react';
import ReactDOM from 'react-dom';
import LoginModule from './login'
import File from "./file"
function UserGreeting(props) {   
    return <LoginModule/>; 
} 
function GuestGreeting(props) {   
    return <File/>; 
} 
function Greeting(props) {   
    const isLoggedIn = props.isLoggedIn;
   if (isLoggedIn) {
      return <GuestGreeting />;
   }
   return <UserGreeting />; 
} 
ReactDOM.render(   
    <Greeting isLoggedIn={false} />,   document.getElementById('root') 
);
export default Greeting;