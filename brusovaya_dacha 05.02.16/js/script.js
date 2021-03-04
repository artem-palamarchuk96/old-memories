$(document).ready(function() {

	$('#info-button').click(function() {
		$('.dropdown').slideToggle('normal');
	})



$('.fancy').fancybox({

})

$('a[rel=group-1]').fancybox({
    'padding' : 0
});
$('a[rel=group-2]').fancybox({
    'padding' : 0
});

$('.thumbn a').click(function(){
        var where_img = $('.project-image img');
        var who = $(this).find('img');
        where_img.animate({'opacity':'0'},400);
        setTimeout(function(){where_img.attr({'src':who.attr('src')})},400);
        where_img.parent().attr({'href':who.attr('src')});
        where_img.animate({'opacity':'1'},400);
        return false;
});


});