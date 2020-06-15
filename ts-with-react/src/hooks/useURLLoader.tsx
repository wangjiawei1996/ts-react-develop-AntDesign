import { useState, useEffect } from "react";
import axios from "axios";

const useURLLoader = (url: string, deps: any[] = []) => {
  const [data, setdata] = useState<any>(null);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axios.get(url).then((result) => {
      setdata(result.data);
      setloading(false);
    });
  }, deps);
  return [data, loading];
};

export default useURLLoader;
