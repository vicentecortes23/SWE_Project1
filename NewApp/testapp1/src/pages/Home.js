import React from "react"
import pic from "./images/Home_Background.jpg"
import ContactUs from './ContactUs';
import "./Home.css"

function Home() {
    return (
        <div>   
            <center>
                <img className="img" src ={pic} />
            </center>  
            <div>
                <ContactUs/>
            </div>
        </div>
    )
}



export default Home;