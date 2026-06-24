import api from "./api";

export const identifyPatient =
  async (data: any) => {
    const response =
      await api.post(
        "/hospital-identification/identify",
        data
      );

    return response.data;
  };