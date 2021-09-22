import { ErrorIndicator } from 'components/error-indicator';
import React, { Component, ErrorInfo } from 'react';
import { PropsErrorBoundary, StateErrorBoundary } from './types';

export class ErrorBoundary extends Component<
  PropsErrorBoundary,
  StateErrorBoundary
> {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true });
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorIndicator />;
    }

    return children;
  }
}
