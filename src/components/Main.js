import React from "react";
import { ContactUs } from "./ContactForm";

// importing App.js variables.
export default function Main({ page }) {
    // use state: 3 inputs, track them, display errors based on conditions. 
    // const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    // const [errorState, setErrorState] = useState({ nameError: false, emailError: false, messageError: false });
    // const validEmail = new RegExp(
    //     '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    // parse data. if something has a different format from something else. 
    // get name of object clicked. storing user input in variables. 
    // function handleChange(event) {
    //     const { name, value } = event.target;
    //     setFormState({
    //         ...formState,
    //         [name]: value
    //     })
    // }

    // function validate(event) {
    //     const { name } = event.target;
    //     if (name == "email") {
    //         // run test on formState.email. Save the opposite of the result in the emailError var.
    //         setErrorState({ ...errorState, [errorState.emailError]: !validEmail.test(formState.email) })
    //         console.log(errorState + formState);
    //     }
    //     else if (name == "name") {
    //         // check against empty string for error handling. if it returns "true", the error does exist.
    //         // trim off spaces.
    //         setErrorState({ ...errorState, [errorState.nameError]: (formState.name.trim() == "") })
    //     }
    //     else {
    //         // message 
    //         setErrorState({ ...errorState, [errorState.messageError]: (formState.message.trim() == "") })
    //     }
    // };

    function renderPage() {
        switch (page) {
            case ("about"):
                return (
                    //  title and section are selected by default
                    <div className="container"><img className="aboutme" src="https://i.imgur.com/oHRDlPJ.jpg" width="300px" alt="" />
                        <h1 className="h1">Hello!</h1>
                        <h3>Pleased to meet you. Welcome to my portfolio. </h3>
                        <p class="p">As a professional, I have a good range of experiences in social media marketing, content writing, and game design. I got my start in K-8 education where I taught 8th grade English in my hometown on the Navajo Nation. In 2020, I discovered my rigorous role as a community manager at <a href="https://www.7generationgames.com/">7 Generation Games</a>. This molded me into a highly effective marketing professional and creative consultant.</p>

                        <p class="p">At 7 Generation Games, I designed two cross-curricular online video games alongside a bright team of elementary students who were dipping their toes in game design. I collaborated with Native American educators, consultants, and artists to breathe life into my cultural narratives within the games. I marketed 7 Generation Games to educators via online trainings, conferences, and social media. Along the way I cultivated a strong connection to people of all ages with my creativity and cultural knowledge.</p>

                        <p class="p"> For the past three years, I became interested in honing my existing web content writing skills, but with the added benefit of Javascript and React. Last fall, I enrolled in the University of Washington full stack web development bootcamp and completed it this summer. I have also bolstered my existing skills in Agile teamwork, project planning, and technical writing through this bootcamp. My current strengths lie in front end web design and development.</p>

                        <p class="p">I want to share with you that I am a cultural fiber artist whose grandmother was a Navajo weaver. My passion in this cultural art form was only fueled by ravenous sheep and alpaca farms in New Mexico and Oregon. I am carrying on the art of Navajo weaving to support K-12 and adult education. Currently, I am under the tutelage of Barbara Teller Ornelas and Lynda Pete, who are both award-winning <a href="https://navajorugweavers.com/">seventh generation</a> weavers. Recently, I was awarded two scholarships to learn and revitalize Navajo rug weaving from the Heard Museum in Phoenix, Arizona and the Idyllwild Arts Academy in southern California.</p></div>
                )
            case ("portfolio"):
                return (
                    // titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repos
                    <div className="container">
                        <div className="row center">
                            {/* HOZHO WEAVING NETWORK */}
                            <div className="card col-auto">
                                <h3 className="card-header">Hozho Weaving Network</h3>
                                <img className="card-body" src="./images/hozho-weaving-network.jpg" width="100%" alt="" />
                                <div className="card-footer">
                                    <a href="https://hozho-weaving-network.herokuapp.com/">Check out the project!</a>
                                    <br></br>
                                    <a href="https://github.com/Shelcisco/Hozho-Weaving-Network">See what we coded!</a>
                                </div>
                            </div>
                            {/* EVENT DASH */}
                            <div className="card col-auto" width="300px" height="150">
                                <h3 className="card-header">Event Dash</h3>
                                <img className="card-body" src="./images/event-dash.jpg" width="100%" alt="" />
                                <div className="card-footer">
                                    <a href="https://caseyfee.github.io/EventDash/">Check out the project!</a>
                                    <br></br>
                                    <a href="https://github.com/caseyfee/EventDash">See what we coded!</a>
                                </div>
                            </div>
                            {/* JAM SESSION */}
                            <div className="card col-auto">
                                <h3 className="card-header">Jam Session</h3>
                                <img className="card-body" src="./images/jam-session.jpg" width="100%" alt="" />
                                <div className="card-footer">
                                    <a href="https://calm-tor-47120.herokuapp.com/">Check out the project!</a>
                                    <br></br>
                                    <a href="https://github.com/JpBaer/Jam-Session-Music-Sharing-App">See what we coded!</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* NOTE TAKER EXPRESS */}
                            <div className="card col-auto">
                                <h3 className="card-header">Note Taker Express</h3>
                                <img className="card-body" src="./images/note-taker-express.jpg" width="100%" alt="" />
                                <div className="card-footer">
                                    <a href="https://profile-tool-10-20b598854352.herokuapp.com/">Check out the project!</a>
                                    <br></br>
                                    <a href="https://github.com/ChristyGHanson/11-note-taker-express">See what we coded!</a>
                                </div>
                            </div>
                            {/* scheduler app */}
                            <div className="card col-auto" height="100px">
                                <h3 className="card-header">My Workday Scheduler</h3>
                                <img src="./images/scheduler-app.jpg" width="100%" alt="" />
                                <div className="card-footer">
                                    <a href="https://christyghanson.github.io/My-Workday-Scheduler/">Check out the project!</a>
                                    <br></br>
                                    <a href="https://github.com/ChristyGHanson/My-Workday-Scheduler">See what we coded!</a>
                                </div>
                            </div>
                            {/* EMPLOYEE TRACKER TOOL */}
                            <div className="card col-auto">
                                <h3 className="card-header">Employee Tracker Tool</h3>
                                <img className="card-body" src="./images/emp-tracker.jpg" width="100%" alt="" />
                                <div className="card-footer">
                                    <a href="https://drive.google.com/file/d/12HT5N3Y8WK_KtuBudgORUtQdmhwzj_Do/view">Check out the project!</a>
                                    <br></br>
                                    <a href="https://github.com/ChristyGHanson/12-employee-tracker-tool">See what we coded!</a>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            case ("resume"):
                return (
                    // bullet list of skillset and download link for resume
                    <div className="container">

                        <center>
                            <h2>Click <a href="https://drive.google.com/file/d/1jo8jX8gUxJHg_3Ofbkmfovl2dr2buAGl/view?usp=drive_link" target="_blank" rel="noopener noreferrer">here</a> to download my resume.</h2>
                        </center>
                        <center><h2>SOCIAL MEDIA MANAGER | WEB CONTENT WRITER | TECHNICAL WRITER</h2></center>
                        <center><h3>Social Media Marketing | Content Writing and Editing | Feature and Services Documentation</h3></center>

                        <p class="p">
                            Motivated and versatile content writer with a degree in English and certificates in technical writing and web development possesses a breadth of experience within project coordination, online publication, and marketing environments.</p>
                        <p class="p">Dedicated team leader brings a love for learning and an intuitive sense for storytelling.
                            Collaborative writer has strong training and communications skills and delivers reliably high-quality results in deadline-driven situations.</p>



                        <center><h3>PROFESSIONAL EXPERIENCE</h3></center>

                        <center><p class="company">7 Generation Games</p></center>
                        <center><p class="location">Community Manager | Redmond, Washington</p></center>

                        <p class="p"> <li>Collaborated with the company founders and project manager as a member of three teams (Growing Math Team, Marketing Team, and Game Design Team) for content writing, research, marketing campaigns, and strategies for social media, web design, and conferences. </li>
                            <li>Coordinated and delivered online teacher training with technical support for web applications.</li>
                            <li>Engaged in building an online community of educators centered around the 7 Generation Games brand and its blended curriculum platform, Growing Math.</li>
                            <li>Created and distributed three weekly Mailchimp newsletters targeting customers, stakeholders, and math and Indigenous cultural educators. </li>
                            <li>Created and maintained an online organization system to automate and schedule Growing Math outreach, training, and scheduling procedures.</li></p>


                        <center><p class="company">Pactera EDGE</p></center>
                        <center><p class="location">Content Writer | Redmond, Washington</p></center>

                        <p class="p">
                            <li>Developed and delivered content for clients of a technology and consulting services provider. </li>
                            <li>Researched and wrote compelling articles with a focus on travel content for an international client. </li>
                            <li>Proofread for accuracy and client criteria (e.g., Bing voice and the Microsoft Writing Style Guide). Recruited and trained junior writers. </li>
                            <li>Streamlined proofreading and editing processes, reduced iterations needed to finalize content and drove client satisfaction.</li>
                        </p>

                        <center><p class="company">American Indian Republic</p></center>
                        <center><p class="location">Content Writer | Redmond, Washington</p></center>

                        <p class="p">
                            <li>Produced culturally aware essays and interviews in AP Style for a publication dedicated to exploring current Indigenous issues in political, culture and social discourse.</li>
                            <li>Conceptualized story ideas, conducted research, and interviewed people.</li>
                            <li>Credited for editing skills, interviewing strategies, and developing stories that elegantly wove interviewees’ professional lives with their Indigenous experiences and identities.</li>
                        </p>

                        <center><p class="company">C2 Education</p></center>
                        <center><p class="location">English Teacher | Seattle, Washington</p></center>

                        <p class="p">
                            <li>Provided tutoring and test preparation instruction to elementary through high school students.</li>
                            <li>Built rapport to facilitate learning, clarified student academic goals, and implemented lesson plans. </li>
                            <li> Prepared students for ACT and SAT tests. Taught English grammar and writing to facilitate essay writing on exams and college applications. Tracked and analyzed student progress.</li>
                            <li>Served as the education coordinator for two centers; maintained schedules of teachers and students and provided counseling support.</li>
                            <li>Recognized by the Center director and fellow teachers for patience and detailed documentation of teaching sessions and by students for empathy and authenticity.</li>
                        </p>

                        <center><p class="company">Gallup-McKinley County Schools</p></center>
                        <center><p class="location">English Teacher | Tohatchi, New Mexico</p></center>

                        <p class="p">
                            <li>Planned inclusive instructional programs for a school with a 95% Native American student base. </li>
                            <li>Counseled students to meet achievement and cultural standards. Maintained lesson plans, schedules, and grade records.</li>
                            <li> Prepared student progress reports. Engaged families with e-newsletters, award ceremonies, and after-school activities. </li>
                            <li>Taught Native American students with a culturally appropriate curriculum; taught Native American history and literature to support the Diné Content Standards.</li>
                            <li>Fundraised, produced events, and managed expenses as the Student Council Club Sponsor.</li>
                        </p>

                        <center><h3>EDUCATION AND CERTIFICATION</h3></center>
                        <p class="company">University of Washington</p>
                        <p class="location"> Full Stack Web Development Certificate, 2023</p>
                        <p class="company">Bellevue College</p>
                        <p class="location"> Technical Writing Certificate, 2020</p>
                        <p class="company">New Mexico State University</p>
                        <p class="location"> Bachelor of Arts, English Literature, Language and Culture, 2012 </p>


                        <center><h3>SKILLS</h3></center>
                        <center>
                            <p class="skills-technology">Research ▪ Community Management and Outreach</p>
                            <p class="skills-technology">Interviews ▪ Professional Development ▪ Content Writing </p>
                            <p class="skills-technology">Discord ▪ Facebook ▪ Instagram ▪ Twitter ▪ WordPress</p>
                        </center>

                        <center><h3>TECHNOLOGY</h3></center>
                        <center>
                            <p class="skills-technology">Canva ▪ Google Workspace ▪ Hootsuite ▪ Mailchimp ▪ Microsoft 365 ▪ Zoom </p>
                            <p class="skills-technology"> HTML ▪ CSS ▪ Javascript ▪ React ▪ GitHub ▪ Git Bash </p>
                        </center>

                        <center><h3>SELECTED PRESENTATIONS</h3></center>
                        <p class="p">Hanson, C. (2022). Growing Math Supports Indigenous Languages. Presentation at the Indigenous Education Research Conference. Virtual.</p>

                        <p class="p">Taken Alive, J., De Mars, A., Burns Ortiz, M. & Hanson, C. (2021). Building STEM capacity in Indigenous Nations: Research, Practice and Future Plans. Presentation at the National Indian Education Association Annual Convention, Omaha, NE.</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div >
                )

            case ("contact"):
            case ("contactMe"):
                return <ContactUs />



        }
    }
    return (
        <div className="header">
            {renderPage()}
        </div>
    );


}