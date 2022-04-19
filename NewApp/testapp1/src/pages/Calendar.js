import React from "react";

class Calendar extends React.Component  {
    render() {
        const headerStyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            textAlign: "center"
          };
        const calendarStyle = {
            backgroundColor: "orange",
            padding: "10px"
          };
      return(         
        <div>
           <h1 style={headerStyle}>Meeting Times</h1>
           <p style={{ textAlign: 'center' }}><b>Tuesdays and Thursdays at 5:30 pm at the Solar Park</b></p>
           <br></br>        
          <center><iframe style={calendarStyle} title= "Google calendar embed" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&src=Y3liZXJ3b2xmMjhAZ21haWwuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4&color=%23009688" height="500" width="500"/></center>  
        </div>
      );
    }
  }

export default Calendar;