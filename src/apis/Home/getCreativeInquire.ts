import { api } from "../../libs/api";
import { Creative } from "../../types/Home/homeTypes";

export const getCreativeInquire = async (): Promise<Creative[]> => {
  try {
    const res = await api.get("/creatives");
    if (res.data && res.data.data && Array.isArray(res.data.data.creatives)) {
      return res.data.data.creatives;
    } else {
      throw new Error("Invalid API response structure");
    }
  } catch (error) {
    console.error("Error fetching creative data:", error);
    return [];
  }
};
