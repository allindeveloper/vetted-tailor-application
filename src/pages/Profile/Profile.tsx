import PageContainer from "components/container/PageContainer/PageContainer";
import DetailsContent from "components/shared/DetailsContent/DetailsContent";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/ui/Card/Card";
import { Space } from "../../components/ui/Space/Space";
import { Tabs } from "../../components/ui/Tabs/Tabs";

const Profile = () => {
  const navigate = useNavigate();

  const [selected, setselected] = useState<"left" | "right">("left");
  const handleLeftTabClick = () => {
    setselected("left");
  };

  const handleRightTabClick = () => {
    setselected("right");
  };
  const handleApply = () => {
    // a valid id of the user would be passed here in a real world application;
    const id = "test-id";
    navigate(`/view/${id}`);
  };
  return (
    <PageContainer title="Profile">
      <Card customTopContent={<DetailsContent handleApply={handleApply} />} />
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
