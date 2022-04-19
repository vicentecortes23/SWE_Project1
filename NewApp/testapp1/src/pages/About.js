import React, { Component } from 'react';
import agg1 from "./images/agg1.jpg"
import agg2 from "./images/agg2.jpg"
import board1 from "./images/board1.jpg"
import board2 from "./images/board2.jpg"
import board3 from "./images/board3.jpg"
import soft1 from "./images/soft1.jpg"
import soft2 from "./images/soft2.jpg"

import gearsGif from "./images/gearsGif.gif"
import gearsStill from "./images/gearsStill.png"
import lightningGif from "./images/lightningGif.gif"
import lightningStill from "./images/lightningStill.png"
import keyboardGif from "./images/keyboardGif.gif"
import keyboardStill from "./images/keyboardStill.png"

import teamPhoto from "./images/teamPhoto.jpg"
import "./About.css"
class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
      isHover: false
    };
  }

  handleClick() {
    this.setState({isExpanded: !this.state.isExpanded});
  }

  handleMouseEnter() {
    this.setState({isHover: true});
  }

  handleMouseLeave() {
    this.setState({isHover: false});
  }

  renderDescription() {
    if(this.state.isExpanded) {
      return (
        <p>
          {this.props.description}
        </p>
      );
    }
  }

  renderImage() {
    if(this.state.isExpanded) {
      return (
        <div>
        <ul classname="images" >
        <li>
        <img class= "image1" src={this.props.teamImage1}/>
        </li>
        <li>
        <img class= "image1" src={this.props.teamImage2}/>
        </li>
        <li>
        <img class= "image1" src={this.props.teamImage3}/>
        </li>
        </ul>
        </div>
      );
    }
  }

  render() {
    return (
      <div className= "team-section">
        <div className="team-header">
        <h1  onClick={() => this.handleClick()} onMouseEnter={() => this.handleMouseEnter()} onMouseLeave={() => this.handleMouseLeave()}>{this.props.teamName} {this.state.isExpanded ? "𝅎":"‣"} {<img src={this.state.isHover ? this.props.gif:this.props.still} width="10%"/>}</h1>
        </div>
        <div className="team-description">
          {this.renderDescription()}
        </div>
        <div className="team-image">
          {this.renderImage()}
        </div>
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <div className="top-buffer"></div>
        <div className="about-us-section" style={{whiteSpace: "pre-wrap"}}>
        <Team
        teamName="About Us"
        teamImage1 = {teamPhoto}
        description =
         {"Aggregator is a collaborative project that competes in the NASA Lunabotics Competition. The project consists of the design, development,and construction of an autonomous mobile robot capable of completing objectives highlighted in the Lunabotics Competition rules of the year. Aggregator’s main objective is to connect bright engineers, both professional and novice, to facilitate a productive learning experience and conquer engineering problems.We accept anyone with drive and passion for engineering. Through Aggregator, one can expect to learn how to create robust mechanical design, use SolidWorks, manufacture, develop microcontrollers, code C++, and use ROS.\n\nWe typically meet Tuesdays, Thursdays, or Saturdays depending on the sub-team you wish to participate in (there are mechanical and electrical/software sub teams).\n\nTo get the most up-to-date information about meeting times and events check out our Calendar and join our discord for notifications. Our leadership changes annually, so it is best, and easiest, to contact us directly via discord, slack, or instagram. You can do so by asking questions in the questions channel or direct messaging anyone that is a Lead or an Executive Board member. Contact information can be found on our Contacts page."}
        />
      </div>
      <div className="mechanical-team-section">
        <Team
        teamName="Mechanical Team"
        teamImage1= {agg1}
        teamImage2= {agg2}
        gif = {gearsGif}
        still = {gearsStill}
        description =
         "Our mechanical team is responsible for designing, drafting and manufacturing the custom parts and assemblies on the Aggregator robot. We use popular design tools like SOLIDWORKS to produce detailed CAD models that help us bring our ideas to life! Additionally, this team is responsible for ordering the parts that we need and generating technical reports."
        />
      </div>
      <div className="electrical-team-section">
        <Team
        teamName="Electrical Team" 
        teamImage1= {board1}
        teamImage2= {board2}
        teamImage3= {board3}
        gif = {lightningGif}
        still = {lightningStill}
        description =
        "This team oversees the design and implementation of Aggregator's electrical systems. Our robot has two key subsystems: processing/navigation and motor interfacing. An Intel RealSense D435i camera is used for receiving camera data which is then sent to an ASUS UP2 board that runs on a Linux Distro to run ROS. A Teensy microprocessor is used to handle all low-level processes such as processing data from/to motor drivers and linear actuators. All are controlled in C through the Arduino IDE for ease of access."
        />
      </div>
      <div className="software-team-section">
      <Team
      teamName="Software Team"
      teamImage1= {soft1}
      teamImage2= {soft2}
      gif = {keyboardGif}
      still = {keyboardStill}
      description =
      "The Software team utilizes a host of various Arduino Libraries and ROS (Robot Operating System) to provide Aggregator the functionality it requires to get the job done. The basis of the robot's software is automation, navigation, and localization. Through software nodes are able to communicate via topics and services. Various additional libraries allow the system to interface with external motors and the drive train."
      />
    </div>
    <div className="bottom-buffer"></div>
    </div>
    );
  }
}

export default About;