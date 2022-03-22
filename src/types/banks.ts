export interface IBank {
  name: string;
  slug: string;
  code: string;
  longcode: string;
  gateway: string;
  pay_with_bank: boolean;
  active: boolean;
  is_deleted: boolean;
  country: string;
  currency: string;
  type: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}
export interface IResolvePayload {
  bankCode?: string;
  accountNo: string;
}
export interface IResolvedResponse {
  account_name: string;
  account_number: string;
  bank_id: number;
}
