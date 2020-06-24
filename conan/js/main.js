var mode_is = 0;
$(document).ready(function(){
  Cheack_
 });

 function Cheack_() {
  const myvalue = localStorage.getItem('theme');
  if((myvalue) === null){
Set_bytime();
} else {
if((myvalue) === "dark"){
Set_Dark()
}else{
 Set_light()
};}

 }
function Set_bytime() {
	var hour = new Date().getHours();
  if (hour >= 12) {
    Set_Dark()
	mode_is = 0;
  } else {
    Set_light()
	mode_is = 0;
}};

$( "#bt-color" ).click(function() {
if (mode_is === 0){
	Set_Dark()
}else{
	Set_light()
};
});


  this.addEventListener('activate', function(event) {
  var cachesToKeep = ['v2'];

  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (cachesToKeep.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});

function Set_light() {
	mode_is = 0;
	localStorage.setItem('theme', 'light');
  $(".noeff").css("color", "#000000")
  $("body").css("background-color","#fff");
  $(".cardmode").css("background-color","#f3f3f3");
  $(".cardmode").css("color","#000000"); 
  $('#bt-color').addClass('btn-dark').removeClass('bg-light');
	$('nav').css("background-color","#fff");
	$('nav, #text_is').css("color","#212529");
}
function Set_Dark() {
	mode_is = 1;
	localStorage.setItem('theme', 'dark');
  $(".noeff").css("color", "#fff")
  $("body").css("background-color","#202020");
  $(".cardmode").css("background-color","#343a40");
  $(".cardmode").css("color","#fff");
  $('#bt-color').addClass('bg-light').removeClass('btn-dark');
  $('nav').css("background-color","#202020");
  $('nav, #text_is').css("color","#fff");
}
if(navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/webOS/i) ||
  navigator.userAgent.match(/iPhone/i) ||
  navigator.userAgent.match(/iPod/i)) {
    $("a[href='https://instagram.com/mmti.done']").attr('href', 'instagram://user?username=mmti.done')
 }