import { useState} from 'react';

import { validateEmail } from '../utils/helpers';


function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); 

    const handleInputChange = (e) => {
        
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {

        e.preventDefault();

        if (!validateEmail(email) || !name) {
            setErrorMessage('Email or name is invalid');

            return;
        }
        if (!checkMessage(message)) {
            setErrorMessage(
                `Please include a message: ${name}`
            );
            return;
        }

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container text-center">
            <h1>Contact Me</h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="message"
                />
                <button type="submit">Submit</button>        
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>    
            )}
        </div>
    );
}
// const Contact = () => (
// <>
// <h2 class="first">Contact Me</h2>
//                 <ul class="contact">
//                     <li>612.634.5789</li>
//                     <li>jboogie83@hotmail.com</li>
//                     <li>GitHub</li>
//                     <li>LinkedIn</li>
//                 </ul>
// </>                
// )

export default Contact