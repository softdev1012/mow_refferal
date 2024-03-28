import { UserRepository } from "../repositories";

export const fetchPaginatedData = async (page: number, limit: number) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const users = await UserRepository.findAll();

    const paginatedData = users.slice(startIndex, endIndex);
    const nextPage = endIndex < users.length ? page + 1 : null;

    return { paginatedData, nextPage };
}
