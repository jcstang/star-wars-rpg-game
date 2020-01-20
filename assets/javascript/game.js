
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
    // $('.battle-arena').text('obiwan');
    var checkMySide = $('#my-side').html();
    if (checkMySide === '') {
      console.log('hmm it looks like it is empty')
      $('#my-side').append( $(this).attr('class', 'col-8 container player') );
    } else {
      $('#opponent-side').append( $(this).attr('class', 'col-8 container player') );
    }

    // $('#myDiv2').append( $('#myDiv1>p') );
  });

  $('#player-dooku').on('click', function() {
    console.log(this.id);
    var checkMySide = $('#my-side').html();
    var checkOtherSide = $('#opponent-side').html();

    if (checkMySide === '' && checkOtherSide === '') {
      console.log('gooood... it looks like it is empty')
      $('#my-side').append( $(this).attr('class', 'col-8 container player') );
    } else {
      console.log('hmmm... someone on the other side, there is.');
      $('#opponent-side').append( $(this).attr('class', 'col-8 container player') );

    }
  });

  $('#player-palps').on('click', function() {
    console.log(this.id);
    var checkMySide = $('#my-side').html();
    if (checkMySide === '') {
      console.log('gooood... it looks like it is empty')
      $('#my-side').append( $(this).attr('class', 'col-8 container player') );
    } else {
      console.log('hmmm... someone on the other side, there is.');
      $('#opponent-side').append( $(this).attr('class', 'col-8 container player') );
    }
  });

  $('#player-maul').on('click', function() {
    console.log(this.id);
    var checkMySide = $('#my-side').html();
    if (checkMySide === '') {
      console.log('gooood... it looks like it is empty')
      $('#my-side').append( $(this).attr('class', 'col-8 container player') );
    } else {
      console.log('hmmm... someone on the other side, there is.');
      $('#opponent-side').append( $(this).attr('class', 'col-8 container player') );
    }
  });

});