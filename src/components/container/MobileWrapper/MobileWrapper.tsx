import React from "react";
import ScrollToTop from "../../shared/Scroll/ScrollToTop";
import { Header, IHeaderProps } from "../../ui/Header/Header";
import { MobileContainerStyle } from "./MobileContainerStyle";

interface IMobileContainerProps extends IHeaderProps {
  children: React.ReactChild | React.ReactChild[];
  handleGoBack?: () => void;
}

const MobileWrapper = ({
  children,
  handleGoBack,
  showBackButton,
  title,
}: IMobileContainerProps) => {
  return (
    <>
      <ScrollToTop />

      <Header
        showBackButton={showBackButton}
        handleGoBack={handleGoBack}
        title={title}
      />
      <MobileContainerStyle>{children}</MobileContainerStyle>
    </>
  );
};
export default MobileWrapper;
