import React from 'react';
// import uuid from 'react-uuid'

import Header from '../layout/Header';
import SingleEventComponent from '../components/SingleEventComponent';
import ScheduleAndResultsComponent from '../components/ScheduleAndResultsComponent';
import StagesComponent from '../components/StagesComponent';

export default function EventUpcoming() {
    return (
        <div className="page--event-upconing">
            <Header />
            <SingleEventComponent />
            <ScheduleAndResultsComponent />
            <StagesComponent />
        </div>
    )
}

