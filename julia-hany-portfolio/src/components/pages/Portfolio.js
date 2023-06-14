import React from 'react';
// import Card from '../Card';
import birthdayBuddyImage from '../images/Birthday-Confetti-Unicorn-768x584.jpg'
import popcornProjectImage from '../images/Popcorn Portal Logo.png'

const cardStyle = {
    width: '18rem',
};

const imageStyle = {
    width: '10rem',
};

const birthdayProject = {
    name: 'BirthdayBuddy',
    description: 'Birthday gift tracker app',
    link: 'https://github.com/juliaghany/BirthdayBuddy'
};

const popcornPortal = {
    name: 'Popcorn Portal',
    description: 'Find movies!',
    link: 'https://github.com/juliaghany/Popcorn-Portal'
};
export default function Portfolio() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card" style={cardStyle}>
                        <img
                            className="card-img-top"
                            src={birthdayBuddyImage}
                            alt="Confetti"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{birthdayProject.name}</h5>
                            <p className="card-text">{birthdayProject.description}</p>
                            <a href={birthdayProject.link} className="btn btn-primary">
                                Click Here to view GitHub repository
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card" style={cardStyle}>
                        <img
                            className="card-img-top"
                            src={popcornProjectImage}
                            alt="Confetti"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Name: {popcornPortal.name}</h5>
                            <p className="card-text">Description: {popcornPortal.description}</p>
                            <a href={popcornPortal.link} className="btn btn-primary">
                                Click Here to view GitHub repository
                            </a>
                        </div>
                    </div>
                </div>
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