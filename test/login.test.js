//comando para subir o banco no CMD - mysql -u root -p
//sempre subir o rest-api com npm run server
//sempre subir o banco-web com npm run server

const request = require('supertest');
const { expect } = require ('chai');

describe('Login', () => {
    describe('Realizar login com sucesso - POST', () => {
        it('Deve retornar 200 com o token em string quando usar credenciais validas', async () => {
            const response = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json') //o set é usado para setar os headers
                .send({ //envia o body da request no send
                    'username': 'julio.lima',
                    'senha': '123456'
                })

            //valicoes com chai
            expect(response.status).to.equal(200);
            expect(response.body.token).to.be.a('string');
        })
    })
})