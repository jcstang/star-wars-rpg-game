



$(document).ready(function() {
  var arrayOfHealthIds = ['obi-health', 'dooku-health', 'palps-health', 'maul-health'];
  
  // create players
  class Player {
    constructor(name, healthCssId, mainCssId) {
      this.name = name;
      this.healthCssId = healthCssId;
      this.mainCssId = mainCssId;
      this.attackPower = 1;
      this.health = 121;
    }
    displayStats() {
      $(this.healthCssId).text(this.health);
    }

    attack() {
      // increase attack power by certain degree
      //stuff
    }
  }

  //----
  // var obiWanKenobi3 = {
  //   name: 'Obi-Wan Kenobi',
  //   healthCssId: '#obi-health',
  //   attackPower: 1,
  //   health: 123,
  //   displayStats: function() {
  //     $(this.healthCssId).text(this.health);
  //   },
  //   attack: function() {
  //     //stuff
  //   },
  //   increaseAttack: function() {
  //     //stuff
  //   }, 
  //   logName: function() {
  //     console.log('Name: ' + this.name);
  //   }
  // };

  var obiWanKenobi = new Player('Obi-Wan Kenobi', '#obi-health', 'player-obi');
  console.log(obiWanKenobi);
  obiWanKenobi.displayStats();

  var countDooku = new Player('Count Dooku', '#dooku-health', 'player-dooku');
  console.log(countDooku);
  countDooku.displayStats();

  var palps = new Player('Darth Sidious', '#palps-health', 'player-palps');
  console.log(palps);
  palps.displayStats();

  var darthMaul = new Player('Darth Maul', '#maul-health', 'player-maul');
  console.log(darthMaul);
  darthMaul.displayStats();
  
  


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

  $('#attack-btn').on('click', function() {
    console.log('ATTACK!!!!');
    // if, there are 2 charactors in position. else, do nothing
    //do something to attack
    // who is where?
    // attack
    // print result of attack
    // check for win/lose
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

  function displayPlayerStats(player) {
    $(player.healthCssId).text(player.health);
  }

});