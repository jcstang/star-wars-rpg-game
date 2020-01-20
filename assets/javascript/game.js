
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
    // console.log(this.id);

    // TODO: make the rest look like this
    if ( isLeftSideEmpty() ) {
      console.log('fill left side');
      $('#my-side').append( $(this).attr('class', 'col-8 container player') );

    } else if ( isRightSideEmpty() ) {
      console.log('fill right side');
      $('#opponent-side').append( $(this).attr('class', 'col-8 container player') );

    } else {
      console.log('do nothing!');
    }

  });

  $('#player-dooku').on('click', function() {
    // console.log(this.id);

    if ( isLeftSideEmpty() ) {
      console.log('fill left side');
      $('#my-side').append( $(this).attr('class', 'col-8 container player') );

    } else if ( isRightSideEmpty() ) {
      console.log('fill right side');
      $('#opponent-side').append( $(this).attr('class', 'col-8 container player') );

    } else {
      console.log('do nothing!');
    }
  });

  $('#player-palps').on('click', function() {
    console.log(this.id);

    if ( isLeftSideEmpty() ) {
      console.log('fill left side');
      $('#my-side').append( $(this).attr('class', 'col-8 container player') );

    } else if ( isRightSideEmpty() ) {
      console.log('fill right side');
      $('#opponent-side').append( $(this).attr('class', 'col-8 container player') );

    } else {
      console.log('do nothing!');
    }

  });

  $('#player-maul').on('click', function() {
    console.log(this.id);

    if ( isLeftSideEmpty() ) {
      console.log('fill left side');
      $('#my-side').append( $(this).attr('class', 'col-8 container player') );

    } else if ( isRightSideEmpty() ) {
      console.log('fill right side');
      $('#opponent-side').append( $(this).attr('class', 'col-8 container player') );

    } else {
      console.log('do nothing!');
    }
  });

  function isLeftSideEmpty() {
    return $('#my-side').html() === '';
  }

  function isRightSideEmpty() {
    return $('#opponent-side').html() === '';
  }

});