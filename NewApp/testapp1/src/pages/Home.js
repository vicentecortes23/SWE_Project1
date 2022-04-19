import React from "react"
import pic from "./images/Home_Background.jpg"
import ContactUs from './ContactUs';
import "./Home.css"

function Home() {
    return (
        <div> 
            <center>
            <div>
                <img className="homebg" src ={pic} />
            </div>
            </center>  
            <div>
                <center>
                <h1> Contact Us</h1>
                <h2> Please send us an email for information regarding the club, updates you'd like to see, or any comments!</h2>
                </center>
                <ContactUs/>
            </div>
        </div>
    )
}



export default Home;