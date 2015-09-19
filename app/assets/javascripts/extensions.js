$(document).on('ready', function() {

	$('.add_extension').on('click', function(e){
		console.log($(this).siblings('#extension_hive_id').val());
		var hive_id = $(this).siblings('#extension_hive_id').val();
		var hive = $(this).parents('.hive');
		console.log(hive);
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
		  	var html = "<p>Nastavak</p>";
		  	var extensions = $(hive).find('.extensions');
		  	$(extensions).prepend(html);
		  	// Hide add new button if there are 3 extensions
		  	if($(extensions).children('p').size() == "3") {
		  		$(extensions).find('a').hide();
		  	}
		  },
		  error: function(response) {
		  	console.log(response);
		  },
		  dataType: "json"
		});
	})
});