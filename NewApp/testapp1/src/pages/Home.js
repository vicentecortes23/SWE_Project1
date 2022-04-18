import React from "react"
import pic from "./images/test.jpg"
import ContactUs from './ContactUs';
import './Home.css';
 

function Home() {
    return (
        <div className="body">   
            <center>
                <img src ={pic} />
            </center>  
            <div>
            <center>
                    <h1>Contact Us!</h1>
                    <h2>Please send us an email if you're interested in joining the club, have any recommendations, or just want to get in touch! </h2>
                    <ContactUs/>
                    </center>
            </div>
        </div>
    )
}

export default Home;