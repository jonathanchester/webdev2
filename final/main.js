$('.gallery-img').click(function(){
    $('.backdrop').fadeIn("fast");
    $('.active').fadeIn("slow");
    $(this).addClass('active');
  });

$('.backdrop').click(function(){
    $('.backdrop').fadeOut("fast");
    $('.gallery-img').removeClass('active');
    $('.active').fadeOut("fast");
})

// clock //

$(document).ready(function() {
    clockUpdate();
    setInterval(clockUpdate, 1000);
  })
 
  $(document).ready(function() {
    clockUpdate();
    setInterval(clockUpdate, 1000);
  })
  
  function clockUpdate() {
    var date = new Date();
    function addZero(x) {
      if (x < 10) {
        return x = '0' + x;
      } else {
        return x;
      }
    }
  
    function twelveHour(x) {
      if (x > 12) {
        return x = x - 12;
      } else if (x == 0) {
        return x = 12;
      } else {
        return x;
      }
    }
  
    var h = addZero(twelveHour(date.getHours()));
    var m = addZero(date.getMinutes());
    var s = addZero(date.getSeconds());
  
    $('.time-container').text(h + ':' + m + ':' + s)
  }