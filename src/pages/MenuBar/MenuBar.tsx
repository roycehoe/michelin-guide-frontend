import BasicSelect from "@/components/DropdownSelection";
import { useFetch } from "@/hooks/use-fetch";
import { MichelinMetadataResponse } from "@/services/getMichelinMetadata";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, LinearProgress, Tab, Tabs, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";

const PLACEHOLDER_DATA: NestedMenuItem[] = [
  { parent: "one", child: [1, 2, 3, 4, 5] },
  { parent: "two", child: ["awesome", "dogshit"] },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const MenuBar: React.FC = () => {
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

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Filter" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BasicSelect></BasicSelect>
      </TabPanel>
    </Box>
  );
};
