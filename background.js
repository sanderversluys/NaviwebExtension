$(function() {
	$('#DescriptionArea').keydown(function(e) {
		if (e.which == 8) return;
			var max = 48,
		        v = $(this).val(),
		        l = v.length,
		        c = (l-(~~(l/(max+2))*2))%max;
		  
		if (l == max || (l>max && c==0))
			$(this).val(v + '|\n');
	});
	
	$('#DescriptionArea').css('width', '540px');
	
	var colorComments = function() {
		$('.des:not([value^="TR"]).des[value!=""]').parent()
											   .find('input[type=text]')
											   .css('background-color', 'lightgreen');
	};
	
	colorComments();
	
	$('[name="ctl00$masterMainSpace$btnSaveDesc"]').click(function() {
		$('.des:not([value^="TR"])').parent()
									.find('input[type=text]')
									.css('background-color', 'white');
		colorComments();
	});
	
	/*var askConfirmation = false;
	
	$('.descReqField').change(function(e) { console.log('boe'); askConfirmation = true; });*/
	

	
});

/*
var goodbye = function (e) {
	//if(!askConfirmation) return;
	if(!e) e = window.event;
	//e.cancelBubble is supported by IE - this will kill the bubbling process.
	e.cancelBubble = true;
	e.returnValue = 'You sure you want to leave?'; //This is displayed on the dialog

	//e.stopPropagation works in Firefox.
	if (e.stopPropagation) {
		e.stopPropagation();
		e.preventDefault();
	}
}
window.onbeforeunload=goodbye;*/