import { Exam } from './exam';

export const EXAMS: Exam[] = [
    {
        examId: 1,
        university: 'USP',
        year: 2020,
        examImageUrl: '../../assets/fuvest2020.jpg',
        questions: [
            {
                questionId: 13,
                description: 'Carros que saem da cidade A rumo a alguma das cidades turísticas E, F e G fazem caminhos diversos, passando por pelo menos uma das cidades B, C e D, apenas no sentido indicado pelas setas, como mostra a figura. Os números indicados nas setas são as probabilidades, dentre esses carros, de se ir de uma cidade a outra.\n Nesse cenário, a probabilidade de um carro ir de A a F é',
                answerA: '0,120.',
                answerB: '0,216.',
                answerC: '0,264.',
                answerD: '0,336.',
                answerE: '0,384.',
                correctAnswer: 'E',
                questionImageUrl: '../../assets/fuvest2020-13.png',
                subject: 'math',
                done: false,
                correct: false
            },
            {
                questionId: 14,
                description: 'Se, em 15 anos, o salário mínimo teve um aumento nominal de 300% e a inflação foi de 100%, é correto afirmar que o aumento real do salário mínimo, nesse período, foi de',
                answerA: '50%.',
                answerB: '100%.',
                answerC: '150%.',
                answerD: '200%.',
                answerE: '250%.',
                correctAnswer: 'B',
                subject: 'math',
                done: false,
                correct: false
            },
            {
                questionId: 15,
                description: 'O cilindro de papelão central de uma fita crepe tem raio externo de 3 cm. A fita tem espessura de 0,01 cm e dá 100 voltas completas. Considerando que, a cada volta, o raio externo do rolo é aumentado no valor da espessura da fita, o comprimento total da fita é de, aproximadamente',
                answerA: '9,4 m.',
                answerB: '11,0 m.',
                answerC: '18,8 m.',
                answerD: '22,0 m.',
                answerE: '25,1 m.',
                correctAnswer: 'D',
                questionImageUrl: '../../assets/fuvest2020-15.png',
                subject: 'math',
                done: false,
                correct: false
            },
            {
                questionId: 17,
                description: 'A menor esfera na qual um paralelepípedo reto‐retângulo de medidas 7 cm × 4 cm × 4 cm está inscrito tem diâmetro de',
                answerA: '9 cm.',
                answerB: '10 cm.',
                answerC: '11 cm.',
                answerD: '12 cm.',
                answerE: '15 cm.',
                correctAnswer: 'A',
                subject: 'math',
                done: false,
                correct: false
            },
            {
                questionId: 18,
                description: 'A dona de uma lanchonete observou que, vendendo um combo a R$ 10,00, 200 deles são vendidos por dia, e que, para cada redução de R$ 1,00 nesse preço, ela vende 100 combos a mais. Nessas condições, qual é a máxima arrecadação diária que ela espera obter com a venda desse combo?',
                answerA: 'R$ 2.000,00',
                answerB: 'R$ 3.200,00',
                answerC: 'R$ 3.600,00',
                answerD: 'R$ 4.000,00',
                answerE: 'R$ 4.800,00',
                correctAnswer: 'C',
                subject: 'math',
                done: false,
                correct: false
            },
            {
                questionId: 19,
                description: 'A função E de Euler determina, para cada número natural n, a quantidade de números naturais menores do que n cujo máximo divisor comum com n é igual a 1. Por exemplo, E(6) = 2 pois os números menores do que 6 com tal propriedade são 1 e 5. Qual o valor máximo de E(n), para n de 20 a 25?',
                answerA: '19',
                answerB: '20',
                answerC: '22',
                answerD: '24',
                answerE: '25',
                correctAnswer: 'C',
                subject: 'math',
                done: false,
                correct: false
            },
            {
                questionId: 19,
                description: 'Equipamentos domésticos chamados de vaporizadores para roupa utilizam o vapor de água gerado por um sistema de resistências elétricas a partir de água líquida. Um equipamento com potência nominal de 1.600 W foi utilizado para passar roupas por 20 minutos, consumindo 540 mL de água. Em relação ao gasto total de energia do equipamento, o gasto de energia utilizado apenas para vaporizar a água, após ela já ter atingido a temperatura de ebulição, equivale a, aproximadamente,',
                answerA: '0,04%',
                answerB: '0,062%',
                answerC: '4,6%',
                answerD: '40%',
                answerE: '62%',
                correctAnswer: 'E',
                subject: 'chemistry',
                done: false,
                correct: false
            },
        ]
    },
    {
        examId: 2,
        university: 'USP',
        year: 2019,
        examImageUrl: '../../assets/fuvest2019.jpg',
        questions: [
            {
                questionId: 13,
                description: 'Os grandes aviões comerciais voam em altitudes onde o ar é rarefeito e a pressão atmosférica é baixa. Devido a isso, eles têm o seu interior pressurizado em uma pressão igual à atmosférica na altitude de 2.000 m. A figura mostra o gráfico da pressão atmosférica em função da altitude.\n A força, em N, a que fica submetida uma janela plana de vidro, de 20 x 30 cm\xB2 , na cabine de passageiros na altitude de 10.000 m, é, aproximadamente,',
                answerA: '12.400',
                answerB: '6.400',
                answerC: '4.800',
                answerD: '3.200',
                answerE: '1.600',
                correctAnswer: 'D',
                questionImageUrl: '../../assets/fuvest2019-13.png',
                subject: 'physics',
                done: false,
                correct: false
            },
            {
                questionId: 14,
                description: 'O consumo calórico de um animal de sangue quente é proporcional à área superficial de seu corpo. Um animal com massa 3,5 kg consome 250 kcal diárias. O gráfico relaciona a  área superficial desse animal com sua massa.\n Considerando o gráfico, conclui‐se que,se a massa deste animal dobrar, o seu novo consumo diário de energia, em kcal, será, aproximadamente,',
                answerA: '130',
                answerB: '250',
                answerC: '310',
                answerD: '390',
                answerE: '500',
                correctAnswer: 'D',
                subject: 'physics',
                done: false,
                correct: false
            }
        ]
    },
    {
        examId: 3,
        university: 'USP',
        year: 2018,
        examImageUrl: '../../assets/fuvest2018.jpg',
        questions: [
            {
                questionId: 17,
                description: 'A energia liberada na combustão do etanol de cana-de-açúcar pode ser considerada advinda da energia solar, uma vez que a primeira etapa para a produção do etanol é a fotossíntese. As transformações envolvidas na produção e no uso do etanol combustível são representadas pelas seguintes equações chemistrys:\n Com base nessas informações, podemos afirmar que o valor de \u0394H para a reação de fotossíntese ',
                answerA: '-1.305 kJ/mol',
                answerB: '+1.305 kJ/mol',
                answerC: '+2.400 kJ/mol',
                answerD: '-2.540 kJ/mol',
                answerE: '+2.540 kJ/mol',
                correctAnswer: 'E',
                questionImageUrl: '../../assets/fuvest2018-17.png',
                subject: 'chemistry',
                done: false,
                correct: false
            }
        ]
    },
    {
        examId: 4,
        university: 'UNICAMP',
        year: 2020,
        examImageUrl: '../../assets/unicamp2020.jpg',
        questions: [
            {
                questionId: 32,
                description: 'Em uma família, cada filha tem o mesmo número de irmãs e irmãos, e cada filho tem um número de irmãs igual ao dobro do número de irmãos. O número total de filhos e filhas dessa família é igual a ',
                answerA: '11',
                answerB: '9',
                answerC: '7',
                answerD: '5',
                correctAnswer: 'C',
                subject: 'math',
                done: false,
                correct: false
            },
            {
                questionId: 33,
                description: 'Cinco pessoas devem ficar em pé, uma ao lado da outra, para tirar uma fotografia, sendo que duas delas se recusam a ficar lado a lado. O número de posições distintas para as cinco pessoas serem fotografadas juntas é igual a',
                answerA: '48',
                answerB: '72',
                answerC: '96',
                answerD: '120',
                correctAnswer: 'B',
                subject: 'math',
                done: false,
                correct: false
            }
        ]
    }
]