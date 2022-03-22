import MobileWrapper from "components/container/MobileWrapper/MobileWrapper";
import DetailsContent from "components/shared/DetailsContent/DetailsContent";
import { Card } from "components/ui/Card/Card";
import { Space } from "components/ui/Space/Space";
import { Tabs } from "components/ui/Tabs/Tabs";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <MobileWrapper showBackButton={false} title="Profile">
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
    </MobileWrapper>
  );
};
export default Profile;
