import { MichelinMetadataResponse } from "@/services/getMichelinMetadata";
import React, { useEffect, useState } from "react";

import { useMenuBar } from "./useMenuBar";

export const MenuBar: React.FC = () => {
  const [menuBar, setMenuBar] = useState<MichelinMetadataResponse>([
    null,
  ] as MichelinMetadataResponse);

  const { getSortData } = useMenuBar();

  useEffect(() => {
    const fetchSortData = async () => {
      const data = await getSortData("coordinates");
      if (data) {
        setMenuBar(data);
      }
    };

    console.log(menuBar);
    fetchSortData().catch(console.error);
  }, []);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await DEFAULT_SORTS.map(async (sort) => {
  //       const sortData = await prop.getSortData(sort)
  //       console.log(sortData)
  //       return sortData
  //     })
  //     setMenuBar(data);
  //   };

  //   fetchData().catch(console.error);
  //   console.log(menuBar);
  // }, []);

  return <div className="bg-red-300">HELLO</div>;
};
