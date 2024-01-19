import mongoose from "npm:mongoose@8.0.1";
import {Contact} from "../../types.ts"
import { nameFormat, phoneFormat, countryFormat } from "../validators/valContact.ts";
import {ContactPreSave} from "../middlewares/midContact.ts"

export type ContactModelType = 
    & mongoose.Document
    & Omit<Contact, "id">;

const Schema = mongoose.Schema;

const ContactSchema = new Schema(
    {
        name: {type: String, required: true},
        phone: {type: String, required: true},
        country: {type: String, required: true},
    }
);

ContactSchema.path('name').validate(nameFormat, "Name must be only letters and space");
ContactSchema.path('phone').validate(phoneFormat, "Phone must be in this format +12065550100");
ContactSchema.path('country').validate(countryFormat, "Country must be only letters and space");
ContactSchema.pre("save", ContactPreSave);
ContactSchema.pre("findOneAndUpdate", ContactPreSave);

export const ContactModel = mongoose.model<ContactModelType>("Contact", ContactSchema);