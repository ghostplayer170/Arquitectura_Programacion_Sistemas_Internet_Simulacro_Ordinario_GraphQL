import { GraphQLError } from "graphql";
import { getInfoFromValidatePhone } from "../../resolvers/api/getContactInfoFromApi.ts";

export const nameFormat = (name: string): boolean => {
    const re = /^[A-Za-z ]{2,50}$/;
    return re.test(name);
}

export const phoneFormat = (phone: string): boolean => {
    const re = /^\+[0-9]{6,15}$/;
    return re.test(phone);
}

export const phoneValid = async (phone: string): Promise<boolean> => {
    try {
        const phoneInfo = await getInfoFromValidatePhone(phone);
        if(!phoneInfo){
          throw new GraphQLError(`Error: Getting Phone Info`);
        }
        return phoneInfo.is_valid
    } catch (error) {
        throw new GraphQLError(`Error: ${error}`);
    }
}

export const countryFormat = (country: string): boolean => {
    const re = /^[A-Za-z ]{2,50}$/;
    return re.test(country);
}