$(document).on('ready', function() {

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
		  	var html = '<div class="extension">';
		  	// Append frames html
			for(var i in response.frames) {
				html += '<div class="frame type-empty" data-id="' + response.frames[i].id + '"></div>';
			}
			var endHtml = '</div>';
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