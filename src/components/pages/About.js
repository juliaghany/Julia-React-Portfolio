// Referring to Activity 24 -> src -> components -> pages -> About.js
import React from 'react';
import '../../styles/About.css'
import myImage from '../../assets/images/my-image.jpg'

// additional styling
const styles = {
    bodyStyle: {
        backgroundColor: 'black',
        minHeight: '100vh',
    },
    contentStyle: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: '20px',
        margin: '20px',
        borderRadius: '20px',
        padding: '20px'
    }
}

export default function About() {
    return (
        <div style={styles.bodyStyle}>
            <img className='my-image' src={myImage} alt='My image'/>
            <p style={styles.contentStyle}>
                Hello, I'm Julia Hany, an aspiring full-stack web developer with a passion for creating engaging and dynamic online experiences. 
                I have nearly completed a comprehensive web development course through Columbia Engineering Boot Camp where I've gained a solid 
                foundation in front-end and back-end technologies. Prior to that, I gained experience as a waitress, honing my communication
                and time management skills in a fast-paced environment. Working closely with diverse guests, I developed exceptional interpersonal 
               
                and create personalized movie lists.<br/><br/>

                Outside of coding, you can find me exploring nature on hiking trails, expressing my creativity through various forms of art, 
                or playing my favorite instruments. I believe these interests contribute to my ability to think outside the box and approach
                coding challenges with a fresh perspective.
                Looking ahead, my goal is to build impactful web applications that enhance user experiences and contribute to the ever-evolving 
                digital world. I'm eager to expand my knowledge, learn new technologies, and collaborate with like-minded individuals in the industry.
            </p>
        </div>
    )
}