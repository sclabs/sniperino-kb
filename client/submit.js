Template.submit.helpers({
  players: function() {
    return Players.find({});
  }
});

Template.submit.events({
    'click .action-submit': function () {
      filepicker.pick(
        {
          mimetypes: ['image/gif','image/jpeg','image/png'],
          multiple: false
        },
        function(InkBlob){
          console.log(InkBlob.url)
          Meteor.call('submitSnipe', $("#input-sniper").val(),
                                     $("#input-victim").val(),
                                     $("#input-comment").val(),
                                     InkBlob.url,
                                     $("#input-hair").is(":checked"),
                                     $("#input-selfie").is(":checked"),
                                     $("#input-selfie-stick").is(":checked"),
                                     function(err, result) {
                                       Router.go('snipe', {_id: result});
                                     });
        },
        function(FPError){
           if(FPError && FPError.code !== 101)
            alert(FPError.toString());
        }
      );
    }
});
