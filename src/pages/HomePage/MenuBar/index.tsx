import DropdownSelection from "@/components/DropdownSelection";
import DropdownSelectionWithButton from "@/components/DropdownSelectionWithButton";
import {
  FILTER_BY_MICHELIN_RATING_SELECTION,
  FILTER_BY_PRICE_SELECTION,
  SORT_BY_PRICE_SELECTION,
} from "@/constants/forms";
import { useFetch } from "@/hooks/use-fetch";
import {
  ANOTHER_DEFAULT_GET_ALL_MICHELIN_DATA_REQUEST,
  getMichelinDataResponse,
  MichelinDataRequest,
  MichelinDataResponse,
} from "@/services/getMichelinData";
import { MichelinMetadataResponse } from "@/services/getMichelinMetadata";

import {
  Box,
  Button,
  LinearProgress,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="my-4"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function getTabProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const MenuBar: React.FC = (props: {
  setRestaurants: CallableFunction;
}) => {
  const [menuBar, setMenuBar] = useState<MichelinMetadataResponse>([
    null,
  ] as MichelinMetadataResponse);

  const [loading, error, data] = useFetch("michelin_award_sort", "GET");
  useEffect(() => {
    if (data) setMenuBar(data);
  }, [data]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  async function updateMichelinPage(filterRequest: MichelinDataRequest) {
    const response = await getMichelinDataResponse(filterRequest);
    props.setRestaurants(response as MichelinDataResponse[]);
  }

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Filter" {...getTabProps(0)} />
          <Tab label="Sort" {...getTabProps(1)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <DropdownSelection
          filterMichelinPage={updateMichelinPage}
          data={FILTER_BY_PRICE_SELECTION}
        ></DropdownSelection>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DropdownSelectionWithButton
          sortMichelinPage={updateMichelinPage}
          data={SORT_BY_PRICE_SELECTION}
        ></DropdownSelectionWithButton>
      </TabPanel>
    </Box>
  );
};
