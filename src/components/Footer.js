import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'

const styles = {
    background: {
        backgroundColor: 'black'
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    icons: {
        fontSize: '40px',
        margin: '10px'
    },
    contentContainer: {
        textAlign: 'center',
        fontSize: '18px',
        paddingTop: '5px',
        color: 'white',
        paddingBottom: '10px'
    }
}

const Footer = () => {
    return (
        <footer style={styles.background}>
            <div style={styles.iconContainer}>
                <a href='https://www.linkedin.com/in/julia-hany-41224626b/' title='View my LinkedIn' target='_blank'>
                    <FaLinkedin style={styles.icons} />
                </a>
                <a href='https://github.com/juliaghany' title='View my GitHub' target='_blank'>
                    <FaGithub style={styles.icons} />
                </a>
                <a href='https://www.instagram.com/heyimjules/' title='View my Instagram' target='_blank'>
                    <FaInstagram style={styles.icons} />
                </a>
                {/* added email icon so user can email me
                <a href='mailto:juliaghany@msn.com' title='Email me' target='_blank'>
                    <FaEnvelope style={styles.icons} />
                </a> */}
            </div>
            <div style={styles.contentContainer}>
                Email me: <a href='mailto:juliaghany@msn.com'>juliaghany@msn.com</a>
            </div>
        </footer>
    );
}

export default Footer;