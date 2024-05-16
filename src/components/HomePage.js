import React,{useState} from "react";
import "./HomePage.css";
import "./toggleAnswer"
const HomePage =()=>{
    const [answerVisibility, setAnswerVisibility] = useState({
        question1: false,
        question2: false,
        question3: false,
        question4: false,
        question5: false
    });
    // Function to toggle answer visibility for a specific question
    const toggleAnswer = (questionId) => {
        setAnswerVisibility(prevVisibility => ({
            ...prevVisibility,
            [questionId]: !prevVisibility[questionId]
        }));
    };
    return(
        <div className="MainPage">
            <div className="Header">
                <div className="Logo">
                    <img src="./Logo.png" alt=""></img>
                </div>
                <div className="navbar">
                    <button className="getproject">Get Projects</button>
                    <button className="obtalent">Onboard Talent</button>
                </div>
            </div>
            <div className="HeroSection">
                <div className="herocontent">
                    <div className="herocontentcol">
                        <div className="sucess"> 
                        <p className="ss">Success Stories</p>
                        <div className="esj-container">
                        <p className="esj">Every success journey</p>  <p className="esj"> we’ve encountered.</p>  
                        </div>
                        </div>
                        <div className="imgpara">
                            <div className="img">
                                <img src="./Mainimg.png" alt=""></img>
                            </div>
                            <div className="buttondata">
                                <div className="herodata">
                                <p className="ef">Enhance fortune 50 </p><p className="ef">company’s insights </p><p className="ef">teams research </p><p className="ef">capabilities</p>
                                </div>
                                <button className="explore-button">Explore More&nbsp;&nbsp;&nbsp;<span>&#8594;</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Questions">
                <div className="ques-content">
                    <div className="left">
                        <p className="woym">What’s on your mind</p>
                        <p className="aq">Ask Questions</p>
                    </div>
                    <div className="right">
                        <div className="question">
                            <p className="q">Do you offer freelancers?</p>
                            <button className="toggle-answer" onClick={() => toggleAnswer("question1")}>+</button>
                            {answerVisibility["question1"] && <div className="answer">Yes, we offer freelancers for various tasks.</div>}
                        </div>
                        <div className="question">
                            <p className="q">What’s the guarantee that I will be satisfied
                                            with the hired talent?</p>
                            <button className="toggle-answer" onClick={()=>toggleAnswer("question2")}>+</button>
                            {answerVisibility["question2"] && <div className="answer">Yes, we offer freelancers for various tasks.</div>}
                        </div>
                        <div className="question">
                            <p className="q">Can I hire multiple talents at once?</p>
                            <button className="toggle-answer" onClick={()=>toggleAnswer("question3")}>+</button>
                            {answerVisibility["question3"] && <div className="answer">If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</div>}
                        </div>
                        <div className="question">
                            <p className="q">Why should I not go to an agency directly?</p>
                            <button className="toggle-answer" onClick={()=>toggleAnswer("question4")}>+</button>
                            {answerVisibility["question4"] && <div className="answer">Yes, we offer freelancers for various tasks.</div>}
                        </div>
                        <div className="question">
                            <p className="q">Who can help me pick a right skillset
                                            and duration for me?</p>
                            <button className="toggle-answer" onClick={()=>toggleAnswer("question5")}>+</button>
                            {answerVisibility["question5"] && <div className="answer">Yes, we offer freelancers for various tasks.</div>}
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="Footer"></div>
        </div>
    )
}

export default HomePage;