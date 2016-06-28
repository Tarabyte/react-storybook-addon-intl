/* eslint no-unused-expressions:0 */
import IntlAddon from '.';

describe('IntlAddon', () => {
  it('should be an object', () => {
    expect(IntlAddon).to.be.an('object');
  });

  it('should have addWithIntl method', () => {
    IntlAddon.should.have.property('addWithIntl')
      .that.is.a('function');
  });
});
