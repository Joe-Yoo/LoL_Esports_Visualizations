// D3.js library imported from CDN
// D3 is now available globally and ready to use

// DOM Elements
const playerDataDiv = document.getElementById('player-data');
const championDataDiv = document.getElementById('champion-data');

// Sample data initialization
const samplePlayerData = [
    { name: 'Faker', country: 'KR', games: 20, winrate: '70%', kda: 5.0 },
    { name: 'Gumayusi', country: 'KR', games: 20, winrate: '70%', kda: 4.1 },
    { name: 'Viper', country: 'KR', games: 9, winrate: '55.6%', kda: 8.1 }
];

const sampleChampionData = [
    { name: 'Yunara', picks: 15, bans: 56, winrate: '67%' },
    { name: 'Azir', picks: 14, bans: 51, winrate: '50%' },
    { name: 'Orianna', picks: 19, bans: 45, winrate: '58%' }
];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadPlayerData();
    loadChampionData();
});

// Load and display player data
function loadPlayerData() {
    if (playerDataDiv) {
        let html = '<table class="data-table"><thead><tr><th>Player</th><th>Country</th><th>Games</th><th>Win Rate</th><th>KDA</th></tr></thead><tbody>';
        
        samplePlayerData.forEach(player => {
            html += `<tr>
                <td>${player.name}</td>
                <td>${player.country}</td>
                <td>${player.games}</td>
                <td>${player.winrate}</td>
                <td>${player.kda}</td>
            </tr>`;
        });
        
        html += '</tbody></table>';
        playerDataDiv.innerHTML = html;
    }
}

// Load and display champion data
function loadChampionData() {
    if (championDataDiv) {
        let html = '<table class="data-table"><thead><tr><th>Champion</th><th>Picks</th><th>Bans</th><th>Win Rate</th></tr></thead><tbody>';
        
        sampleChampionData.forEach(champion => {
            html += `<tr>
                <td>${champion.name}</td>
                <td>${champion.picks}</td>
                <td>${champion.bans}</td>
                <td>${champion.winrate}</td>
            </tr>`;
        });
        
        html += '</tbody></table>';
        championDataDiv.innerHTML = html;
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Log page load
console.log('LoL Esports Visualizations loaded successfully');
