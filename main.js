// Sample match data
const matches = [
    { team1: 'Team A', team2: 'Team B', score: '-', date: '2025-04-15' },
    { team1: 'Team C', team2: 'Team D', score: '-', date: '2025-04-15' },
    { team1: 'Team E', team2: 'Team F', score: '-', date: '2025-04-15' },
    { team1: 'Team G', team2: 'Team H', score: '-', date: '2025-04-15' },
    { team1: 'Team I', team2: 'Team J', score: '-', date: '2025-04-15' },
];

// Sample player data
const players = [
    { name: 'Player 1', team: 'Team A', goals: 3, assists: 1, yellow_cards: 0, red_cards: 0 },
    { name: 'Player 2', team: 'Team B', goals: 1, assists: 2, yellow_cards: 1, red_cards: 0 },
    { name: 'Player 3', team: 'Team C', goals: 0, assists: 0, yellow_cards: 2, red_cards: 1 },
    { name: 'Player 4', team: 'Team D', goals: 4, assists: 3, yellow_cards: 0, red_cards: 0 },
    { name: 'Player 5', team: 'Team E', goals: 2, assists: 1, yellow_cards: 1, red_cards: 0 },
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
        row.insertCell(4).innerText = player.yellow_cards;
        row.insertCell(5).innerText = player.red_cards;
    });
}

// Wait for DOM to load before running display functions
document.addEventListener('DOMContentLoaded', () => {
    displayMatches();
    displayPlayers();
});
