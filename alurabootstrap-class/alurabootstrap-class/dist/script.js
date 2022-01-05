$('#collapse-navbar').on('show.bs.collapse', function() {
  $('.site-banner').css('transform', 'translate(-50%, 10%)');
});

$('#collapse-navbar').on('hide.bs.collapse', function() {
  $('.site-banner').css('transform', 'translate(-50%, -50%)');
});
//initialising a variable name data
  
var data = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;
  
//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}
//creation of decrement function
function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
}