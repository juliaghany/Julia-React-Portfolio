import React from 'react';
// import motion for image animation 
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
// import images for projects
import birthdayBuddyImage from '../../assets/images/Birthday-Confetti-Unicorn-768x584.jpg'
import popcornProjectImage from '../../assets/images/Popcorn Portal Logo.png';
import techBlogImage from '../../assets/images/tech-blog.png';
import weatherDashboardImage from '../../assets/images/weather-dashboard-screenshot.png';
import jateImage from '../../assets/images/julia-text-editor.herokuapp.com_.png'
import quizImage from '../../assets/images/intro-page.png';
import jamVault from '../../assets/images/jamvault.png'
import '../../styles/Portfolio.css'

// create array of projects to map through
const projects = [
    {
        name: 'BirthdayBuddy',
        link1: 'https://github.com/juliaghany/BirthdayBuddy',
        link2: 'https://birthday-buddy.herokuapp.com/login',
        image: birthdayBuddyImage,
        alt: 'Birthday confetti (purple, pink, teal, gold) with white background',
        text: 'BirthdayBuddy is an application that allows users to create a list of gift ideas for friends and family. The user can add a receiver, their name and their birthday, and then they are able to create and view a list of gift ideas for that receiver.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Handlebars', 'MySQL']
    },
    {
        name: 'Popcorn Portal',
        link1: 'https://github.com/juliaghany/Popcorn-Portal',
        link2: 'https://juliaghany.github.io/Popcorn-Portal/',
        image: popcornProjectImage,
        alt: 'Buttery popcorn in movie theater bucket with red and white stripes, logo on the bucket that reads "Popcorn Portal"',
        text: 'Popcorn Portal is an application created for users to search and save movies. After searching and selecting a movie, the user will then be presented with information such as: the movie poster, director, actors, description, streaming platforms, and recommended movies.',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        name: 'JamVault',
        link1: 'https://github.com/juliaghany/JamVault',
        link2: 'https://jamvault-3a4f37943c6d.herokuapp.com/',
        image: jamVault,
        alt: 'Pink, purple, orange header and footer. JamVault as title, links in navigation bar read The Vault, Timeline, and Login or Logout',
        text: 'An application where users can search, select, and share memories from a concert. After sharing their own memories, users can view other posts made by other users.',
        technologies: ['React', 'CSS', 'JavaScript', 'React Router DOM', 'Bootstrap', 'Node.js', 'Express'],
    },
    {
        name: 'Tech Blog',
        link1: 'https://github.com/juliaghany/Tech-Blog',
        link2: 'https://julia-hany-tech-blog.herokuapp.com/',
        image: techBlogImage,
        alt: 'Blog website that has a home, dashboard, and login tabs. Shows title of blog, username of who posted it, date created, and blog content',
        text: 'Tech Blog is a a CMS-style blog site where users can publish articles, blog posts, and their thoughts and opinions on tech topics.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL'],

    },
    {
        name: 'Weather Dashboard',
        link1: 'https://github.com/juliaghany/Weather-Dashboard',
        link2: 'https://juliaghany.github.io/Weather-Dashboard/',
        image: weatherDashboardImage,
        alt: 'Weather dashboard that shows search bar, once a city is searched it shows the temperature, wind speed, and humidity for next five days for that city',
        text: 'Weather Dashboard is an application that allows users to search and view the 5-day forecast for a city of their choosing.',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    {
        name: 'Timed Code Quiz',
        link1: 'https://github.com/juliaghany/Timed-Code-Quiz',
        link2: 'https://juliaghany.github.io/Timed-Code-Quiz/',
        image: quizImage,
        alt: 'Introduction page to a coding quiz challenge, start quiz button at the bottom',
        text: 'Timed Code Quiz is an application where users can test their knowledge on coding by taking a timed, multiple-choice questions quiz.',
        technologies: ['HTML', 'CSS', 'JavaScript']
    }
]
// display each project 
export default function Portfolio() {
    return (
        <div className="container" style={{ paddingTop: '35px' }}>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-md-4 d-flex mb-5" key={index}>
                        {/* motion div from framer motion */}
                        <motion.div
                            className="portfolio-item"
                            whileHover={{ scale: 1.1 }}
                        >
                            <img
                                className="portfolio-image"
                                src={project.image}
                                alt={project.alt}
                            />
                            <div className="portfolio-overlay">
                                <a className="portfolio-name" href={project.link2} target='_blank' style={{ paddingTop: '5px'}}>{project.name}</a>
                                <a
                                    className="portfolio-link"
                                    href={project.link1}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="github-icon" />
                                </a>
                                <p style={{ color: 'white', paddingTop: '7px', textAlign: 'center' }}>{project.text}</p>
                                {project.technologies?.length ? (
                                    <ul style={{ color: 'white'}}>
                                        {project.technologies.map((technology, index) => (
                                            <li key={index}>{technology}</li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}