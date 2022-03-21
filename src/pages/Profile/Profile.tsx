import PageContainer from "components/container/PageContainer/PageContainer";
import React, { useState } from "react";
import { Card } from "../../components/ui/Card/Card";
import { Space } from "../../components/ui/Space/Space";
import { Tabs } from "../../components/ui/Tabs/Tabs";

const Profile = () => {
  const [selected, setselected] = useState<"left" | "right">("left");
  const handleLeftTabClick = () => {
    setselected("left");
  };

  const handleRightTabClick = () => {
    setselected("right");
  };
  return (
    <PageContainer>
      <Card title={"Vetter Tailor Application"} />
      <Space top={20} />
      <Card
        showImage={false}
        customContent={
          <Tabs
            rightTitle="Billing Address"
            leftTitle="Transaction History"
            selected={selected}
            handleLeftTabClick={handleLeftTabClick}
            handleRightTabClick={handleRightTabClick}
            leftComponent={<>All Transactions</>}
            rightComponent={<>All Billing Address</>}
          />
        }
      />
    </PageContainer>
  );
};
export default Profile;
