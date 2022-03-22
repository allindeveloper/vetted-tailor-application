import phonepadicon from "assets/svg/phonepadicon.svg";
import React, { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import useGetBanks from "../../../hooks/useGetBanks";
import useResolveAccount from "../../../hooks/useResolveAccount";
import { IBank } from "../../../types/banks";
import { Button } from "../../ui/Button/Button";
import { CustomInput } from "../../ui/Input/Input";
import { Select } from "../../ui/Select/Select";
import { Space } from "../../ui/Space/Space";
import { BankFormStyle } from "./BankFormStyle";
export interface IhandleSubmitProps {
  handleSubmit: () => void;
}
const BankForm = ({ handleSubmit }: IhandleSubmitProps) => {
  const [accountNumberKeyword, setaccountNumberKeyword] = useState<string>();
  const [accountNumberDataKeyword] = useDebounce(accountNumberKeyword, 700);
  const { fetchBanks, allBanks } = useGetBanks();
  const [selectedBank, setselectedBank] = useState<IBank>();
  const { resolveAccount } = useResolveAccount();
  useEffect(() => {
    fetchBanks();
  }, []);
  useEffect(() => {
    // the search keyword has been changed...
    if (accountNumberDataKeyword && accountNumberDataKeyword?.length === 10) {
      // resolve account
      if (accountNumberKeyword) {
        const payload = {
          bankCode: selectedBank?.code,
          accountNo: accountNumberKeyword,
        };
        resolveAccount(payload);
      }
    }
  }, [accountNumberDataKeyword]);
  const handleSearchInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setaccountNumberKeyword(e.target.value);
    },
    [accountNumberKeyword],
  );

  const onChangeSelect = useCallback(
    (item: IBank) => {
      setselectedBank(item);
    },
    [selectedBank],
  );
  return (
    <BankFormStyle>
      <div className="form">
        <Select
          onClick={onChangeSelect}
          labelText="Bank Name"
          items={allBanks}
          selectedBank={selectedBank}
        />

        <CustomInput
          startIcon={phonepadicon}
          placeholder="Please input your account number"
          name={"accountNumber"}
          id={"accountNumber"}
          labelText="Account Number"
          value={accountNumberKeyword}
          onChange={handleSearchInputChange}
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
