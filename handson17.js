// football team
const footballTeam = {
    teamName: "National Football Team",
    members: [{playerId: 10, goals: [2, 1, 3]}],

    addMember: function(playerId) {
        let newMember = {playerId: playerId, goals: []};
        this.members.push(newMember);
        console.log(`Player ${playerId} has joined the team`);
    },

    addGoal: function(playerId, goal) {
        for (let member of this.members) {
            if (member.playerId === playerId) {
                member.goals.push(goal);
                console.log(`Goal ${goal} added for player ${playerId}`);
                return;
            }
        }
        console.log(`Player with id ${playerId} not found`);
    },

    averageGoals: function(playerId) {
        for (let member of this.members) {
            if (member.playerId === playerId) {
                let total = 0;
                for (let g of member.goals) {
                    total += g;
                }
                return total / member.goals.length;
            }
        }
        return 0;
    },

    teamAverage: function() {
        let totalGoals = 0;
        let totalMatches = 0;

        for (let member of this.members) {
            for (let g of member.goals) {
                totalGoals += g;
                totalMatches++;
            }
        }
        if (totalMatches === 0) return 0;
        return totalGoals / totalMatches;
    }
};

footballTeam.addMember(12);
footballTeam.addMember(15);
footballTeam.addGoal(10, 4);
footballTeam.addGoal(15, 2);

console.log("Average goals of player 10 - " + footballTeam.averageGoals(10)); 
console.log("Team average - " + footballTeam.teamAverage());
