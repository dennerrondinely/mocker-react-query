const delay = require('mocker-api/delay');
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
  'GET /ws/:id/json': {
    cep: "01001-000",
    logradouro: "Praça da Sé",
    complemento: "lado ímpar",
    bairro: "Sé",
    localidade: "São Paulo",
    uf: "SP",
    ibge: "3550308",
    gia: "1004",
    ddd: "11",
    siafi: "7107"
  }
}
module.exports = (noProxy ? {} : delay(proxy, 1000));