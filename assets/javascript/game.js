

$(document).ready(function() {

  $('.player').on('click', function() {
    //console.log(event);
    //console.log(event.type);
    //console.log(event.target);
  });

  $('#player-obi').on('click', function() {
    // console.log(event.type);
    console.log(event);
    // console.log(event.classList);
    console.log(event.srcElement);

    // NOTE: this log is the parent element,
    // so if they click on h4 or img or whatever
    // it will grab the parent element which is the card
    // TODO: capture the entire element!
    console.log(event.srcElement.offsetParent);
  });

});