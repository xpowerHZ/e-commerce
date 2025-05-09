export interface IPaymentProcessor {
  pay(cents: number): Promise<string>;
}
