import { NextFunction, Request, Response } from 'express';

import { UserRepository } from '../repositories';
import { UserService } from '../service';

export async function createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserRepository.create(req.body);
      res.status(201).send(user);
    } catch (error) {
      next(error);
  }
}

export async function getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const { paginatedData, nextPage } = await UserService.fetchPaginatedData(page, limit);
        
        res.status(200).send({
          data: paginatedData,
          pageNumber: nextPage
        });
    } catch (error) {
        next(error);
  }
}

export async function getUser(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await UserRepository.findById(req.params.id);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        next(error);
  }
}

export async function updateUser(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await UserRepository.update(req.params.id, req.body);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        next(error);
  }
}

export async function deleteUser(req: Request, res: Response, next: NextFunction) {
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

export async function totalUser(req: Request, res: Response, next: NextFunction) {
    
    try {
        const total = await UserRepository.count();
        const totalActive = await UserRepository.count({profileStatus: true});
        const totalInactive = await UserRepository.count({profileStatus: false});
        const result = {
            total: total.toString(),
            totalActive: totalActive.toString(),
            totalInactive: totalInactive.toString(),
        };
        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
}
