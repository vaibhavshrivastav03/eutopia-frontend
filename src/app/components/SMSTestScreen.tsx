import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSMS } from '../utils/useSMS';
import { Send, Plus, Trash2, CheckCircle, XCircle, Loader } from 'lucide-react';

interface TestContact {
  id: string;
  name: string;
  phone: string;
  status?: 'pending' | 'sending' | 'success' | 'error';
  error?: string;
  messageSid?: string;
}

export function SMSTestScreen() {
  const { sendSMS } = useSMS();

  const userData = JSON.parse(
    localStorage.getItem("scannedUser") || "{}"
  );

  const patient = userData.users || {};

  const emergencyContacts =
    userData.emergency_contacts || [];

  const [contacts, setContacts] =
  useState<TestContact[]>([]);

  useEffect(() => {
  if (emergencyContacts.length) {
    setContacts(
      emergencyContacts.map(
        (contact: any, index: number) => ({
          id: contact.id || String(index),
          name:
            contact.contact_name ||
            contact.name ||
            "Emergency Contact",

          phone:
            contact.contact_phone ||
            contact.phone ||
            "",

          status: "pending",
        })
      )
    );
  }
}, []);

  const [testMessage, setTestMessage] =
    useState(
      `Emergency alert for ${
        patient.full_name || "Patient"
      }.

  Blood Group:
  ${patient.blood_group || "N/A"}

  Medical Notes:
  ${patient.medical_notes || "None"}

  Please contact immediately.`
    );
  const [alertType, setAlertType] = useState<'emergency' | 'general'>('emergency');
  const [isSendingAll, setIsSendingAll] = useState(false);

  const addContact = () => {
    const newContact: TestContact = {
      id: Date.now().toString(),
      name: "",
      phone: '',
      status: 'pending'
    };
    setContacts([...contacts, newContact]);
  };

  const removeContact = (id: string) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const updateContact = (id: string, field: keyof TestContact, value: string) => {
    setContacts(contacts.map(c =>
      c.id === id ? { ...c, [field]: value } : c
    ));
  };

  const sendToSingle = async (contact: TestContact) => {
    if (!contact.phone.trim()) {
      updateContact(contact.id, 'status', 'error');
      updateContact(contact.id, 'error', 'Phone number required');
      return;
    }

    updateContact(contact.id, 'status', 'sending');

    const result = await sendSMS({
      to: contact.phone,
      message: testMessage,
      alertType,
    });

    if (result.success) {
      setContacts(prev => prev.map(c =>
        c.id === contact.id
          ? { ...c, status: 'success', messageSid: result.messageSid }
          : c
      ));
    } else {
      setContacts(prev => prev.map(c =>
        c.id === contact.id
          ? { ...c, status: 'error', error: result.error || 'Failed to send' }
          : c
      ));
    }
  };

  const sendToAll = async () => {
    setIsSendingAll(true);

    for (const contact of contacts) {
      if (contact.phone.trim()) {
        await sendToSingle(contact);
        // Small delay between sends to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    setIsSendingAll(false);
  };

  const resetAll = () => {
    setContacts(contacts.map(c => ({
      ...c,
      status: 'pending',
      error: undefined,
      messageSid: undefined
    })));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f1419] to-[#1a1a2e] text-white overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold font-['Outfit'] text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#0066ff]">
              EUTOPIA ID
            </div>
          </div>
          <div className="text-sm text-white/60 font-['Space_Grotesk']">
            SMS Testing Console
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold font-['Outfit'] mb-3">SMS Testing & Demo</h2>
          <p className="text-sm text-white/70 font-['Space_Grotesk'] leading-relaxed">
            Send test SMS alerts to the patient's registered emergency contacts. All messages will be prefixed with
            "🚨 EUTOPIA EMERGENCY 🚨" for emergency alerts or "EUTOPIA Medical Network" for general messages.
            Numbers starting with 0 are automatically formatted to +234.
          </p>
        </motion.div>

        {/* Message Configuration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4"
        >
          <h3 className="text-lg font-bold font-['Outfit']">Message Configuration</h3>

          <div className="space-y-2">
            <label className="text-sm text-white/70 font-['Space_Grotesk']">Alert Type</label>
            <div className="flex gap-3">
              <button
                onClick={() => setAlertType('emergency')}
                className={`flex-1 py-3 px-4 rounded-xl font-['Space_Grotesk'] font-medium transition-all ${
                  alertType === 'emergency'
                    ? 'bg-red-500 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                🚨 Emergency
              </button>
              <button
                onClick={() => setAlertType('general')}
                className={`flex-1 py-3 px-4 rounded-xl font-['Space_Grotesk'] font-medium transition-all ${
                  alertType === 'general'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                General
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-white/70 font-['Space_Grotesk']">Message Content</label>
            <textarea
              value={testMessage}
              onChange={(e) => setTestMessage(e.target.value)}
              rows={4}
              className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3 text-white font-['Space_Grotesk'] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your test message..."
            />
            <div className="text-xs text-white/50 font-['Space_Grotesk']">
              Note: Branding prefix will be added automatically based on alert type
            </div>
          </div>
        </motion.div>

        {/* Contacts List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold font-['Outfit']">Test Contacts</h3>
            <button
              onClick={addContact}
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-['Space_Grotesk'] text-sm transition-colors"
            >
              <Plus size={16} />
              Add Contact
            </button>
          </div>

          <div className="space-y-3">
            <AnimatePresence>
              {contacts.map((contact, index) => (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-black/40 border border-white/10 rounded-xl p-4 space-y-3"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <input
                      type="text"
                      value={contact.name}
                      onChange={(e) => updateContact(contact.id, 'name', e.target.value)}
                      placeholder="Contact Name"
                      className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white font-['Space_Grotesk'] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="tel"
                      value={contact.phone}
                      onChange={(e) => updateContact(contact.id, 'phone', e.target.value)}
                      placeholder="08012345678"
                      className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white font-['Space_Grotesk'] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => sendToSingle(contact)}
                        disabled={contact.status === 'sending' || !contact.phone.trim()}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 disabled:bg-white/10 disabled:cursor-not-allowed rounded-lg font-['Space_Grotesk'] text-sm transition-colors"
                      >
                        {contact.status === 'sending' ? (
                          <Loader size={16} className="animate-spin" />
                        ) : (
                          <Send size={16} />
                        )}
                        Send
                      </button>
                      <button
                        onClick={() => removeContact(contact.id)}
                        className="px-3 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} className="text-red-400" />
                      </button>
                    </div>
                  </div>

                  {/* Status Display */}
                  {contact.status !== 'pending' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="flex items-center gap-2 text-sm font-['Space_Grotesk']"
                    >
                      {contact.status === 'sending' && (
                        <div className="flex items-center gap-2 text-blue-400">
                          <Loader size={16} className="animate-spin" />
                          Sending...
                        </div>
                      )}
                      {contact.status === 'success' && (
                        <div className="flex items-center gap-2 text-green-400">
                          <CheckCircle size={16} />
                          SMS sent successfully to {contact.name}
                        </div>
                      )}
                      {contact.status === 'error' && (
                        <div className="flex items-center gap-2 text-red-400">
                          <XCircle size={16} />
                          Error: {contact.error}
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Bulk Actions */}
          <div className="flex gap-3 pt-4 border-t border-white/10">
            <button
              onClick={sendToAll}
              disabled={isSendingAll || contacts.every(c => !c.phone.trim())}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-white/10 disabled:to-white/10 disabled:cursor-not-allowed rounded-xl font-['Outfit'] font-bold transition-all"
            >
              {isSendingAll ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Sending to All...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send to All Contacts
                </>
              )}
            </button>
            <button
              onClick={resetAll}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-['Outfit'] font-bold transition-colors"
            >
              Reset Status
            </button>
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6"
        >
          <h3 className="text-lg font-bold font-['Outfit'] text-yellow-400 mb-3">Important Notes</h3>
          <ul className="space-y-2 text-sm text-white/70 font-['Space_Grotesk']">
            <li>• <strong>Sender Name:</strong> Twilio displays the phone number as sender ID by default. The "EUTOPIA EMERGENCY 🚨" branding appears in the message body.</li>
            <li>• <strong>Nigerian Numbers:</strong> Numbers starting with 0 are automatically converted to +234 format.</li>
            <li>• <strong>Rate Limiting:</strong> There's a 500ms delay between bulk sends to avoid rate limits.</li>
            <li>• <strong>Credentials:</strong> Ensure TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_PHONE_NUMBER are set in environment variables.</li>
            <li>• <strong>Custom Sender ID:</strong> To show "EUTOPIA" as the sender name instead of a number, you need to register an Alphanumeric Sender ID with Twilio for Nigeria.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
