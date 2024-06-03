window.onload = async () => {
    const query = `
    {
        teams {
            _id
            team
            country
        }
    }
    `;

    try {
        const response = await fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query })
        });

        const result = await response.json();
        const teams = result.data.teams;

        const teamsList = document.getElementById('teams-list');
        teamsList.innerHTML = '';
        teams.forEach(team => {
            const listItem = document.createElement('li');
            listItem.textContent = `${team.team} (${team.country})`;
            teamsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
