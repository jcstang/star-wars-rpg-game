


$(document).ready(function() {
  
  // ========================================
  // Player Class - player creation
  // ========================================
  class Player {
    constructor(name, healthCssId, mainCssId) {
      this.name = name;
      this.healthCssId = healthCssId;
      this.mainCssId = mainCssId;
      this.attackPower = 10;
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
  

  // variables
  var myPlayer;
  var otherGuy;

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
    // if, there are 2 charactors in position. else, do nothing
    //do something to attack
    // who is where?
    // attack
    // print result of attack
    // check for win/lose
    
    if ( !isLeftSideEmpty() && !isRightSideEmpty() ) {
      //they are ready for attack button
      console.log('ATTACK!!!!');
      // perform attack
      attack(myPlayer, otherGuy);
      // winingHandler()
      // loserHandler()
      // display results
    } else {
      //not ready for attack button
    }
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
      myPlayer = id;
      // console.log('here is myplayer: ');
      // console.log(myPlayer);
      console.log(myPlayer.id);
      
      
    } else if ( isRightSideEmpty() ) {
      console.log('fill right side');
      $('#opponent-side').append( $(id).attr('class', 'col-8 container player') );
      otherGuy = id;
      console.log(otherGuy.id);

    } else {
      console.log('do nothing!');
    }

  }

  function isWinningState() {
    //word-match game. match.
  }

  function isLosingState() {
    //not a match
  }

  function winningStateHandler() {
    // check
    // ++
    // resetgame();
  }

  function losingStateHandler() {
    // check
    // --
    // resetgame();
  }

  function attack(left, right) {
    //stuff
  }

});