import imgTeam11 from '../images/pic/teams/team-1.svg'
import imgTeam12 from '../images/pic/teams/team-2.svg'
import imgTeam21 from '../images/pic/teams/team-3.svg'
import imgTeam22 from '../images/pic/teams/team-4.svg'
import imgTeam31 from '../images/pic/teams/team-5.svg'
import imgTeam32 from '../images/pic/teams/team-6.svg'
import imgTeam41 from '../images/pic/teams/team-7.svg'
import imgTeam42 from '../images/pic/teams/team-2.svg'

import imgBattle1 from '../images/pic/battles/battle-1.svg'
import imgGGBET from '../images/pic/partners/ggbet.svg'

const matchesContent = [
    {
        id: 1,
        title: 'Asia Minor: Play-Off',
        time: '',
        date: '',
        teams: [
            {
                id: 11,
                name: 'Dianne Henry',
                coefficient: '3.22',
                result: '',
                img: imgTeam11,
            },
            {
                id: 12,
                name: 'Bernard Warren',
                coefficient: '53.22',
                result: '',
                img: imgTeam12,
            },
            
        ],
        url: 'https://asia-minor-Match-WatchOnline.com',
        beforeStart: '',
        system: 'Bo 3',
        scores: '',
        partnerImg: imgGGBET,
        live: true,
        upcoming: false,
        finished: false,
    },
    {
        id: 2,
        title: 'Asia Minor: Play-Off',
        time: '19:00',
        date: '29 октября',
        teams: [
            {
                id: 21,
                name: 'Regina Watson',
                coefficient: '3.22',
                result: '',
                img: imgTeam21,
            },
            {
                id: 22,
                name: 'Kathryn Jones',
                coefficient: '53.22',
                result: '',
                img: imgTeam22,
            },
            
        ],
        url: '',
        beforeStart: 'Starts in: 5 hours 39 min',
        system: 'Bo 3',
        scores: '',
        partnerImg: imgGGBET,
        live: false,
        upcoming: true,
        finished: false,
    },
    {
        id: 3,
        title: 'Asia Minor: Play-Off',
        time: '19:00',
        date: '29 октября',
        teams: [
            {
                id: 31,
                name: 'Ricardo Hawkins',
                coefficient: '3.22',
                result: '',
                img: imgTeam31,
            },
            {
                id: 32,
                name: 'Bruce Simmmons',
                coefficient: '53.22',
                result: '',
                img: imgTeam32,
            },
            
        ],
        url: '',
        beforeStart: 'Starts in: 5 hours 39 min',
        system: 'Bo 3',
        scores: '',
        partnerImg: imgGGBET,
        live: false,
        upcoming: true,
        finished: false,
    },
    {
        id: 4,
        title: 'Asia Minor: Play-Off',
        time: '19:00',
        date: '29 октября',
        teams: [
            {
                id: 41,
                name: 'Dianne Henry',
                coefficient: '3.22',
                result: '2',
                img: imgTeam41,
                winner: true,
            },
            {
                id: 42,
                name: 'Bernard Warren',
                coefficient: '53.22',
                result: '1',
                img: imgTeam42,
                winner: false,

            },
            
        ],
        url: '',
        beforeStart: '',
        system: 'Bo 3',
        scores: '1:0 • 0:1 • 1:0',
        partnerImg: imgGGBET,
        live: false,
        upcoming: false,
        finished: true,
    },
];

const batlesContent = [
    {
        id: 701,
        title: 'Group Stage',
        time: 'March 8',
        date: '',
        teams: [
            {
                name: 'Group A',
            },
            {
                name: 'Group B',
            },
            
        ],
        url: 'https://group-stage-battle-watchOnline.com',
        matchId: 1,
        imgBattle: imgBattle1,
        beforeStart: '',
        system: 'Map: Erangel',
        scores: '',
        live: true,
        upcoming: false,
        finished: false,
    },
    {
        id: 702,
        title: 'Group Stage',
        time: '19:00',
        date: 'March 8',
        teams: [
            {
                id: 73,
                name: 'Group A',
            },
            {
                id: 74,
                name: 'Group B',
            },
            
        ],
        url: '',
        matchId: 2,
        imgBattle: imgBattle1,
        beforeStart: 'Starts in: 5 hours 39 min',
        system: 'Map: Erangel',
        scores: '',
        live: false,
        upcoming: true,
        finished: false,
    },
    {
        id: 703,
        title: 'Group Stage',
        time: '19:00',
        date: 'March 8',
        teams: [
            {
                name: 'Group A',
            },
            {
                name: 'Group B',
            },
            
        ],
        url: '',
        matchId: 3,
        imgBattle: imgBattle1,
        beforeStart: 'Starts in: 5 hours 39 min',
        system: 'Map: Erangel',
        scores: '',
        live: false,
        upcoming: true,
        finished: false,
    },
    {
        title: 'Group Stage',
        time: '19:00',
        date: 'March 8',
        teams: [
            {
                name: 'Group A',
                
            },
            {
                name: 'Group B',
            },
            
        ],
        url: '',
        matchId: 4,
        imgBattle: imgBattle1,
        beforeStart: '',
        system: 'Map: Erangel',
        scores: 'Natus Vincere (A) - 233pts',
        live: false,
        upcoming: false,
        finished: true,
    },
];

export { matchesContent, batlesContent };