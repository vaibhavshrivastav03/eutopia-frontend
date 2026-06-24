import api from "./api";

export const getEmergencyContacts =
  async (userId: string) => {

    const token =
      localStorage.getItem("token");

    const response =
      await api.get(
        `/emergency-contacts/user/${userId}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

    return response.data;
};