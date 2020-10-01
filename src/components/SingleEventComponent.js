import React from 'react';
import battlegroundsImg from '../assets/images/pic/battlegrounds.svg'
import iconArrow from '../assets/images/icons/icon-right-arrow.svg'
import iconTickets from '../assets/images/icons/icon-tickets.svg'
import iconTwitter from '../assets/images/icons/icon-twitter.svg'
import iconTwitch from '../assets/images/icons/icon-twitch.svg'
import iconFacebook from '../assets/images/icons/icon-facebook.svg'
import iconVk from '../assets/images/icons/icon-vk.svg'

export default function SingleEventComponent() {
    const readAnnouncement = () => {
        window.open(
            'read-announcement',
            '_blank'
        );
    }
    const getTicket = () => {
        window.open(
            'get-ticket',
            '_blank'
        );
    }
    return (
        <div className="single-event-block">
            <div className="container">
                <div className="single-event-block__content">
                    <div className="single-event-block__content__left">
                        <img src={battlegroundsImg} alt="Battlegrounds"/>
                        <h1>StarSeries i-League CSGO Season 8</h1>
                        <p className="main-text">Parimatch League CS:GO is the new online league in Counter-Strike: Global Offensive from Parimatch and StarLadder, with $100,000 total prize pool. 16 teams from Europe and the CIS will take part in the League, with 4 teams going to League through open qualifiers.</p>
                        <div className="single-event-block__content__left__buttons">
                            <button className="btn btn--full" onClick={readAnnouncement}>
                                <span>Read Announcement</span>
                                <img src={iconArrow} alt="Arrow Right"/>
                            </button>
                            <button className="btn btn--clear" onClick={getTicket}>
                                <span>GET TICKETS</span>
                                <img src={iconTickets} alt="Tickets"/>
                            </button>
                        </div>
                    </div>
                    <div className="single-event-block__content__right">
                        <div className="single-event-block__content__right__details">
                            <div className="main-text">Место:</div>
                            <div className="main-text item-text">Берлин, Германия</div>
                            <div className="main-text">Даты:</div>
                            <div className="main-text item-text">22 Сентября – 30 Октября 2020</div>
                            <div className="main-text">Призы:</div>
                            <div className="main-text item-text">$1,000,000</div>
                        </div>
                        <div className="single-event-block__content__right__media">
                            <a href="https://twitter.com" target="_blank"><img src={iconTwitter} alt="Icon Twitter"/></a>
                            <a href="https://twitch.com" target="_blank"><img src={iconTwitch} alt="Icon Twitch"/></a>
                            <a href="https://facebook.com" target="_blank"><img src={iconFacebook} alt="Icon Facebook"/></a>
                            <a href="https://vk.com" target="_blank"><img src={iconVk} alt="Icon VK"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
