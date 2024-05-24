import { api } from "../../libs/api";

export const deleteCreativeLike = async (creativeId: number) => {
  try {
    const response = await api.delete(`/creatives/heart/${creativeId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to toggle heart.");
  }
};
