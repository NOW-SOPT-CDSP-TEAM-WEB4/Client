import { api } from "../../libs/api";

export const getProgram = async () => {
  try {
    const res = await api.get("/programs");
    return res.data.data.programs;
  } catch (error) {
    console.log(error);
  }
};
