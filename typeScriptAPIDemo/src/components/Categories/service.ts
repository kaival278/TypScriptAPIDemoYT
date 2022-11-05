import * as Joi from 'joi';
import { Types } from 'mongoose';
import CategoriesModel, { ICategoriesModel } from './model';
import CategoriesValidation from './validation';
import { ICategoriesService } from './interface';

/**
 * @export
 * @implements {ICategoriesModelService}
 */
const CategoriesService: ICategoriesService = {
    /**
     * @returns {Promise < ICategoriesModel[] >}
     * @memberof CategoriesService
     */
    async findAll(): Promise < ICategoriesModel[] > {
        try {
            return await CategoriesModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ICategoriesModel >}
     * @memberof CategoriesService
     */
    async findOne(id: string): Promise < ICategoriesModel > {
        try {
            const validate: Joi.ValidationResult = CategoriesValidation.getCategories({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await CategoriesModel.findOne({
                _id: new Types.ObjectId(id),
            });
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {ICategoriesModel} Categories
     * @returns {Promise < ICategoriesModel >}
     * @memberof CategoriesService
     */
    async insert(body: ICategoriesModel): Promise < ICategoriesModel > {
        try {
            const validate: Joi.ValidationResult = CategoriesValidation.createCategories(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const Categories: ICategoriesModel = await CategoriesModel.create(body);

            return Categories;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ICategoriesModel >}
     * @memberof CategoriesService
     */
    async remove(id: string): Promise < ICategoriesModel > {
        try {
            const validate: Joi.ValidationResult = CategoriesValidation.removeCategories({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const Categories: ICategoriesModel = await CategoriesModel.findOneAndRemove({
                _id: new Types.ObjectId(id),
            });

            return Categories;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default CategoriesService;
