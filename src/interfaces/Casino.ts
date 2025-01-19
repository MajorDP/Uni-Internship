export interface ICasinoDetails {
  onlineSince: number;
  foundedDate: number;
  license: string;
  website: string;
}

export interface IPayments {
  minDeposit: number;
  minWithdrawal: number;
  maxWithdrawal: number;
  wager: number;
}

export interface ICasino {
  img: string;
  name: string;
  rating: number;
  sponsors: string[];
  welcomeBonus: string;
  casinodetails: ICasinoDetails;
  payments: IPayments;
  pros: string[];
  cons: string[];
}
