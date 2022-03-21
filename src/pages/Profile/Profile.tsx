import PageContainer from "components/container/PageContainer/PageContainer";
import React from "react";
import { Card } from "../../components/ui/Card/Card";
import { Space } from "../../components/ui/Space/Space";

const Profile = () => {
  return (
    <PageContainer>
      <Card title={"Vetter Tailor Application"} />
      <Space top={20} />
      <Card showImage={false} />
    </PageContainer>
  );
};
export default Profile;
