const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config()

const getToken = async () => {
    const response = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json') //o set é usado para setar os headers
        .send({ //envia o body da request no send
            'username': 'julio.lima',
            'senha': '123456'
        })

        return response.body.token;
}

module.exports = {
    getToken
}