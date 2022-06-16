import React, { ReactElement } from 'react';

interface BlankErrorBoundaryProps {
  children?: ReactElement | ReactElement[] | undefined;
}
interface BlankErrorBoundaryStates {
  hasError: boolean;
}

class BlankErrorBoundary extends React.Component<
  BlankErrorBoundaryProps,
  BlankErrorBoundaryStates
> {
  constructor(props: BlankErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // 다음 렌더링에서 폴백 UI가 보이도록 상태를 업데이트 합니다.
    return { hasError: true };
  }

  //componentDidCatch(error: Error, errorInfo: any) {}

  render() {
    if (this.state.hasError) {
      // 폴백 UI를 커스텀하여 렌더링할 수 있습니다.
      return null;
    }

    return this.props.children;
  }
}

export { BlankErrorBoundary };
