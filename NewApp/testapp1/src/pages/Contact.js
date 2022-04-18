import React from "react"
import './Contact.css';



function Card(props){
    return(
        <div className="card">
            <div className="card__body">
                <img src={props.img} className="card_image"></img>
                <h2 className="card_title">{props.title}</h2>
                <p className="card_description">{props.description}</p>
                <div className="card_sociallink_container">
                    <a href={props.discord_link}> 
                    <button className="card_sociallink">
                        <img src="https://cdn.discordapp.com/attachments/634971492228136970/965267911105212466/discordlogo.png" />
                    </button>
                    </a>
                    <h1></h1>
                    <a href={props.slack_link}>
                                <button className="card_sociallink">
                                    <img src="https://cdn.discordapp.com/attachments/634971492228136970/965268571150254190/slacklogo.png" />
                                </button>
                    </a>
                    <h1></h1>
                    <a href={props.instragram_link}>
                                <button className="card_sociallink">
                                    <img src ="https://cdn.discordapp.com/attachments/634971492228136970/965268886465437746/instalogo.png"/>
                                </button>
                    </a>
                </div>

            </div>
        </div>
    )
}

        /*
        <a href= "https://discord.com/invite/2QPW8Uk">
                  <button>Aggregator Discord</button>
        </a>
        <h1></h1>
        <a href= "https://join.slack.com/t/gatorroboticsgroup/shared_invite/zt-rtjnmmsj-3FGkEFlA0FzAYft0SLZuMA">
                    <button>Gator Robotics Slack</button>
        </a>
        <h1></h1>
        <a href= "https://www.instagram.com/aggregatoruf/?hl=en">
                    <button>Aggregator Instagram</button>
        </a>
        */

function Contact() {
    return(<div className="wrapper">
        <Card
        img = "https://cdn.discordapp.com/attachments/634971492228136970/965253548151558194/unknown.png"
        title = "Dwayne The Rock Johnson"
        description = "Not officially apart of gator robotics but he is here none the less"
        discord_link = "https://discord.com/invite/2QPW8Uk"
        slack_link = "https://join.slack.com/t/gatorroboticsgroup/shared_invite/zt-rtjnmmsj-3FGkEFlA0FzAYft0SLZuMA"
        instragram_link = "https://www.instagram.com/aggregatoruf/?hl=en"
        />

        <Card 
        img = "https://cdn.discordapp.com/attachments/634971492228136970/965260154947915786/unknown.png"
        title = "Sample member"
        description = "im bad at paint, also when you click the link it doesnt automatically open a new tab yet, so you'll have to do that yourself right now"
        discord_link = "https://discord.com/invite/2QPW8Uk"
        slack_link = "https://join.slack.com/t/gatorroboticsgroup/shared_invite/zt-rtjnmmsj-3FGkEFlA0FzAYft0SLZuMA"
        instragram_link = "https://www.instagram.com/aggregatoruf/?hl=en"
        />

        <Card 
        img = "https://cdn.discordapp.com/attachments/634971492228136970/965260154947915786/unknown.png"
        title = "Sample member"
        description = "also for some reason when you hover over anything it gives you the pointer to click a link, need to fix that"
        discord_link = "https://discord.com/invite/2QPW8Uk"
        slack_link = "https://join.slack.com/t/gatorroboticsgroup/shared_invite/zt-rtjnmmsj-3FGkEFlA0FzAYft0SLZuMA"
        instragram_link = "https://www.instagram.com/aggregatoruf/?hl=en"
        />

    </div>
    ) 
}

export default Contact;