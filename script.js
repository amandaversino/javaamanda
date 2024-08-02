const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está se preparando para um evento importante e precisa escolher um novo produto de maquiagem. Qual é a sua prioridade ao escolher?",
        alternativas: [
            {
                texto: "A qualidade e a durabilidade do produto são essenciais.",
                afirmacao: "afirmação"
            },
            {
                texto: "O preço é o fator mais importante na minha escolha.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você decidiu experimentar uma nova tendência de maquiagem. Como você se prepara para isso?",
        alternativas: [
            {
                texto: "Pesquiso sobre a tendência online e assisto tutoriais para entender a aplicação.",
                afirmacao: "afirmação"
            },
            {
                texto: "Procuro um especialista em maquiagem para me ajudar a aplicar a tendência.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você está fazendo uma maquiagem para um ensaio fotográfico. Como você escolhe os produtos para garantir o melhor resultado?",
        alternativas: [
            {
                texto: "Escolho produtos com alta cobertura e resistência para que a maquiagem dure o máximo possível.",
                afirmacao: "afirmação"
            },
            {
                texto: "Opto por produtos leves e naturais para um efeito mais discreto e fresco.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Durante um evento, alguém elogia a sua maquiagem e pergunta qual produto você usou. O que você responde?",
        alternativas: [
            {
                texto: "Compartilho a marca e o tipo dos produtos usados e dou dicas de aplicação.",
                afirmacao: "afirmação"
            },
            {
                texto: "Mantenho o segredo dos produtos e falo que foi uma combinação única que fiz.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você e um amigo têm um desafio de maquiagem em que devem criar um look inspirador usando apenas produtos que já têm. Como você encara o desafio?",
        alternativas: [
            {
                texto: "Aproveito a oportunidade para experimentar combinações novas e criativas com os produtos existentes.",
                afirmacao: "afirmação"
            },
            {
                texto: "Prefiro investir em novos produtos para garantir um resultado mais impressionante.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    caixaAlternativas.innerHTML = ''; // Limpa alternativas anteriores
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function () {
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                mostraResultado();
            }
        });
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function mostraResultado() {
    caixaPerguntas.style.display = 'none';
    caixaAlternativas.style.display = 'none';
    caixaResultado.style.display = 'block';
    textoResultado.textContent = 'Obrigado por participar! Você completou o questionário.';
}

mostraPergunta();