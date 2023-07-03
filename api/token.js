import axios from 'axios'
import qs from 'qs'

export default async function handler(request, response) {
    const req = {
        body: request.body,
        query: request.query,
        cookies: request.cookies,
    };
    const { code } = request.body;

    const body = {
        grant_type: "authorization_code",
        client_id: '116548741753-hv92c51v88euom54t2d9kci2u7lgpnhq.apps.googleusercontent.com',
        redirect_uri: 'http://localhost:8080/login-info',
        client_secret: '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',
        code: code
    };

    const token_response = await axios.post("https://oauth2.googleapis.com/token", qs.stringify(body), {
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    });
    const { access_token } = token_response.data;
    response.status(200).json({access_token: access_token});
}