import examples from './meta-ex.json';
import { countries } from './country';

import getExampleNumberCustom from './getExample/getExampleNumber';

export function getExampleNumber()
{
	var parameters = Array.prototype.slice.call(arguments)
	parameters.push(examples)
	parameters.push(countries)
	return getExampleNumberCustom.apply(this, parameters)
}