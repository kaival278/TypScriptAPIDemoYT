import { ICategoriesModel } from './model';

/**
 * @export
 * @interface ICategoriesService
 */
export interface ICategoriesService {

    /**
     * @returns {Promise<ICategoriesModel[]>}
     * @memberof ICategoriesService
     */
    findAll(): Promise<ICategoriesModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<ICategoriesModel>}
     * @memberof ICategoriesService
     */
    findOne(code: string): Promise<ICategoriesModel>;

    /**
     * @param {ICategoriesModel} CategoriesModel
     * @returns {Promise<ICategoriesModel>}
     * @memberof ICategoriesService
     */
    insert(CategoriesModel: ICategoriesModel): Promise<ICategoriesModel>;

    /**
     * @param {string} id
     * @returns {Promise<ICategoriesModel>}
     * @memberof ICategoriesService
     */
    remove(id: string): Promise<ICategoriesModel>;
}
