import phonepadicon from "assets/svg/phonepadicon.svg";
import React from "react";
import { Button } from "../../ui/Button/Button";
import { CustomInput } from "../../ui/Input/Input";
import { Select } from "../../ui/Select/Select";
import { Space } from "../../ui/Space/Space";
import { BankFormStyle } from "./BankFormStyle";
export interface IhandleSubmitProps {
  handleSubmit: () => void;
}
const BankForm = ({ handleSubmit }: IhandleSubmitProps) => {
  return (
    <BankFormStyle>
      <div className="form">
        <Select />

        <CustomInput
          startIcon={phonepadicon}
          placeholder="Please input your account number"
          name={"accountNumber"}
          id={"accountNumber"}
        />
      </div>

      <Space top={40} />
      <div className="submitDiv">
        <Button
          title="Submit Application"
          onClick={handleSubmit}
          id={"submitApplication"}
        />
      </div>
    </BankFormStyle>
  );
};
export default BankForm;
