export class PhoneNumber {
  formatNational(): string;
  formatInternational(): string;
}

export function getExampleNumber(country: string): PhoneNumber;