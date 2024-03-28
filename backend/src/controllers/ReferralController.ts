import { NextFunction, Request, Response } from 'express';
import ReferralRepository from '../repositories/ReferralRepository';
import { ReferralService } from '../service';


export async function createReferral(req: Request, res: Response, next: NextFunction) {
    try {
      const referral = await ReferralRepository.create(req.body);
      res.status(201).send(referral);
    } catch (error) {
      next(error);
  }
}

export async function getAllReferrals(req: Request, res: Response, next: NextFunction) {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        const { paginatedData, nextPage } = await ReferralService.fetchPaginatedData(page, limit);
        
        res.status(200).send({
          data: paginatedData,
          pageNumber: nextPage
        });
    } catch (error) {
        next(error);
  }
}

export async function getReferral(req: Request, res: Response, next: NextFunction) {
    try {
        const referral = await ReferralRepository.findById(req.params.id);
        if (!referral) {
            return res.status(404).send({ message: 'Referral not found' });
        }
        res.status(200).send(referral);
    } catch (error) {
        next(error);
  }
}

export async function updateReferral(req: Request, res: Response, next: NextFunction) {
    try {
        const referral = await ReferralRepository.update(req.params.id, req.body);
        if (!referral) {
            return res.status(404).send({ message: 'Referral not found' });
        }
        res.status(200).send(referral);
    } catch (error) {
        next(error);
  }
}

export async function deleteReferral(req: Request, res: Response, next: NextFunction) {
    try {
        const referral = await ReferralRepository.delete(req.params.id);
        if (!referral) {
            return res.status(404).send({ message: 'Referral not found' });
        }
        res.status(204).send();
    } catch (error) {
        next(error);
  }
}
