
// a function for changing the display setting from none to show for the html modal
const showHTMLModal = ()=>{
    document.querySelector('.modal-html')
    .classList.toggle('modal--hidden-html');
  };
  
  // allowing the html-skill element to be clicked and show the modal
  document.querySelector('.html-skill')
    .addEventListener('click', showHTMLModal);
  
  //toggle the display setting back to none once the "X" is clicked;
  document.querySelector('.close-button-html')
  .addEventListener('click', showHTMLModal);
  
  // a function for changing the display setting from none to show for the css modal
  const showCSSModal = ()=>{
    document.querySelector('.modal-css')
    .classList.toggle('modal--hidden-css');
  };
  
  // allowing the css-skill element to be clicked and show the modal
  document.querySelector('.css-skill')
    .addEventListener('click', showCSSModal);
  
  //toggle the display setting back to none once the "X" is clicked
  document.querySelector('.close-button-css')
  .addEventListener('click', showCSSModal);
  
  // a function for changing the display setting from none to show for the JS modal
  const showJSModal = ()=>{
    document.querySelector('.modal-js')
    .classList.toggle('modal--hidden-js');
  };
  
  // allowing the JS-skill element to be clicked and show the modal
  document.querySelector('.javascript-skill')
    .addEventListener('click', showJSModal);
  
  //toggle the display setting back to none once the "X" is clicked
  document.querySelector('.close-button-js')
  .addEventListener('click', showJSModal);
  
  // Initialize and add the map
  function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }