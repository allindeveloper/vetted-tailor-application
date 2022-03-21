import React from "react";
import { Header } from "../../ui/Header/Header";
import { PageContainerStyle } from "./PageContainerStyle";

interface IContainerProps {
  children: React.ReactChild | React.ReactChild[];
}

const PageContainer = ({ children }: IContainerProps) => {
  return (
    <>
      <Header title="Profile" />
      <PageContainerStyle>{children}</PageContainerStyle>;
    </>
  );
};
export default PageContainer;
