// $('.navbar-light .navbar-nav .nav-link').on('click' ,function (){
//     (this).addClass('active')
// })


// $('.navbar-light .navbar-nav .nav-link').on('click', function () {
//     $(this).addClass('active').parent.siblings().removeClass('active');
//   });
$(document).ready(function () {

  $('.sigle-img-thmu div img').on('click', function () {
    // $(this).addClass('active-thumbnis').siblings().removeClass('active-thumbnis');
    $('.img-thmu img').hide().attr('src', $(this).attr('src')).fadeIn(300);
    });

  });
  
  function decreaseCount(a, b) {
      var input = b.nextElementSibling;
      var value = parseInt(input.value, 10);
      if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
  
      }
  
    }
    function increaseCount(a, b) {
      var input = b.previousElementSibling;
      var value = parseInt(input.value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      input.value = value;
  
    }




