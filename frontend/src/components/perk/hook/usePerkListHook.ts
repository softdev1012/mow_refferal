import {
  useSuspenseQuery,
} from "@tanstack/react-query";
import { fetchPerks } from "../../../services/PerkService";
import { IPerk } from "../../../types/perk";

const usePerkListHook = (userId: string = "") => {
  if (userId === null || userId === "") return {data: []};
  const queryKey = ["getAllPerks", userId];
  return useSuspenseQuery({
      queryKey,
      queryFn: async (): Promise<IPerk[]> =>
        await fetchPerks(userId),
    });
  }
export default usePerkListHook;
