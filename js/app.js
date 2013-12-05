/* MotionElements App JS */

$(document).ready(function() {
	$(".result-item .preview").each(function() {
		$(this).popover({
      		html: true,
      		trigger: 'hover',
      		placement: 'auto right',
      		content: '<img src=\"' + $(this).attr("large-img") + '\" />'
    	});
  	});

	$(".box-subtitle").click(function() {
		var $subtitle = $(this);
		$(this).next().slideToggle(80, "linear", function() {
			$subtitle.toggleClass("box-subtitle-closed");
		});
	});

	$("#format-filter").click();
	$("#advanced-filters").click();
});
