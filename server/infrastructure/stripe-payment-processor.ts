import { IPaymentProcessor } from "../domains/order/interfaces/payment-processor";

export class StripePaymentProcessor implements IPaymentProcessor {
  async pay(cents: number): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    console.log(`Recieved a payment of $${cents / 100}`);
    const paymentId = new Date().toString();
    return paymentId;
  }
}
