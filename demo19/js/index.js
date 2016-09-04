$(document).ready(function(){
		$('.box.one').hover(function(){
				$(".cover", this).stop().animate({top:'160px'},{queue:false,duration:160});
			}, function() {
				$(".cover", this).stop().animate({top:'260px'},{queue:false,duration:160});
			});


		$('.box.two').hover(function(){
				$(".cover", this).stop().animate({top:'160px'},{queue:false,duration:160});
			}, function() {
				$(".cover", this).stop().animate({top:'220px'},{queue:false,duration:160});
			});


		$('.box.three').hover(function(){
				$(".cover", this).stop().animate({left:'325px'},{queue:false,duration:300});
			}, function() {
				$(".cover", this).stop().animate({left:'0px'},{queue:false,duration:300});
			});


		$('.box.four').hover(function(){
				$(".cover", this).stop().animate({top:'260px', left:'325px'},{queue:false,duration:300});
			}, function() {
				$(".cover", this).stop().animate({top:'0px', left:'0px'},{queue:false,duration:300});
			});


		$('.box.five').hover(function(){
				$(".cover", this).stop().animate({top:'-260px'},{queue:false,duration:300});
				$("h3").fadeToggle();
			}, function() {
				$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:300});
			});


		$('.box.six').hover(function(){
				$(".cover", this).stop().animate({top:'90px'},{queue:false,duration:160});
			}, function() {
				$(".cover", this).stop().animate({top:'0px'},{queue:false,duration:160});
			})
	});