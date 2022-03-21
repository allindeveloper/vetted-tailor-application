import React from "react";
import { Header, IHeaderProps } from "../../ui/Header/Header";
import { Space } from "../../ui/Space/Space";
import { PageContainerStyle } from "./PageContainerStyle";

interface IContainerProps extends IHeaderProps {
  children: React.ReactChild | React.ReactChild[];
  handleGoBack?: () => void;
}

const PageContainer = ({ children, handleGoBack, title }: IContainerProps) => {
  return (
    <>
      <Header handleGoBack={handleGoBack} title={title} />
      <Space top={80} />
      <PageContainerStyle>{children}</PageContainerStyle>;
    </>
  );
};
export default PageContainer;
