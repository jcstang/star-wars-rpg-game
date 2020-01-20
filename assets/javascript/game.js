



$(document).ready(function() {
  var arrayOfHealthIds = ['obi-health', 'dooku-health', 'palps-health', 'maul-health'];
  
  // create players
  var obiWanKenobi = {
    name: 'Obi-Wan Kenobi',
    attackPower: 1,
    defensePoser: 0,
    health: 121,
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
  // $('#obi-health').text(obiWanKenobi.heath);
  displayAllPlayerStats(arrayOfHealthIds);
  
  var countDooku = Object.create(obiWanKenobi);
  countDooku.name = 'Count Dooku';
  countDooku.logName();
  
  var palps = Object.create(obiWanKenobi);
  palps.name = 'Darth Sidious';
  palps.logName();
  
  var darthMaul = Object.create(obiWanKenobi);
  darthMaul.name = 'Darth Maul';
  darthMaul.logName();


// ========================================
// EVENTS
// ========================================
  $('#player-obi').on('click', function() {
    appendSelectedCard(this);
  });

  $('#player-dooku').on('click', function() {
    appendSelectedCard(this);
  });

  $('#player-palps').on('click', function() {
    appendSelectedCard(this);
  });

  $('#player-maul').on('click', function() {
    appendSelectedCard(this);
  });



  // ================================================
  // helper functions
  // ================================================
  function isLeftSideEmpty() {
    return $('#my-side').html() === '';
  }

  function isRightSideEmpty() {
    return $('#opponent-side').html() === '';
  }

  function appendSelectedCard(id) {

    if ( isLeftSideEmpty() ) {
      console.log('fill left side');
      $('#my-side').append( $(id).attr('class', 'col-8 container player') );

    } else if ( isRightSideEmpty() ) {
      console.log('fill right side');
      $('#opponent-side').append( $(id).attr('class', 'col-8 container player') );

    } else {
      console.log('do nothing!');
    }

  }

  function displayAllPlayerStats(arr) {
    for (let i = 0; i < arr.length; i++) {
      
      
    }
    $('#obi-health').text(obiWanKenobi.health);
  }

});