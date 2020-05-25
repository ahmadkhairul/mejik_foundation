export const storage = client => {
  const data = client.store.cache.data.data.ROOT_QUERY;
  return data;
};
