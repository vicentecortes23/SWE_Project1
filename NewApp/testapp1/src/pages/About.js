import React from 'react';
import WebImage from './WebImage';
import pic from "./images/coolerbannerimage.png"


function About() {

    class LinkButton extends React.Component {

      

        render() {
          return (

            <button className="linkbutton">
            
              
            </button>
          );
        }
      }

    return(<div>
        <img src ={pic} />
        <h1> Home </h1>
         <h2>The aggregator website is about robotics</h2>
                <a href= "https://reactjs.org/tutorial/tutorial.html">
                  <button>linkbutton</button> Visitsomething 
                </a>

          
        
    </div>)
}

export default About;