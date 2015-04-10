Meteor.methods({
  submitSnipe: function(sniper, victim, text, picture, hairBonus, selfieBonus, stickBonus) {
    if (!picture || !this.userId) {
      console.log('no picture or not logged in');
      return;
    }
    if (Players.find({name: sniper}).count() == 0) {
      console.log('could not find sniper');
      return;
    }
    if (Players.find({name: victim}).count() == 0) {
      console.log('could not find victim');
      return;
    }
    console.log('inserting snipe');
    newSnipeId = Snipes.insert({user_id: this.userId,
                                user: Meteor.users.findOne(this.userId).profile.name,
                                sniper: sniper,
                                victim: victim,
                                picture: picture,
                                text: text,
                                hairBonus: hairBonus,
                                selfieBonus: selfieBonus,
                                stickBonus: stickBonus,
                                comments: [],
                                invalidated: false,
                                timestamp: new Date()});
                   
    return newSnipeId;
  },
  
  invalidateSnipe: function(id) {
    if (!this.userId) {
      console.log('not logged in');
      return;
    }
    console.log('invalidating snipe');
    Snipes.update(id, {$set: {invalidated: true,
                              invalidated_by_id: this.userId,
                              invalidated_by_name: Meteor.users.findOne(this.userId).profile.name,
                              invalidated_when: new Date()}});
  }
});
