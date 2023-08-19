import CallApi from './CallApi'

export default class AllRelativesService {

    static async getAll(tokens, setTokens) {
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': 'Bearer ' + tokens.access_token
            }
        };
        return await CallApi.callApi('https://kindergarten-6cfb21ffbf81.herokuapp.com/kindergarten/admin/relatives', requestOptions, tokens, setTokens);
    }

    static async getAllSortedByName(tokens, setTokens) {
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': 'Bearer ' + tokens.access_token
            }
        };
        return await CallApi.callApi('https://kindergarten-6cfb21ffbf81.herokuapp.com/kindergarten/admin/relatives/by_name', requestOptions, tokens, setTokens);
    }

    static async getAllSortedByKidCount(tokens, setTokens) {
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': 'Bearer ' + tokens.access_token
            }
        };
        return await CallApi.callApi('https://kindergarten-6cfb21ffbf81.herokuapp.com/kindergarten/admin/relatives/by_kids', requestOptions, tokens, setTokens);
    }


    static async getAllSortedByAddress(tokens, setTokens) {
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': 'Bearer ' + tokens.access_token
            }
        };
        return await CallApi.callApi('https://kindergarten-6cfb21ffbf81.herokuapp.com/kindergarten/admin/relatives/by_address', requestOptions, tokens, setTokens);
    }
    
}