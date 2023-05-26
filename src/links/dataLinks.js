import blockOrNone from '../utils/blockOrNone';

const data = (params) => {
  const result = {
    product: {
      boleto: {
        conditional: false,
        daysToExpire: 2,
        enabled: true,
      },
      credit: {
        allowTwoCards: true,
        maxInstallments: 6,
      },
      description: null,
      name: 'Power Bussines - Online',
      pix: {
        enabled: true,
        secondsToExpire: 180,
      },
      price: 15035,
    },
    data: {},
  };

  if (params.group) {
    result.product.discountTable = discountTable(params.group);
  }

  if (params.linkType === 'split' || params.linkType === 'partial') {
    delete result.product.price;
  }

  if (params.linkType === 'partial' && params.typeCustomer === 'none') {
    result.customer = dataConsultor['CPF'].customer;
  }

  return result;
};

const discountTable = (params) => {
  return Array.from({length: params}, (_, index) => index * 999);
};

const donation = () => {
  return {
    'donations': true,
    'percent': true,
    'cart': [
      {
        'type': 'cart',
        'value': 'root',
        'valueLabel': 'Online',
        'price': 15000,
        'items': [
          {
            'opportunityId': 'Doação ao Instituto PV',
            'productId': 'Doação ao Instituto PV',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
            'percent': 10000,
          },
        ],
      },
    ],
    'data': {},
    'product': {
      'boleto': {
        'conditional': false,
        'daysToExpire': 2,
        'enabled': false,
      },
      'credit': {
        'allowTwoCards': true,
        'maxInstallments': 1,
      },
      'description': null,
      'name': 'Doação ao Instituto PV',
      'pix': {
        'enabled': true,
        'secondsToExpire': 180,
      },
    },
  };
};

const padraoNoOptions = (params) => {
  const payload = {
    cart: {
      type: 'cart',
      value: 'root',
      valueLabel: 'Online',
      items: [
        {
          opportunityId: 'teste',
          price: 20000,
          productId: 'teste',
          sellerId: 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
        },
      ],
    },
  };
  return Object.assign(data(params), payload);
};

const percentNoOptions = (params) => {
  const payload = {
    percent: true,
    cart: [
      {
        type: 'cart',
        value: 'root',
        valueLabel: 'Online',
        price: 20000,
        items: [
          {
            opportunityId: 'teste',
            percent: 10000,
            productId: 'teste',
            sellerId: 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
    ],
  };
  return Object.assign(data(params), payload);
};

const splitNoOptions = (params) => {
  const payload = {
    'cart': [
      {
        'type': 'cart',
        'value': 'root',
        'valueLabel': 'Online',
        'price': 50000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 20000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto03',
            'opportunityId': 'opportunityId03',
            'price': 10000,
            'percent': true,
            'items': [
              {
                'percent': 10000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
    ],
  };
  return Object.assign(data(params), payload);
};

const padrao = (params) => {
  const payload = {
    'cart': {
      'type': 'options',
      'key': 'polo',
      'keyLabel': 'Selecione o local do curso',
      'value': 'root',
      'valueLabel': 'local',
      'items': [
        {
          'type': 'options',
          'key': 'turma',
          'keyLabel': 'Selecione a turma',
          'value': 'a1h3s0000039901AAA',
          'valueLabel': 'Salvador – BA',
          'items': [
            {
              'type': 'options',
              'key': 'package',
              'keyLabel': 'Escolha o pacote',
              'value': '02286f4b-07d0-400e-8d4c-3c94a149e5a6',
              'valueLabel': 'Jan/2022',
              'items': [
                {
                  'type': 'cart',
                  'value': '27fe523e-abe9-42ce-a404-322dbba96730',
                  'valueLabel': 'Silver',
                  'items': [
                    {
                      'opportunityId': 'teste',
                      'price': 15035,
                      'productId': 'teste',
                      'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
                    },
                  ],
                },
                {
                  'type': 'cart',
                  'value': 'e9b8d852-d006-47be-8dbc-81a0db0800b0',
                  'valueLabel': 'Gold',
                  'items': [
                    {
                      'opportunityId': 'teste',
                      'price': 15035,
                      'productId': 'teste',
                      'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
                    },
                  ],
                },
              ],
            },
            {
              'type': 'options',
              'key': 'package',
              'keyLabel': 'Escolha o pacote',
              'value': '55d3853c-94b2-42f9-a61f-acbf79730416',
              'valueLabel': 'Abr/2022',
              'items': [
                {
                  'type': 'cart',
                  'value': '27fe523e-abe9-42ce-a404-322dbba96730',
                  'valueLabel': 'Silver',
                  'items': [
                    {
                      'opportunityId': 'teste',
                      'price': 15035,
                      'productId': 'teste',
                      'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
                    },
                  ],
                },
                {
                  'type': 'cart',
                  'value': 'e9b8d852-d006-47be-8dbc-81a0db0800b0',
                  'valueLabel': 'Gold',
                  'items': [
                    {
                      'opportunityId': 'teste',
                      'price': 15035,
                      'productId': 'teste',
                      'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          'type': 'options',
          'key': 'turma',
          'keyLabel': 'Selecione a turma',
          'value': 'a1h3s00000398zzAAA',
          'valueLabel': 'Ribeirão Preto - SP',
          'items': [
            {
              'type': 'options',
              'key': 'package',
              'keyLabel': 'Escolha o pacote',
              'value': '02286f4b-07d0-400e-8d4c-3c94a149e5a6',
              'valueLabel': 'Jan/2022',
              'items': [
                {
                  'type': 'cart',
                  'value': '27fe523e-abe9-42ce-a404-322dbba96730',
                  'valueLabel': 'Silver',
                  'items': [
                    {
                      'opportunityId': 'teste',
                      'price': 15035,
                      'productId': 'teste',
                      'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
                    },
                  ],
                },
                {
                  'type': 'cart',
                  'value': 'e9b8d852-d006-47be-8dbc-81a0db0800b0',
                  'valueLabel': 'Gold',
                  'items': [
                    {
                      'opportunityId': 'teste',
                      'price': 15035,
                      'productId': 'teste',
                      'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
                    },
                  ],
                },
              ],
            },
            {
              'type': 'options',
              'key': 'package',
              'keyLabel': 'Escolha o pacote',
              'value': '55d3853c-94b2-42f9-a61f-acbf79730416',
              'valueLabel': 'Abr/2022',
              'items': [
                {
                  'type': 'cart',
                  'value': '27fe523e-abe9-42ce-a404-322dbba96730',
                  'valueLabel': 'Silver',
                  'items': [
                    {
                      'opportunityId': 'teste',
                      'price': 15035,
                      'productId': 'teste',
                      'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
                    },
                  ],
                },
                {
                  'type': 'cart',
                  'value': 'e9b8d852-d006-47be-8dbc-81a0db0800b0',
                  'valueLabel': 'Gold',
                  'items': [
                    {
                      'opportunityId': 'teste',
                      'price': 15035,
                      'productId': 'teste',
                      'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  };
  return Object.assign(data(params), payload);
};

const percent = (params) => {
  const payload = {
    percent: true,
    'options': {
      'type': 'options',
      'key': 'polo',
      'keyLabel': 'Selecione o local do curso',
      'value': 'root',
      'valueLabel': 'local',
      'items': [
        {
          'type': 'options',
          'key': 'turma',
          'keyLabel': 'Selecione a turma',
          'value': 'a1h3s0000039901AAA',
          'valueLabel': 'Salvador – BA',
          'items': [
            {
              'type': 'options',
              'key': 'package',
              'keyLabel': 'Escolha o pacote',
              'value': '02286f4b-07d0-400e-8d4c-3c94a149e5a6',
              'valueLabel': 'Jan/2022',
              'items': [
                {
                  'type': 'cart',
                  'value': '27fe523e-abe9-42ce-a404-322dbba96730',
                  'valueLabel': 'Silver',
                },
                {
                  'type': 'cart',
                  'value': 'e9b8d852-d006-47be-8dbc-81a0db0800b0',
                  'valueLabel': 'Gold',
                },
              ],
            },
            {
              'type': 'options',
              'key': 'package',
              'keyLabel': 'Escolha o pacote',
              'value': '55d3853c-94b2-42f9-a61f-acbf79730416',
              'valueLabel': 'Abr/2022',
              'items': [
                {
                  'type': 'cart',
                  'value': '27fe523e-abe9-42ce-a404-322dbba96730',
                  'valueLabel': 'Silver',
                },
                {
                  'type': 'cart',
                  'value': 'e9b8d852-d006-47be-8dbc-81a0db0800b0',
                  'valueLabel': 'Gold',
                },
              ],
            },
          ],
        },
        {
          'type': 'options',
          'key': 'turma',
          'keyLabel': 'Selecione a turma',
          'value': 'a1h3s00000398zzAAA',
          'valueLabel': 'Ribeirão Preto - SP',
          'items': [
            {
              'type': 'options',
              'key': 'package',
              'keyLabel': 'Escolha o pacote',
              'value': '02286f4b-07d0-400e-8d4c-3c94a149e5a6',
              'valueLabel': 'Jan/2022',
              'items': [
                {
                  'type': 'cart',
                  'value': '27fe523e-abe9-42ce-a404-322dbba96730',
                  'valueLabel': 'Silver',
                },
                {
                  'type': 'cart',
                  'value': 'e9b8d852-d006-47be-8dbc-81a0db0800b0',
                  'valueLabel': 'Gold',
                },
              ],
            },
            {
              'type': 'options',
              'key': 'package',
              'keyLabel': 'Escolha o pacote',
              'value': '55d3853c-94b2-42f9-a61f-acbf79730416',
              'valueLabel': 'Abr/2022',
              'items': [
                {
                  'type': 'cart',
                  'value': '27fe523e-abe9-42ce-a404-322dbba96730',
                  'valueLabel': 'Silver',
                },
                {
                  'type': 'cart',
                  'value': 'e9b8d852-d006-47be-8dbc-81a0db0800b0',
                  'valueLabel': 'Gold',
                },
              ],
            },
          ],
        },
      ],
    },
    'cart': [
      {
        'key': 'a1h3s0000039901AAA02286f4b-07d0-400e-8d4c-3c94a149e5a627fe523e-abe9-42ce-a404-322dbba96730',
        'price': 20000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 10000,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
      {
        'key': 'a1h3s0000039901AAA02286f4b-07d0-400e-8d4c-3c94a149e5a6e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'price': 30000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 5600,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            'opportunityId': 'teste2',
            'percent': 4400,
            'productId': 'teste2',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
      {
        'key': 'a1h3s0000039901AAA55d3853c-94b2-42f9-a61f-acbf7973041627fe523e-abe9-42ce-a404-322dbba96730',
        'price': 40000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 10000,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
      {
        'key': 'a1h3s0000039901AAA55d3853c-94b2-42f9-a61f-acbf79730416e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'price': 50000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 3000,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            'opportunityId': 'teste2',
            'percent': 5000,
            'productId': 'teste2',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            'opportunityId': 'teste3',
            'percent': 2000,
            'productId': 'teste3',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA02286f4b-07d0-400e-8d4c-3c94a149e5a627fe523e-abe9-42ce-a404-322dbba96730',
        'price': 50000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 10000,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA02286f4b-07d0-400e-8d4c-3c94a149e5a6e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'price': 60000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 5000,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            'opportunityId': 'teste2',
            'percent': 5000,
            'productId': 'teste2',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA55d3853c-94b2-42f9-a61f-acbf7973041627fe523e-abe9-42ce-a404-322dbba96730',
        'price': 70000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 10000,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA55d3853c-94b2-42f9-a61f-acbf79730416e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'price': 80000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 10000,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
    ],
  };
  return Object.assign(data(params), payload);
};

const split = (params) => {
  const payload = {
    'options': {
      'type': 'options',
      'key': 'polo',
      'keyLabel': 'Selecione o local do curso',
      'value': 'root',
      'valueLabel': 'local',
      'items': [
        {
          'type': 'options',
          'key': 'turma',
          'keyLabel': 'Selecione a turma',
          'value': 'a1h3s0000039901AAA',
          'valueLabel': 'Salvador – BA',
          'items': [
            {
              'type': 'options',
              'key': 'package',
              'keyLabel': 'Escolha o pacote',
              'value': '02286f4b-07d0-400e-8d4c-3c94a149e5a6',
              'valueLabel': 'Jan/2022',
              'items': [
                {
                  'type': 'cart',
                  'value': '27fe523e-abe9-42ce-a404-322dbba96730',
                  'valueLabel': 'Silver',
                },
                {
                  'type': 'cart',
                  'value': 'e9b8d852-d006-47be-8dbc-81a0db0800b0',
                  'valueLabel': 'Gold',
                },
              ],
            },
            {
              'type': 'options',
              'key': 'package',
              'keyLabel': 'Escolha o pacote',
              'value': '55d3853c-94b2-42f9-a61f-acbf79730416',
              'valueLabel': 'Abr/2022',
              'items': [
                {
                  'type': 'cart',
                  'value': '27fe523e-abe9-42ce-a404-322dbba96730',
                  'valueLabel': 'Silver',
                },
                {
                  'type': 'cart',
                  'value': 'e9b8d852-d006-47be-8dbc-81a0db0800b0',
                  'valueLabel': 'Gold',
                },
              ],
            },
          ],
        },
        {
          'type': 'options',
          'key': 'turma',
          'keyLabel': 'Selecione a turma',
          'value': 'a1h3s00000398zzAAA',
          'valueLabel': 'Ribeirão Preto - SP',
          'items': [
            {
              'type': 'options',
              'key': 'package',
              'keyLabel': 'Escolha o pacote',
              'value': '02286f4b-07d0-400e-8d4c-3c94a149e5a6',
              'valueLabel': 'Jan/2022',
              'items': [
                {
                  'type': 'cart',
                  'value': '27fe523e-abe9-42ce-a404-322dbba96730',
                  'valueLabel': 'Silver',
                },
                {
                  'type': 'cart',
                  'value': 'e9b8d852-d006-47be-8dbc-81a0db0800b0',
                  'valueLabel': 'Gold',
                },
              ],
            },
            {
              'type': 'options',
              'key': 'package',
              'keyLabel': 'Escolha o pacote',
              'value': '55d3853c-94b2-42f9-a61f-acbf79730416',
              'valueLabel': 'Abr/2022',
              'items': [
                {
                  'type': 'cart',
                  'value': '27fe523e-abe9-42ce-a404-322dbba96730',
                  'valueLabel': 'Silver',
                },
                {
                  'type': 'cart',
                  'value': 'e9b8d852-d006-47be-8dbc-81a0db0800b0',
                  'valueLabel': 'Gold',
                },
              ],
            },
          ],
        },
      ],
    },
    'cart': [
      {
        'key': 'a1h3s0000039901AAA02286f4b-07d0-400e-8d4c-3c94a149e5a627fe523e-abe9-42ce-a404-322dbba96730',
        'price': 40000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 20000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
      {
        'key': 'a1h3s0000039901AAA02286f4b-07d0-400e-8d4c-3c94a149e5a6e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'price': 30000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 30000,
            'percent': true,
            'items': [
              {
                'percent': 10000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
      {
        'key': 'a1h3s0000039901AAA55d3853c-94b2-42f9-a61f-acbf7973041627fe523e-abe9-42ce-a404-322dbba96730',
        'price': 50000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 30000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
      {
        'key': 'a1h3s0000039901AAA55d3853c-94b2-42f9-a61f-acbf79730416e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'price': 60000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 40000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA02286f4b-07d0-400e-8d4c-3c94a149e5a627fe523e-abe9-42ce-a404-322dbba96730',
        'price': 70000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 30000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 40000,
            'items': [
              {
                'price': 20000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 20000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA02286f4b-07d0-400e-8d4c-3c94a149e5a6e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'price': 80000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 50000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 30000,
            'items': [
              {
                'price': 15000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 15000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA55d3853c-94b2-42f9-a61f-acbf7973041627fe523e-abe9-42ce-a404-322dbba96730',
        'price': 90000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 70000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA55d3853c-94b2-42f9-a61f-acbf79730416e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'price': 100000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 80000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
    ],
  };
  return Object.assign(data(params), payload);
};

const partial = (params) => {
  const payload = {
    'cart': [
      {
        'type': 'cart',
        'value': 'root',
        'valueLabel': 'Online',
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 1500000,
            'percent': true,
            'items': [
              {
                'percent': 10000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 600000,
            'percent': true,
            'items': [
              {
                'percent': 10000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto03',
            'opportunityId': 'opportunityId03',
            'price': 320000,
            'percent': true,
            'items': [
              {
                'percent': 10000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
    ],
  };
  return Object.assign(data(params), payload);
};

const linksNoOptions = {
  'padrao': padraoNoOptions,
  'percent': percentNoOptions,
  'split': splitNoOptions,
  'donation': donation,
  'single': padraoNoOptions,
  'partial': partial,
};

const linksOptions = {
  'padrao': padrao,
  'percent': percent,
  'split': split,
};

const linkType = (params) => {
  const current = !['true', true].includes(params.options) || blockOrNone(params, ['single', 'donation', 'partial']) ? linksNoOptions[params.linkType] : linksOptions[params.linkType];
  return current(params);
};

const upsellPercent = {
  'upsell': {
    'cart': [
      {
        'type': 'cart',
        'value': 'root',
        'valueLabel': 'Online',
        'price': 10000,
        'items': [
          {
            'opportunityId': 'upsell',
            'percent': 10000,
            'productId': 'upsell',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
    ],
    'product': {
      'name': 'Upsell do produto',
      'credit': {
        'installments': {
          'useOriginalInstallments': false,
        },
      },
      'question': {
        'no': 'Não. No momento não.',
        'yes': 'Sim, desejo comprar!',
        'title': 'Título do Upsell',
      },
    },
  },
};

const upsellSplit = {
  'upsell': {
    'cart': [
      {
        'type': 'cart',
        'value': 'root',
        'valueLabel': 'Online',
        'price': 50000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 30000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
    ],
    'product': {
      'name': 'Upsell do produto',
      'credit': {
        'installments': {
          'useOriginalInstallments': false,
        },
      },
      'question': {
        'no': 'Não. No momento não.',
        'yes': 'Sim, desejo comprar!',
        'title': 'Título do Upsell',
      },
    },
  },
};

const upsellTypes = {
  percent: upsellPercent,
  split: upsellSplit,
};

const upsell = (params) => {
  if (!['true', true].includes(params.upsell) || blockOrNone(params, ['padrao', 'donation', 'single'])) {
    return null;
  }
  return upsellTypes[params.linkType];
};

const bumpPercentNoOptions = {
  orderbump: {
    enable: true,
    description: 'Descrição do orderBump',
    name: 'Nome do produto orderBump',
    cart: [
      {
        type: 'cart',
        price: 10000,
        amount: 30000,
        items: [
          {
            opportunityId: 'teste',
            percent: 6600,
            productId: 'teste',
            sellerId: 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            opportunityId: 'produto orderBump',
            percent: 3400,
            productId: 'produto orderBump',
            sellerId: 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
    ],
  },
};

const bumpSplitNoOptions = {
  'orderbump': {
    'enable': true,
    'description': 'Descrição do orderBump',
    'name': 'Nome do produto orderBump',
    'cart': [
      {
        'type': 'cart',
        'value': 'root',
        'valueLabel': 'Online',
        'price': 80000,
        'amount': 130000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 30000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'orderbump1',
            'opportunityId': 'opportunityId01',
            'price': 50000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'orderbump2',
            'opportunityId': 'opportunityId02',
            'price': 30000,
            'items': [
              {
                'price': 20000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 10000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
    ],
  },
};

const bumpNoOptions = {
  percent: bumpPercentNoOptions,
  split: bumpSplitNoOptions,
};

const bumpPercent = {
  'orderbump': {
    'enable': true,
    'description': 'DescriçãodoorderBump',
    'name': 'NomedoprodutoorderBump',
    'cart': [
      {
        'key': 'a1h3s0000039901AAA02286f4b-07d0-400e-8d4c-3c94a149e5a627fe523e-abe9-42ce-a404-322dbba96730',
        'price': 10000,
        'amount': 30000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 5000,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            'opportunityId': 'produtoorderBump',
            'percent': 5000,
            'productId': 'produtoorderBump',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
      {
        'key': 'a1h3s0000039901AAA02286f4b-07d0-400e-8d4c-3c94a149e5a6e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'amount': 40000,
        'price': 10000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 5500,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            'opportunityId': 'teste2',
            'percent': 2000,
            'productId': 'teste2',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            'opportunityId': 'produtoorderBump',
            'percent': 2500,
            'productId': 'produtoorderBump',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
      {
        'key': 'a1h3s0000039901AAA55d3853c-94b2-42f9-a61f-acbf7973041627fe523e-abe9-42ce-a404-322dbba96730',
        'amount': 50000,
        'price': 10000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 8000,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            'opportunityId': 'produtoorderBump',
            'percent': 2000,
            'productId': 'produtoorderBump',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
      {
        'key': 'a1h3s0000039901AAA55d3853c-94b2-42f9-a61f-acbf79730416e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'amount': 60000,
        'price': 10000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 3000,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            'opportunityId': 'teste2',
            'percent': 3000,
            'productId': 'teste2',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            'opportunityId': 'teste3',
            'percent': 2300,
            'productId': 'teste3',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            'opportunityId': 'produtoorderBump',
            'percent': 1700,
            'productId': 'produtoorderBump',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA02286f4b-07d0-400e-8d4c-3c94a149e5a627fe523e-abe9-42ce-a404-322dbba96730',
        'amount': 60000,
        'price': 10000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 8300,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            'opportunityId': 'produtoorderBump',
            'percent': 1700,
            'productId': 'produtoorderBump',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA02286f4b-07d0-400e-8d4c-3c94a149e5a6e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'amount': 70000,
        'price': 10000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 8600,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            'opportunityId': 'produtoorderBump',
            'percent': 1400,
            'productId': 'produtoorderBump',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA55d3853c-94b2-42f9-a61f-acbf7973041627fe523e-abe9-42ce-a404-322dbba96730',
        'amount': 80000,
        'price': 10000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 8750,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            'opportunityId': 'produtoorderBump',
            'percent': 1250,
            'productId': 'produtoorderBump',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA55d3853c-94b2-42f9-a61f-acbf79730416e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'amount': 90000,
        'price': 10000,
        'items': [
          {
            'opportunityId': 'teste',
            'percent': 8900,
            'productId': 'teste',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
          {
            'opportunityId': 'produtoorderBump',
            'percent': 1100,
            'productId': 'produtoorderBump',
            'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
          },
        ],
      },
    ],
  },
};

const bumpSplit = {
  'orderbump': {
    'enable': true,
    'description': 'DescriçãodoorderBump',
    'name': 'NomedoprodutoorderBump',
    'cart': [
      {
        'key': 'a1h3s0000039901AAA02286f4b-07d0-400e-8d4c-3c94a149e5a627fe523e-abe9-42ce-a404-322dbba96730',
        'price': 20000,
        'amount': 60000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 20000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'bump',
            'opportunityId': 'opportunityIdBump',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
      {
        'key': 'a1h3s0000039901AAA02286f4b-07d0-400e-8d4c-3c94a149e5a6e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'price': 20000,
        'amount': 50000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 30000,
            'percent': true,
            'items': [
              {
                'percent': 10000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'bump',
            'opportunityId': 'opportunityIdBump',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
      {
        'key': 'a1h3s0000039901AAA55d3853c-94b2-42f9-a61f-acbf7973041627fe523e-abe9-42ce-a404-322dbba96730',
        'price': 20000,
        'amount': 70000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 30000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'bump',
            'opportunityId': 'opportunityIdBump',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
      {
        'key': 'a1h3s0000039901AAA55d3853c-94b2-42f9-a61f-acbf79730416e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'price': 20000,
        'amount': 80000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 40000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'bump',
            'opportunityId': 'opportunityIdBump',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA02286f4b-07d0-400e-8d4c-3c94a149e5a627fe523e-abe9-42ce-a404-322dbba96730',
        'price': 20000,
        'amount': 90000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 30000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 40000,
            'items': [
              {
                'price': 20000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 20000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'bump',
            'opportunityId': 'opportunityIdBump',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA02286f4b-07d0-400e-8d4c-3c94a149e5a6e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'price': 20000,
        'amount': 100000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 50000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 30000,
            'items': [
              {
                'price': 15000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 15000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'bump',
            'opportunityId': 'opportunityIdBump',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA55d3853c-94b2-42f9-a61f-acbf7973041627fe523e-abe9-42ce-a404-322dbba96730',
        'price': 20000,
        'amount': 110000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 70000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'bump',
            'opportunityId': 'opportunityIdBump',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
      {
        'key': 'a1h3s00000398zzAAA55d3853c-94b2-42f9-a61f-acbf79730416e9b8d852-d006-47be-8dbc-81a0db0800b0',
        'price': 20000,
        'amount': 120000,
        'items': [
          {
            'productId': 'produto01',
            'opportunityId': 'opportunityId01',
            'price': 80000,
            'percent': true,
            'items': [
              {
                'percent': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'percent': 2000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'produto02',
            'opportunityId': 'opportunityId02',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
          {
            'productId': 'bump',
            'opportunityId': 'opportunityIdBump',
            'price': 20000,
            'items': [
              {
                'price': 12000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
              {
                'price': 8000,
                'sellerId': 'ed007de1-3a1a-42e7-8c48-da8521e5cb1c',
              },
            ],
          },
        ],
      },
    ],
  },
};

const bumpOptions = {
  percent: bumpPercent,
  split: bumpSplit,
};

const bump = (params) => {
  if (!['true', true].includes(params.bump) || blockOrNone(params, ['single', 'donation'])) {
    return null;
  }
  return !params.options ? bumpNoOptions[params.linkType] : bumpOptions[params.linkType];
};

const consultorCPF = {
  'customer': {
    'address': {
      'city': 'Fortaleza',
      'country': 'Brazil',
      'district': 'Parque Araxá',
      'number': '0',
      'postalCode': '60831370',
      'state': 'CE',
      'street': 'Sem nome',
    },
    'document': {
      'number': '58745687005',
      'type': 'CPF',
    },
    'email': 'john@doe.com',
    'firstName': 'John',
    'lastName': 'Doe',
    'gender': 'M',
    'birthDay': '1987-08-31',
    'phone': '85986858483',
  },
  'typeCustomer': 'natural',
};

const consultorCNPJ = {
  'customer': {
    'address': {
      'city': 'Fortaleza',
      'country': 'Brazil',
      'district': 'Parque Araxá',
      'number': '0',
      'postalCode': '60831370',
      'state': 'CE',
      'street': 'Sem nome',
    },
    'document': {
      'number': '05135734000100',
      'type': 'CNPJ',
    },
    'phone': '85988111469',
    'email': 'joirneto@teste.com',
    'doingBusiness': 'JOSE DE PAdfdfdfddULO ARAUJO NETO',
    'corporateName': 'NT CONSULTdcdcdfdfddING',
  },
  'typeCustomer': 'company',
};

const dataConsultor = {
  CPF: consultorCPF,
  CNPJ: consultorCNPJ,
};

const dataTiming = {
  'timing': {
    'enabled': true,
    'expiration': 60,
  },
};

const typeCustomer = {
  'CPF': {typeCustomer: 'natural'},
  'CNPJ': {typeCustomer: 'company'},
  'none': {typeCustomer: 'both'},
};

const sales = (params) => {
  return !blockOrNone(params, ['padrao', 'donation']) ? {salesInterest: params.sales} : null;
};

const consultor = (params) => {
  return params?.linkType === 'partial' || !['nove'].includes(params.typeCustomer) && ['true', true].includes(params.consultor) && !blockOrNone(params, ['single', 'donation']) ? dataConsultor[params.typeCustomer] : typeCustomer[params?.typeCustomer];
};

const timing = (params) => {
  return ['true', true].includes(params.timing) && blockOrNone(params, ['single']) ? dataTiming : null;
};

const principalBranch = [linkType, upsell, bump, sales, consultor, timing];

const linksPartial = (payload) => {
  const quantidadeLinks = 3;
  const valorTotal = 2420000;
  const links = [];
  let sum = 0;
  for (let i = 0; i < quantidadeLinks; ++i) {
    const valorParcial = Math.round(2420000 / Math.round((Math.random() * 4) + 3));
    const novoItemCart = {
      ...payload.cart[0],
      'price': i !== quantidadeLinks - 1 ? valorParcial : valorTotal - sum,
      'priceTotal': valorTotal,
    };
    sum += valorParcial;

    const novoLink = {
      ...payload,
      lastLink: {
        last: i === quantidadeLinks - 1,
        linksPrevious: [],
      },
    };

    novoLink.cart = [novoItemCart];

    links.push(novoLink);
  }

  return links;
};

const dataLinks = (link) => {
  let payload = {};
  principalBranch.forEach(item => {
    payload = Object.assign(payload, item(link));
  });
  return link?.linkType !== 'partial' ? payload : linksPartial(payload);
};

export default dataLinks;
