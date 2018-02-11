<<<<<<< HEAD
$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
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
        url: 'http://127.0.0.1:80',
        dataType: "jsonp",
        data: JSON.stringify(value),
        type: 'POST',
        jsonpCallback: 'callback',
        success: function (data) {
            var ret = jQuery.parseJSON(data);
            //$('#lblResponse').html(ret.msg);
            console.log('Success: ')
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
            //$('#lblResponse').html('Error connecting to the server.');
        },
    });
  });
});
=======
$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
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
        url: 'http://127.0.0.1:80',
        dataType: "jsonp",
        data: JSON.stringify(value),
        type: 'POST',
        jsonpCallback: 'callback',
        success: function (data) {
            var ret = jQuery.parseJSON(data);
            //$('#lblResponse').html(ret.msg);
            console.log('Success: ')
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error.message);
            //$('#lblResponse').html('Error connecting to the server.');
        },
    });
  });
});
>>>>>>> 4e419fe04f837c18195bbb89c14d7e25cff06b3c
