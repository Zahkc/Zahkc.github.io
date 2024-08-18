var box = document.querySelector('.cassette');
var cases = document.querySelector('.cassette_case');
var art = document.querySelector('.cassette_art');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;

  if (checkedRadio.value == "open") {

    cases.classList.remove('close');
    cases.classList.add( 'open' );

  } else {

    cases.classList.remove( 'open' );
    cases.classList.add( 'close' );

  }

  if ( currentClass ) {
    box.classList.remove( currentClass );
  }
  box.classList.add( showClass );
  currentClass = showClass;


}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );
