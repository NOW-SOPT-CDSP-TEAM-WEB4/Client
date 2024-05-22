import { api } from "../../libs/api";

export const getCreativeInquire = async (keyword: string) => {
  const res = await api.get(`/creatives/Inquire?word=${keyword}`);
  return res.data.data.creatives;
};
