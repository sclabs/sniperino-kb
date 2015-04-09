Meteor.startup(function() {
  // populate players
  if (Players.find().count() === 0) {
    var players = ["Jaewon",
                   "Crystal",
                   "Sandro",
                   "Sam",
                   "An",
                   "Erqic",
                   "Amy",
                   "Allen",
                   "Albert",
                   "Lucas",
                   "Alan",
                   "Keo",
                   "Justin",
                   "Joshua",
                   "Eli",
                   "Sam Zeng",
                   "Tony"];
    for (var i = 0; i < players.length; i++)
      Players.insert({name: players[i]});
  }
});
