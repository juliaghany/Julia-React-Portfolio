import React from 'react';

const styles = {
    containerStyle: {
        backgroundColor: 'black',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: 'white'
    },
    buttonStyle: {
        marginTop: '20px',
    },
    listStyle: {
        marginBottom: '30px',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '20px',
        padding: '20px'
    }
}


function Resume() {

    return (
        <div style={styles.containerStyle} >
            <div style={styles.listStyle}>
                <h2>Front-end Proficiences</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div style={styles.listStyle}>
                <h2>Back-end Proficiences</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
            <div style={styles.buttonStyle}>
                <a href='https://drive.google.com/file/d/1LJ1nFOpG5h_wmlFMemtXnshkZj7st6zf/view?usp=sharing' target='_blank' rel="nonreferrer" className="btn btn-primary">Click to view Resume</a>
            </div>
        </div>
    )
};

export default Resume;