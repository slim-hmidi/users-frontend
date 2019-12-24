import React from "react";

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: any) {
    return {
      hasError: true,
      error
    };
  }

  render() {
    if (this.state.hasError) {
      return (<div>
        <img src="https://i.imgur.com/qIufhof.png" alt="broken_page" />
      </div>
      )
    }

    return this.props.children;
  }
}