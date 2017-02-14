//This is the first javascript file to load, so it initializes the module
var myAppModule = angular.module("myApp", ["ngRoute"]);

myAppModule.factory("PlayerFactory", function(){
   //Initialize our list of players
   var players = [
      {name:"Oscar", team:"Bruins"},
      {name:"George", team:""},
      {name:"Herkemer", team:""},
      {name:"Bill", team:"Maple Leafs"}
   ];

   var factory = {};

   //Pass the player list to a controller
   factory.getPlayers = function(callback){
      callback(players);
   }

   //Add new player to the list
   factory.addPlayer = function(player){
      player.team = ""; //New players don't belong to a team
      players.push(player);
   }

   //Remove the player from the list
   factory.removePlayer = function($index){
      players.splice($index, 1);
   }

   //Set a player's team name
   factory.addPlayerToTeam = function(data){
      players[data.playerIdx].team = data.team;
   }

   //Reset a player's team name to an empty string
   factory.removePlayerFromTeam = function($index){
      players[$index].team = "";
   }
   return factory;
})