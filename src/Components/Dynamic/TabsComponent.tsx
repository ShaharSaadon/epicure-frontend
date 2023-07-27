import { Restaurant, Dish } from "../../Assets/data.ts";
import { TabIndicatorProps } from "@mui/material/Tabs";
import { DynamicRestaurants } from "../Restaurants/DynamicRestaurants.tsx";
import { DekstopCarousel } from "./DekstopCarousel.tsx";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

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

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
};

const CustomTabPanel = (props: TabPanelProps) => {
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
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
};

const TabIndicator = (props: TabIndicatorProps) => {
    return (
        <span
            {...props}
            className="custom-tab-indicator"
            style={{
                width: "100%",
                height: 2,
                backgroundColor: "yellow !important",
                borderRadius: 4,
                margin: "0 20px",
                ...props.style,
            }}
        />
    );
};
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
            TabIndicatorProps={{
                children: <TabIndicator />,
            }}
            indicatorColor="secondary"
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
