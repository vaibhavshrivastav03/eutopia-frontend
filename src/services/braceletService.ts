import api from "./api";

export const scanBracelet = async (
  uid: string
) => {
  const response =
    await api.get(
      `/bracelets/scan/${uid}`
    );

  return response.data;
};

export const getUserBracelet =
  async (userId: string) => {

    const token =
      localStorage.getItem("token");

    try {

      const response =
        await api.get(
          `/bracelets/user/${userId}`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      return response.data;

    } catch (error: any) {

      if (
        error?.response?.status === 404
      ) {
        return {
          success: false,
          bracelet_uid: null
        };
      }

      throw error;
    }
};

export const assignBraceletToUser =
async (
  braceletUid: string
) => {

  const token =
    localStorage.getItem("token");

  const { data } =
    await api.post(
      "/bracelets/assign-user-bracelet",
      {
        bracelet_uid: braceletUid
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

  return data;
};