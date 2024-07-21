import React from 'react';
import "../App.css"
export default function Resume() {
    const path = './src/assets/images/resume.png'
    return (
        <article className='m-4 text-white min-w-[300px] w-fit max-w-lg'>
            <h1 className='font-bold text-2xl'> Charles Gross - Resume</h1>

            <h2 className='text-xl font-medium my-1'> Summary</h2>
            <div className='ml-4'>
            <p>I love to learn new software environments and take on new challenges!
                I am experienced in all stages of software development and have pursued client-based work on my own and as part of a team.
            </p>
            <p>
                I am currently focusing on developing in the MERN stack.
                I am using React.js for front-end development, Express.js and MongoDB for back-end development, and Node.js as the JavaScript runtime environment.
            </p>
            <p>
                Future goal: React VR
            </p>
            </div>
            <h2 className='text-xl  font-medium my-1'> Experience</h2>
            <div className='font-medium'>Full-Stack Student</div>
            <div className='ml-4 my-1'> March 2024 – June 2024<br></br>
            Panama City, FL<br></br></div>
            <div className='font-medium'>Self - Software Developer</div>
            <div className='ml-4 my-1'> September 2012 - February 2022<br></br>
            Marietta, GA</div>

           <div className='ml-6'> I worked with team members on client projects. We developed web apps and native mobile applications using <span className='font-bold'>HTML 5, JavaScript, jQuery, Node.js, MySQL, Objective C, Java, React, and React Native.</span>
           </div>
            <h2 className='text-xl font-medium my-1'> Education</h2>
            <div className='ml-4'>  Southern Polytechnic State University<br></br>
            Computer Science and Engineering · (2010 - 2013)<br></br>
            UCF Full Stack Bootcamp March 2024 - Grauduate<br></br>
            </div>

        </article>
    );
}