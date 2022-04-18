import React from "react"
import pic from "./images/test.jpg"
import ContactUs from './ContactUs';

function Home() {
    return (
        <div>   
            <center>
                <img src ={pic} />
            </center>  
            <div>
                <ContactUs/>
            </div>
        </div>
    )
}

export default Home;