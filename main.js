// Sample match data
const matches = [
    { team1: '8-1', team2: '10-11', score: '4:15', date: "04.14 12:00"  },
    { team1: 'Շրջանավարտներ', team2: '10', score: '3:2', date: "04.16 12:00"  },
    { team1: ' 12', team2: '9-1', score: '0:1', date: "04.16 9:30" },
    { team1: '9-3', team2: '9-2', score: '6:1', date: "04.16 10:40" },
    { team1: '8-2', team2: '9-2', score: '1:2',  date: "04.18 9:20" },
    { team1: 'Քոլեջ', team2: '10-11', score: '3:10',  date: "04.18 10:30" },
    { team1: '9-3', team2: '10', score: '2:4',  date: "04.18 11:50" },
    { team1: '8-2', team2: '9-3', score: '2:2',  date: "04.21 12:20" },
    { team1: '12', team2: 'Քոլեջ', score: '5:1',  date: "04.21 11:00" },
    { team1: '8-1', team2: '9-1', score: '0:11',  date: "04.21 13:00" },
    { team1: 'Շրջանավարտներ', team2: '9-2', score: '10:4',  date: "04.23 12:00" },
    { team1: '10', team2: '10-11', score: '10:4',  date: "04.23 10:50" },
    { team1: '8-1', team2: '12', score: '0:16',  date: "04.23 9:30" },
    { team1: 'Քոլեջ', team2: '9-1', score: '7:7',  date: "04.23 13:20" },
    { team1: 'Շրջանավարտներ', team2: '8-2', score: '3:0',  date: "04.28 14:40" },
        { team1: '9-1', team2: '10', score: '5:2',  date: "05.05 11:00" },
        { team1: 'Շրջանավարտներ', team2: '12', score: '2:1',  date: "05.05 12:05" },
            { team1: '9-1', team2: '10', score: '2:1 (7:3)',  date: "05.05 9:30" },
        { team1: 'Շրջանավարտներ', team2: '12', score: '2:3 дв 5:4 (7:5)',  date: "05.05 13:00" },
                { team1: '12', team2: '10', score: '---',  date: "13.05 9:30" },
        { team1: 'Շրջանավարտներ', team2: '9-1', score: '---',  date: "13.05 13:00" }
    
    
    
];

// Sample player data
const players = [
    { name: 'Վարուժ Կարապետյան', team: '9-1', goals: 20, assists: 1, },
    { name: 'Ռոման Թանթանյան', team: '10-11', goals: 15, assists: 6,  },
    { name: 'Բարսեղյան Մարտին', team: '12', goals: 11, assists: 2, }, 
    { name: 'Ռուբեն Մաթևոսյան', team: '10', goals: 9, assists: 5,},
    { name: 'Ալբերտ Մանուկյան', team: '10-11', goals: 6, assists: 2, },
    
    
    
    
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
