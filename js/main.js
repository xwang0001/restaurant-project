// single line comment
/*
	Multiple Line Comment
	Ever line here is a comment
*/

$(function (){
	var accordians = $('.accordian-content');
	var activeClass = 'is-active';
	var activeLinks = '.' + activeClass; // ends up being .is-active

	accordians.hide();
	
	$('.accordian-link').click(function (event) {
		var target = $(this).attr('href');
		
		event.preventDefault();
		
		

		if ($(this).hasClass(activeClass)) {
			$(activeLinks).removeClass(activeClass);
		} else {
			$(activeLinks).removeClass(activeClass);
			$(this).addClass(activeClass);
		}
		
		// this checks whether our target is already visible.
		// if it is not visible, we show it.
		// if is is visible, we hide it.
		accordians.not(target).hide();
		$(target).toggle(); 
		
	});
});
