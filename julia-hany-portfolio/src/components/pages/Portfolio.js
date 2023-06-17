import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import birthdayBuddyImage from '../../assets/images/Birthday-Confetti-Unicorn-768x584.jpg'
import popcornProjectImage from '../../assets/images/Popcorn Portal Logo.png';
import techBlogImage from '../../assets/images/tech-blog.png';
import weatherDashboardImage from '../../assets/images/weather-dashboard-screenshot.png';
import jateImage from '../../assets/images/julia-text-editor.herokuapp.com_.png'
import quizImage from '../../assets/images/intro-page.png';
import '../../styles/Portfolio.css'

// create array of projects to map through
const projects = [
    {
        name: 'BirthdayBuddy',
        link1: 'https://github.com/juliaghany/BirthdayBuddy',
        link2: 'https://birthday-buddy.herokuapp.com/login',
        image: birthdayBuddyImage
    },
    {
        name: 'Popcorn Portal',
        link1: 'https://github.com/juliaghany/Popcorn-Portal',
        link2: 'https://juliaghany.github.io/Popcorn-Portal/',
        image: popcornProjectImage
    },
    {
        name: 'Tech Blog',
        link1: 'https://github.com/juliaghany/Tech-Blog',
        link2: 'https://julia-hany-tech-blog.herokuapp.com/',
        image: techBlogImage
    },
    {
        name: 'Weather Dashboard',
        link1: 'https://github.com/juliaghany/Weather-Dashboard',
        link2: 'https://juliaghany.github.io/Weather-Dashboard/',
        image: weatherDashboardImage
    },
    {
        name: 'Progressive Web Application',
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
                                alt="Project"
                            />
                            <div className="portfolio-overlay">
                                <a className="portfolio-name" href={project.link2} target='_blank'>{project.name}</a>
                                <a
                                    className="portfolio-link"
                                    href={project.link1}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub className="github-icon" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}