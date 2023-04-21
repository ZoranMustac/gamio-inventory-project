import { Status, ItemStatus } from "./status";

export const correctTag = (status: ItemStatus) => {
  switch (status) {
    case Status.claimed:
      return "claimed";
    case Status.owned:
      return "owned";
    case Status.shipped:
      return "shipped";
    case Status.used:
      return "used";
  }
};
