
// create players
var obiWanKenobi = {
  name: 'Obi-Wan Kenobi',
  attackPower: 1,
  defensePoser: 0,
  attack: function() {
    //stuff
  },
  increaseAttack: function() {
    //stuff
  }, 
  logName: function() {
    console.log('Name: ' + this.name);
  }
};

obiWanKenobi.logName();
var countDooku = Object.create(obiWanKenobi);
countDooku.name = 'Count Dooku';
countDooku.logName();

var palps = Object.create(obiWanKenobi);
palps.name = 'Darth Sidious';
palps.logName();

var darthMaul = Object.create(obiWanKenobi);
darthMaul.name = 'Darth Maul';
darthMaul.logName();



$(document).ready(function() {

  $('#player-obi').on('click', function() {
    console.log(this.id);
    //TODO: move obi-wan to selected spot
    $('.selected-character').html('<p>hello there</p>');
  });

  $('#player-dooku').on('click', function() {
    console.log(this.id);
  });

  $('#player-palps').on('click', function() {
    console.log(this.id);
  });

  $('#player-maul').on('click', function() {
    console.log(this.id);
  });

});