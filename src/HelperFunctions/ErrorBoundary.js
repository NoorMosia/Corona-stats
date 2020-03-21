import React from "react";

import ErrorMessage from "../UI/Error/Error";

class ErrorBoundary extends React.Component {
    state = { hasError: false };

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <ErrorMessage />;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;