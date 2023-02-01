import { FilterAlt } from "@mui/icons-material";
import Sort from "@mui/icons-material/Sort";
import { Button } from "@mui/material";

import React from "react";

export const MenuBar: React.FC = () => {
  // const [menuBar, setMenuBar] = useState<MichelinMetadataResponse>([
  //   null,
  // ] as MichelinMetadataResponse);

  // const { getSortData } = useMenuBar();

  // useEffect(() => {
  //   const fetchSortData = async () => {
  //     const data = await getSortData("coordinates");
  //     if (data) {
  //       setMenuBar(data);
  //     }
  //   };

  //   console.log(menuBar);
  //   fetchSortData().catch(console.error);
  // }, []);

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
  const handleFilterClick = () => {
    console.log("Filter click handled");
  };
  const handleSortClick = () => {
    console.log("Sort click handled");
  };

  return (
    <div className="menu bg-gray-100 flex justify-end">
      <div className="menu__filter m-2">
        <Button variant="outlined" className="">
          <FilterAlt onClick={handleFilterClick}></FilterAlt>
        </Button>
      </div>
      <div className="menu__sort m-2 ">
        <Button variant="outlined">
          <Sort onClick={handleSortClick}></Sort>
        </Button>
      </div>
    </div>
  );
};
