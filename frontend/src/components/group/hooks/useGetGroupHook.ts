import { useQuery } from "@tanstack/react-query"
import { getGroup } from "../../../services/GroupService"

const useGetGroupHook = (_id: string, isEdit: boolean) =>  {
    return useQuery({
        queryKey: ['projects', isEdit],
        queryFn: async () => await getGroup(_id),
        enabled: !!isEdit
      });
}

export default useGetGroupHook;