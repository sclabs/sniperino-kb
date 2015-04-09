// list of collections
Snipes = new Meteor.Collection("snipes");
Players = new Meteor.Collection("players");

// pub
if (Meteor.isServer) {
  Meteor.publish("snipes", function() {
    return Snipes.find({});
  });
  Meteor.publish("players", function() {
    return Players.find({});
  });
}

// sub
if (Meteor.isClient) {
  Tracker.autorun(function() {
    Meteor.subscribe("snipes");
    Meteor.subscribe("players");
  });
}
