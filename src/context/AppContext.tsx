import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(null);

export const AppProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [childProfile, setChildProfile] = useState(null);
  const [medicalInfo, setMedicalInfo] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [patientData, setPatientData] = useState(null);

  const [parent, setParent] = useState(null);

  const [child, setChild] = useState({
    id: null,
    full_name: "",
    age: "",
    photo: "",
    blood_group: "",
    allergies: [],
    medical_notes: "",
    address: "",
    preferred_language: "English",

    // NEW
    emergency_contacts: []
  });
  const [bracelet, setBracelet] = useState(null);
  const [patient, setPatient] = useState(null);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        childProfile,
        setChildProfile,
        medicalInfo,
        setMedicalInfo,
        contacts,
        setContacts,
        patientData,
        setPatientData,
        parent,
        setParent,
        child,
        setChild,
        bracelet,
        setBracelet,
        patient,
        setPatient
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () =>
  useContext(AppContext);