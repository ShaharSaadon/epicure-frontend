import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabIndicator } from "./TabIndicator";

interface CustomTabsProps {
    filters: string[];
    handleChange: (event: React.SyntheticEvent, newValue: number) => void;
    value: number;
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
