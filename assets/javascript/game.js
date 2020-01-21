// ========================================
// Star wars RPG game
// Jacob Stanger
// Jan 2020
// ========================================


$(document).ready(function() {
  
  // ================================================
  // Player Class - player creation
  // ================================================
  class Player {
    constructor(name, healthCssId, mainCssId) {
      this.name = name;
      this.healthCssId = healthCssId;
      this.mainCssId = mainCssId;
      this.attackPower = 10;
      this.health = 121;
      this.attacker = false;
      this.attackCount = 0;
      this.defeatedOpponents = 0;
    }
    displayStats() {
      $(this.healthCssId).text(this.health);
    }

    updateCharacter() {

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
  // console.log(obiWanKenobi);
  obiWanKenobi.displayStats();

  var countDooku = new Player('Count Dooku', '#dooku-health', 'player-dooku');
  // console.log(countDooku);
  countDooku.displayStats();

  var palps = new Player('Darth Sidious', '#palps-health', 'player-palps');
  // console.log(palps);
  palps.displayStats();

  var darthMaul = new Player('Darth Maul', '#maul-health', 'player-maul');
  // console.log(darthMaul);
  darthMaul.displayStats();
  



  // ===================================================
  // setting the current players on the board fighting
  // ===================================================
  var defendingPlayer;
  var attackingPlayer;

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
      console.log('ATTACK!!!!');

      // defendingPlayer attacks attackingPlayer
      attackingPlayer.defendAttack(defendingPlayer.attackPower);
      var counterAttackMessage = defendingPlayer.name + ' counter attacked ' + attackingPlayer.name + ' for ' + defendingPlayer.attackPower + ' damage!';
      $('.game-log').prepend('<p>' + counterAttackMessage +'</p>');
      console.log(attackingPlayer.health);
      attackingPlayer.displayStats();
      
      // attackingPlayer attacks defendingPlayer
      defendingPlayer.defendAttack(attackingPlayer.attackPower);
      var attackMessage = attackingPlayer.name + ' attacked ' + defendingPlayer.name + ' for ' + attackingPlayer.attackPower + ' damage.'
      $('.game-log').prepend('<p>' + attackMessage +'</p>');
      console.log(defendingPlayer.health);
      defendingPlayer.displayStats();
      runWinAndLoseHandlers();
      
      // increment on defending players attack power
      // the more he attacks, more attack power
      defendingPlayer.increaseAttackPower();

      // code shared with me from tutor.
      // Creates messages for our attack and our opponents counter attack.
      //var attackMessage = "You attacked " + defender.name + " for " + attacker.attack * turnCounter + " damage.";
      //var counterAttackMessage = defender.name + " attacked you back for " + defender.enemyAttackBack + " damage.";

    } else {
      //not ready for attack button
      //TODO: this else statement may not be necessary.
    }


  });



  // ================================================
  // helper functions
  // ================================================
  function runWinAndLoseHandlers() {
    winningStateHandler();
    losingStateHandler();
  }

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
      $('#top-message').text('Choose which enemy to fight, for now...');
      
    } else if ( isRightSideEmpty() ) {
      // console.log('fill right side');
      $('#opponent-side').append( $(character).attr('class', 'col-8 container player') );
      attackingPlayer = getPlayerByCssId(character.id);
      

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
      selectedPlayer = darthMaul;
    }

    return selectedPlayer;
  }

  function isWinningState() {
    return ( defendingPlayer.health >= 0 && attackingPlayer.health <= 0 );
  }

  function isWinningGameState() {
    var returnValue = false;

    console.log('here is defeated opponents property');
    console.log(defendingPlayer.defeatedOpponents);
    
    if (defendingPlayer.defeatedOpponents >= 3) {
      returnValue = true;
    }

    return returnValue; 
  }

  function isLosingState() {
    return ( defendingPlayer.health <= 0 && attackingPlayer.health >= 0 );
  }

  function winningStateHandler() {

    if ( isWinningState() ) {
      console.log('hooray you win!!!');
      $('#opponent-side').empty();
      defendingPlayer.defeatedOpponents++;

      // if you win the game...
      if ( isWinningGameState() ) {
        console.log('congrats! you have won!!!! the whole game yo!!');
        $('.game-log').prepend('<p id="winning">Congratulations, You will bring order to The Galaxy.</p>');
      }

    }

    // TODO: create reset game function.
    // resetgame();
  }

  function losingStateHandler() {
    // check
    if ( isLosingState() ) {
      console.log('you lose!!!');
      // TODO: create reset game function.
      // resetgame();
    }
  }

});