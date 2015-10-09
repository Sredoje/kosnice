$(document).on('ready', function() {
	// Show dat popover
  	$('.extension').popover(
  		{
  			html: true,
  			placement: 'right',
  			trigger: 'manual',
  			content: function() {
  				var html = '<p>Set state</p>' +
  				'<div class="btn-group" data-toggle="buttons">' +
				  '<label class="btn btn-success active">' +
				    '<input type="radio" name="options" id="option1" autocomplete="off" checked> Good' +
				 ' </label>' +
				  '<label class="btn btn-warning">' +
				    '<input type="radio" name="options" id="option2" autocomplete="off"> Modify' +
				  '</label>' +
				  '<label class="btn btn-danger">' +
				    '<input type="radio" name="options" id="option3" autocomplete="off"> Bad' +
				  '</label>' +
				'</div>' + 
				'<p><a href="#" class="btn btn-danger mt-10">Delete extension</a></p>'
  				return html;
  			}
  		}
  	);

  	// Hide popover when clicking on other extensions
  	$('.extension').on('click', function (e) {
  		$('.extension').not($(this)).popover('hide');
  		$(this).popover('toggle');
	})

	$('.add_extension').on('click', function(e){
		var hive_id = $(this).siblings('#extension_hive_id').val();
		var hive = $(this).parents('.hive');
		var data = {
			extension:{
				hive_id:hive_id
			}
		}
		$.ajax({
		  type: "POST",
		  url: '/extensions',
		  data: data,
		  success: function(response) {
		  	var html = '<div class="extension"><div class="center-extension">';
		  	// Append frames html
			for(var i in response.frames) {
				html += '<div class="frame type-empty" data-id="' + response.frames[i].id + '"></div>';
			}
			var endHtml = '</div></div>';
		  	var extensions = $(hive).find('.extensions');
		  	$(extensions).prepend(html + endHtml);
		  	// Hide add new button if there are 3 extensions
		  	if($(extensions).children('div').size() == "3") {
		  		$(extensions).siblings('form').find('a').hide();
		  	}
		  },
		  error: function(response) {
		  },
		  dataType: "json"
		});
	})
});