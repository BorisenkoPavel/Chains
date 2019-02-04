$(function() {

	$('.catalog-item__button').on('click', function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$(this).children('.catalog-item__button-menu').children('i').removeClass('fa-angle-down');
			$(this).children('.catalog-item__button-menu').children('i').addClass('fa-angle-up');
			$(this).parent().children('.catalog-item__menu').css('display', 'none')
			$(this).children().children('span').css('display', 'none')
		} else {
			$(this).addClass('active');
			$(this).parent().children('.catalog-item__menu').css('display', 'block')
			$(this).children().children('span').css('display', 'inline-block')
			$(this).children('.catalog-item__button-menu').children('i').addClass('fa-angle-down');
			$(this).children('.catalog-item__button-menu').children('i').removeClass('fa-angle-up');

		}	
	})

	$('.vacancy-form-item').on('click', function(){
		$('.vacancy-discription').slideToggle(300)
	})

	$('.news-item__content').children('.link').on('click', function(){
		if ( $(this).parent().hasClass('active') ) {
			$(this).parent().removeClass('active');
			$(this).parent().children('p').css('height', '95px');
		} else {
			$(this).parent().addClass('active');
			$(this).parent().children('p').css('height', 'auto');
		}

	})
});
