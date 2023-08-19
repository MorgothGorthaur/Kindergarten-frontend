import CallApi from './CallApi'

export default class AllKidsService {
    static async get(tokens, setTokens) {
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': 'Bearer ' + tokens.access_token
            }
        };
        return await CallApi.callApi('https://kindergarten-6cfb21ffbf81.herokuapp.com/kindergarten/admin/kids', requestOptions, tokens, setTokens);
    }

    static async getByGroupName(tokens, setTokens) {
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': 'Bearer ' + tokens.access_token
            }
        };
        return await CallApi.callApi('https://kindergarten-6cfb21ffbf81.herokuapp.com/kindergarten/admin/kids/group_name', requestOptions, tokens, setTokens);
    }

    static async getByTeacherName(tokens, setTokens) {
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': 'Bearer ' + tokens.access_token
            }
        };
        return await CallApi.callApi('https://kindergarten-6cfb21ffbf81.herokuapp.com/kindergarten/admin/kids/teacher_email', requestOptions, tokens, setTokens);
    }

    static async getByName(tokens, setTokens) {
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': 'Bearer ' + tokens.access_token
            }
        };
        return await CallApi.callApi('https://kindergarten-6cfb21ffbf81.herokuapp.com/kindergarten/admin/kids/name', requestOptions, tokens, setTokens);
    }

    static async getByBirth(tokens, setTokens) {
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Authorization': 'Bearer ' + tokens.access_token
            }
        };
        return await CallApi.callApi('https://kindergarten-6cfb21ffbf81.herokuapp.com/kindergarten/admin/kids/birth', requestOptions, tokens, setTokens);
    }
}