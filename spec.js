describe('Enter SNEHA Name', function() {
 it('should add a Name as SNEHA', function() {
 browser.get('https://angularjs.org');
 element(by.model('yourName')).sendKeys('SNEHA');
  var sneha= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
expect(sneha.getText()).toEqual('Hello SNEHA!');
  });
});
