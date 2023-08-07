interface TabIndicatorProps {
    style: React.CSSProperties;
}

export const TabIndicator = (props: TabIndicatorProps) => {
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
