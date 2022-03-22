import { api } from "constants/appConstants";

export const formatBanksUrl = () => {
  const finalUrl = `${api.BANK}/${api.BANKS}`;
  return finalUrl;
};

export const formatResolveBankAccountUrl = () => {
  const finalUrl = `${api.BANK}/${api.RESOLVE_ACCOUNT}`;
  return finalUrl;
};
