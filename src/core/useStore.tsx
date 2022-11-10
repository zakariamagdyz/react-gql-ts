import { useContext } from "react";
import { StoreContext } from "./store";

export default function useStore() {
  return useContext(StoreContext)!;
}
