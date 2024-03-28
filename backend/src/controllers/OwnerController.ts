import { NextFunction, Request, Response } from 'express';
import { OwnerRepository } from '../repositories';
import { OwnerService } from '../service';

export async function createOwner(req: Request, res: Response, next: NextFunction) {
    try {
      const owner = await OwnerRepository.create(req.body);
      res.status(201).send(owner);
    } catch (error) {
      next(error);
  }
}

export async function getAllOwners(req: Request, res: Response, next: NextFunction) {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const { paginatedData, nextPage } = await OwnerService.fetchPaginatedData(page, limit);
        
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
        const owner = await OwnerRepository.findById(req.params.id);
        if (!owner) {
            return res.status(404).send({ message: 'Owner not found' });
        }
        res.status(200).send(owner);
    } catch (error) {
        next(error);
  }
}

export async function updateOwner(req: Request, res: Response, next: NextFunction) {
    try {
        const owner = await OwnerRepository.update(req.params.id, req.body);
        if (!owner) {
            return res.status(404).send({ message: 'Owner not found' });
        }
        res.status(200).send(owner);
    } catch (error) {
        next(error);
  }
}

export async function deleteOwner(req: Request, res: Response, next: NextFunction) {
    try {
        const owner = await OwnerRepository.delete(req.params.id);
        if (!owner) {
            return res.status(404).send({ message: 'Owner not found' });
        }
        res.status(204).send();
    } catch (error) {
        next(error);
  }
}
