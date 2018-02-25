
var LoginPage = require ( '../Model/form.page' );

describe('Login Page', function () {
	it('should let you log in', function () {
		LoginPage.open();
		browser.windowHandleMaximize();
		browser.waitForVisible('.promotion-awareness-overlay__content', 9999999999);
		LoginPage.clicked('.promotion-awareness-overlay__close-button');
		LoginPage.clicked('.btn-search-magnifier');
		browser.waitForVisible('.search-input__form', 9999999999);
		LoginPage.game();
		browser.moveToObject('.tile-cover__footer=Mayfair Roulette');
		browser.waitForVisible('.tile-content__description', 9999999999);
		LoginPage.clicked('.o-btn.o-btn--more');
		browser.waitForVisible('.tile-details__description', 9999999999);
		browser.scroll('.o-btn');
		browser.elementActive('.tile-details__buttons');
		browser.moveToObject('button=Play Now');
		LoginPage.clicked('button=Play Now');
		browser.waitForVisible('.login-component__wrapper', 9999999999);
		browser.pause(9000);
		
		

	   
	   
	   
	   
	
	});
});

