/* #SOLID Designs 
	Author: Luciano S. Aldana II
	url: http://brandedsolid.com
*/
$(document).ready(function() {
    
  //  $('.grid').hide();
    $('#solidAjax').delay(5000).fadeOut(1000);
    $('#header').delay(5000).hide().fadeIn(1100);
    $('#fullpage').delay(5000).hide().fadeIn(1200);
  //  $('.grid').delay(5000).fadeIn(1000);
    $('body').delay(5000).css('background-color', '#313640');
    
    
     $('#fullpage').fullpage({
				anchors: ['welcome', 'hi'],
				css3: true,
                normalScrollElements: '#footer',
                controlArrows: false,
                verticalCentered: true,
                afterLoad: function(anchorLink, index){
            
                }
               
     });
    
// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  
  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });
  
  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });
  
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
     
  $('#footer').click(function(e) {
      e.preventDefault();
      $(this).toggleClass("expandMe");
      $(this).animate({ scrollTop: 0 }, "fast");
  
      $('.glyphicon-collapse-up').toggleClass('expandMe');
      $('.glyphicon-collapse-down').toggleClass('expandMe');
  });
    
    // Hover over template thumbs
    
    $('#hover1').on('hover', function(e) {
        e.preventDefault();
        $('#one').toggleClass('thumb');
    });
    
    
    $('#hover2').on('hover', function(e) {
        e.preventDefault();        
        $('#two').toggleClass('thumb');
    });
    
    
    $('#hover3').on('hover', function(e) {
        e.preventDefault();        
        $('#three').toggleClass('thumb');
    });
    

    $("button#load").click(function (e){
        
        e.preventDefault();
        $("#footer").trigger('click');
        $("#fullpage").fadeOut(2000);
        $("#solidAjax").fadeIn(500);
        setTimeout(function(){
            $("#solidAjax").fadeOut(500);
            $("iframe").fadeIn(777);
            $(".editMode").addClass("on");
            $(".temprow").addClass("off");
        }, 3000);
        
    });
    
    $("a#back").click(function(){
       
        $("iframe").fadeOut(500);
        $("#fullpage").fadeIn(1000);
        $("button#load").removeClass('on');
            $(".editMode").removeClass("on");
            $(".temprow").removeClass("off");
        $("button#end").css('display', 'block');

        
    });
    
    
    $('button.introVid').click(function(){
        
        if ( $("iframe#video").attr('src') == 'https://www.youtube.com/embed/QIcH5ldw97A?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0"'  ) {
            stopPlayVideo('QIcH5ldw97A');
            $(this).text('PLAY');

        }else {
            autoPlayVideo('QIcH5ldw97A'); 
            $(this).text('STOP');

        }
    });

    
    function autoPlayVideo(vcode){
        "use strict";
        $("iframe#video").attr('src', 'https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0"');
        console.log("autoPlay Fired");
    }

        function stopPlayVideo(vcode){
        "use strict";
        $("iframe#video").attr('src', 'https://www.youtube.com/embed/'+vcode+'" frameborder="0"');
        console.log("autoPlay Fired");
    }

});



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    $(".s3").fadeOut(1000);
    $(".glyphicon-cloud-upload").toggleClass('drag');
    
}

function drop(ev) {
    console.log("test drop");
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    ev.target.appendChild(document.getElementById(data));
    
    $(".s3").fadeIn(1000);
    
    $(".glyphicon-cloud-upload").hide();
    $("button#load").addClass('on');
    
}
