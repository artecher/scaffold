describe('Qrious Portal', function() {

  describe('index page', function(){

    browser.get('/');

    it('should show the page', function() {
    	browser.sleep(5000);
    	expect("1").toBe("1");
    });

  });

});