'use client';

import { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch() {
    // Error logging removed for production - error is stored in state for display
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-100 flex items-center justify-center">
          <div className="space-y-4 text-center">
            <AlertTriangle className="text-destructive mx-auto h-12 w-12" />
            <h2 className="text-2xl font-bold">Er is iets misgegaan</h2>
            <p className="text-muted-foreground max-w-md">
              Sorry, er is een fout opgetreden bij het laden van deze sectie.
              Probeer de pagina te vernieuwen.
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Pagina vernieuwen
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
