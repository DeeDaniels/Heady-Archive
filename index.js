$(document).ready(function(){

  var apiURL = "http://strainapi.evanbusse.com/6FQ4yP3/strains/search/all";
  let dropdown = $('#locality-dropdown');

  $.ajax({
    url: apiURL,

    success: function (response){
      //this is populating the name of the strain arrays
      var keyNames = Object.keys(response);
      console.log(keyNames);
      console.log(response)

    //this is pulling the string that contains the strain name out
    //to populate the dropdown
       keyNames.forEach(function(el){
        dropdown.append('<option>'+el+'</option>')
      })
    },
    error: function(error){
        console.log(error);
    }
  })

  $("#do").on("click",function(){
    //get value from select
    var strain = $("#locality-dropdown").val()
    //access the api page with descrips on it
    var apiURL = 'http://strainapi.evanbusse.com/6FQ4yP3/strains/search/name/'+ strain
    $.ajax({
      url: apiURL,
      //match to object name in Api
      //display name & descrip of strain in h2 & p
      success: function (response){
        $('h2').text(strain)
      var race = response[0].race
      $('h4').text(race.toUpperCase())
        $('p').text(response[0].desc)
      },
      error: function(error){
          console.log(error);
      }
    })
  })
});
