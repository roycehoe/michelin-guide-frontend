/* eslint-disable react-hooks/exhaustive-deps */
import axios from "@/axios";
import { Method } from "axios";
import { useEffect, useState } from "react";

/**
 * https://github.com/ali-master/react-typescript-hooks-sample
 */
const useFetch = (
  url: string,
  method: Method,
  body = {}
): [boolean, string | null, any] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios({
          url: url,
          method: method,
          data: body,
        });
        const data = response?.data;
        setData(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData().then((r) => r);
  }, [url]);

  return [loading, error, data];
};

export { useFetch };
