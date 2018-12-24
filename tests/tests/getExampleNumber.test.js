import examples from '../examples.mobile'
import metadata from '../metadata.min'
import getExampleNumber from '../../src/getExample/getExampleNumber'

describe('getExampleNumber', () => {
	it('should get an example number', () => {
		const phoneNumber = getExampleNumber('RU', examples, metadata)
		phoneNumber.nationalNumber.should.equal('9123456789')
		phoneNumber.number.should.equal('+79123456789')
		phoneNumber.countryCallingCode.should.equal('7')
		phoneNumber.country.should.equal('RU')
	})
})