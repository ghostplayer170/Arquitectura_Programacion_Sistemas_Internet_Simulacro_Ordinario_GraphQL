
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { GraphQLError } from "graphql";
const env = await load(); // Load env variables

export const getInfoFromValidatePhone = async (phone:string) => {
    const API_KEY_NINJAS = env.API_KEY_NINJAS || Deno.env.get("API_KEY_NINJAS");
    const URL = `https://api.api-ninjas.com/v1/validatephone?number=${phone}`;
    const headers = {'X-Api-Key': `${API_KEY_NINJAS}` };
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

export const getInfoFromWorldTime = async (country:string) => {
    const API_KEY_NINJAS = env.API_KEY_NINJAS || Deno.env.get("API_KEY_NINJAS");
    const URL = `https://api.api-ninjas.com/v1/worldtime?country=${country}`;
    const headers = {'X-Api-Key': `${API_KEY_NINJAS}` };
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