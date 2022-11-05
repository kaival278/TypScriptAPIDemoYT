import * as Joi from 'joi';
import Validation from '../validation';
import { ICategoriesModel } from './model';

/**
 * @export
 * @class CategoriesValidation
 * @extends Validation
 */
class CategoriesValidation extends Validation {
    /**
     * Creates an instance of CategoriesValidation.
     * @memberof CategoriesValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {ICategoriesModel} params
     * @returns {Joi.ValidationResult}
     * @memberof CategoriesValidation
     */
    createCategories(
        params: ICategoriesModel,
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            // We need to declare all of the properties here with joi.
            CategoryID:Joi.number(),
            CategoryName:Joi.string(),
            Description:Joi.string(),
            Picture:Joi.string(),
        });

        return schema.validate(params);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof CategoriesValidation
     */
    getCategories(
        body: {
            id: string
        },
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });

        return schema.validate(body);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof CategoriesValidation
     */
    removeCategories(
        body: {
            id: string
        },
    ): Joi.ValidationResult {
        const schema: Joi.Schema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });

        return schema.validate(body);
    }
}

export default new CategoriesValidation();
