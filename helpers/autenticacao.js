import http from 'k6/http';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));
const baseUrl = __ENV.BASE_URL__ || 'http://localhost:3000';
export function obterToken() {
    const url = `${baseUrl}/login`;
    const payload = JSON.stringify(postLogin);

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    return res.json('token')
}