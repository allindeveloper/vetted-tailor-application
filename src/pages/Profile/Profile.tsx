import PageContainer from "components/container/PageContainer/PageContainer";
import React, { useState } from "react";
import DetailsContent from "../../components/shared/DetailsContent/DetailsContent";
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
    <PageContainer title="Profile">
      <Card
        title={"Vetter Tailor Application"}
        customTopContent={<DetailsContent />}
      />
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
