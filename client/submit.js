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
        },
        function(FPError){
           if(FPError && FPError.code !== 101)
            alert(FPError.toString());
        }
      );
    }
});
