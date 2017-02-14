myAppModule.factory("TeamFactory", function(){
   //Initialize our list of teams
   var teams = [
      {name:"Bruins"},
      {name:"Maple Leafs"},
      {name:"Senators"}
   ];

   var factory = {};

   //Pass the team list to a controller
   factory.getTeams = function(callback){
      callback(teams);
   }

   //Add new team to the list
   factory.addTeam = function(team){
      teams.push(team);
   }

   //Remove the team from the list
   factory.removeTeam = function($index){
      teams.splice(teams.indexOf($index), 1);
   }
   return factory;
})