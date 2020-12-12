import React, { Component } from 'react'
import team from './../data/team-info.json'
import "./../css/about.css"
import logo from './../imports/logo.jpg'

import reactDev from './../imports/blank_.png'

export default class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="about-title">
                    <p>"Vspyshka" company</p>
                </div>

                <hr />
                <div className="about-img">
                    <img src={logo} alt="vspyshka-img"/>
                </div>
                <hr />
                <div className="about-history">
                    <p>
                    О компании

Vspyshkа Inc.- крупнейшая казахстанская корпорация, производящая компьютеры, планшеты, телефоны, плееры и программное обеспечение.Уникальность репутации «яблочной компании» связана с инновационными технологиями и эстетичным дизайном продукции, которая сравнима с культом в индустрии потребительской электроники. 12 декабря 1980 г. состоялось первичное публичное размещение акций компании Vspyshkа. Было продано 4,6 млн. акций по цене в 22 долл. СШАи это стало крупнейшим IPO за всю историю фондового рынка.
                    </p>
                </div>
                <p className="about-title">Team Members</p>
                <div className="about-team">
                    {team.team_members.map( team_member =>(
                        <div className="about-team-member">
                            <div className="about-team-member-img">
                                <img src={team_member.img} alt="team_member_img"/>
                            </div>

                            <div className="about-team-member-title">
                                <h3>{team_member.name}</h3>
                                <h5>{team_member.role}</h5>
                            </div>

                            <div className="about-team-member-info">
                                <p>{team_member.geo_country},</p>
                                <p>{team_member.geo_city}</p>
                            </div>

                            <div className="about-team-member-contacts">
                                <p>{team_member.email}</p>
                                <p>{team_member.number}</p>
                            </div>

                        </div>
        ))}
                </div>
            </div>
        )
    }
}
