export const Fetch = async (url, options) => {
  url = `http://localhost:4000${url}`
  const headers = {
    'Content-Type': 'application/json',
  };
  try {
    const res = await fetch(url, {
      headers,
      method: 'POST',
      ...options
    });

    return Promise.resolve(res.json());
  }
  catch (e) {
    return Promise.reject(e);
  }
};
