const useFetchNew = async (url, options = {}) => {
  // You can pass additional options like headers and authorization token
  const defaultOptions = {
    method: "GET",
    headers: {
      lang: "en",
      "Content-Type": "application/json",
      // Add your authorization token here
      Authorization: `b676yF4HQTAGtP9bYNM2kjAw3VZ6vd63Ar7dr7jQvhISokVKIK5K3Emr4tiPctOBgBlZhV`,
    },
    ...options, // Merge with any custom options passed to the function
  };

  const res = await fetch(url, defaultOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
};

export default useFetchNew;
