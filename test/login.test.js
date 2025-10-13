//comando para subir o banco no CMD - mysql -u root -p
//sempre subir o rest-api com npm run server
//sempre subir o banco-web com npm run server
//a biblioteca mocha awesome é utilizada para criar relaatorios gráficos
//utilizar npm i mochawesome para fazer download da lib
//adicionar o comando --reporter mochawesome ao seu comando de testes para gerar o relatório
//no package.json adicionar scrips o seguinte comando mocha ./test/**/*.test.js --timeout=200000 --reporter mochawesome
//caso voce esteja usando mocha para criar seus testes

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