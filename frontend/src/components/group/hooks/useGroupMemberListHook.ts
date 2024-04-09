import {
    useSuspenseQuery,
  } from "@tanstack/react-query";
  import { fetchGroups } from "../../../services/GroupService";
  import { IPaginatedGroups } from "../../../types/group";
  
  const useGroupListHook = (page: number = 1) => {
        const queryKey = ["getAllGroupMembers", page];
        return useSuspenseQuery({
            queryKey,
            queryFn: async (): Promise<IPaginatedGroups> =>
            await fetchGroups(page),
        });
    }
  
  export default useGroupListHook;
  