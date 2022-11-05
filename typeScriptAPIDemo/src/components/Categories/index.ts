import { NextFunction, Request, Response } from 'express';
import CategoriesService from './service';
import { HttpError } from '../../config/error';
import { ICategoriesModel } from './model';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const Categoriess: ICategoriesModel[] = await CategoriesService.findAll();

        res.status(200).json(Categoriess);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findOne(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const Categories: ICategoriesModel = await CategoriesService.findOne(req.params.id);

        res.status(200).json(Categories);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function create(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const Categories: ICategoriesModel = await CategoriesService.insert(req.body);

        res.status(201).json(Categories);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function remove(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const Categories: ICategoriesModel = await CategoriesService.remove(req.params.id);

        res.status(200).json(Categories);
    } catch (error) {
        next(new HttpError(error.message.status, error.message));
    }
}
