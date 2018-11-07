let Rellax = require('rellax');

if (PRODUCTION) {
	var documentLoad = 'turbolinks:load';
} else {
	var documentLoad = 'DOMContentLoaded';
}

document.addEventListener(documentLoad, function() {
	let rellax = new Rellax('.rellax');
});
