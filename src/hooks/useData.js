import axios from "axios";
import { useEffect, useState } from "react";

export const useData = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      setdata(data.results);
    }
    console.log("prueba");
    fetchData();
  }, []);

  return {
    data,
  };
};
