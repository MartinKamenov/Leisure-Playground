// spawns ninjas after some1 presses JSNINJAS
let keysPressed='';
$('html').keydown(function (e){
  keysPressed+=String.fromCharCode(e.keyCode);
  if (keysPressed.length>=8){
      keysPressed=keysPressed.substring(1);
  }
  
  if(keysPressed.indexOf('JSNINJA')!==-1  && $('.ninja-image').length==0){
      $('main').append(' <img id="ninja-left" class="ninja-image" src="./images/ninja1.jpg">');
      $('main').append('<img id="ninja-right" class="ninja-image" src="./images/ninja2.png">');
      window.alert("You have summoned ninjas to this page.\n Quick make your browser window smaller to destroy them!!!");
  }
  
})