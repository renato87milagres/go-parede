var page = require('./page');
var game = 'Mayfair Roulette';
var id ;

var formPage = Object.create(page, {
	 open: { value: function() {
			browser.url('/');
			
		 } },
	 game: { value: function() {
			browser.setValue('.search-input__input-wrapper input',game);
			
		 } },
	  clicked: { value: function(id) {
		  browser.click(id);
			
			
		 } }
});

module.exports = formPage;