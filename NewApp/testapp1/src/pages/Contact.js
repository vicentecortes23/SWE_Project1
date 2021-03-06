import React from "react"
import './Contact.css';
import emailicon from './images/emailiconbig.png';
import linkedin_icon from './images/linkedinlogobig.png';
import alberta from './images/albertagator.png';
import sampleperson from './images/sampleperson.png';
import discordlogo from './images/discordlogo.png';
import instagramlogo from './images/instagramlogo.png';
import slacklogo from './images/slacklogo.png';
import patrick from './images/patrick_argento.jpg';
import james from './images/james_fesik.jpg';
import brad from './images/bradley_shelley.jpg';
import mik from './images/mik.jpg';

/*props are 

 */
function Card(props){
    return(
        <div className="card1">
            <div className="card__body">
                <img src={props.img} className="card_image"></img>
                <h2 className="card_title">{props.title}</h2>
                <p className="card_description">{props.description}</p>
                <div className="card_sociallink_container">
                    <a href={props.email_link} target="_blank"> 
                    <button className="card_sociallink">
                        <img src={emailicon} height="100%" width="100%" />
                    </button>
                    </a>
                    <h1></h1>
                    <a href={props.linkedin_link} target="_blank">
                    <button className="card_sociallink">
                        <img src={linkedin_icon} height="100%" width="100%" />
                    </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

function Card2(props){
    return(
        <div className="card2">
            <div className="card__body">
                <img src={props.img} className="card_image"></img>
                <h2 className="card_title">{props.title}</h2>
                <p className="card_description">{props.description}</p>
                <div className="card2_sociallink_container">
                    <a href={props.discord_link} target="_blank"> 
                    <button className="card2_sociallink">
                        <img class="link_img" src={discordlogo}  />
                    </button>
                    </a>
                    <h1></h1>
                    <a href={props.slack_link} target="_blank">
                                <button className="card2_sociallink">
                                    <img class="link_img" src={slacklogo}  />
                                </button>
                    </a>
                    <h1></h1>
                    <a href={props.instragram_link} target="_blank">
                                <button className="card2_sociallink">
                                    <img class="link_img" src ={instagramlogo}/>
                                </button>
                    </a>
                </div>

            </div>
        </div>
    )
}

/* unused code for a card that has a discord link, a slack link, and a instagram link
function Card2(props){
    return(
        <div className="card">
            <div className="card__body">
                <img src={props.img} className="card_image"></img>
                <h2 className="card_title">{props.title}</h2>
                <p className="card_description">{props.description}</p>
                <div className="card_sociallink_container">
                    <a href={props.discord_link} target="_blank"> 
                    <button className="card_sociallink">
                        <img src="https://cdn.discordapp.com/attachments/634971492228136970/965267911105212466/discordlogo.png" />
                    </button>
                    </a>
                    <h1></h1>
                    <a href={props.slack_link} target="_blank">
                                <button className="card_sociallink">
                                    <img src="https://cdn.discordapp.com/attachments/634971492228136970/965268571150254190/slacklogo.png" />
                                </button>
                    </a>
                    <h1></h1>
                    <a href={props.instragram_link} target="_blank">
                                <button className="card_sociallink">
                                    <img src ="https://cdn.discordapp.com/attachments/634971492228136970/965268886465437746/instalogo.png"/>
                                </button>
                    </a>
                </div>

            </div>
        </div>
    )
}


    <Card
        img = "https://cdn.discordapp.com/attachments/634971492228136970/965711192779812865/unknown.png"
        title = "Aggregator links"
        description = "The official discord, slack and instagram of the aggregator club"
        discord_link = "https://discord.com/invite/2QPW8Uk"
        slack_link = "https://join.slack.com/t/gatorroboticsgroup/shared_invite/zt-rtjnmmsj-3FGkEFlA0FzAYft0SLZuMA"
        instragram_link = "https://www.instagram.com/aggregatoruf/?hl=en"
        />
*/

    
function Contact() {
    return(<div className="wrapper">
        
        <Card2
        img = {alberta}
        title = "Alberta"
        description = "Alberta wants you to join aggregator!"
        discord_link = "https://discord.com/invite/2QPW8Uk"
        slack_link = "https://join.slack.com/t/gatorroboticsgroup/shared_invite/zt-rtjnmmsj-3FGkEFlA0FzAYft0SLZuMA"
        instragram_link = "https://www.instagram.com/aggregatoruf/?hl=en"
        />

        <Card 
        img = {mik}
        title = "Mikhail Bagadion"
        description = "President"
        email_link = "mailto:m.bagadion@ufl.edu"
        linkedin_link = "https://www.linkedin.com/in/mikhail-bagadion"
        />

        <Card 
        img = {patrick}
        title = "Patrick Argento"
        description = "VP External"
        email_link = "mailto:patrick.argento@ufl.edu"
        linkedin_link = "https://www.linkedin.com/in/patrick-argento-552311170/"
        />

        <Card 
        img = {james}
        title = "James Fesik"
        description = "VP Internal"
        email_link = "mailto:james.fesik@ufl.edu"
        linkedin_link = "https://www.linkedin.com/in/james-fesik/"
        />

        <Card 
        img = {brad}
        title = "Bradley Shelley"
        description = "Electrical Lead"
        email_link = "mailto:shelleyb@ufl.edu"
        linkedin_link = "https://www.linkedin.com/in/bradley-shelley/"
        />
    </div>
    ) 
}

export default Contact;