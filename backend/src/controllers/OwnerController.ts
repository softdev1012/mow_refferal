import { NextFunction, Request, Response } from 'express';
import { OwnerRepository, UserGroupRepository, UserRepository } from '../repositories';
import { OwnerService, UserService } from '../service';

export async function createOwner(req: Request, res: Response, next: NextFunction) {
    try {  
        req.body.isOwner = true;
      const user = await UserRepository.create(req.body);
      if (user && req.body.group) {
        const data = {
            group_id: req.body.group,
            clanStatus: req.body.clanStatus,
            seat: req.body.seat,
            user_id: user._id
        }
        await UserGroupRepository.deleteByUser(user._id)
        await UserGroupRepository.create(data);
      }
      res.status(201).send(user);
    } catch (error) {
        next(error);
    }
}

export async function getAllOwners(req: Request, res: Response, next: NextFunction) {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const { paginatedData, nextPage } = await UserService.fetchPaginatedData(page, limit, true);
        
        res.status(200).send({
          data: paginatedData,
          pageNumber: nextPage
        });
    } catch (error) {
        next(error);
  }
}

export async function getOwner(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await UserRepository.findById(req.params.id);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        if (!user._id) {
            return res.status(404).send({ message: 'User not found' });
        }
        const ugroup = await UserGroupRepository.findOneByUser(user._id);
        if (ugroup) {
            res.status(200).send({...ugroup, group: ugroup.group_id, ...user});
        } else {
            res.status(200).send(user);
        }
    } catch (error) {
        next(error);
    }
}

export async function updateOwner(req: Request, res: Response, next: NextFunction) {
    try {
        req.body.isOwner = true;
        const user = await UserRepository.update(req.params.id, req.body);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        if (user && req.body.group) {
            
            const data = {
                group_id: req.body.group,
                clanStatus: req.body.clanStatus,
                seat: req.body.seat,
                user_id: user._id
            }
            await UserGroupRepository.deleteByUser(user._id)
            const ugroup = await UserGroupRepository.create(data);    
          }
        res.status(200).send(user);
    } catch (error) {
        next(error);
  }
}

export async function deleteOwner(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await UserRepository.delete(req.params.id);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(204).send();
    } catch (error) {
        next(error);
    }
}
