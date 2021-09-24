$(() => {
    $('#luna-email').keyup(event => {
      // 1. Get email length
      const emailLength = $(event.target).val().length
  
      // 2. If it's the first character:
      //  2a. move the left pupil to the edge
      const pupilPos = emailLength / 2.5
      if (emailLength === 1) {
        $('.left, .right').css('left', '0')
      }
      // 3. Move pupil based on email length
      if (emailLength >= 1 && emailLength <= 36) {
        $('.left, .right').css('transform', `translate(${pupilPos}px, 15px)`)
      }
    })
  
    $('#luna-email').focus(() => {
      resetEyes()
    })
  
    $('#luna-password').focus(() => {
      resetEyes()
      $('.eye').removeClass('blink')
      $('.eye').addClass('closed')
    })
  
    $('button').on('click', () => {
      if (!validateEmail()) {
        addWarnings('email')
      } else if ($('#luna-password').val().length === 0) {
        addWarnings('password')
      } else {
        $('.luna-tail').fadeOut('fast')
        $('.container').fadeOut()
        $('.logged-in').fadeIn()
        $('body').css('background', 'white')
      }
    })
  
    function validateEmail () {
      const email = $('#luna-email').val()
      const emailRegex = /^\S+@\S+$/
      resetEyes()
      return emailRegex.test(email)
    }
  
    function addWarnings(field) {
      $('.moon').addClass('mad-moon')
      $(`label[for=luna-${field}]`).addClass('label-warning')
      $(`#luna-${field}`).addClass('input-warning')
  
      setTimeout(() => {
        $('.moon').removeClass('mad-moon')
        $(`label[for=luna-${field}]`).removeClass('label-warning')
        $(`#luna-${field}`).removeClass('input-warning')
      }, 300)
    }
  
    function resetEyes() {
      $('.eye').addClass('blink')
      $('.eye').removeClass('closed')
  
      if ($('.left').css('left') === '12px') {
        return
      }
  
      $('.inner-eye').css('transform', 'translateY(5px)')
      $('.left').css('transform', 'translateX(12px)')
      $('.right').css('transform', 'translateX(-3px)')
    }
  })
  