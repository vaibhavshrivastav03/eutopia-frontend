# EUTOPIA SMS Implementation Guide

## Overview
Your Twilio SMS integration is now fully configured with automatic EUTOPIA branding and comprehensive testing capabilities.

## What Was Updated

### 1. Automatic Message Branding
All SMS messages now automatically include EUTOPIA branding in the message body:

- **Emergency/Blood Request/Family Alerts**: `🚨 EUTOPIA EMERGENCY 🚨`
- **General Messages**: `EUTOPIA Medical Network`

This appears at the start of every message, making it clear the message is from the EUTOPIA system.

### 2. Enhanced Server Endpoint
**File**: `/supabase/functions/server/index.tsx`

The `/make-server-103050d8/send-sms` endpoint now supports:
- Automatic branding prefix based on alert type
- Nigerian phone number formatting (0812... → +234812...)
- Optional `includeBranding` parameter (defaults to `true`)
- SMS logging to KV store with timestamps

### 3. Updated SMS Hook
**File**: `/src/app/utils/useSMS.ts`

The `useSMS` hook now supports:
```typescript
sendSMS({
  to: "08164372815",
  message: "Your message here",
  alertType: 'emergency', // or 'blood_request', 'family_alert', 'general'
  includeBranding: true  // optional, defaults to true
})
```

### 4. New SMS Testing Screen
**File**: `/src/app/components/SMSTestScreen.tsx`
**Route**: `/sms-test`

A comprehensive testing interface that allows you to:
- Send test SMS to multiple Nigerian numbers
- Configure message content and alert type
- Add/remove test contacts
- Send to individual contacts or all at once
- View delivery status and error messages in real-time
- Pre-populated with guardian number (08164372815) for quick testing

## How to Access

Navigate to: **http://localhost:5173/sms-test**

## Testing Different Nigerian Numbers

The test screen comes pre-loaded with:
1. **08164372815** - Guardian (Tofunmi)
2. **08012345678** - Test Contact 1
3. **07098765432** - Test Contact 2

You can:
- Add more contacts using the "Add Contact" button
- Edit names and phone numbers
- Send test messages to all contacts at once
- View delivery status for each number

## Nigerian Number Formatting

The system automatically handles Nigerian phone numbers:
- Input: `08164372815` → Converted to: `+2348164372815`
- Input: `07012345678` → Converted to: `+2347012345678`
- Input: `+2349012345678` → Used as-is

## About Sender Name

### Current Behavior
Messages display your Twilio phone number as the sender ID, with "🚨 EUTOPIA EMERGENCY 🚨" appearing in the message body.

Example received message:
```
From: +1234567890
🚨 EUTOPIA EMERGENCY 🚨

Patient Ogunlana Tofunmi requires immediate attention...
```

### How to Show "EUTOPIA" as Sender Name

To show "EUTOPIA" instead of a phone number as the sender ID:

1. **Register an Alphanumeric Sender ID** with Twilio:
   - Log into your Twilio Console
   - Navigate to: Messaging → Senders → Alphanumeric Sender IDs
   - Request a new sender ID: "EUTOPIA" or "EUTOPIA-ER"
   - Submit registration for Nigeria (+234)
   - Wait for approval (usually 1-5 business days)

2. **Update the server code** once approved:
   ```typescript
   // In /supabase/functions/server/index.tsx
   // Replace line 79:
   From: twilioPhoneNumber,
   // With:
   From: "EUTOPIA",  // Your approved alphanumeric sender ID
   ```

**Important Notes**:
- Alphanumeric sender IDs cannot receive replies
- Approval requirements vary by country
- Nigeria requires sender ID registration
- Emojis (🚨) are not supported in sender IDs, only in message body

## Existing SMS Integration

These screens already use SMS and will automatically include branding:

1. **MedicalEssentials** (`/essentials`)
   - Manual emergency SMS button
   - Sends to 08164372815

2. **FamilyAlert** (`/family-alert`)
   - Auto-sends on screen load
   - Notifies guardian of patient presence

3. **EmergencyBloodRequest** (`/emergency-request`)
   - Auto-sends blood request on load
   - Emergency alert type

## Environment Variables Required

Ensure these are set in Supabase:
- `TWILIO_ACCOUNT_SID` - Your Twilio Account SID
- `TWILIO_AUTH_TOKEN` - Your Twilio Auth Token
- `TWILIO_PHONE_NUMBER` - Your Twilio phone number (format: +1234567890)

## Message Examples

### Emergency Alert
```
🚨 EUTOPIA EMERGENCY 🚨

URGENT: Patient Ogunlana Tofunmi (16) requires immediate attention.
Condition: Sickle Cell complication, high blood sugar.
Location: EUTOPIA Medical Network facility.
```

### Blood Request
```
🚨 EUTOPIA EMERGENCY 🚨

URGENT BLOOD REQUEST
Patient: Ogunlana Tofunmi
Type: O+ (4 units needed)
Contact hospital immediately.
```

### General Message
```
EUTOPIA Medical Network

This is a test message from EUTOPIA Medical Network.
Patient Ogunlana Tofunmi requires immediate attention.
```

## Rate Limiting

The bulk send feature includes a 500ms delay between messages to avoid Twilio rate limits.

## Troubleshooting

### Messages Not Sending
1. Verify environment variables are set
2. Check Twilio account balance
3. Verify phone number is verified in Twilio (for trial accounts)
4. Check console logs for detailed error messages

### Invalid Phone Number
- Ensure Nigerian numbers start with 0 or +234
- Format: 11 digits starting with 0, or +234 followed by 10 digits

### Wrong Sender Display
- This requires Alphanumeric Sender ID registration (see above)
- Branding in message body works immediately without registration

## Next Steps

1. **Test the integration**: Navigate to `/sms-test` and send test messages
2. **Verify delivery**: Check that messages arrive at Nigerian numbers
3. **Optional**: Register Alphanumeric Sender ID for "EUTOPIA" sender name
4. **Production**: Remove test contacts before deploying to production

## API Reference

### Send SMS via Hook
```typescript
import { useSMS } from '../utils/useSMS';

const { sendSMS, isSending, lastError } = useSMS();

const result = await sendSMS({
  to: "08164372815",              // Required
  message: "Your message",         // Required
  alertType: 'emergency',          // Optional: emergency, blood_request, family_alert, general
  includeBranding: true            // Optional: defaults to true
});

if (result.success) {
  console.log('Sent!', result.messageSid);
} else {
  console.error('Failed:', result.error);
}
```

### Direct API Call
```typescript
const response = await fetch(
  `https://${projectId}.supabase.co/functions/v1/server/send-sms`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${publicAnonKey}`,
    },
    body: JSON.stringify({
      to: "08164372815",
      message: "Your message",
      alertType: "emergency",
      includeBranding: true
    }),
  }
);
```

## Security Notes

- All Twilio credentials are stored securely in Supabase environment variables
- Credentials never leak to frontend
- SMS logs are stored in KV store for audit trail
- Rate limiting prevents abuse
