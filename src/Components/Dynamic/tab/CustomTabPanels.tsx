import { Restaurant, Dish } from "../../../Services/link.service";
import { DekstopCarousel } from "../DekstopCarousel";
import { CustomTabPanel } from "./CustomTablPanel";

interface CustomTabPanelsProps {
    filters: string[];
    value: number;
    data: (Dish | Restaurant)[];
}

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
