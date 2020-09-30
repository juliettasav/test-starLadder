import React, { Component } from 'react'
import SingleCard from '../modules/SingleCard'

export default class ScheduleAndResultsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCard: 'matches',
        }
    }
    onClickChoose = (e) => {
        this.setState({
            currentCard: e.target.value,
        });
    }

    render() {
        const { currentCard } = this.state;
        return (
            <div className="schedule-result-block">
                <div className="container">
                    <h3>Расписание и результаты</h3>
                    <div className="schedule-result-block__buttons">
                        <button 
                            value="matches" 
                            className={'btn ' + (currentCard === 'matches' ? 'btn--choosed' : '')} 
                            onClick={this.onClickChoose}
                        >
                            Matches
                        </button>
                        <button 
                            value="battles" 
                            className={'btn ' + (currentCard === 'battles' ? 'btn--choosed' : '')}
                            onClick={this.onClickChoose}
                        >
                            Battles
                        </button>
                    </div>
                    
                    <SingleCard currentContent={currentCard}/>
                    
                </div>
            </div>
        )
    }
}

