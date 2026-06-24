import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Login } from "./screens/Login";
import { SignUp } from "./screens/SignUp";
import { ForgotPassword } from "./screens/ForgotPassword";
import { Introduction } from "./screens/onboarding/Introduction";
import { ChildProfile } from "./screens/onboarding/ChildProfile";
import { MedicalInfo } from "./screens/onboarding/MedicalInfo";
import { EmergencyContacts } from "./screens/onboarding/EmergencyContacts";
import { Activation } from "./screens/onboarding/Activation";
import { ScanBracelet } from "./screens/ScanBracelet";
import { Authenticating } from "./screens/Authenticating";
import { PatientVerified } from "./screens/PatientVerified";
import { FamilyAlert } from "./screens/FamilyAlert";
import { MedicalEssentials } from "./screens/MedicalEssentials";
import { EmergencyServices } from "./screens/EmergencyServices";
import { AuthorizeAccess } from "./screens/AuthorizeAccess";
import { DoctorVerification } from "./screens/DoctorVerification";
import { Dashboard } from "./screens/Dashboard";
import { MedicalRecords } from "./screens/MedicalRecords";
import { LabTests } from "./screens/LabTests";
import { Prescriptions } from "./screens/Prescriptions";
import { DoctorNotes } from "./screens/DoctorNotes";
import { Hospitals } from "./screens/Hospitals";
import { Profile } from "./screens/Profile";
import { EmergencyBloodRequest } from "./screens/EmergencyBloodRequest";
import { RequestSent } from "./screens/RequestSent";
import { ImagingRecords } from "./screens/ImagingRecords";
import { VaccinationRecords } from "./screens/VaccinationRecords";
import { RecordTreatment } from "./screens/RecordTreatment";
import { SMSTestScreen } from "./components/SMSTestScreen";
import { AmbulanceTracking } from "./screens/AmbulanceTracking";
import { FireTracking } from "./screens/FireTracking";
import { MobileFrame } from "./components/MobileFrame";

export const router = createHashRouter([
  {
    Component: MobileFrame,
    children: [
      { path: "/login", Component: Login },
      { path: "/signup", Component: SignUp },
      { path: "/forgot-password", Component: ForgotPassword },
      { path: "/onboarding/introduction", Component: Introduction },
      { path: "/onboarding/child-profile", Component: ChildProfile },
      { path: "/onboarding/medical-info", Component: MedicalInfo },
      { path: "/onboarding/emergency-contacts", Component: EmergencyContacts },
      { path: "/onboarding/activation", Component: Activation },
    ],
  },
  {
    path: "/ambulance-tracking",
    Component: AmbulanceTracking,
  },
  {
    path: "/fire-tracking",
    Component: FireTracking,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Login },
      { path: "scan", Component: ScanBracelet },
      { path: "authenticating", Component: Authenticating },
      { path: "verified", Component: PatientVerified },
      { path: "family-alert", Component: FamilyAlert },
      { path: "emergency-services", Component: EmergencyServices },
      { path: "essentials", Component: MedicalEssentials },
      { path: "medical-essentials", Component: MedicalEssentials },
      { path: "authorize", Component: AuthorizeAccess },
      { path: "verifying-doctor", Component: DoctorVerification },
      { path: "dashboard", Component: Dashboard },
      { path: "records", Component: MedicalRecords },
      { path: "lab-tests", Component: LabTests },
      { path: "prescriptions", Component: Prescriptions },
      { path: "doctor-notes", Component: DoctorNotes },
      { path: "hospital", Component: Hospitals },
      { path: "profile", Component: Profile },
      { path: "emergency-request", Component: EmergencyBloodRequest },
      { path: "request-sent", Component: RequestSent },
      { path: "imaging", Component: ImagingRecords },
      { path: "vaccinations", Component: VaccinationRecords },
      { path: "record-treatment", Component: RecordTreatment },
      { path: "sms-test", Component: SMSTestScreen },
    ],
  },
]);
