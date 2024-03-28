import { GroupRepository } from "../repositories";

export const fetchPaginatedData = async (page: number, limit: number) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const groups = await GroupRepository.findAll();

    const paginatedData = groups.slice(startIndex, endIndex);
    const nextPage = endIndex < groups.length ? page + 1 : null;

    return { paginatedData, nextPage };
}
