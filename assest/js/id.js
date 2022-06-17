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

    const inputElements = [...document.querySelectorAll('input.code-input')]

    inputElements.forEach((ele,index)=>{
      ele.addEventListener('keydown',(e)=>{
        // if the keycode is backspace & the current field is empty
        // focus the input before the current. Then the event happens
        // which will clear the "before" input box.
        if(e.keyCode === 8 && e.target.value==='') inputElements[Math.max(0,index-1)].focus()
      })
      ele.addEventListener('input',(e)=>{
        // take the first character of the input
        // this actually breaks if you input an emoji like 👨‍👩‍👧‍👦....
        // but I'm willing to overlook insane security code practices.
        const [first,...rest] = e.target.value
        e.target.value = first ?? '' // first will be undefined when backspace was entered, so set the input to ""
        const lastInputBox = index===inputElements.length-1
        const insertedContent = first!==undefined
        if(insertedContent && !lastInputBox) {
          // continue to input the rest of the string
          inputElements[index+1].focus()
          inputElements[index+1].value = rest.join('')
          inputElements[index+1].dispatchEvent(new Event('input'))
        }
      })
    })
    
    
    // mini example on how to pull the data on submit of the form
    function onSubmit(e){
      e.preventDefault()
      const code = [...document.getElementsByTagName('input')]
        .filter(({name})=>name)
        .map(({value})=>value)
        .join('')
      console.log(code)
    }

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#id_password');
   
    togglePassword.addEventListener('click', function (e) {
      // toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      // toggle the eye slash icon
      this.classList.toggle('fa-eye-slash');
  });




  // start 
