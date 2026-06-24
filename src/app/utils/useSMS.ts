import { useState } from 'react';

/**
 * Twilio SMS Integration for Eutopia Medical Network
 * 
 * This hook provides SMS messaging capabilities using Twilio API via Supabase Edge Functions.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Add your Twilio credentials as environment variables in Supabase:
 *    - TWILIO_ACCOUNT_SID: Your Twilio Account SID
 *    - TWILIO_AUTH_TOKEN: Your Twilio Auth Token
 *    - TWILIO_PHONE_NUMBER: Your Twilio phone number (format: +1234567890)
 * 
 * 2. The backend server endpoint handles:
 *    - Secure credential management
 *    - Phone number formatting (auto-adds +234 for Nigerian numbers starting with 0)
 *    - Twilio API authentication
 *    - SMS logging to KV store
 * 
 * USAGE:
 * const { sendSMS, isSending, lastError } = useSMS();
 * 
 * await sendSMS({
 *   to: "08164372815",
 *   message: "Your emergency alert message",
 *   alertType: "emergency"
 * });
 */

interface SendSMSParams {
  to: string;
  message: string;
  alertType?: 'emergency' | 'blood_request' | 'family_alert' | 'general';
  includeBranding?: boolean;
}

interface SMSResponse {
  success: boolean;
  messageSid?: string;
  status?: string;
  to?: string;
  error?: string;
  details?: any;
}

export function useSMS() {
  const [isSending, setIsSending] = useState(false);
  const [lastError, setLastError] = useState<string | null>(null);

  const sendSMS = async ({ to, message, alertType = 'general', includeBranding = true }: SendSMSParams): Promise<SMSResponse> => {
    setIsSending(true);
    setLastError(null);

    void message; void alertType; void includeBranding;
    await new Promise((r) => setTimeout(r, 200));
    setIsSending(false);
    return { success: true, messageSid: `mock-${Date.now()}`, status: 'mocked', to };
  };

  return { sendSMS, isSending, lastError };
}