import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cryptoNewsHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
  "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
};

const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk";
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest(`/`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
