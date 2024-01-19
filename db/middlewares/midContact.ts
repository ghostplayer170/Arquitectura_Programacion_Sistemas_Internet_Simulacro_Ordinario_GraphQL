import {ContactModelType, ContactModel} from "../schemas/Contact.ts"
import { GraphQLError } from "graphql";

export const ContactPreSave = async function (this: ContactModelType, next:()=>void) {
    try {
        const phoneExists = await ContactModel.findOne({phone: this.phone})
        if(phoneExists){
            throw new GraphQLError(`Error: Contact already has this phone number ${this.phone}`);
        }
        next();
    } catch (error) {
        throw new GraphQLError(`Error: ${error}`);
    }
}