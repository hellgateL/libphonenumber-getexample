import PhoneNumber from '../phoneNumber/PhoneNumber'

export default function getExampleNumber(country, examples, countries)
{
	const upper = country.toUpperCase();
	const indOfC = countries.indexOf(upper)

	if (indOfC === -1) {
		throw new Error('Country' + country + 'not supported')
	} else {
		return new PhoneNumber(upper, examples[indOfC].n, examples[indOfC].in)
	}
}