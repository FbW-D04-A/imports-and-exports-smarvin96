import { allTeams } from "/teams.js";
import * as action from "/actions.js";
import * as stats from "/statistics.js";

//Teams
console.log(allTeams);

//ACTIONS
console.log("getTeamNames:", action.getTeamNames(allTeams));
console.log("getHowManyTeams:", action.getHowManyTeams(allTeams));
console.log(
  "getTeamPlayersFirstName:",
  action.getTeamPlayersFirstName(allTeams[0])
);

//STATISTICS

console.log("bestTeam:", stats.bestTeam);
