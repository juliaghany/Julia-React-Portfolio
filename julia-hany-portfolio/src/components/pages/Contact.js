// Referring to Activity 16 -> src -> components -> form
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import starImage from '../../assets/images/stars.jpg';

const styles = {
    containerStyle: {
        backgroundColor: 'black',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    textStyle: {
        color: 'white',
    },
    form: {
        backgroundImage: `url(${starImage})`,
        width: '1000px',
        padding: '50px',
        border: '1px solid white',
        borderRadius: '20px',
        margin: '5px'
    },
    errorContainer: {
        marginTop: '10px',
        fontSize: '25px',
    }
}

function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue)
        } else {
            setMessage(inputValue)
        }
    }

    const handleEmailBlur = () => {
        if (email && !validateEmail(email)) {
            setErrorMessage('Your email is invalid')
        } else {
            setErrorMessage('');
        }
    }

    const handleMessageBlur = () => {
        if (!message.trim()) {
            setErrorMessage(
                `Message is required`)
        } else {
            setErrorMessage('');
        }
    }

    const handleFormSubmit = (e) => {

        e.preventDefault();


        if (!validateEmail(email)) {
            setErrorMessage('Your email is invalid');
            return;

        }
        if (!message.trim()) {
            setErrorMessage('Message is required');
            return;
        }

        if (name && email && message) {
            setErrorMessage(`Thank you for reaching out ${name}!`)
        }

        setName('');

        setMessage('');

        setEmail('');
    };

    return (
        <div style={styles.containerStyle}>

            <form className='container' style={styles.form}>
                <h1 style={styles.textStyle}>Contact Me</h1>
                <div className="mb-3" style={{ paddingTop: '10px'}}>
                    <label htmlFor="name" className="form-label" style={styles.textStyle}>Name</label>
                    <input
                        value={name}
                        name='name'
                        onChange={handleInputChange}
                        type='text'
                        className="form-control"
                        id='name'
                        placeholder='Enter your name'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='email' className='form-label' style={styles.textStyle}>Email</label>
                    <input
                        value={email}
                        name='email'
                        onChange={handleInputChange}
                        onBlur={handleEmailBlur}
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Enter email here'
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label" style={styles.textStyle}>Message</label>
                    <textarea
                        value={message}
                        name='message'
                        onChange={handleInputChange}
                        onBlur={handleMessageBlur}
                        className='form-control'
                        id='message'
                        rows='3'
                        placeholder='Enter your message'
                    ></textarea>
                </div>
                {errorMessage && (
                    <div style={styles.errorContainer}>
                        <p style={styles.textStyle} className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type='button' className='btn btn-primary' onClick={handleFormSubmit}>
                    Submit
                </button>
                
            </form>
      
        </div>
    );
}


export default Contact;
