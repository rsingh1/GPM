$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#topPage']").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
    $(".modal").on("hidden.bs.modal", function(){
        $('.modal-body').find('input').each(function()
        {
          $(this).val('');
        });
    });
});

function myMap() {
    var myCenter = new google.maps.LatLng(28.565656, 77.188348);
    var mapProp = {
        center: myCenter,
        zoom: 12,
        scrollwheel: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter
    });
    marker.setMap(map);
}
$(function() {
  $('#quote-Modal-Proceed').click(function() {
    var value = {
                };
    let elem;
    $('.modal-body').find('input').each(function()
    {
      elem = $(this).attr('id');
      value[elem] =  $(this).val();
    });
    console.log(value);
    $.ajax({
          url:"/",
              type:"POST",
              data:JSON.stringify(value),
              contentType:"application/json; charset=utf-8",
              dataType:"json",
              success: function(data){
                $("#responseModal").modal('show');
                console.log('Success');
              },
              error: function(XMLHttpRequest, textStatus, errorThrown) {
                  console.log("Status: " + textStatus + "Error: " + errorThrown);
              }
            });
  });
});
