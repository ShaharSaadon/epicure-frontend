import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DynamicRestaurants } from "../../Components/Restaurants/DynamicRestaurants.tsx";
import { DekstopCarousel } from "../../Components/HomePage/DekstopCarousel";
import { Restaurant, Dish } from "../../Assets/data.ts";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface CustomTabsProps {
    filters: string[];
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
    value: number;
}

interface CustomTabPanelsProps {
    filters: string[];
    value: number;
    data: (Dish | Restaurant)[];
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

function CustomTabPanel(props: TabPanelProps) {
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
                    <div>{children}</div> // Change Typography to div
                </Box>
            )}
        </div>
    );
}

export const CustomTabs: React.FC<CustomTabsProps> = ({
    value,
    handleChange,
    filters,
}) => {
    return (
        <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
        >
            {filters.map((filter, index) => (
                <Tab label={filter} {...a11yProps(index)} key={index} />
            ))}
        </Tabs>
    );
};

export const CustomTabPanels: React.FC<CustomTabPanelsProps> = ({
    value,
    filters,
    data,
}) => {
    return (
        <>
            {filters.map((filter, index) => (
                <CustomTabPanel value={value} index={index} key={index}>
                    <DynamicRestaurants filter={filter} />
                    <DekstopCarousel data={data} />
                </CustomTabPanel>
            ))}
        </>
    );
};
