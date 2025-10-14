const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { getToken } = require('../helpers/authentication.js');
let token;

describe('Transferências', () => { //nome da funcionalidadde
    describe('Realizar login com sucesso - POST', () => { //nome do cenário
        it('Deve retornar 201 quando o valor da transfêrencia for maior ou igual que 10 reais', async () => { //nome o caso de teste
            // Faça login e obtenha o token antes dos testes
            token = await getToken();

            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json') //o set é usado para setar os headers
                .set('Authorization', 'Bearer ' + token)
                .send({
                    'contaOrigem': 1,
                    'contaDestino': 2,
                    'valor': 10,
                    'token': ''
                })

            console.log(response.body.error);
            expect(response.status).to.equal(201);
            //  expect(response.body.error).to.be.a('string');
        })

        it('Deve retornar 422 quando o valor da transfêrencia for abaixo que 10 reais', async () => { //nome o caso de teste
            const response = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json') //o set é usado para setar os headers
                .set('Authorization', 'Bearer ' + token)
                .send({ //o send envia o body da requisição
                    'contaOrigem': 1,
                    'contaDestino': 2,
                    'valor': 9,
                    'token': ''
                })

            console.log(response.body.error);
            expect(response.status).to.equal(422);
            // expect(response.body.error).to.be.a('string');
        })
    });

});