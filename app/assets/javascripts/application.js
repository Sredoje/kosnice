// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap-sprockets
//= require jquery.noty.packaged.min


function showNote(message, type) {
		var n = noty({
			layout: 'topCenter',
		    text: message,
		    type: type,
		    animation: {
		        open: {height: 'toggle'}, // jQuery animate function property object
		        close: {height: 'toggle'}, // jQuery animate function property object
		        easing: 'swing', // easing
		        speed: 500 // opening & closing animation speed
		    },
		    theme: 'relax', // or 'relax'
		    timeout: '3000',
		    dismissQueue: true, // If you want to use queue feature set this true
		});
	}

function showSuccessNote(message) {
	showNote(message, 'success');
}

function showErrorNote(message) {
	showNote(message, 'error');
}