import React from 'react';
import WebImage from './WebImage';


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
        

         <h2>The aggregator website is about robotics</h2>
                <a href= "https://reactjs.org/tutorial/tutorial.html">
                  <button>linkbutton</button> Visitsomething 
                </a>

          <WebImage />
        
    </div>)
}

export default About;