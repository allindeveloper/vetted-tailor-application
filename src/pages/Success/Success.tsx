import successicon from "assets/svg/successicon.svg";
import MobileWrapper from "components/container/MobileWrapper/MobileWrapper";
import { Card } from "components/ui/Card/Card";
import React from "react";
import { Button } from "../../components/ui/Button/Button";
import { Space } from "../../components/ui/Space/Space";
import { SuccessStyle } from "./SuccessStyle";
const Success = () => {
  return (
    <MobileWrapper title="Application Successful">
      <Card
        showImage={false}
        customContent={
          <SuccessStyle>
            <img src={successicon} alt="success icon" />
            <p className="yay">Yay!!! 🎉</p>
            <p>
              Your application to become a vetted tailor has been sent, a Fitted
              Agent will get in touch with you regard the next steps. Goodluck!
            </p>
            <Space top={70} />

            <Button title="Return to Dashboard" id={"return"} />
          </SuccessStyle>
        }
      />
    </MobileWrapper>
  );
};
export default Success;
