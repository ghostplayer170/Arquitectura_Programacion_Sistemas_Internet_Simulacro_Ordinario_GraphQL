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
        const cap: string = Capital[0].capital;

        const HourCapital = await getInfoFromWorldTime(cap);
        if(!HourCapital){
          throw new GraphQLError(`Error: Getting Capital Hour`);
        }
        const hour: string = HourCapital.datetime;

        console.log("apis correct")

        const contact: Contact = {
            id: model._id.toString(),
            name: model.name,
            phone: model.phone,
            country: model.country,
            localHour: hour,
        }

        console.log("contact correct")

        return contact;

    } catch (error) {
        throw new GraphQLError(`Error: ${error}`);
    }
}
