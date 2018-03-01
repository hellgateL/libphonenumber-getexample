export default class PhoneNumber {
	constructor(countryCallingCode, nationalNumber, interNatinalNumber) {
		if (!nationalNumber) {
			throw new TypeError('`nationalNumber` not passed')
		}
		if (!nationalNumber) {
			throw new TypeError('`interNatinalNumber` not passed')
		}
		this._country = {
			code: countryCallingCode
		}
		this._number = {
			international: interNatinalNumber,
			national: nationalNumber
		}
	}

	formatNational() {
		return this._number.national
	}

	formatInternational() {
		return this._number.international
	}

	getCountryCode() {
		return this._country.code
	}
}