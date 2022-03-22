import { AxiosError, AxiosResponse } from "axios";
import { useState } from "react";
import { IListMetaData } from "types/list";
import { IRootResponse } from "types/response";
import AxiosInstance from "../services/AxiosInstance";
import { formatBanksUrl } from "../services/banks";
import { IBank } from "../types/banks";

/**
 * @description Get All Banks
 */

const useGetBanks = () => {
  const [listMetaData, setlistMetaData] = useState<IListMetaData>({
    isError: false,
    isSearching: false,
  });
  const [allBanks, setallBanks] = useState<IBank[]>([]);

  const fetchBanks = () => {
    setlistMetaData({ isError: false, isSearching: true });
    AxiosInstance.get(formatBanksUrl())
      .then((res: AxiosResponse<IRootResponse<IBank[]>>) => {
        const banksData = res.data.data;
        if (banksData.length > 0) {
          setallBanks(banksData);
          setlistMetaData({ isError: false, isSearching: false });
        } else {
          setallBanks([]);
          setlistMetaData({
            isError: true,
            isSearching: false,
            errorMessage: "No results found",
          });
        }
      })
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
    fetchBanks,
    allBanks,
    listMetaData,
  };
};

export default useGetBanks;
