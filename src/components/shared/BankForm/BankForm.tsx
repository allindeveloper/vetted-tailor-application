import React from "react";
import { Button } from "../../ui/Button/Button";
import { BankFormStyle } from "./BankFormStyle";

export interface IhandleSubmitProps {
  handleSubmit: () => void;
}
const BankForm = ({ handleSubmit }: IhandleSubmitProps) => {
  return (
    <BankFormStyle>
      <Button
        title="Submit Application"
        onClick={handleSubmit}
        id={"submitApplication"}
      />
    </BankFormStyle>
  );
};
export default BankForm;
