// Referring to Activity 16 -> src -> components -> form
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const styles = {
    containerStyle: {
        backgroundColor: 'black',
        minHeight: '100vh',
    },
    textStyle: {
        color: 'white',
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
        }
    }

        const handleEmailBlur = () => {
            console.log('Email:', email)
            console.log('Is email valid:', validateEmail(email))
            if (email && !validateEmail(email)) {
                setErrorMessage('Your email is invalid')
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
                setErrorMessage(
                    `Message is required`
                );
                return;
            }

            setName('');

            setMessage('');

            setEmail('');
        };

        return (
            <div style={styles.containerStyle}>
            
                <form className='container'>
                    <h1 style={styles.textStyle}>Contact</h1>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label" style={styles.textStyle}>Name</label>
                        <input
                            value={name}
                            name='name'
                            onChange={handleInputChange}
                            onBlur={handleEmailBlur}
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
                            className='form-control'
                            id='message'
                            rows='3'
                            placeholder='Enter your message'
                        ></textarea>
                    </div>
                    <button type='button' className='btn btn-primary' onClick={handleFormSubmit}>
                        Submit
                    </button>
                </form>
                {errorMessage && (
                    <div>
                        <p style={styles.textStyle} className='error-text'>{errorMessage}</p>
                    </div>
                )}
            </div>
        );
    }


export default Contact;

