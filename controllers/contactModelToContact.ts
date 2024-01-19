import { GraphQLError } from "graphql";
import {ContactModelType} from "../db/schemas/Contact.ts"
import {Contact} from "../types.ts"
import { getInfoFromWorldTime } from "../resolvers/api/getContactInfoFromApi.ts"

export const contactModelToContact = async (model: ContactModelType):Promise<Contact> => {
    try {
        const countryHour = await getInfoFromWorldTime(model.country);
        if(!countryHour){
          throw new GraphQLError(`Error: Getting Local Hour`);
        }
        const contact: Contact = {
            id: model._id.toString(),
            name: model.name,
            phone: model.phone,
            country: model.country,
            localHour: countryHour.datetime
        }
        return contact;
    } catch (error) {
        throw new GraphQLError(`Error: ${error}`);
    }
}
