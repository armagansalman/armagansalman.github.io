
  var _gaq = _gaq || []; 
  _gaq.push(['_setAccount', 'UA-39797710-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })(); 
  
  
  
  
$(document).ready(function () {
AddScrollButtons();

// remove Outbrain paid link after delay to allow loading time
setTimeout(
  function() {
    $("li a[onmousedown*='paid']").parent().parent().remove();


    $(".OUTBRAIN li a").filter(function() {
      return $(this).text() === "Book Contents";
    }).parent().parent().remove();

    $(".OUTBRAIN li a").filter(function() {
      return $(this).text() === "Introduction";
    }).parent().parent().remove();


    $(".OUTBRAIN li a").filter(function() {
      return $(this).text() === "Preface";
    }).parent().parent().remove();

    $(".OUTBRAIN li a").filter(function() {
      return $(this).text() === "Summary";
    }).parent().parent().remove();

    $(".OUTBRAIN li a").filter(function() {
      return $(this).text() === "Conclusion";
    }).parent().parent().remove();

    $(".OUTBRAIN li a").filter(function() {
      return $(this).text() === "Overview";
    }).parent().parent().remove();


    $(".OUTBRAIN li a").filter(function() {
      return $(this).text() === "Foreword";
    }).parent().parent().remove();

    $(".OUTBRAIN div.ob_what").remove();

    // $(".OUTBRAIN li a").removeAttr("onmousedown");

  }, 5000);

});


function AddScrollButtons(){
                  
        // show the buttons
		$('#questionslist_top').fadeIn('slow');
	    $('#questionslist_bottom').fadeIn('slow');

    $('#nav_up').fadeIn('slow');
    $('#nav_down').fadeIn('slow');
     $('#nav_up_top').fadeIn('slow');
    $('#nav_down_top').fadeIn('slow');




        // whenever we scroll fade out both buttons
    $(window).bind('scrollstart', function(){
        $('#nav_up,#nav_down,#nav_up_top,#nav_down_top,#questionslist_top,#questionslist_bottom,#random_top,#random_bottom').stop().animate({'opacity':'0.2'});
    });
        // ... and whenever we stop scrolling fade in both buttons
    $(window).bind('scrollstop', function(){
        $('#nav_up,#nav_down,#nav_up_top,#nav_down_top,#questionslist_top,#questionslist_bottom,#random_top,#random_bottom').stop().animate({'opacity':'1'});
    });

        // clicking the "down" button will make the page scroll to the $elem's height
    $('#nav_down,#nav_down_top').click(
        function (e) {
               var scrollheight = $(document).height();
            $('html, body').animate({scrollTop: scrollheight}, 800);
        }
    );
        // clicking the "up" button will make the page scroll to the top of the page
    $('#nav_up,#nav_up_top').click(
        function (e) {
            $('html, body').animate({scrollTop: '0px' }, 800);
        }
    );
	
	$('#questionslist_top, #questionslist_bottom').click(function(){
   document.location.href='http://www.psitek.net/index2.html#new';
	});


  
