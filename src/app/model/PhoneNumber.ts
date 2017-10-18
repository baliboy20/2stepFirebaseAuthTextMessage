export class PhoneNumber {
  public country: string;
  public area: string;
  public prefix: string;
  public line: string;
  constructor() { }

  get e164(): string {
    return `+447412367761`;
    // return String('+').concat(this.country, this.area, this.prefix, this.line);
  }
}
