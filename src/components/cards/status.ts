export enum Status {
  claimed = "claimed",
  owned = "owned",
  used = "used",
  shipped = "shipped",
}

export type ItemStatus =
  | Status.claimed
  | Status.owned
  | Status.shipped
  | Status.used;
