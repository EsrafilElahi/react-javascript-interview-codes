// error boundary like problem in internet

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info);
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return this.setState({ hasError: true })
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>{"Something went wrong Erorr"}</h1>;
        }
        return this.props.children;
    }
}