import React from 'react'
import { registredPlayers } from '../assets/js/registredPlayers';
import uuid from 'react-uuid'
import iconRegistration from '../assets/images/icons/stages/icon-registrarion.svg';
import iconCheckin from '../assets/images/icons/stages/icon-checkin.svg';
import iconScheduling from '../assets/images/icons/stages/icon-scheduling.svg';
import iconComplete from '../assets/images/icons/stages/icon-complete.svg';
import backRegistred from '../assets/images/pic/background-register.svg';
import Navigation from '../modules/Navigation'

export default function StagesComponent() {
    const goToTeamLink = (e) => {

        window.open(
            e.currentTarget.getAttribute('data-url'),
            '_blank'
        );
    }
    return (
        <div className="stages-event">
            <div className="container">
                <h3>Этапы проведения</h3>
                <p className="main-text stages-event__sub-title">The path to every Major begins with the open qualifiers for the regional Minor Championships, spanning Europe, CIS, Americas, and Asia. <span className="red-text">Here is</span> the schedule of every qualifying stage of StarLadder Major.</p>
                <p className="main-text stages-event__text-register">Зарегистрировано: 24</p>
                <div className="stages-event__content">
                    <div className="stages-event__content__table">
                        <div className="stages-event__content__table__header">
                            <div className="stages-event__content__table__header__item">#</div>
                            <div className="stages-event__content__table__header__item">Команда</div>
                        </div>
                        <div className="stages-event__content__table__body">
                            {registredPlayers.map(player => {
                                return (
                                    <div className="stages-event__content__table__body__row" data-url={player.url} key={uuid()} onClick={goToTeamLink}>
                                        
                                            <div className="stages-event__content__table__body__item" data-column="#">{player.id}</div>
                                            <div className="stages-event__content__table__body__item" data-column="Команда">
                                                <img src={player.img} alt="Team Flag"/>
                                                {player.name}
                                            </div>
                                        
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="stages-event__content__registration">
                        <div className="stages-event__content__registration__box">
                            <div className="stages-event__content__registration__box__img">
                                <img src={iconRegistration} alt="Icon Registration"/>
                            </div>
                                
                            <div className="stages-event__content__registration__box__content active">
                                <p className="sub-text registration-title">Registration</p>
                                <p className="sub-text">29 sep, 19:00 – 20 nov, 10:00</p>
                            </div>
                        </div>
                        <div className="stages-event__content__registration__box">
                                <img src={iconCheckin} alt="Icon Registration" />
                                <div className="stages-event__content__registration__box__content">
                                    <p className="sub-text registration-title">Check-in</p>
                                    <p className="sub-text">29 sep, 19:00 – 20 nov, 10:00</p>
                                </div>
                        </div>
                        <div className="stages-event__content__registration__box">
                                <img src={iconScheduling} alt="Icon Registration"/>
                                <div className="stages-event__content__registration__box__content">
                                    <p className="sub-text registration-title">Scheduling:</p>
                                    <p className="sub-text">29 sep, 19:00 – 20 nov, 10:00</p>
                                </div>
                        </div>
                        <div 
                            className="stages-event__content__registration__box stages-event__content__registration__box--status"
                        >
                            <img src={iconComplete} alt="Complete Icon"/>
                            <div className="stages-event__content__registration__box__content">
                                <p className="small-text status-title">Вы зарегистрированы</p>
                                <p className="small-text">Team: Natus vincere (#353)</p>
                            </div>
                            <img src={backRegistred} className="status-background" alt="Background Vector"/>
                        </div>
                        <Navigation />
                    </div>
                </div>
            </div>
        </div>
    )
}
