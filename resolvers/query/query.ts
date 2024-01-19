import { GraphQLError } from "graphql";
import { Contact } from "../../types.ts";
import { ContactModel } from "../../db/schemas/Contact.ts"
import {contactModelToContact} from "../../controllers/contactModelToContact.ts"

export const Query = {
  getContact: async (
    _: unknown,
    args: { id: String },
  ): Promise<Contact> => {
    try {
      const contact = await ContactModel.findById(args.id).exec();
      if(!contact){
        throw new GraphQLError(`Not found contact with ${args.id}`);
      }
      const contactReturn = await contactModelToContact(contact);
      return contactReturn;
    } catch (error) {
      throw new GraphQLError(`Error: ${error}`);
    }
  },
  getContacts: async (
    _: unknown,
    args: { },
  ): Promise<Array<Contact>> => {
    try {
      const contacts = await ContactModel.find({}).exec();
      if(!contacts){
        throw new GraphQLError(`Not found contacts`);
      }
      const contactsReturn = Promise.all(
        contacts.map((elem)=> contactModelToContact(elem))
      )
      return contactsReturn;
    } catch (error) {
      throw new GraphQLError(`Error: ${error}`);
    }
  },
};
