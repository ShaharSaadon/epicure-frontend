import React, { ReactNode } from "react";

interface ErrorBoundaryState {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: ReactNode;
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: any): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.error(error, errorInfo);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
