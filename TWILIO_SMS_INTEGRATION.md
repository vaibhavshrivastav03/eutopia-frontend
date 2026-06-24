# Twilio SMS Integration - Eutopia Medical Network

## Overview
This application integrates Twilio SMS messaging to send emergency alerts to patient guardians and emergency contacts. The integration is secure, using Supabase Edge Functions to protect sensitive Twilio credentials.

## Architecture

```
Frontend (React) → Supabase Edge Function → Twilio API → SMS Delivery
```

### Components:
1. **Frontend Hook**: `/src/app/utils/useSMS.ts` - React hook for sending SMS
2. **Backend Endpoint**: `/supabase/functions/server/index.tsx` - Secure API route handling Twilio communication
3. **Environment Secrets**: Twilio credentials stored securely in Supabase environment

## Setup Instructions

### 1. Get Twilio Credentials
You need three credentials from your Twilio account:

- **Account SID**: Found in your [Twilio Console Dashboard](https://console.twilio.com/)
- **Auth Token**: Found in your Twilio Console Dashboard (click "Show" to reveal)
- **Phone Number**: Your Twilio phone number in E.164 format (e.g., `+12345678901`)

### 2. Add Credentials to Supabase
The application has already prompted you to add these three environment variables:

1. `TWILIO_ACCOUNT_SID` - Your Twilio Account SID
2. `TWILIO_AUTH_TOKEN` - Your Twilio Auth Token  
3. `TWILIO_PHONE_NUMBER` - Your Twilio phone number (format: +1234567890)

These are securely stored and never exposed to the frontend.

## Features

### Automatic Phone Number Formatting
The backend automatically formats Nigerian phone numbers:
- Input: `08164372815` → Output: `+2348164372815`
- Already formatted numbers (starting with `+`) are left unchanged

### SMS Alert Types
The system supports different alert types:

1. **Emergency Alert** (`emergency`)
   - Triggered from Medical Essentials screen
   - Notifies guardian of medical emergency
   - Includes patient medical info

2. **Family Alert** (`family_alert`)
   - Auto-sent when Family Alert screen loads
   - Notifies guardian that patient has been located at a facility

3. **Blood Request** (`blood_request`)
   - Auto-sent when Emergency Blood Request screen loads
   - Urgent notification for blood transfusion needs
   - Includes hospital location and patient details

4. **General** (`general`)
   - Default type for custom messages

### SMS Logging
All sent messages are logged to the Supabase KV store with:
- Recipient phone number
- Message content
- Alert type
- Twilio message SID
- Send status
- Timestamp

## Usage in Code

### Basic Usage
```typescript
import { useSMS } from "../utils/useSMS";

function MyComponent() {
  const { sendSMS, isSending, lastError } = useSMS();

  const handleSendAlert = async () => {
    const result = await sendSMS({
      to: "08164372815",
      message: "Your emergency message here",
      alertType: "emergency"
    });

    if (result.success) {
      console.log("SMS sent! SID:", result.messageSid);
    } else {
      console.error("Failed:", result.error);
    }
  };

  return (
    <button onClick={handleSendAlert} disabled={isSending}>
      {isSending ? "Sending..." : "Send SMS"}
    </button>
  );
}
```

### Auto-Send on Screen Load
```typescript
import { useEffect, useRef } from "react";
import { useSMS } from "../utils/useSMS";

function AlertScreen() {
  const { sendSMS } = useSMS();
  const hasSent = useRef(false);

  useEffect(() => {
    if (!hasSent.current) {
      hasSent.current = true;
      sendSMS({
        to: "08164372815",
        message: "Alert message",
        alertType: "family_alert"
      });
    }
  }, [sendSMS]);

  return <div>Alert Screen</div>;
}
```

## Screens with SMS Integration

1. **Medical Essentials** (`/src/app/screens/MedicalEssentials.tsx`)
   - Manual "Send Emergency SMS Alert" button
   - Sends comprehensive medical information

2. **Family Alert** (`/src/app/screens/FamilyAlert.tsx`)
   - Auto-sends when screen loads
   - Notifies guardian of patient location

3. **Emergency Blood Request** (`/src/app/screens/EmergencyBloodRequest.tsx`)
   - Auto-sends when screen loads
   - Urgent blood transfusion notification

## API Endpoint

### POST `/server/send-sms`

**Request Body:**
```json
{
  "to": "08164372815",
  "message": "Your SMS message content",
  "alertType": "emergency"
}
```

**Success Response:**
```json
{
  "success": true,
  "messageSid": "SM...",
  "status": "queued",
  "to": "+2348164372815"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error description",
  "details": { /* additional error info */ }
}
```

## Security Features

✅ **Credentials Protected**: Twilio credentials stored server-side only  
✅ **CORS Enabled**: Proper CORS headers for secure frontend communication  
✅ **Error Logging**: Comprehensive error logging for debugging  
✅ **Input Validation**: Phone number and message validation  
✅ **Rate Limiting**: Consider adding rate limiting for production use  

## Testing

1. Test with your own phone number first
2. Check the browser console for success/error messages
3. Monitor Twilio Console for message delivery status
4. Check SMS logs in KV store: `sms_log_*` keys

## Troubleshooting

### "Twilio credentials not configured"
- Ensure all three environment variables are added in Supabase
- Restart the Supabase Edge Function after adding secrets

### "Failed to send SMS"
- Check Twilio account balance
- Verify phone number format
- Check Twilio Console for error details
- Ensure your Twilio number can send to the destination country

### "Network error"
- Check internet connection
- Verify Supabase project ID is correct
- Check browser console for CORS errors

## Production Considerations

For production deployment, consider:

1. **Rate Limiting**: Implement SMS rate limits to prevent abuse
2. **User Consent**: Ensure proper consent for SMS notifications
3. **Compliance**: Follow HIPAA, GDPR, and local regulations for medical data
4. **Cost Management**: Monitor Twilio usage and costs
5. **Delivery Reports**: Implement webhook handlers for delivery status
6. **Opt-Out Handling**: Implement SMS opt-out mechanisms

## Emergency Contact

Current default emergency contact: **08164372815** (Relationship: Mum)

To change the emergency contact, update the `EMERGENCY_CONTACT` constant in:
- `/src/app/screens/MedicalEssentials.tsx`
- `/src/app/screens/FamilyAlert.tsx`
- `/src/app/screens/EmergencyBloodRequest.tsx`

---

**Note**: This is a prototype implementation. For production use with real patient data, additional security measures, compliance checks, and testing are required.
