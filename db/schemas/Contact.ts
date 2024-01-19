import mongoose from "npm:mongoose@8.0.1";
import {Contact} from "../../types.ts"

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

export const ContactModel = mongoose.model<ContactModelType>("Contact", ContactSchema);