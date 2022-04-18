import React, { Component } from 'react';

class About extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState(
      {
        showMenu: true,
      });
}

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          About Us
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className="menu">
                <button> 
                    Description: Aggregator is a collaborative project that competes in the NASA Lunabotics Competition. The project consists of the design, development, 
                    and construction of an autonomous mobile robot capable of completing objectives highlighted in the Lunabotics Competition rules of the year. Aggregator’s 
                    main objective is to connect bright engineers, both professional and novice, to facilitate a productive learning experience and conquer engineering problems. 
                    We accept anyone with drive and passion for engineering. Through Aggregator, one can expect to learn how to create robust mechanical design, use SolidWorks, 
                    manufacture, develop microcontrollers, code C++, and use ROS. 
                  </button>
                  <button>
                    Meetings: We typically meet Tuesdays, Thursdays, or Saturdays depending on the sub-team you wish to participate in (there are mechanical and electrical sub teams).
                    To get the most up-to-date information about when we meet, visit our discord.
                  </button>
                  <button>
                    Contact Info: Our leadership changes annually, so it is best, and easiest, to contact us directly in the discord. You can do so by asking questions in the
                     “questions” channel or direct messaging anyone that is a “Lead” or an “Executive Board” member.
                  </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

export default About;