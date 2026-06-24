import { useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Plus, ArrowLeft } from 'lucide-react';
import { DreamyBackground } from '../../components/DreamyBackground';
import { updateOnboardingProfile, saveEmergencyContacts } from "../../../services/userService";

interface Contact {
  id: string;
  name: string;
  relation: string;
  phone: string;
  avatar: string;
}

export function EmergencyContacts() {
  const navigate = useNavigate();

  const {
    child,
    setChild
  } = useAppContext();

  const [contacts, setContacts] =
    useState<Contact[]>(
      child?.emergency_contacts || []
    );
  const [saving, setSaving] =
  useState(false);
  
  const handleFinish =
  async () => {

    try {

      setSaving(true);

      try {
        await updateOnboardingProfile({
          full_name:
            child.full_name,

          profile_photo:
            child.photo,

          allergies:
            Array.isArray(
              child.allergies
            )
              ? child.allergies.join(", ")
              : "",

          medical_notes:
            child.medical_notes
        });

        setChild({
          ...child,
          emergency_contacts:
            contacts
        });

        await saveEmergencyContacts(
          contacts
            .filter(c => c.name && c.phone)
            .map(contact => ({
              name: contact.name,
              phone: contact.phone,
              relationship: contact.relation
            }))
        );

        navigate(
          "/onboarding/activation"
        );
      } finally {
        setSaving(false);
      }      

    } catch (error) {

      console.error(
        "Onboarding Save Error",
        error
      );

    }

};

const updateContact = (
  index: number,
  field: string,
  value: string
) => {
  const updated = [...contacts];

  updated[index] = {
    ...updated[index],
    [field]: value
  };

  setContacts(updated);

  setChild({
    ...child,
    emergency_contacts:
      updated
  });
};

  return (
    <div
      className="min-h-screen flex items-center justify-center px-5 py-10 relative overflow-hidden"
      style={{
        maxWidth: '430px',
        margin: '0 auto',
      }}
    >
      {/* Dreamy celestial background */}
      <DreamyBackground />

      {/* Centered glass card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 0.9, 0.3, 1] }}
        className="relative w-full max-w-sm rounded-[32px] px-8 py-10 flex flex-col items-center"
        style={{
          background: 'rgba(255,255,255,0.45)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.65)',
          boxShadow: '0 20px 50px rgba(120,150,190,0.25)',
        }}
      >
        {/* Back chevron */}
        <button
          onClick={() => navigate('/onboarding/medical-info')}
          className="absolute top-5 left-5 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
          style={{ background: 'rgba(154,167,185,0.2)' }}
          aria-label="Back"
        >
          <ArrowLeft size={16} style={{ color: '#2C3A56' }} strokeWidth={2.5} />
        </button>

        {/* Mini stepper — show all 5 steps */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex items-center gap-2 mb-6"
        >
          {[
            { label: 'Introduction', done: true },
            { label: 'Child Profile', done: true },
            { label: 'Medical Info', done: true },
            { label: 'Emergency Contacts', done: false },
            { label: 'Activation', done: false },
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="rounded-full transition-all"
                style={{
                  width: step.done ? '8px' : i === 3 ? '10px' : '6px',
                  height: step.done ? '8px' : i === 3 ? '10px' : '6px',
                  background: step.done ? '#87CEEB' : i === 3 ? '#87CEEB' : 'rgba(154,167,185,0.3)',
                  boxShadow: i === 3 ? '0 0 8px rgba(135,206,235,0.5)' : 'none',
                }}
              />
              {i < 4 && (
                <div
                  className="h-[1px]"
                  style={{
                    width: '14px',
                    background: step.done ? '#87CEEB' : 'rgba(154,167,185,0.3)',
                  }}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* Heading — navy serif */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center mb-2"
          style={{
            fontFamily: 'Space Grotesk, serif',
            fontSize: '30px',
            fontWeight: 600,
            lineHeight: 1.15,
            color: '#2C3A56',
          }}
        >
          Emergency Contacts
        </motion.h1>

        {/* Helper text */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-[12px] leading-relaxed mb-6"
          style={{ fontFamily: 'Space Grotesk, monospace', color: '#42506A' }}
        >
          These people will be contacted during emergencies.
        </motion.p>

        {/* Contact rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full space-y-3 mb-4"
        >
          {contacts.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
              className="flex items-center gap-3 rounded-[20px] p-3 pr-4 transition-all"
              style={{
                background: 'rgba(255,255,255,0.5)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.7)',
                boxShadow: '0 6px 18px rgba(120,150,190,0.2)',
              }}
            >
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08, type: 'spring', stiffness: 220 }}
                className="w-11 h-11 rounded-full flex items-center justify-center text-lg"
                style={{
                  background: 'linear-gradient(135deg, #e6f1fa, #d0e5f5)',
                  boxShadow: 'inset 0 0 0 1px rgba(120,150,190,0.3)',
                }}
              >
                {c.avatar}
              </motion.div>

              {/* Body */}
              <div className="flex-1 min-w-0">
                <div className="flex-1 flex flex-col gap-2">
                  <input
                    value={c.name}
                    placeholder="Contact Name"
                    onChange={(e) =>
                      updateContact(
                        i,
                        "name",
                        e.target.value
                      )
                    }
                    className="bg-transparent text-sm outline-none"
                  />

                  <input
                    value={c.relation}
                    placeholder="Relationship"
                    onChange={(e) =>
                      updateContact(
                        i,
                        "relation",
                        e.target.value
                      )
                    }
                    className="bg-transparent text-sm outline-none"
                  />

                  <input
                    value={c.phone}
                    placeholder="Phone Number"
                    onChange={(e) =>
                      updateContact(
                        i,
                        "phone",
                        e.target.value
                      )
                    }
                    className="bg-transparent text-sm outline-none"
                  />
                </div>
                
              </div>

              {/* Circular + button */}
              <button
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                style={{
                  background: 'rgba(154,167,185,0.15)',
                  color: '#9AA7B9',
                }}
                aria-label="Add"
              >
                <Plus size={14} strokeWidth={2.5} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* ADD CONTACT button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          onClick={() =>
            setContacts([
              ...contacts,
              {
                id: Date.now().toString(),
                name: '',
                relation: '',
                phone: '',
                avatar: '👤'
              }
            ])
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full h-12 rounded-full text-white mb-4"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            background: 'linear-gradient(135deg, #87CEEB 0%, #5BA3D0 100%)',
            boxShadow: '0 10px 24px rgba(135,206,235,0.35)',
          }}
        >
          ADD CONTACT
        </motion.button>

        {/* Baby blue NEXT button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          onClick={handleFinish}
          disabled={saving}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative w-full h-14 rounded-full text-white overflow-hidden mb-6"
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '0.15em',
            background: 'linear-gradient(135deg, #87CEEB 0%, #5BA3D0 100%)',
            boxShadow: '0 12px 30px rgba(135,206,235,0.4)',
          }}
        >
          {/* Slow shimmer */}
          <motion.div
            className="absolute inset-0 opacity-40"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
            }}
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2,
              ease: 'easeInOut',
            }}
          />
          <span className="relative z-10">NEXT</span>
        </motion.button>

        {/* Carousel dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex items-center gap-2"
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="rounded-full transition-all"
              style={{
                width: i === 3 ? '8px' : '6px',
                height: i === 3 ? '8px' : '6px',
                background: i === 3 ? '#87CEEB' : 'rgba(154,167,185,0.4)',
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
