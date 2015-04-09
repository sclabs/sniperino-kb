Meteor.methods({
  submitSnipe: function(sniper, victims, text, picture_url) {
    if (!picture || !this.userId)
      return;
    if (Players.find({name: sniper}).count() > 0)
      return;
    if (Players.find({name: victim}).count() > 0)
      return;
    Snipes.insert({user: this.userId,
                   sniper: sniper,
                   victim: victim,
                   picture: picture_url,
                   text: text,
                   comments: [],
                   timestamp: new Date()});
  }
});
