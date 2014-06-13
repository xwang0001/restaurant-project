$(function (){
	var accordians = $('.accordian-content');

	accordians.hide();
	
	$('.accordian-link').click(function (event) {
		var target = $(this).attr('href');
		
		event.preventDefault();
		
		$(target).toggle();
		
	});
});
