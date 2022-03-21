import React from "react";
import { Header } from "../../ui/Header/Header";
import { Space } from "../../ui/Space/Space";
import { PageContainerStyle } from "./PageContainerStyle";

interface IContainerProps {
  children: React.ReactChild | React.ReactChild[];
}

const PageContainer = ({ children }: IContainerProps) => {
  return (
    <>
      <Header title="Profile" />
      <Space top={80} />
      <PageContainerStyle>{children}</PageContainerStyle>;
    </>
  );
};
export default PageContainer;
