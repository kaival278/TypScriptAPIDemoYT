import { Router } from 'express';
import { CategoriesComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/Categoriess
 *
 * @swagger
 * /v1/Categoriess:
 *   get:
 *     description: Get all stored Categoriess in Database
 *     tags: ["Categoriess"]
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: An array of Categoriess
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Categoriess'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', CategoriesComponent.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/v1/Categoriess
 *
 * @swagger
 * /v1/Categoriess:
 *   post:
 *      description: Create new Categories
 *      tags: ["Categoriess"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: Categories creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CategoriesSchema'
 *            example:
 *              name: CategoriesName
 *              email: test.Categories@mail.com
 *      responses:
 *        201:
 *          description: return created Categories
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CategoriesSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', CategoriesComponent.create);

/**
 * GET method route
 * @example http://localhost:PORT/v1/Categoriess/:id
 *
 * @swagger
 * /v1/Categoriess/{id}:
 *  get:
 *    description: Get Categories by CategoriesId
 *    tags: ["Categoriess"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique CategoriesId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return Categories by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CategoriesSchema'
 */
router.get('/:id', CategoriesComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/Categoriess/:id
 *
 * @swagger
 * /v1/Categoriess/{id}:
 *  delete:
 *    description: Delete Categories by CategoriesId
 *    tags: ["Categoriess"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique CategoriesId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted Categories
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CategoriesSchema'
 */
router.delete('/:id', CategoriesComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
