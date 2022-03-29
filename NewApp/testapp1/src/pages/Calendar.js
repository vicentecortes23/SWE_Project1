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
        <body>
           <h1 style={headerStyle}>Meeting Times</h1>
           <p style={{ textAlign: 'center' }}><b>Tuesdays and Thursdays at 5:30 pm at the Solar Park</b></p>
           <br></br>        
          <center><iframe style={calendarStyle} title= "calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=cy5waGFuZzIyQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043" height="500" width="500"/></center>
         </body>         
        </div>
      );
    }
  }

export default Calendar;