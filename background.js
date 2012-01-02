$(function() {
	
	var unsaved = function(e) {
		if (window.onbeforeunload == undefined) {
			window.onbeforeunload=function() {
				return "Er zijn niet opgeslagen wijzigingen.";
			};
		}
	}
	
	$('.descReqField').change(unsaved);
	
	var wordwrap = function(str, width, brk, cut) {
		brk = brk || '\n';
		width = width || 75;
		cut = cut || false;
	 
		if (!str) { return str; }
	 
		var regex = '.{1,' +width+ '}(\\s|$)' + (cut ? '|.{' +width+ '}|.+$' : '|\\S+?(\\s|$)');
	 
		return str.match( RegExp(regex, 'g') ).join( brk ); 
	};
	
	$('#DescriptionArea').change(function(e) {
		var stripped = $(this).val().replace(/\|\n/g,'');
		$(this).val(wordwrap(stripped, 48, '|\n'));
		unsaved();
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
	
	$('#ic_imageCheckInput_0').click();
	
	$("[name$='btnSaveTime']").hide();
	$('div.ActionBN').append(
		$('<input type="button" value="Save" class="b_save"/>').click(function() {
			window.onbeforeunload = undefined;
			$("[name$='btnSaveTime']").click();
		})
	);
	
});