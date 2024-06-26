import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children: React.ReactNode;
  dir?: string;
  index?: number;
  value?: number;
}
const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2.1}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
};
export default TabPanel;
