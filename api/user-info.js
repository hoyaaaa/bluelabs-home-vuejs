import axios from 'axios'

export default async function handler(request, response) {
    const req = {
        body: request.body,
        query: request.query,
        cookies: request.cookies,
    };
    console.log(request.cookies);
    const access_token = request.cookies['USER_ACCESS_TOKEN'];

    const userinfo_response = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`
    );
    const response_data = {
        id: userinfo_response.data.id,
        name: userinfo_response.data.name,
        email: userinfo_response.data.email,
        picture: userinfo_response.data.picture
    }
    response.status(200).json(response_data);
}