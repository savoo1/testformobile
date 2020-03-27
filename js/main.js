$( ".c_nav .leftside .hamburgermenu" ).click(function() {
  if($(this).hasClass("hamburgermenuactivated")){
  	$(this).removeClass("hamburgermenuactivated");
  	$(".allcontent").removeClass("allcontentactivated");
  	$(".leftmenu").removeClass("leftmenuactivated");
  	$(".forblure").removeClass("forblureactivated");
  }else{
  	$(this).addClass("hamburgermenuactivated");
  	$(".allcontent").addClass("allcontentactivated");
  	$(".leftmenu").addClass("leftmenuactivated");
  	$(".forblure").addClass("forblureactivated");
  }
});


$( ".forblure" ).click(function() {
  if($(".c_nav .leftside .hamburgermenu").hasClass("hamburgermenuactivated")){
  	$(".c_nav .leftside .hamburgermenu").removeClass("hamburgermenuactivated");
  	$(".allcontent").removeClass("allcontentactivated");
  	$(".leftmenu").removeClass("leftmenuactivated");
  	$(".forblure").removeClass("forblureactivated");
  }else{
  	$(".c_nav .leftside .hamburgermenu").addClass("hamburgermenuactivated");
  	$(".allcontent").addClass("allcontentactivated");
  	$(".leftmenu").addClass("leftmenuactivated");
  	$(".forblure").addClass("forblureactivated");
  }
});


$( ".c_nav .leftside .notification" ).click(function() {
  	$(".notificationpoupu").addClass("defpopupactivated");
});
$( ".everything_cont .box .firstline .location" ).click(function() {
  	$(".locationpopup").addClass("defpopupactivated");
});
$( ".navpowerball .rightsc .location" ).click(function() {
    $(".locationpopup").addClass("defpopupactivated");
});
$( ".everything_cont .box .orderticket a" ).click(function(e) {
	e.preventDefault();
  	$(".howoldareyou").addClass("defpopupactivated");
});



$( ".defpopu .popupheader .xicon" ).click(function() {
  	$(this).parent().parent().parent().removeClass("defpopupactivated");
});



$( ".defpopu .popupbody .contbodypopup .states p" ).click(function() {
  	$(".defpopu .popupbody .contbodypopup .states p").removeClass("activeone");
  	$(this).addClass("activeone");
  	var att = $( this ).attr( "name" );
  	$(".location span").html(att);

  	setTimeout(function(){
  	  $(".locationpopup").removeClass("defpopupactivated");
  	}, 500);

});

// $( ".select_payment_method" ).click(function() {
//     $(".select_payment_method").removeClass("select_payment_method_activated");
//     $(this).addClass("select_payment_method_activated");
// });




$( ".defpopu .popupbody .contbodypopupallow .iam18 span" ).click(function() {
  	$(".defpopu .popupbody .contbodypopupallow .iam18 .oldchecked").addClass("oldcheckedactive");

  	setTimeout(function(){
  	  window.location.href = "powerball.html";
  	}, 500);
});




$( ".powerballcont .tickets .plus" ).click(function() {
  	var valueof = $(".powerballcont .tickets input").val();
  	if(valueof < 100){
  		valueof = parseInt(valueof) + 1;
  		$(".powerballcont .tickets input").val(valueof);
  	}
});
$( ".powerballcont .tickets .minus" ).click(function() {
  	var valueof = $(".powerballcont .tickets input").val();
  	if(valueof != 0){
	  	valueof = parseInt(valueof) - 1;
	  	$(".powerballcont .tickets input").val(valueof);
  	}
});



var maxnoofloto = 0;

$( ".powerballcont .numbersforselect .maxwidthofn .boxofno span" ).click(function() {
  if(!$(this).hasClass("activated")){
    if(maxnoofloto < 5){
      maxnoofloto = maxnoofloto + 1;
      $(this).addClass("activated");
      var nofrombox = $(this).text();
      var addhere = "#nofrombox" +  maxnoofloto;

      $(addhere).html(nofrombox);

      if(maxnoofloto == 5){
        $(".povernumberforselect").addClass("povernumberforselectactivated");
      }
    }
  }
});

$( ".povernumberforselect .box .maxwidthofn .boxofno span" ).click(function() {
  $(".povernumberforselect").removeClass("povernumberforselectactivated");
  var nofrombox = $(this).text();
  $("#nofrombox6").html(nofrombox);
  $(".saveticket").addClass("saveticketactivated");
});

$( ".powerballcont .saveticket a" ).click(function(e) {
  if(maxnoofloto == 5){
   
  }else{
    e.preventDefault();
  }
});

$( ".navpowerball .rightsctext" ).click(function(e) {
  e.preventDefault();
  maxnoofloto = 0;
  $(".navpowerball .choosed_numbers div span").html("");
  $(".powerballcont .numbersforselect .maxwidthofn .boxofno span").removeClass("activated");
  $(".saveticket").removeClass("saveticketactivated");
  $(".povernumberforselect").removeClass("povernumberforselectactivated");
});





$( "#quickpick input" ).click(function() {
    if ($(this).hasClass("inputchecked")) {
      $(this).removeClass("inputchecked");
      $("#ticketssec").removeClass("ticketsactivated");
      $("#powweballbtn a").html("SELECT NUMBERS");
      $("#powweballbtn a").attr("href", "selectnumber.html")
    }else{
      $(this).addClass("inputchecked");
      $("#ticketssec").addClass("ticketsactivated");
      $("#powweballbtn a").html("CHECKOUT");
      $("#powweballbtn a").attr("href", "checkout.html")
    }
});




$( "#quickpick_addnew" ).click(function(e) {
  e.preventDefault();
  var numItems = $('#choosednumbersarea .item_os').length;
  var numItems = numItems + 1;
  $( "#choosednumbersarea" ).append( "<div class='col-12 item_os fullh_w d-flex'><div class='powerballmaxwidth justify-content-center align-self-center'><div class='title'><h2><span class='nof'>"+numItems+".</span> <span>5</span> <span>12</span> <span>36</span> <span>39</span> <span>47</span> <span>20</span></h2></div><h3 class='rightc'><a href=''><img src='img/Pen2.png' alt=''></a></h3></div></div>" );
});

$( ".everything_cont .downcards" ).click(function() {
  $(".card_popup_full").addClass("card_popup_full_active");
  $(".everything_cont .downcards").addClass("downcards_disabled");
});
$( ".card_popup_full .areaforclosebox" ).click(function() {
  $(".card_popup_full").removeClass("card_popup_full_active")
  $(".everything_cont .downcards").removeClass("downcards_disabled");
});





$( "input" ).on('input',function(e){
    if($("form")[0].checkValidity()){
      $(".def_full_height .down_button .button_g button").first().removeClass("disabled");
      $(".def_full_height .down_button .button_g a").first().removeClass("disabled");
    }else{
      $(".def_full_height .down_button .button_g button").first().addClass("disabled");
      $(".def_full_height .down_button .button_g a").first().addClass("disabled");
    }
});



$( ".def_full_height .createyourprofile_form .inputarea2 input" ).click(function() {
  $(this).parent().addClass("inputarea2activated");
});


var datainputi = 0;
$('#datainp').on('input',function(event) {
  var inputLength = event.target.value.length;
  if(inputLength === 2){
    var thisVal = event.target.value;
    thisVal += '/';
    $(event.target).val(thisVal);
    datainputi = datainputi + 1;
  }
  if(inputLength === 3){
    if(datainputi === 1){
      $(this).val("");
      datainputi = 0;
    }
  }

});

var rewardscodei = 0;
$('#rewardscode').on('input',function(event) {
  var inputLength = event.target.value.length;
  if(inputLength === 4){
    var thisVal = event.target.value;
    thisVal += '-';
    $(event.target).val(thisVal);
    rewardscodei = rewardscodei + 1;
  }
  if(inputLength === 5){
    if(rewardscodei === 1){
      $(this).val("");
      rewardscodei = 0;
    }
  }

})







$( ".slidingmontharea .box_c" ).click(function() {
  $(".slidingmontharea .box_c").removeClass("activatedbox");
  $(this).addClass("activatedbox");
});


$( ".slidingmontharea .boxforslide_result2 .box_list" ).click(function() {
  $(".slidingmontharea .boxforslide_result2 .box_list").removeClass("box_list_active");
  $(this).addClass("box_list_active");
});






$( "#cardadded_suc" ).click(function(e) {
  e.preventDefault();
  $(".cardadded_suc").addClass("cardadded_suc_active");
  setTimeout(function(){
    window.location.href = "addpayment.html";
  }, 500);
});




// timer

function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("5 April 2020 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

			var daysinhr = days * 24;

			hours = daysinhr + hours; 
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			
			$("#hours").html(hours);
			$("#minutes").html(minutes);
			$("#seconds").html(seconds);		

	}

	setInterval(function() { makeTimer(); }, 1000);







// finger carousel slide
$(document).ready(function() {
  $("#ticketslider").swiperight(function() {
     $(this).carousel('prev');
   });
  $("#ticketslider").swipeleft(function() {
     $(this).carousel('next');
  });
});



// loaded
$(window).bind("load", function () {
	setTimeout(function(){
	$(".loader").addClass("loaderdisabled");
	}, 200);
});



