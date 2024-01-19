import { GraphQLError } from "graphql";
import { Contact } from "../../types.ts";
import { ContactModel } from "../../db/schemas/Contact.ts"
import {getInfoFromValidatePhone} from "../api/getContactInfoFromApi.ts"
import {contactModelToContact} from "../../controllers/contactModelToContact.ts"

export const Mutation = {
  addContact: async (
    _: unknown,
    args: { name:string, phone:string },
  ): Promise<Contact> => {
    try {
      const phoneCountry = await getInfoFromValidatePhone(args.phone);
      if(!phoneCountry){
        throw new GraphQLError(`Error: Getting Country`);
      }

      const contact = new ContactModel({
        name: args.name,
        phone: args.phone,
        country: phoneCountry.country,
      })
      const created = await contact.save();

      const contactReturn = await contactModelToContact(created);

      return contactReturn;

    } catch (error) {
      throw new GraphQLError(`Error: ${error}`);
    }
  },
  deleteContact: async (
    _: unknown,
    args: { id: string },
  ): Promise<Boolean> => {
    try {
      const contact = await ContactModel.findByIdAndDelete(args.id);
      if(!contact){
        return false
      }
      return true
    } catch (error) {
      throw new GraphQLError(`Error: ${error}`);
    }
  },
  updateContact: async (
    _: unknown,
    args: { id: string, name:string, country:string },
  ): Promise<Contact> => {
    try {
      const contact = await ContactModel.findByIdAndUpdate(
        args.id,
        {$set:{name: args.name, country: args.country}},
        {new: true}
        );
      if(!contact){
        throw new GraphQLError(`Not found contact with ${args.id}`);
      }

      const contactReturn = await contactModelToContact(contact);

      return contactReturn;

    } catch (error) {
      throw new GraphQLError(`Error: ${error}`);
    }
  },
};
