import {
  useSuspenseQuery,
} from "@tanstack/react-query";
import { fetchGroupMembers } from "../../../services/GroupService";
import { IMember } from "../../../types/group";

const useGroupListHook = (group_id: string, cate: string) => useSuspenseQuery({
      queryKey: ["getAllSeatList"],
      queryFn: async (): Promise<IMember[]> =>
        await fetchGroupMembers(group_id, cate)
    });

export default useGroupListHook;
