$(document).on('ready', function() {

	// Function for setting popover
	function setPopover(div) {
		$(div).popover(
  		{
  			html: true,
  			placement: 'right',
  			trigger: 'manual',
  			content: function() {
  				var html = '<p>Set state</p>' +
  				'<div class="btn-group" data-toggle="buttons">' +
				  '<label class="btn btn-success set-state active">' +
				    '<input type="radio" name="options" class="good" autocomplete="off" checked value="good"> Good' +
				 ' </label>' +
				  '<label class="btn btn-warning set-state">' +
				    '<input type="radio" name="options" class="modify" autocomplete="off" value="modify"> Modify' +
				  '</label>' +
				  '<label class="btn btn-danger set-state">' +
				    '<input type="radio" name="options" class="bad" autocomplete="off" value="bad"> Bad' +
				  '</label>' +
				'</div>' + 
				'<p><a href="javascript:void(0)" class="btn btn-danger mt-10 delete_extension">Delete extension</a></p>'
  				return html;
  			}
  		});
  		
  		// $(".set-state").unbind( "click" );

  		
	}

	// Set initial popover to all extensions
  	setPopover('.extension');
  	// setState('.extension > .set-state');
  	// function setState(tra) {
  	// 	console.log("POZVALO SE OVO SRANJE");
  		$(document).on('click','.set-state', function(e) {
	  		var value = $(this).children('input').val();
	  		var extension = $(e.toElement).parents('.popover').prev();
			var extensionID = $(extension).data('extension-id'); 
			var data = {
				extension: {
					id: extensionID,
					state: value
				}
			};
			$.ajax({
			  type: "POST",
			  url: '/extensions/set_state',
			  data: data,
			  success: function(response) {
			  	console.log(response);
			 //  	var html = '<div class="extension good" data-state="good" data-extension-id="' + response.id 
			 //  	+ '" data-toggle="popover" title="Edit extension"><div class="center-extension">';
			 //  	// Append frames html
				// for(var i in response.frames) {
				// 	html += '<div class="frame type-empty" data-id="' + response.frames[i].id + '"></div>';
				// }
				// var endHtml = '</div></div>';
			 //  	var extensions = $(hive).find('.extensions');
			 //  	$(extensions).prepend(html + endHtml);
			 //  	var extension = $(extensions).children().first();
			 //  	setPopover(extension);
			 //  	// Hide add new button if there are 3 extensions
			 //  	if($(extensions).children('div.extension').size() == "3") {
			 //  		var addExtensionLink = getAddExtensionLink(extension);
			 //  		// Hide add extension link if there are three extensions
			 //  		$(addExtensionLink).hide();
			 //  	}
			  	showSuccessNote("Successfuly changed state");
			  },
			  error: function(response) {
			  	console.log(response);
			  	showErrorNote("Error changing state with response: " + response.responseText);
			  },
			  dataType: "json"
			});
  		});
  	// }
  	// Change states of extension
  	
  	// Hide popover when clicking on other extensions
  	$(document).on('click', '.extension', function (e) {
  		$('.extension').not($(this)).popover('hide');
  		$(this).popover('toggle');
	});

  	// Add extension
	$('.add_extension').on('click', function(e){
		var hiveID = $(this).siblings('#extension_hive_id').val();
		var hive = $(this).parents('.hive');
		var data = {
			extension:{
				hive_id:hiveID
			}
		}
		$.ajax({
		  type: "POST",
		  url: '/extensions',
		  data: data,
		  success: function(response) {
		  	var html = '<div class="extension good" data-state="good" data-extension-id="' + response.id 
		  	+ '" data-toggle="popover" title="Edit extension"><div class="center-extension">';
		  	// Append frames html
			for(var i in response.frames) {
				html += '<div class="frame type-empty" data-id="' + response.frames[i].id + '"></div>';
			}
			var endHtml = '</div></div>';
		  	var extensions = $(hive).find('.extensions');
		  	$(extensions).prepend(html + endHtml);
		  	var extension = $(extensions).children().first();
		  	setPopover(extension);
		  	// Hide add new button if there are 3 extensions
		  	if($(extensions).children('div.extension').size() == "3") {
		  		var addExtensionLink = getAddExtensionLink(extension);
		  		// Hide add extension link if there are three extensions
		  		$(addExtensionLink).hide();
		  	}
		  	showSuccessNote("Successfuly added extension.");
		  },
		  error: function(response) {
		  	showErrorNote("Error adding extension with response: " + response);
		  },
		  dataType: "json"
		});
	})

	// Delete extension
	$(document).on('click', '.delete_extension', function(e) {
		var extension = $(e.toElement).parents('.popover').prev();
		var extensionID = $(extension).data('extension-id');
		var extensions = $(extension).parent();
		console.log(extension[0]);
		$.ajax({
		  type: "POST",
		  url: '/extensions/' + extensionID,
		  data: {"_method":"delete"},
		  success: function(response) {
		  	var addExtensionLink = getAddExtensionLink(extension);
		  	$(extension).popover('hide').remove();
		  	

		  	// Show extension link since now extension can be added
		  	console.log(addExtensionLink);
		  	$(addExtensionLink).show();

		  	showSuccessNote("Successfuly removed extension.");
		  },
		  error: function(response) {
		  	showErrorNote("Error removing extension with response: " + response);
		  },
		  dataType: "json"
		});
	});

	// Get add_extension link from extensions
	function getAddExtensionLink(extension) {
		return $(extension).parent().siblings('form').find('a');
	}
});