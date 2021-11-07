$('.tabs-wrapper-right').each(function() {
	let ths = $(this);
	ths.find('.tab-description').not(':first').hide();
	ths.find('.tab').click(function() {
		ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.tab-description').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});