import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "https://crypto-news11.p.rapidapi.com"
const cryptoNewsApiHeaders =  {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_CRYPTONEWS_HOST
  }

const createRequest = (url)=> ({url, headers: cryptoNewsApiHeaders})


export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({category,count}) => createRequest(`/cryptonews/${category}?max_articles=${count}`),
    }),
    getCryptoTweets: builder.query({
      query: ({count}) => createRequest(`/cryptotweets?max_tweets=${count}`),
    }),
  }),
})


export const { useGetCryptoNewsQuery, useGetCryptoTweetsQuery } = cryptoNewsApi