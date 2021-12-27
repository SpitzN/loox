import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create the looxAPI
export const looxAPI = createApi({
  reducerPath: 'looxAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  tagTypes: ['looxAPI'],
  endpoints: builder => ({
    getLoox: builder.query({
      query() {
        return `data`;
      },
    }),
  }),
});

export const { useGetLooxQuery } = looxAPI;
