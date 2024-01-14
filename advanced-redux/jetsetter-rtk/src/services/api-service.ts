import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemApi = createApi({
  reducerPath: 'itemsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => {
    return {
      getItems: builder.query<Item[], void>({
        query: () => 'items',
      }),
    };
  },
});
