import { api } from "../../libs/api";

export const getWorkshop = async () => {
  try {
    const res = await api.get("/workshops");
    return res.data.data.workshops;
  } catch (error) {
    console.log(error);
  }
};
