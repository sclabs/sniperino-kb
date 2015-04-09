Router.configure({
  layoutTemplate: 'baseLayout'
});

Router.map(function() {
  this.route('scoreboard', {
    path: '/',
    template: 'scoreboard'
  });
  
  this.route('recent', {
    path: '/recent',
    template: 'recent_snipes',
    data: function() {
      return Snipes.find().sort({timestamp: -1}).limit(20);
    }
  });

  this.route('player', {
    path: '/players/:id',
    template: 'player_detail',
    notFoundTemplate: 'playerNotFound',
    data: function() {
      return Snipes.find({$or: [{sniper: this.params._id}, {victim: this.params_id}]}).sort({timestamp: -1});
    }
  });

  this.route('submit', {
    path: '/submit',
    onBeforeAction: function() {
      loadFilePicker('ACDLisuSIqcb8WHE9FQwxz');
      this.next();
    }
  });

  this.route('snipe', {
    path: '/snipe/:_id',
    template: 'snipe_detail',
    notFoundTemplate: 'snipeNotFound',
    data: function() {
      return Snipes.findOne(this.params._id);
    }
  });

  this.route('rules', {
    path: '/rules',
    template: 'rules'
  });
});
