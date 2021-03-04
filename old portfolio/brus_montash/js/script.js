$(document).ready(function() {

// ОТКРЫТИЕ ФОРМЫ В БЛОКЕ ВВЕРХУ СПРАВА
$('#open-header-form').click(function(){
	$(this).toggleClass('active');
	$('#header-form').toggleClass('none');
	return false;
});

//Кнопка поиска, добавления класса none и пеерключатель
$('#search-button-main').click(function(){
	$('#project-line-main').addClass('none');
	$('#search-main-line').toggleClass('none');
	return false;
});


$('#project-button').click(function(){
	$(this).toggleClass('active');
	$('#search-main-line').addClass('none');
	$('#project-line-main').toggleClass('none');
	return false;
});

$('#project-button-fix').click(function() {
    $('.project-row').toggleClass('none');
    return false;
})


// СКРЫТИЕ ИЛИ ПОКАЗ ПРИ ПРОКРУТКЕ
$(window).scroll(function() {
    var top = $(document).scrollTop();
            $('.items-row').addClass('none'); 
            $('#project-line-menu-fixed').addClass('none')
    	if (top > 435) { 
            $(".fix-menu").removeClass('none');
            $(".right-menu").removeClass('none');
            $("#search-main-line").addClass('none');
            $("#project-line-main").addClass('none');   
        }
    	else { 
            $(".fix-menu").addClass('none');
    	    $(".right-menu").addClass('none');
        }
});


// СКРЫТИЕ ПО КЛИКУ В ЛЮБОМ МЕСТЕ
$(document).click(function (event) {
    if ($(event.target).closest('.search-row').length == 0 && $(event.target).attr('id') != 'search-button-main') {
        $('.search-row').addClass('none');
    }
});

$(document).click(function (event) {
    if ($(event.target).closest('.project-row').length == 0 && $(event.target).attr('id') != 'project-button') {
        $('.project-row').addClass('none');
    }
});

$(document).click(function (event) {
    if ($(event.target).closest('.items-row').length == 0 && $(event.target).attr('id') != 'project-button') {
        $('.items-row').addClass('none');
    }
});

// ПЕРЕВОРАЧИВАНЫ ПРИ НАВЕДЕНИИ КНОПКИ FIXED-МЕНЮ
$('.button-menu').hover(	
    function () {
        $(this).css({"transform":"rotate(180deg)"});
    }, 		
    function () {
        $(this).css({"transform":"rotate(0deg)"});
    }
);


// ВЫПАДАЮЩЕЕ МЕНЮ С FIXED-МЕНЮ
$('.button-menu').click(function(){
	$('.items-row').toggleClass('none');
	return false;
});

// МОДАЛЬНОЕ ОКНО ОБРАТНОГО ЗВОНКА FANCYBOX
$('.callback-popup').fancybox({
	'wrapCSS' : 'call',
	'padding' : 0
});

// ГАЛЕРЕИ С ИСПОЛЬЗОВАНИЕМ FANCYBOX
$('a[rel=group-1]').fancybox({
    'padding' : 0
});
$('a[rel=group-2]').fancybox({
    'padding' : 0
});
$('a[rel=group-3]').fancybox({
    'padding' : 0
});
$('a[rel=group-4]').fancybox({
    'padding' : 0
});
$('a[rel=group-5]').fancybox({
    'padding' : 0
});
$('a[rel=group-6]').fancybox({
    'padding' : 0
});
$('a[rel=group-7]').fancybox({
    'padding' : 0
});
$('a[rel=group-8]').fancybox({
    'padding' : 0
});
$('a[rel=group-9]').fancybox({
    'padding' : 0
});
$('a[rel=group-10]').fancybox({
    'padding' : 0
});
$('a[rel=group-11]').fancybox({
    'padding' : 0
});
$('a[rel=group-12]').fancybox({
    'padding' : 0
});
$('a[rel=group-13]').fancybox({
    'padding' : 0
});
$('a[rel=group-14]').fancybox({
    'padding' : 0
});
$('a[rel=group-15]').fancybox({
    'padding' : 0
});
$('a[rel=group-16]').fancybox({
    'padding' : 0
});

$('.fancy').fancybox({
    'padding' : 0
});

// ПРИКРЕПИТЬ ФАЙЛ
$('#file').change(function() {
    $('#file').each(function() {
        var name = this.value;
        reWin = /.*\\(.*)/;
        var fileTitle = name.replace(reWin, "$1");
        reUnix = /.*\/(.*)/;
        fileTitle = fileTitle.replace(reUnix, "$1");
        $('#name').html(fileTitle);
        });
});

// СЛАЙДЕР ЛУЧШИЕ РАБОТЫ
$('.tab-slider').flexslider({
    directionNav: false,
    controlNav: false
})
$('.tab-prev').click(function(){
    $(this).parents('.tab-slider').flexslider('prev');
    return false;
});
$('.tab-next').click(function(){
    $(this).parents('.tab-slider').flexslider('next');
    return false;
});

// ПРАВОЕ МЕНЮ СО СЛАЙДЕРАМИ
$('.main-articles, .main-works').flexslider({
    directionNav: false,
    controlNav: false
})

$('.art-left').click(function(){
 $(this).parents('.main-right-slide').flexslider('prev');
    return false;
});

$('.art-right').click(function(){
 $(this).parents('.main-right-slide').flexslider('next');
    return false;
});

$('.thumbn a').click(function(){
        var where_img = $('.project-image img');
        var who = $(this).find('img');
        where_img.animate({'opacity':'0'},100);
        setTimeout(function(){where_img.attr({'src':who.attr('src')})},100);
        where_img.parent().attr({'href':who.attr('src')});
        where_img.animate({'opacity':'1'},100);
        return false;
});

$('.spih div').click(function(){
    $('ul.spih-t').toggleClass('none');
});

$('ul.spih-t li').click(function(){
    $('.spih div').html($(this).html());
    $('#spi').val($(this).html());
    $('ul.spih-t').toggleClass('none');
});

$('.option-list ul.spih-t li').click(function(){    
    $('#price').html($(this).next().html());    
});


});
















// $('#project-button-fix').click(function(){
//  $(this).toggleClass('active');
//      $('#search-main-line').addClass('none');
//      $('#project-line-main').toggleClass('none');
//      return false;
// });

// $(document).ready(function() {
// $(function(){
//     $(window).scroll(function() {
//         var top = $(document).scrollTop();
//         if (top < 410) $(".navigation").css({top: '0', position: 'relative', margin: 'auto'});
//         else $(".navigation").css({top: '0px', left: '0px', position: 'fixed', width: '100%'});
//     });
// });
// });

// $(document).ready(function() {
// 	$('#form-wrapper').hide();
// 	$('#open-header-form').click(function() {
// 		$('#form-wrapper').slideToggle(0);
//   	});
// });

// $(document).ready(function() {
//  $(".navigation").hover(
//  	function () { $(this).addClass("active") },
//  	function () { $(this).removeClass("active") } 
//  );
// });

// $(document).ready(function() {
// 	$('.project-row').hide();
// 	$('#project-button').click(function () {
// 		$('.project-row').slideToggle(0);
// 	});
// 	$(document).click(function (event) {
//         if ($(event.target).closest('.project-row').length == 0 && $(event.target).attr('id') != 'project-button') {
//             $('.project-row').hide();
//         }
//     });
// });

// $(document).ready(function() {
// 	$('.search-row').hide();
// 	$('#search-button-main').click(function () {
// 		$('.search-row').slideToggle(0);
// 	});
// 	$(document).click(function (event) {
// 		if ($(event.target).closest('.search-row').length == 0 && $(event.target).attr('id') != 'search-button-main') {
// 			$('.search-row').hide();
// 		}
// 	});
// });






