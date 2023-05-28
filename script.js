$(function(){

    var gallery = $('.gallery')
  
    var allImages;
  var apiKey = "SvG11AXDmb-3STKzg7-R9-CxQRz0r9dB-94vZ6yr0eI"
  
      var api= "https://api.unsplash.com/photos/random?&client_id="+apiKey+"&count=30"
     
      
    $.getJSON(api).done(function(data){
      data.forEach(item=>{
        $('.gallery').append(`<img src="${item.urls.regular}" class="image"/>`)
      
      })
    
      })
  
    // WHEN WE SUBMIT THE SUBMIT //
    $('.button').click(function(e){
      e.preventDefault()
      var inputS= $('.search').val()
      $('.gallery').empty()
      var searchApi = "https://api.unsplash.com/search/photos?query="+inputS+"&client_id="+apiKey+"&per_page=80"
    $.getJSON(searchApi).done(function(data){
      allImages = data
   makeImage(allImages)
  $('.search').val("")
  }) 
   
  })
 
  function makeImage(item){
  item.results.forEach((item,index)=>{
       var photo= $('.gallery').append(`<img src="${item.urls.regular}" class="image"/>`)
      // console.log(item)
    })
    }

  })

