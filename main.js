const matches = [
    { team1: '--', team2: '-', score: '-', date: '2025-04-15' },
    { team1: '--', team2: '-', score: '-', date: '2025-04-15' },
    { team1: '--', team2: '-', score: '-', date: '2025-04-15' },
    { team1: '--', team2: '-', score: '-', date: '2025-04-15' },
    { team1: '--', team2: '-', score: '-', date: '2025-04-15' },
    { team1: '--', team2: '-', score: '-', date: '2025-04-15' },
];

const players = [
     { name: '--', team: '--', goals: --, assists: --, yellow_cards: --, red_cards: -- },
     { name: '--', team: '--', goals: --, assists: --, yellow_cards: --, red_cards: -- },
     { name: '--', team: '--', goals: --, assists: --, yellow_cards: --, red_cards: -- },
     { name: '--', team: '--', goals: --, assists: --, yellow_cards: --, red_cards: -- },
     { name: '--', team: '--', goals: --, assists: --, yellow_cards: --, red_cards: -- },
    
];

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

displayMatches();
displayPlayers();

    
