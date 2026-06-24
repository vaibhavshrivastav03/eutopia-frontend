import api from "./api";

export const updateOnboardingProfile =
  async (data: any) => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.put(
        `users/onboarding-profile`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

    return response.data;
};

export const saveEmergencyContacts =
  async (contacts: any[]) => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.post(
        `users/emergency-contacts`,
        { contacts },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

    return response.data;
};