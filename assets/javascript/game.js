


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
      this.attacker = false;
      this.attackCount = 0;
    }
    displayStats() {
      $(this.healthCssId).text(this.health);
    }

    updateCharacter() {

    }

    attack() {
      // increase attack power by certain degree
      //stuff
    }

    increaseAttackPower() {
      this.attackPower *= 2;
    }

    defendAttack(opponentAttack) {
      // do math
      this.attackCount++;
      this.health -= opponentAttack;
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
  

  // obiWanKenobi.health - countDooku.attackPower
  // countDooku.health - obiWanKenobi.attackPower


// ======= 


  // variables
  var defendingPlayer;
  var attackingPlayer;

// ========================================
// EVENTS
// ========================================
  $('#player-obi').on('click', function() {
    appendSelectedCard(this);
    // console.log(this);
    
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
      // attack left
      // attack right
      // did you win yet? what about lose?

      //they are ready for attack button
      console.log('ATTACK!!!!');

      // attackingPlayer attacks defendingPlayer
      defendingPlayer.defendAttack(attackingPlayer.attackPower);
      console.log(defendingPlayer.health);
      defendingPlayer.displayStats();

      // defendingPlayer attacks attackingPlayer
      attackingPlayer.defendAttack(defendingPlayer.attackPower);
      console.log(attackingPlayer.health);
      attackingPlayer.displayStats();

      defendingPlayer.increaseAttackPower();
      // perform attack

      winningStateHandler();
      losingStateHandler();

      // TODO: who won? is the game over? 
      // winingHandler()
      // loserHandler()
      // display results

      // code shared with me from tutor.
      // Creates messages for our attack and our opponents counter attack.
      //var attackMessage = "You attacked " + defender.name + " for " + attacker.attack * turnCounter + " damage.";
      //var counterAttackMessage = defender.name + " attacked you back for " + defender.enemyAttackBack + " damage.";


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

  function appendSelectedCard(character) {

    if ( isLeftSideEmpty() ) {
      // console.log('fill left side');
      $('#my-side').append( $(character).attr('class', 'col-8 container player') );
      defendingPlayer = getPlayerByCssId(character.id);
      console.log('defending player is: ');
      console.log(defendingPlayer);
      
    } else if ( isRightSideEmpty() ) {
      // console.log('fill right side');
      $('#opponent-side').append( $(character).attr('class', 'col-8 container player') );
      attackingPlayer = getPlayerByCssId(character.id);
      console.log('attacking player is: ');
      console.log(attackingPlayer);
      

    } else {
      console.log('do nothing!');
    }

  }

  function getPlayerByCssId(id) {
    var selectedPlayer;
    if (id === obiWanKenobi.mainCssId) {
      selectedPlayer = obiWanKenobi;

    } else if (id === countDooku.mainCssId) {
      selectedPlayer = countDooku;

    } else if (id === palps.mainCssId) {
      selectedPlayer = palps;

    } else {
      //darth maul
      selectedPlayer = darthMaul;
    }

    return selectedPlayer;
  }

  function isWinningState() {
    return ( defendingPlayer.health >= 0 && attackingPlayer.health <= 0 );
  }

  function isLosingState() {
    //not a match
  }

  function winningStateHandler() {

    if ( isWinningState() ) {
      console.log('hooray you win!!!');
      $('#opponent-side').empty();
    }

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