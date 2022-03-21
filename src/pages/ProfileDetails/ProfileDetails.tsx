import PageContainer from "components/container/PageContainer/PageContainer";
import React from "react";
import { useNavigate } from "react-router-dom";
import BankForm from "../../components/shared/BankForm/BankForm";
import UserDetails from "../../components/shared/UserDetails/UserDetails";
import { Card } from "../../components/ui/Card/Card";
import { Space } from "../../components/ui/Space/Space";

const ProfileDetails = () => {
  const navigate = useNavigate();

  const submitApplication = () => {
    navigate(`/success`);
  };
  return (
    <PageContainer title="Vetted Tailor Application">
      <Card
        title={"Vetted Tailor Application"}
        customTopContent={<UserDetails />}
      />
      <Space top={20} />
      <Card
        showImage={false}
        customContent={<BankForm handleSubmit={submitApplication} />}
      />
    </PageContainer>
  );
};
export default ProfileDetails;
