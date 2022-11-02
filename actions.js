//Actions

const getTeamNames = (teams) => teams.map((team) => team.teamName);

const getHowManyTeams = (teams) => teams.length;

const getTeamPlayersFirstName = (team) =>
  team.players.map((player) => player.firstName);

  export {getTeamNames, getHowManyTeams, getTeamPlayersFirstName};