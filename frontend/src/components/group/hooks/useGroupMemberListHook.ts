import {
    useQuery,
  } from "@tanstack/react-query";
  import { fetchGroupMembers } from "../../../services/GroupService";
  import { IPaginatedGroupMembers } from "../../../types/group";
  
  const useGroupMemberListHook = (group_id: string, page: number = 1) => {
        const queryKey = ["getAllGroupMembers", group_id, page];
        return useQuery({
            queryKey,
            queryFn: async (): Promise<IPaginatedGroupMembers> =>
            await fetchGroupMembers(group_id, page),
        });
    }
  
  export default useGroupMemberListHook;
  