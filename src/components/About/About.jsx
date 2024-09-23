import "./About.css"

export default function About() {
    return (
        <div className='about'>
            <div className="aboutData">

                <h3 className="whatIDo">What I do?</h3>
                <p className="answer">

                    I am a junior React frontend developer with a strong foundation in Computer Science.
                    I have a passion for building modern, responsive, and intuitive web applications using React.js.
                    <br />

                    <span className="career"> While I’m early in my career, I’m continuously developing my skills and love to experiment with new libraries and tools.</span>
                </p>

                <div className="profession">
                    <h1 className="title"><span>Frontend</span> <span>Developer</span></h1>
                    <p className="myExperience">
                        My experience includes:

                        Building small-scale applications with React, utilizing components, hooks, and state management.
                        Writing clean, modular code following best practices.
                        A focus on creating smooth user experiences and responsive designs.
                        I’m excited about tackling real-world challenges, collaborating with teams,
                        and growing as a developer in a fast-paced environment.
                        My goal is to contribute to impactful projects while learning from experienced professionals along the way.
                    </p>
                </div>
                <div className="myEducation">
                    <h1 className="title">My Education</h1>
                    <div className="detailsOfGrad">
                        <h3 className="university">Helwan University, Faculty of Engineering, Computer Department.</h3>
                        <h4 className="grade">Bachelor of Engineering in Computer Science</h4>
                        <h5 className="yearOfGrad">Graduated: 2024</h5>
                    </div>
                </div>
                <div className="mySkills">

                    <h1 className="title">My Skills</h1>
                    <ul className="TheSkills">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>Git-Github</li>
                        <li>React Context API</li>
                        <li>npm</li>
                        <li>Algorithms and Data Structures (Ongoing study)</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
