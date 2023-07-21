import { useEffect } from "react";

const baseUrl = "http://localhost:5000"; 

export default function useGet(endpoint, setData) {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`${baseUrl}/${endpoint}`, { signal })
      .then((res) => res.json())
      .then((setData))
  }, []);
  // return () => signal.abort();
}