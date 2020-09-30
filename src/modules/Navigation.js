import React from 'react'
import uuid from 'react-uuid';
import rightArrow from '../assets/images/icons/icon-right-arrow-red.svg'
export default function Navigation() {
    const navigation = [
        {
            name: 'Support',
            url: '#Support',
        },
        {
            name: 'Rules',
            url: '#Rules',
        },
        {
            name: 'FAQ',
            url: '#FAQ',
        },
    ];

    return (
        <nav className="navigation">
            <ul>
                {navigation.map((li, index) => {
                    return (
                        <a href={li.url} key={uuid()}><li>
                            <span className="small-text">{li.name}</span>
                            <img src={rightArrow} alt="Right Arrow"/>
                        </li></a>
                    )
                })}
            </ul>
        </nav>
    )
}
