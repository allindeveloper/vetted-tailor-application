import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { IListMetaData } from "types/list";
import { IRootResponse } from "types/response";
import AxiosInstance from "../services/AxiosInstance";
import { formatResolveBankAccountUrl } from "../services/banks";
import { IResolvedResponse, IResolvePayload } from "../types/banks";

/**
 * @description Resolve Bank Account
 */

const useResolveAccount = () => {
  const [listMetaData, setlistMetaData] = useState<IListMetaData>({
    isError: false,
    isSearching: false,
  });
  const [resolvedResponse, setresolvedResponse] = useState<IResolvedResponse>();
  const resolveAccount = (payload: IResolvePayload) => {
    setlistMetaData({ isError: false, isSearching: true });
    AxiosInstance.post(formatResolveBankAccountUrl(), payload)
      .then(
        (res: AxiosResponse<{ content: IRootResponse<IResolvedResponse> }>) => {
          const resolvedData = res.data.content.data;
          setresolvedResponse(resolvedData);
        },
      )
      .catch((err: AxiosError) => {
        if (err.response) {
          setlistMetaData({
            errorMessage:
              err.response?.data?.message ?? err.response?.statusText,
            isError: true,
            isSearching: false,
          });
        } else {
          setlistMetaData({
            errorMessage: "Please check your network connection",
            isError: true,
            isSearching: false,
          });
        }
      });
  };

  return {
    resolveAccount,
    resolvedResponse,
    resolvingMetaData: listMetaData,
  };
};

export default useResolveAccount;
