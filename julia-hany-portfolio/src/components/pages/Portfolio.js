import React from 'react';
import birthdayBuddyImage from '../images/Birthday-Confetti-Unicorn-768x584.jpg';
import popcornProjectImage from '../images/Popcorn Portal Logo.png';
import techBlogImage from '../images/tech-blog.png';
import weatherDashboardImage from '../images/weather-dashboard-screenshot.png';
import jateImage from '../images/julia-text-editor.herokuapp.com_.png'
import quizImage from '../images/intro-page.png';
import '../../styles/Portfolio.css'

const cardStyle = {
    width: '20rem',
};

const projects = [
    {
        name: 'BirthdayBuddy',
        // description: 'User-friendly application designed to assist individuals in organizing and managing their gift-giving for loved ones. With a focus on users who may struggle with forgetfulness or have numerous people in their lives, this application streamlines the process of selecting and keeping track of gifts.',
        link1: 'https://github.com/juliaghany/BirthdayBuddy',
        link2: 'https://birthday-buddy.herokuapp.com/login',
        image: birthdayBuddyImage
    },
    {
        name: 'Popcorn Portal',
        // description: 'An application designed to help users find and decide on movies to watch. It provides detailed information about searched movies, including title, poster, description, actors, and directors. Additionally, it suggests similar movies, offers streaming platform links, and allows users to save movies to a “Saved Movies” list.',
        link1: 'https://github.com/juliaghany/Popcorn-Portal',
        link2: 'https://juliaghany.github.io/Popcorn-Portal/',
        image: popcornProjectImage
    },
    {
        name: 'Tech Blog',
        // description: "CMS-style blog site where developers can publish their blog posts and comment on other developers' posts.",
        link1: 'https://github.com/juliaghany/Tech-Blog',
        link2: 'https://julia-hany-tech-blog.herokuapp.com/',
        image: techBlogImage
    },
    {
        name: 'Weather Dashboard',
        // description: 'Some description',
        link1: 'https://github.com/juliaghany/Weather-Dashboard',
        link2: 'https://juliaghany.github.io/Weather-Dashboard/',
        image: weatherDashboardImage
    },
    {
        name: 'PWA',
        link1: 'https://github.com/juliaghany/Progressive-Web-Application',
        link2: 'https://julia-text-editor.herokuapp.com/',
        image: jateImage
    },
    {
        name: 'Timed Code Quiz',
        link1: 'https://github.com/juliaghany/Timed-Code-Quiz',
        link2: 'https://juliaghany.github.io/Timed-Code-Quiz/',
        image: quizImage
    }
]

export default function Portfolio() {
    return (
        <div className="container" style={{ paddingTop: '20px'}}>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-4 d-flex" key={index}>
                        <div className="card" style={cardStyle}>
                            <img
                                className="card-img-top"
                                src={project.image}
                                alt="Project"
                                style={{ objectFit: 'cover', height: '200px' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{project.name}</h5>
                                {/* <p className="card-text">{project.description}</p> */}
                                <a href={project.link1} className="btn btn-primary mt-auto" target='_blank' style={{ backgroundColor: 'purple'}}>
                                    View GitHub repository
                                </a>
                                <a href={project.link2} className="btn btn-primary mt-auto" target='_blank' style={{ backgroundColor: 'purple'}}>
                                    View Live Website
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}








     


        // <div className="container">
        //     <div className="card" style={cardStyle}>
        //         <img
        //             className="card-img-top"
        //             src={birthdayBuddyImage}
        //             alt="Confetti"
        //         />
        //         <div className="card-body">
        //             <h5 className="card-title">Name: {birthdayProject.name}</h5>
        //             <p className="card-text">Description: {birthdayProject.description}</p>
        //             <a href={birthdayProject.link} className="btn btn-primary">
        //                 Click Here to view GitHub repository
        //             </a>
        //         </div>
        //     </div>
        //     <div className="card" style={cardStyle}>
        //         <img
        //             className="card-img-top"
        //             src={popcornProjectImage}
        //             alt="Confetti"
        //         />
        //         <div className="card-body">
        //             <h5 className="card-title">Name: {popcornPortal.name}</h5>
        //             <p className="card-text">Description: {popcornPortal.description}</p>
        //             <a href={popcornPortal.link} className="btn btn-primary">
        //                 Click Here to view GitHub repository
        //             </a>
        //         </div>
        //     </div>
        // </div>