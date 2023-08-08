import { useEffect } from "react";

const baseUrl = "http://localhost:5000";

export default function usePost(endpoint, data, setData) {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${baseUrl}/${endpoint}`, {
      signal,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((setData))
      .catch((err) => console.error(err))
    return () => signal.abort();
  }, []);
}