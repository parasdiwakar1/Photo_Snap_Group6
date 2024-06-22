import React from 'react';
import './About.css';

const About = () => {
    const teamMembers = [
        {
            name: 'Jaya Srivastaw',
            role: 'Leader',
            imageSrc: 'https://png.pngtree.com/png-vector/20221128/ourmid/pngtree-hand-drawing-cartoon-career-woman-png-image_6483657.png',
            tasks: 'Jaya is our passionate leader with a keen eye for design and detail. She brings creativity and a strategic mindset to every project, ensuring our animations and user interfaces are both intuitive and visually stunning. She worked on animation video, navbar, and filters.'
        },
        {
            name: 'Rukhsana',
            role: 'Developer',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3dCCqCwuKJA-FxJQ_05oIJULo6KcI_1nGA&s',
            tasks: 'Rukhsana is a meticulous developer known for her problem-solving skills. She specializes in backend development and is currently focused on optimizing the image upload process. Her dedication ensures our platform remains efficient and reliable. She is worked on upload image from gallery.'
        },
        {
            name: 'Pooja',
            role: 'Developer',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwnDwweI0dKMGL5AKLYqF7COo65Rr2S7aDQ&s',
            tasks: 'Pooja is a dedicated developer who excels in front-end development. Her expertise lies in crafting seamless user experiences and designing elegant interfaces. She played a key role in enhancing our website\'s usability and aesthetic appeal. She worked on footer and About Us page.'
        },
        {
            name: 'Paras',
            role: 'Developer',
            imageSrc: 'https://cdn0.iconfinder.com/data/icons/boy-job/353/boy_occupation_work_cute_cartoon_bussiness-03-512.png',
            tasks: 'Paras is a versatile developer with a passion for innovation. His expertise spans across front-end and backend technologies, and he is instrumental in implementing advanced features like image editing tools. His commitment drives our platform\'s continuous improvement. He is worked on crop, rotate, flip, and other features.'
        }
    ];

    return (
        <div className="about-us-container">
            <h1 className="about-us-title">About Us</h1>
            <p className="about-us-description">
                Welcome to PhotoSnap! We are a team of four passionate developers who love to create amazing photo-sharing experiences. Our goal is to make it easy and fun for you to Edit and Share photos.
            </p>
            <div className="team-members">
                {teamMembers.map((member, index) => (
                    <div className="team-member" key={index}>
                        <div className="team-member-inner">
                            <div className="team-member-front">
                                <img src={member.imageSrc} alt={member.name} className="team-member-photo" />
                                <h3 className="team-member-name">{member.name}</h3>
                                <p className="team-member-role">{member.role}</p>
                            </div>
                            <div className="team-member-back">
                                <p>{member.tasks}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
