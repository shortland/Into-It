var frame_number;
var negate_left;

function begin_p(frame_number)
{
	var pg_width = ($(window).width() / 2);
	var pg_height = ($(window).height() / 2);

	var pg_height_o = $(window).height();
	var pg_width_o = $(window).width();

	var frame_size = 1;

	var frame_left_pos = pg_width - (parseInt(frame_size) / 2);
	var frame_top_pos = pg_height - (parseInt(frame_size) / 2);

	var prep_color = 255 - frame_number;
	if(prep_color <= 0)
	{
		return false
	}

	$('#content').append("<div id='frame_" + frame_number + "' class='frame_box'></div>");

	var new_left_pos = ((pg_width - (frame_size / 2)) - pg_width);
	var new_top_pos = ((pg_height - (frame_size / 2)) - pg_height);

	$("#frame_" + frame_number).css({'top' : frame_top_pos, 'left' : frame_left_pos, 'background-color' : 'rgba(' + prep_color + ', ' + prep_color + ', ' + prep_color + ', 1.0)', 'width' : frame_size, 'height' : frame_size, 'position' : 'absolute'});

	$("#frame_" + frame_number).animate({'width' : '+=' + pg_width_o, 'height' : '+=' + pg_height_o, 'left' : new_left_pos, 'top' : new_top_pos}, 10000);

	var next_begin = parseInt(frame_number) + 5;

	setTimeout("begin_p('" + next_begin + "')", 1000);
}

$(document).ready(function()
{
	begin_p('1');
});