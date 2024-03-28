import { NextFunction, Request, Response } from 'express';
import { GroupRepository, UserGroupRepository, UserRepository } from '../repositories';
import { GroupService } from '../service';

export async function createGroup(req: Request, res: Response, next: NextFunction) {
    try {
        // Create a new group
        const group = await GroupRepository.create(req.body);

        // Associate the group with the user
        const userId = req.body.user_id;
        if (!userId || !group?._id) {
            throw new Error('User ID or Group ID is missing');
        }

        await UserGroupRepository.create({ group_id: group._id.toString(), user_id: userId });

        // Send response
        res.status(201).json(group);
    } catch (error) {
        // Pass the error to the error handling middleware
        next(error);
    }
}

export async function getAllGroups(req: Request, res: Response, next: NextFunction) {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const { paginatedData, nextPage } = await GroupService.fetchPaginatedData(page, limit);
        
        res.status(200).send({
            data: paginatedData,
            pageNumber: nextPage
        });
    } catch (error) {
        next(error);
    }
}

export async function getGroup(req: Request, res: Response, next: NextFunction) {
    try {
        const group = await GroupRepository.findById(req.params.id);
        if (!group) {
            return res.status(404).send({ message: 'Group not found' });
        }
        res.status(200).send(group);
    } catch (error) {
        next(error);
    }
}

export async function updateGroup(req: Request, res: Response, next: NextFunction) {
    try {
        const group = await GroupRepository.update(req.params.id, req.body);
        if (!group) {
            return res.status(404).send({ message: 'Group not found' });
        }
        res.status(200).send(group);
    } catch (error) {
        next(error);
    }
}

export async function deleteGroup(req: Request, res: Response, next: NextFunction) {
    try {
        const group = await GroupRepository.delete(req.params.id);
        if (!group) {
            return res.status(404).send({ message: 'Group not found' });
        }
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}

export async function addUserToGroup(req: Request, res: Response, next: NextFunction) {
    try {
        const { userId, groupId } = req.body;

        // Check if the user and group exist
        const userExists = await UserRepository.findById(userId);
        const groupExists = await GroupRepository.findById(groupId);

        if (!userExists || !groupExists) {
            return res.status(404).json({ message: 'User or Group not found' });
        }

        // Create user-group association
        const userGroup = await UserGroupRepository.create({ group_id:groupId, user_id: userId });

        res.status(201).json(userGroup);
    } catch (error) {
        next(error);
    }
}

export async function removeUserFromGroup(req: Request, res: Response, next: NextFunction) {
    try {
        const { userId, groupId } = req.body;

        // Remove user-group association
        await UserGroupRepository.deleteByUserAndGroup(userId, groupId);

        res.status(204).send();
    } catch (error) {
        next(error);
    }
}
