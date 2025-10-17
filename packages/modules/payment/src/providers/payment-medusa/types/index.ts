export interface MedusaPaymentsOptions {
  /**
   * The API key for the Stripe account
   */
  apiKey: string
  /**
   * The webhook secret used to verify webhooks
   */
  webhookSecret: string
  /**
   * The endpoint to use for the payments
   */
  endpoint: string
  /**
   * The handle of the cloud environment
   */
  environmentHandle: string
}
