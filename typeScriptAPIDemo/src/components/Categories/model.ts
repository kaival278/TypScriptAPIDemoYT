import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';
import * as connections from '../../config/connection/connection';

export type AuthToken = {
    accessToken: string,
    kind: string,
};

/**
 * @export
 * @interface ICategoriesModel
 * @extends {Document}
 */
export interface ICategoriesModel extends Document {
   
    CategoryID:Number,
    CategoryName:String,
    Description:String,
    Picture:String,
}

/**
 * @swagger
 * components:
 *  schemas:
 *    CategoriesSchema:
 *      required:
 *        - email
 *        - name
 *      properties:
 *        id:
 *          type: string
 *        name:
 *          type: string
 *        email:
 *          type: string
 *        password:
 *          type: string
 *        passwordResetToken:
 *          type: string
 *        passwordResetExpires:
 *          type: string
 *          format: date
 *        tokens:
 *          type: array
 *    Categoriess:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/CategoriesSchema'
 */
const CategoriesSchema: Schema = new Schema({
    CategoryID:Number,
CategoryName:String,
Description:String,
Picture:String,
}, {
    collection: 'Categoriesmodel',
    versionKey: false,
}).pre('save', async function (next: NextFunction): Promise < void > {
   // const Categories: ICategoriesModel = this; // tslint:disable-line

//    if (!Categories.isModified('password')) {
 //       return next();
  //  }

   // This part can be use for any customization which might you want.
});

/**
 * Method for comparing passwords
 */
CategoriesSchema.methods.comparePassword = async function (candidatePassword: string): Promise < boolean > {
    try {
        const match: boolean = await bcrypt.compare(candidatePassword, this.password);

        return match;
    } catch (error) {
        return error;
    }
};

/**
 * Helper method for getting Categories's gravatar.
 */
CategoriesSchema.methods.gravatar = function (size: number): string {
    if (!size) {
        size = 200;
    }
    if (!this.email) {
        return `https://gravatar.com/avatar/?s=${size}&d=retro`;
    }
    const md5: string = crypto.createHash('md5').update(this.email).digest('hex');

    return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

export default connections.db.model< ICategoriesModel >('CategoriesModel', CategoriesSchema);
