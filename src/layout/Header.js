import React from 'react'
import logoHeader from '../assets/images/pic/logo-header.svg'
import { MAIN_URL } from '../assets/js/main'

export default function Header() {
    return (
        <header className="header">
            <div className="container container--header">
                <a href={MAIN_URL}>
                <img src={logoHeader} alt="Logo Header"/>
                </a>
            </div>
        </header>
    )
}
