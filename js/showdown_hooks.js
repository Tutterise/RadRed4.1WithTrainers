 
  
  function abv(s) {
      if (($('.player-party').width() / s.length <= 50)) {
          if (s.split(" ")[1]) {
              return (s.split(" ")[0][0] + " " + s.split(" ")[1]).slice(0,13)
          } else {
              return s.slice(0,13)
          }
          
      } else {
          return s
      }
  }
  
  function displayParty() {
      var destination = $('.player-party')
  
      if (currentParty.length > 0) {
          $('.player-party').css('display', 'flex')
          $('#clear-party').css('display', 'inline-block')
  
          for (i in currentParty) {
              species_name = currentParty[i]
  
              var pok_name = species_name.replace("-Paldea", "Paldea").replace("-Sevii", "").replace("-Primal", "").replace("-Origin", "")
                if (pok_name == "Zygarde-10%"){
                    pok_name = "Zygarde-10%25"
                }//this ruined my day
                if (pok_name.includes("Arceus")){
                    pok_name = "Arceus"
                }//same
                if (pok_name.includes("Pikachu")){
                    pok_name = "Pikachu"
                }//same
              var set_data = setdex[species_name]["My Box"]
              var data_id = species_name + " (My Box)"
  
  
              var pok = `<div class="trainer-pok-container">
                  <img class="trainer-pok left-side" src="https://raw.githubusercontent.com/May8th1995/sprites/master/${pok_name}.png" data-id="${data_id}">
                  <div class="bp-info">${abv(set_data['moves'][0].replace("Hidden Power", "HP"))}</div>
                  <div class="bp-info">${abv(set_data['moves'][1].replace("Hidden Power", "HP"))}</div>
                  <div class="bp-info">${abv(set_data['moves'][2].replace("Hidden Power", "HP"))}</div>
                  <div class="bp-info">${abv(set_data['moves'][3].replace("Hidden Power", "HP"))}</div>
              </div>`
              destination.append(pok)
          }
  
      }
  }
  
  $(document).ready(function() {  
  
  
     $(document).on('contextmenu', '.trainer-pok.left-side', function(e) {
          e.preventDefault()
          var parentBox = $(this).parent()

          var data_id = $(this).attr('data-id')
          var species_name = data_id.split(" (")[0]

          var pok_name = species_name.replace("-Paldea", "Paldea").replace("-Sevii", "").replace("-Primal", "").replace("-Origin", "")
          if (pok_name == "Zygarde-10%"){
              pok_name = "Zygarde-10%25"
          }//this ruined my day
          if (pok_name.includes("Arceus")){
              pok_name = "Arceus"
          }//same
          if (pok_name.includes("Pikachu")){
              pok_name = "Pikachu"
          }//same

          var pok = `<div class="trainer-pok-container">
          <img class="trainer-pok left-side" src="https://raw.githubusercontent.com/May8th1995/sprites/master/${pok_name}.png" data-id="${data_id}">`
  
          if (!parentBox.hasClass('trainer-pok-container')) {
              destination = $('.player-party')
              $('.player-party').css('display', 'flex')
              $('#clear-party').css('display', 'inline-block')
  
              destination.append(pok)
          } else {
              $(this).parent().remove()
              if ($('.player-party').children().length == 0) {
                  $('.player-party').hide()
                  $('#clear-party').hide()
                  $('#edge').hide()
              }
          }
     })
  
     $(document).on('click', '#clear-party', function() {
          $('.player-party').html("")
          $('.player-party').hide()
          $('#clear-party').hide()
          $('#edge').hide()
          currentParty = []
     })
  
  })