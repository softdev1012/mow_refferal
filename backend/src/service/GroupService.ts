import { GroupRepository, UserGroupRepository } from "../repositories";

export const fetchPaginatedData = async (page: number, limit: number) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    // const groups = await GroupRepository.findAll();
    const groups = await GroupRepository.findAll();

    const paginatedData = groups.slice(startIndex, endIndex);
    const nextPage = endIndex < groups.length ? page + 1 : null;

    return { paginatedData, nextPage };
}

export const fetchPaginatedMembers = async (group_id: string, page: number, limit: number) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const members = await UserGroupRepository.findByGroup(group_id);
    const paginatedData = members.slice(startIndex, endIndex);
    const nextPage = endIndex < members.length ? page + 1 : null;

    return { paginatedData, nextPage };
}
