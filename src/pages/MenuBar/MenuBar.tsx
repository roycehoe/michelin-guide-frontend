import { NestedMenu, NestedMenuItem } from "@/components/NestedMenu";
import { useFetch } from "@/hooks/use-fetch";
import { MichelinMetadataResponse } from "@/services/getMichelinMetadata";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Sort from "@mui/icons-material/Sort";
import { LinearProgress } from "@mui/material";

import React, { useEffect, useState } from "react";

const PLACEHOLDER_DATA: NestedMenuItem[] = [
  { parent: "one", child: [1, 2, 3, 4, 5] },
  { parent: "two", child: ["awesome", "dogshit"] },
];

export const MenuBar: React.FC = () => {
  const [menuBar, setMenuBar] = useState<MichelinMetadataResponse>([
    null,
  ] as MichelinMetadataResponse);

  // const { getSortData } = useMenuBar();
  const [loading, error, data] = useFetch("michelin_award_sort", "GET");

  useEffect(() => {
    if (data) setMenuBar(data);
  }, [data]);

  // useEffect(() => {
  //   const fetchSortData = async () => {
  //     const data = await getSortData("michelin_award_sort");
  //     if (data) {
  //       setMenuBar(data);
  //     }
  //   };

  //   fetchSortData().catch(console.error);
  // }, []);

  return (
    <div className="menu bg-gray-100 flex justify-end">
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          <div className="menu__filter m-2">
            <NestedMenu
              data={PLACEHOLDER_DATA}
              icon={<KeyboardArrowRightIcon />}
            ></NestedMenu>
          </div>
          <div className="menu__sort m-2 ">
            <NestedMenu data={PLACEHOLDER_DATA} icon={<Sort />}></NestedMenu>
          </div>
        </>
      )}
    </div>
  );
};
