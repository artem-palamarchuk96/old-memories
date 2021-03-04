$(document).ready(function() {

	var owl = $(".carousel");
	owl.owlCarousel({
		autoPlay: 3000, 
		pagination: true,
		mouseDrag: false,
		items : 5,
	});

	$(".next-button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev-button").click(function(){
		owl.trigger("owl.prev");
	});

});

function checkmail(value) {
	reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	if (!value.match(reg)) {
		alert("Пожалуйста, введите свой настоящий e-mail"); 
		$('#email').val(""); return false; 
	} else {
		jsonstr = JSON.stringify($('#email').val());
		$.fancybox(jsonstr);
		
		return false;
		
	}
}
