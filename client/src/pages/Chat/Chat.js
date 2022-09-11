import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { chat } from '../styles';
import chatMain from "../../assets/images/chat/chat3.png";
// import '../css/chat.css';

export const ChatLogin = () => {
    // set initial form state
    const [userFormData, setUserFormData] = useState({ username: '', room: '' });

    // const [loginPatients] = useMutation(LOGIN_PATIENTS); //TODO: get username from currentlogin

    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
        console.log({ name, value })

        // // DEBUG check whos logged in
        // try {
        //     let currentUser
        //     const loggedIn = Auth.loggedIn();
        //     if (loggedIn) {
        //         currentUser = Auth.getProfile();
        //         console.log(currentUser)
        //         setUserFormData({
        //             username: currentUser.username,
        //             email: currentUser.email,
        //             _id: currentUser._id,
        //         });
        //     }
        //     console.log(loggedIn, currentUser)
        // } catch (e) {
        //     console.error(e);
        //     setShowAlert(true);
        // }
        // // DEBUG check whos logged in
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        // try {
        //     const loggedIn = Auth.loggedIn();
        //     if (loggedIn) {
        //         const currentUser = Auth.getProfile();
        //         console.log(currentUser)
        //         setUserFormData({
        //             username: currentUser.username,
        //             email: currentUser.email,
        //             _id: currentUser._id,
        //         });
        //     }

        //     // change page to chat dashboard!
        // } catch (e) {
        //     console.error(e);
        //     setShowAlert(true);
        // }

        // setUserFormData({
        //     username: '',
        //     email: '',
        //     _id: '',
        // });
    };

    return (

        <div style={chat['.chat-container']}>
            <header style={chat['.chat-header']}>
                <h1><i className="fas fa-smile"></i> Medical Portal Chat Support</h1>
                <a style={[chat. chat['.btn']]}>Leave Room</a>
            </header>
            <main style={chat['.chat-main']}>
                <div style={chat['.chat-sidebar']}>
                    <h3><i className="fas fa-comments"></i> Room Name:</h3>
                    <h2 id="room-name"></h2>
                    <h3><i className="fas fa-users"></i> Users</h3>
                    <ul id="users"></ul>
                </div>
                <div style={chat['.chat-messages']}></div>
            </main>
            <div style={chat['.chat-form-container']}>
                <form id="chat-form">
                    <input id="msg" type="text" placeholder="Enter Message" required autocomplete="off" />
                    <button style={chat['.btn']}><i className="fas fa-paper-plane"></i> Send</button>
                </form>
            </div>
        </div>
    )
}

export default ChatLogin;
