
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { GraphQLError } from "graphql";
const env = await load(); // Load env variables
const API_KEY_NINJAS = env.API_KEY_NINJAS || Deno.env.get("API_KEY_NINJAS");
const headers = {'X-Api-Key': `${API_KEY_NINJAS}` };

export const getInfoFromValidatePhone = async (phone:string) => {
    const URL = `https://api.api-ninjas.com/v1/validatephone?number=${phone}`;
    try {
        const response = await fetch(URL,{headers});
        if(!response.ok){
            throw new GraphQLError(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new GraphQLError(`Request Failed: ${error}`);
    }
}

export const getInfoFromWorldTime = async (city:string) => {
    const URL = `https://api.api-ninjas.com/v1/worldtime?city=${city}`;
    try {
        const response = await fetch(URL,{headers});
        if(!response.ok){
            throw new GraphQLError(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new GraphQLError(`Request Failed: ${error}`);
    }
}

export const getInfoFromCountry = async (country:string) => {
    const URL = `https://api.api-ninjas.com/v1/country?name=${country}`;
    try {
        const response = await fetch(URL,{headers});
        if(!response.ok){
            throw new GraphQLError(`Error: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new GraphQLError(`Request Failed: ${error}`);
    }
}