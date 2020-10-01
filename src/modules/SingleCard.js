import React from 'react';
import uuid from 'react-uuid';
import { matchesContent, batlesContent } from '../assets/js/singleCardsData';

import logoStar from '../assets/images/icons/icon-star.svg';
import logoStarFull from '../assets/images/icons/icon-star-full.svg';
import logoStarFinished from '../assets/images/icons/icon-star-finished.svg';
import iconPlay from '../assets/images/icons/icon-play.svg';
import iconWinner from '../assets/images/icons/icon-winner.svg'

export default function SingleCard(props) {
    let currentArray = matchesContent;
    if (props.currentContent === 'matches') {
        currentArray = matchesContent
    } else {
        currentArray = batlesContent;
    }

    const goToUrl = (e) => {
        e.preventDefault();
        if (e.currentTarget.classList.contains('live-event')) {
            window.open(
                e.currentTarget.getAttribute('data-url'),
                '_blank'
            );        
        }
    }
    
    return (
        <div className="schedule-result-block__cards">
            {
                currentArray.map(el => {
                    return (
                        <div className={"single-card " + (el.live ? "live-event" : "")} key={uuid()} data-url={el.url} onClick={goToUrl}>
                            <div className={"single-card__star " + (el.finished ? 'single-card__star--finished' : '')} >
                                <img src={el.live ? logoStarFull : el.upcoming ? logoStar : logoStarFinished } alt="Logo Start"/>
                            </div>
                            <div className="wrapper">
                                <div className="box">
                                    <div className="single-card__header">
                                    <p className="single-card__header__title small-text">{el.title}</p>
                                    {
                                        el.live 
                                        ?
                                        <div className="single-card__header__live">
                                            <img src={iconPlay} alt="Icon Play"/>
                                            <p className="small-text">WATCH LIVE!</p>
                                        </div>
                                        : 
                                        <div className="single-card__header__upcoming">
                                            <h5>{el.time}</h5>
                                            <p className="small-text">{el.date}</p>
                                        </div>
                                        
            
                                    }
                                </div>
                                </div>
                                <div className="box">
                                    <div className="single-card__content">
                                            <div className="single-card__content__images">
                                                {
                                                props.currentContent === 'matches' ?
                                                    el.teams.map(team => {
                                                        return (
                                                            <img src={team.img} key={uuid()} alt="Team Logo"/>
                                                        )
                                                    })
                                                :
                                                    <img src={el.imgBattle} key={uuid()} alt="Battle Logo"/>
                                                }
                                                
                                            </div>
                                            {props.currentContent === 'matches' ?
                                                    <div className="single-card__content__teams">
                                                        {el.teams.map(team => {
                                                            return (
                                                                <div className="single-card__content__team">
                                                                    <h5 className={el.finished && !team.winner ? 'not-winner' : ''} key={uuid()}>{team.name}</h5>
                                                                    <p key={uuid()} 
                                                                    className={
                                                                        (el.live || el.upcoming ? 'single-card__content__team__coefficient ' : 'single-card__content__team__result ')
                                                                        + (team.winner ? 'winner' : '')
                                                                    }
                                                                >
                                                                    {
                                                                    el.live || el.upcoming 
                                                                    ?
                                                                    team.coefficient
                                                                    :
                                                                    team.result
                                                                    }
                                                                    </p>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                    :
                                                    <div className="single-card__content__battles">
                                                        <div>
                                                            {el.teams.map(team => {
                                                                return (
                                                                    <h5 key={uuid()}>{team.name}</h5>
                                                                )
                                                            })}
                                                        </div>
                                                        <div className="single-card__content__battles__match">Match #{el.matchId}</div>
                                                    </div>
                                                }
                                                
                                    </div>
                                    <div 
                                        className={"single-card__footer " + 
                                        (props.currentContent === "battles" ? "single-card__footer--battle" : "")}
                                    >
                                        {props.currentContent === "battles" && el.finished ?
                                        <img src={iconWinner} alt="Icon Winner"/>
                                        : ''
                                        }
                                        <p>
                                            {el.finished ? el.scores 
                                            : el.upcoming ? `${el.beforeStart} • ${el.system}` 
                                            : el.system
                                            }
                                        </p>
                                        {props.currentContent === 'matches'
                                        ?
                                            <img src={el.partnerImg} alt="Partner Logo"/>
                                        :
                                        ''
                                        }
                                        
                                    </div>
                                </div>
                            </div>       
                        </div>
                    )
                })  
            }
        </div>
    )
}
