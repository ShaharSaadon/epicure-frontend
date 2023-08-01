import { Restaurant, Dish } from "../../Assets/data";
import { DekstopCarousel } from "./DekstopCarousel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
interface TabIndicatorProps {
    style: React.CSSProperties;
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
const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            key={index}
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
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
            TabIndicatorProps={{
                children: <TabIndicator />,
            }}
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
        >
            {filters.map((filter, index) => (
                <Tab
                    label={filter}
                    key={index}
                    sx={{
                        maxWidth: "125px",
                        padding: "7px",
                    }}
                />
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
                    <DekstopCarousel data={data} />
                </CustomTabPanel>
            ))}
        </>
    );
};
