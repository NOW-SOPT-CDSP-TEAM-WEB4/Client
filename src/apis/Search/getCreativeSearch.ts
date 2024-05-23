import { api } from "../../libs/api";

export const getCreativeSearch = async (keyword: string) => {
  const res = await api.get(`/creatives/search?word=${keyword}`);
  return res.data.data.creatives;
};
