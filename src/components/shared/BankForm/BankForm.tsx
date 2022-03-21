import React from "react";
import { Button } from "../../ui/Button/Button";
import { CustomInput } from "../../ui/Input/Input";
import { BankFormStyle } from "./BankFormStyle";

export interface IhandleSubmitProps {
  handleSubmit: () => void;
}
const BankForm = ({ handleSubmit }: IhandleSubmitProps) => {
  return (
    <BankFormStyle>
      <div className="form">
        <CustomInput
          placeholder="Please select your bank"
          name={"bank"}
          id={"bank"}
        />

        <CustomInput
          placeholder="Please input your account number"
          name={"accountNumber"}
          id={"accountNumber"}
        />
      </div>
      <Button
        title="Submit Application"
        onClick={handleSubmit}
        id={"submitApplication"}
      />
    </BankFormStyle>
  );
};
export default BankForm;
