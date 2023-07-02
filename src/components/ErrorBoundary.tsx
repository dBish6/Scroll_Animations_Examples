import { Component } from "react";
import Loading from "./loading";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error);
    console.warn(
      "The application fell into a error state, client was refreshed."
    );
  }

  render() {
    if (this.state.hasError) {
      window.location.reload();
      return <Loading />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
