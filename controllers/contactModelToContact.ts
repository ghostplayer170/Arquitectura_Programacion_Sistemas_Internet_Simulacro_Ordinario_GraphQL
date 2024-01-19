import { GraphQLError } from "graphql";
import {ContactModelType} from "../db/schemas/Contact.ts"
import {Contact} from "../types.ts"
import { getInfoFromWorldTime, getInfoFromCountry } from "../resolvers/api/getContactInfoFromApi.ts"

export const contactModelToContact = async (model: ContactModelType):Promise<Contact> => {
    try {
        const Capital = await getInfoFromCountry(model.country);
        if(!Capital){
          throw new GraphQLError(`Error: Getting Capital`);
        }
        console.log(Capital[0].capital)
        const HourCapital = await getInfoFromWorldTime(Capital[0].capital);
        if(!HourCapital){
          throw new GraphQLError(`Error: Getting Capital Hour`);
        }
        console.log(HourCapital.datetime);
        const contact: Contact = {
            id: model._id.toString(),
            name: model.name,
            phone: model.phone,
            country: model.country,
            localHour: HourCapital.datetime
        }
        return contact;
    } catch (error) {
        throw new GraphQLError(`Error: ${error}`);
    }
}
