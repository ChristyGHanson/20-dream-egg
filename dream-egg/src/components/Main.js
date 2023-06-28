import React,{useState} from "react";
// importing App.js variables.
export default function Main({ page }) {
    // use state: 3 inputs, track them, display errors based on conditions. 
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [errorState, setErrorState] = useState({ nameError: false, emailError: false, messageError: false });
    const validEmail = new RegExp(
        '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    // parse data. if something has a different format from something else. 
    // get name of object clicked. storing user input in variables. 
    function handleChange(event){
        const {name,value}=event.target;
        setFormState({
            ...formState,
            [name]:value
        })
    }

    function validate(event){
const {name}=event.target;
if (name=="email"){
    // run test on formState.email. Save the opposite of the result in the emailError var.
    setErrorState ({...errorState,[errorState.emailError]:!validEmail.test(formState.email)})
    console.log(errorState + formState);
} 
else if (name=="name"){
    // check against empty string for error handling. if it returns "true", the error does exist.
    // trim off spaces.
    setErrorState ({...errorState,[errorState.nameError]:(formState.name.trim()=="")})
} 
else{
// message 
setErrorState ({...errorState,[errorState.messageError]:(formState.message.trim()=="")})
}
    };


    function renderPage() {
        switch (page) {
            case ("about"):
                return (
                    //  title and section are selected by default
                    <div>about section in main.js</div>
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
                                <img className="card-body" src="\event-dash.jpg" width="100%"></img>
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
                        <p>Click <a href="../index.js" download>here</a> to download my resume.</p>
                    </div>
                )
            case ("contact"):
                return (
                    // name form, email form, and message form will go here.
                    // class names should match with index.css
                    <form>
                        <div class="form-group">
                            <label for="name-input">Name</label><br></br>
                            <input type="text" class="form-input" id="name-input"
                                placeholder="Enter your name" onChange={handleChange} onBlur={validate} name="name"></input>
                                {errorState.nameError && <p className="error">Enter your name</p>}
                        </div>
                        <div class="form-group pb-2">
                            <label for="email-input">Email</label><br></br>
                            <input type="text" class="form-input" id="email-input" placeholder="Enter your email" onChange={handleChange} onBlur={validate} name="email"></input>
                        </div>
                        <div class="form-group pb-2">
                            <label for="message-input">Message</label><br></br>
                            <textarea type="text" class="form-input" id="message-input" placeholder="Enter a message" onChange={handleChange} onBlur={validate} name="message">{formState.message}</textarea>
                        </div>

                        <button class="btn btn-primary">Submit</button>

                    </form>
                )

        }
    }
    return (
        <div className="header">
            {renderPage()}
        </div>
    );


}
