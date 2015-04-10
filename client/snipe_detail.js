Template.snipe_detail.helpers({
  points: function() {
    var pointValue = 1.0;
    if (this.sniped == "Matt")
      pointValue += 0.5;
    if (this.hairBonus)
      pointValue += 0.5;
    if (this.stickBonus)
      pointValue += 2.0;
    else if (this.selfieBonus)
      pointValue += 1.0;
    if (pointValue == 1.0)
      return "1 point";
    else
      return pointValue + " points";
  },
  
  bonuses: function() {
    var bonusList = [];
    if (this.sniped == "Matt")
      bonusList.push("Matt");
    if (this.hairBonus)
      bonusList.push("Hair");
    if (this.stickBonus)
      bonusList.push("Selfie Stick");
    else if (this.selfieBonus)
      bonusList.push("Selfie");
    if (bonusList.length == 0)
      return "None";
    return bonusList.join(", ");
  }
});
