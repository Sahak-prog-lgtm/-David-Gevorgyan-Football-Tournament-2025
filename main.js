// Sample match data
const matches = [
    { team1: '8-1', team2: '10-11', score: '4:15', date: "04.14"  },
    { team1: 'Շրջանավարտներ', team2: '10', score: '-', date: "04.16 12:00"  },
    { team1: ' 12', team2: '9-1', score: '-', date: "04.16 9:30" },
    { team1: '9-3', team2: '9-2', score: '-', date: "04.16 10:40" },
    { team1: 'Team I', team2: 'Team J', score: '-',  },
    { team1: 'Team I', team2: 'Team J', score: '-', },
];

// Sample player data
const players = [
    { name: 'Roman Tantanyan', team: '10-11', goals: 7, assists: 4,  },
    { name: 'Alex Araqelyan', team: '8-1', goals: 3, assists: 0, },
    { name: 'Abo Manukyan', team: '10-11', goals: 3, assists: 1, },
    { name: 'Artur Bagdagulyan', team: '10-11', goals: 2, assists: 4,},
    { name: 'Saqo Avagyan', team: '10-11', goals: 2, assists: 0,},
];

// Function to display matches
function displayMatches() {
    const matchesTable = document.getElementById('matchesTable').getElementsByTagName('tbody')[0];
    matches.forEach(match => {
        const row = matchesTable.insertRow();
        row.insertCell(0).innerText = match.team1;
        row.insertCell(1).innerText = match.team2;
        row.insertCell(2).innerText = match.score;
        row.insertCell(3).innerText = match.date;
    });
}

// Function to display players
function displayPlayers() {
    const playersTable = document.getElementById('playersTable').getElementsByTagName('tbody')[0];
    players.forEach(player => {
        const row = playersTable.insertRow();
        row.insertCell(0).innerText = player.name;
        row.insertCell(1).innerText = player.team;
        row.insertCell(2).innerText = player.goals;
        row.insertCell(3).innerText = player.assists;
    });
}

// Wait for DOM to load before running display functions
document.addEventListener('DOMContentLoaded', () => {
    displayMatches();
    displayPlayers();
});
