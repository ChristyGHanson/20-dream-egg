import React, { useState } from "react";
import { ContactUs } from "./ContactForm";
// importing App.js variables.
export default function Main({ page }) {
    // use state: 3 inputs, track them, display errors based on conditions. 
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [errorState, setErrorState] = useState({ nameError: false, emailError: false, messageError: false });
    // const validEmail = new RegExp(
    //     '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    // parse data. if something has a different format from something else. 
    // get name of object clicked. storing user input in variables. 
    function handleChange(event) {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    function validate(event) {
        const { name } = event.target;
        if (name == "email") {
            // run test on formState.email. Save the opposite of the result in the emailError var.
            setErrorState({ ...errorState, [errorState.emailError]: !validEmail.test(formState.email) })
            console.log(errorState + formState);
        }
        else if (name == "name") {
            // check against empty string for error handling. if it returns "true", the error does exist.
            // trim off spaces.
            setErrorState({ ...errorState, [errorState.nameError]: (formState.name.trim() == "") })
        }
        else {
            // message 
            setErrorState({ ...errorState, [errorState.messageError]: (formState.message.trim() == "") })
        }
    };


    function renderPage() {
        switch (page) {
            case ("about"):
                return (
                    //  title and section are selected by default
                    <div><img className="aboutme" src="\christy-hanson.jpg" width="300px"></img>  
                    <h1 className="h1">Bio</h1>
                    <p>Christy Hanson is an exceptional professional with a diverse range of skills and experiences in social media marketing, content writing, English education, and game design. Christy's foundation in teaching middle school on the Navajo Nation, a Southwestern community, coupled with her rigorous role as a community manager at <a href="https://www.7generationgames.com/">7 Generation Games</a>, molded her into a highly effective marketing professional and creative consultant.</p>

                    <p>At 7 Generation Games, Christy designed two cross-curricular online video games alongside a bright team of elementary students discovering game design. She collaborated with Native American educators, consultants, and artists to breathe life into her narratives. Christy marketed 7 Generation Games to educators via online trainings, conferences, and social media. She has demonstrated a strong connection to people of all ages with her creativity and cultural knowledge.</p>

                    <p>Christy became interested in honing her existing web development skills to supplement her marketing skills. She enrolled in the University of Washington full stack web development bootcamp. Now she has furthered her web content writing expertise and deployed her projects on both GitHub and Heroku. She has also bolstered her existing skills in Agile, project planning, and technical writing. Christy's strengths lie in front end web design and development.</p>

                    <p>Christy is an enthusiastic fiber artist whose grandmother was a Navajo weaver. Her passion in fiber arts was fueled by a bunch of ravenous alpacas in Oregon. She is carrying on the art of Navajo weaving to support K-12 and adult education. She is under the tutelage of Barbara Teller Ornelas and Lynda Pete, who are both award-winning <a href="https://navajorugweavers.com/">seventh generation</a> weavers. Christy was awarded two scholarships to learn and revitalize this Indigenous art form from the Heard Museum in Phoenix, Arizona and the Idyllwild Arts Academy in southern California.</p></div>
                             )
            case ("portfolio"):
                return (
                    // titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repos
                    <div className="container">
                        <div className="row center">
                            {/* HOZHO WEAVING NETWORK */}
                            <div className="card col-auto">
                                <h3 className="card-header">Hozho Weaving Network</h3>
                                <img className="card-body" src="\hozho-weaving-network.jpg" width="100%"></img>
                                <div className="card-footer">
                                    <a href="https://hozho-weaving-network.herokuapp.com/">Check out the project!</a>
                                    <br></br>
                                    <a href="https://github.com/Shelcisco/Hozho-Weaving-Network">See what we coded!</a>
                                </div>
                            </div>
                            {/* EVENT DASH */}
                            <div className="card col-auto" width="300px" height="150">
                                <h3 className="card-header">Event Dash</h3>
                                <img className="card-body" src="/event-dash.jpg" width="100%"></img>
                                <div className="card-footer">
                                    <a href="https://caseyfee.github.io/EventDash/">Check out the project!</a>
                                    <br></br>
                                    <a href="https://github.com/caseyfee/EventDash">See what we coded!</a>
                                </div>
                            </div>
                            {/* JAM SESSION */}
                            <div className="card col-auto">
                                <h3 className="card-header">Jam Session</h3>
                                <img className="card-body" src="\jam-session.jpg" width="100%"></img>
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
                                <img className="card-body" src="\note-taker-express.jpg" width="100%"></img>
                                <div className="card-footer">
                                    <a href="https://profile-tool-10-20b598854352.herokuapp.com/">Check out the project!</a>
                                    <br></br>
                                    <a href="https://github.com/ChristyGHanson/11-note-taker-express">See what we coded!</a>
                                </div>
                            </div>
                            {/* scheduler app */}
                            <div className="card col-auto" height="100px">
                                <h3 className="card-header">My Workday Scheduler</h3>
                                <img src="\scheduler-app.jpg" width="100%"></img>
                                <div className="card-footer">
                                    <a href="https://christyghanson.github.io/My-Workday-Scheduler/">Check out the project!</a>
                                    <br></br>
                                    <a href="https://github.com/ChristyGHanson/My-Workday-Scheduler">See what we coded!</a>
                                </div>
                            </div>
                            {/* EMPLOYEE TRACKER TOOL */}
                            <div className="card col-auto">
                                <h3 className="card-header">Employee Tracker Tool</h3>
                                <img className="card-body" src="\emp-tracker.jpg" width="100%"></img>
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
                    <div>

                        <center>
                            <p>Click <a href="../christy-hanson-resume.rtf" download>here</a> to download my resume.</p>
                        </center>
                        <center><h3>PROFESSIONAL EXPERIENCES</h3></center>

                        <center><h4>SOCIAL MEDIA MANAGER | WEB CONTENT WRITER | TECHNICAL WRITER</h4></center>
                        <center><p>Social Media Marketing | Content Writing and Editing | Feature and Services Documentation</p></center>

                        <ul>
                            <li>Motivated and versatile content writer with a degree in English and certificates in technical writing and web development possesses a breadth of experience within project coordination, online publication, and marketing environments.</li>
                            <li>Dedicated team leader brings a love for learning and an intuitive sense for storytelling.</li>
                            <li>Collaborative writer has strong training and communications skills and delivers reliably high-quality results in deadline-driven situations.</li></ul>



                        <center><h4>PROFESSIONAL EXPERIENCE</h4></center>

                        <center><h4>7 Generation Games</h4></center>
                        <center><h4>Redmond, Washington</h4></center>
                        <center><i>Community Manager</i></center>
                        <center><p>June 2020 – August 2022</p></center>
                        <ul>
                            <li>Collaborated with the company founders and project manager as a member of three teams (Growing Math Team, Marketing Team, and Game Design Team) for content writing, research, marketing campaigns, and strategies for social media, web design, and conferences. </li>
                            <li>Coordinated and delivered online teacher training with technical support for web applications.</li>
                            <li>Engaged in building an online community of educators centered around the 7 Generation Games brand and its blended curriculum platform, Growing Math.</li>
                            <li>Created and distributed three weekly Mailchimp newsletters targeting customers, stakeholders, and math and Indigenous cultural educators. </li>
                            <li>Created and maintained an online organization system to automate and schedule Growing Math outreach, training, and scheduling procedures.</li>
                        </ul>

                        <center><h4>Pactera EDGE</h4></center>
                        <center><h4>Redmond, Washington</h4></center>
                        <center><i>Content Writer </i></center>
                        <center><p>May 2019 – June 2020</p></center>
                        <ul>
                            <li>Developed and delivered content for clients of a technology and consulting services provider. </li>
                            <li>Researched and wrote compelling articles with a focus on travel content for an international client. </li>
                            <li>Proofread for accuracy and client criteria (e.g., Bing voice and the Microsoft Writing Style Guide). Recruited and trained junior writers. </li>
                            <li>Streamlined proofreading and editing processes, reduced iterations needed to finalize content and drove client satisfaction.</li>
                        </ul>

                        <center><h4>American Indian Republic</h4></center>
                        <center><h4>Redmond, Washington</h4></center>
                        <center><i>Writer</i></center>
                        <center><p>Dec. 2017 – July 2019</p></center>
                        <ul>
                            <li>Produced culturally aware essays and interviews in AP Style for a publication dedicated to exploring current Indigenous issues in political, culture and social discourse.</li>
                            <li>Conceptualized story ideas, conducted research, and interviewed people.</li>
                            <li>Credited for editing skills, interviewing strategies, and developing stories that elegantly wove interviewees’ professional lives with their Indigenous experiences and identities.</li>
                        </ul>

                        <center><h4>C2 Education Centers, Inc.</h4></center>
                        <center><h4>Seattle, Washington</h4></center>
                        <center><i>English Teacher </i></center>
                        <center><p>April 2018 – May 2019</p></center>
                        <ul>
                            <li>Provided tutoring and test preparation instruction to elementary through high school students.</li>
                            <li>Built rapport to facilitate learning, clarified student academic goals, and implemented lesson plans. </li>
                            <li> Prepared students for ACT and SAT tests. Taught English grammar and writing to facilitate essay writing on exams and college applications. Tracked and analyzed student progress.</li>
                            <li>Served as the education coordinator for two centers; maintained schedules of teachers and students and provided counseling support.</li>
                            <li>Recognized by the Center director and fellow teachers for patience and detailed documentation of teaching sessions and by students for empathy and authenticity.</li>
                        </ul>

                        <center><h4>Gallup-McKinley County Schools</h4></center>
                        <center><h4>Tohatchi, New Mexico</h4></center>
                        <center><i>English Teacher</i></center>
                        <center><p>August 2014 – June 2016</p></center>
                        <ul>
                            <li>Planned inclusive instructional programs for a school with a 95% Native American student base. </li>
                            <li>Counseled students to meet achievement and cultural standards. Maintained lesson plans, schedules, and grade records.</li>
                            <li> Prepared student progress reports. Engaged families with e-newsletters, award ceremonies, and after-school activities. </li>
                            <li>Taught Native American students with a culturally appropriate curriculum; taught Native American history and literature to support the Diné Content Standards.</li>
                            <li>Fundraised, produced events, and managed expenses as the Student Council Club Sponsor.</li>
                        </ul>

                        <center><h4>EDUCATION  AND CERTIFICATION</h4></center>
                        <ul>
                            <li>University of Washington – Full Stack Web Development Certificate, 2023</li>
                            <li>Bellevue College – Technical Writing Certificate, 2020</li>
                            <li>New Mexico State University – Bachelor of Arts, English Literature, Language and Culture, 2012</li>
                        </ul>

                        <center><h4>SKILLS</h4></center>
                        <center>
                            <p>Research ▪ Community Management and Outreach</p>
                            <p>Interviews ▪ Professional Development ▪ Content Writing </p>
                            <p>Discord ▪ Facebook ▪ Instagram ▪ Twitter ▪ WordPress</p>
                        </center>

                        <center><h4>TECHNOLOGY</h4></center>
                        <center>
                            <ul>Canva ▪ Google Workspace ▪ Hootsuite ▪ Mailchimp ▪ Microsoft 365 ▪ Zoom </ul>
                            <ul> HTML ▪ CSS ▪ Javascript ▪ React ▪ GitHub ▪ Git Bash </ul>
                        </center>

                        <center><h4>SELECTED PRESENTATIONS</h4></center>
                        <p>Hanson, C. (2022). Growing Math Supports Indigenous Languages. Presentation at the Indigenous Education Research Conference. Virtual.</p>

                        <p>Taken Alive, J., De Mars, A., Burns Ortiz, M. & Hanson, C. (2021). Building STEM capacity in Indigenous Nations: Research, Practice and Future Plans. Presentation at the National Indian Education Association Annual Convention, Omaha, NE.</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                )

case ("contact"):
    case ("contactMe"): 
    return <ContactUs/>

        }
    }
    return (
        <div className="header">
            {renderPage()}
        </div>
    );


}