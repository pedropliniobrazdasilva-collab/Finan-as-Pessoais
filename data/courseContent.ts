import { Module } from '../types';

// Helper to generate rich content structure to avoid massive file repetition while keeping high quality
const generateContent = (topic: string, specificContent: any) => ({
  intro: `Bem-vindo à aula sobre **${topic}**. Vamos mergulhar fundo neste tema essencial para sua transformação financeira.`,
  explanation: specificContent.explanation,
  examples: specificContent.examples,
  commonErrors: specificContent.commonErrors,
  summary: specificContent.summary,
  exercise: specificContent.exercise
});

export const COURSE_MODULES: Module[] = [
  {
    id: 'mod1',
    title: 'Módulo 1: Fundamentos das Finanças',
    lessons: [
      {
        id: 'l1',
        title: '1. Por que finanças pessoais são essenciais',
        duration: '10 min',
        content: generateContent('Essência das Finanças', {
          explanation: "Entender finanças pessoais é entender a base da sua vida. Quem não controla dinheiro vive sempre no improviso, sem paz e sem plano. Quando você aprende a lidar com suas finanças, começa a tomar decisões mais inteligentes, evita dívidas e cria estabilidade. Ter organização financeira significa ter liberdade para escolher, e não seguir empurrado pelas circunstâncias. Finanças não são sobre ficar rico rapidamente, mas sobre construir segurança. Saber usar o próprio dinheiro evita estresse e abre portas para novas oportunidades. É algo que qualquer pessoa pode aprender, independentemente da renda. Quem domina finanças domina sua vida.",
          examples: [
            "Sem controle: Aceitar qualquer emprego por desespero financeiro.",
            "Com controle: Ter a liberdade de recusar propostas ruins e buscar o que te valoriza."
          ],
          commonErrors: "Achar que organização financeira prende, quando na verdade ela liberta.",
          summary: "Ter organização financeira significa ter liberdade para escolher, e não seguir empurrado pelas circunstâncias.",
          exercise: "Reflita: Se você perdesse sua renda hoje, por quanto tempo conseguiria manter seu padrão de vida atual?"
        })
      },
      {
        id: 'l2',
        title: '2. Mentalidade financeira de quem vence',
        duration: '12 min',
        content: generateContent('Mindset Vencedor', {
          explanation: "A mentalidade é o primeiro passo para uma vida financeira saudável. Pessoas que crescem entendem que dinheiro não é um inimigo, mas uma ferramenta que pode transformar sua realidade. Elas evitam pensamentos limitantes como “não consigo” ou “não dá” e substituem por “como posso melhorar?”. Quem vence tem paciência, sabe esperar, não age por impulso e busca evolução constante. Elas preferem construir patrimônio aos poucos, com disciplina, em vez de tentar atalhos. Desenvolver essa mentalidade faz você enxergar o dinheiro de forma estratégica. É isso que diferencia quem prospera de quem permanece parado.",
          examples: [
            "Mentalidade Pobre: 'Isso é muito caro para mim'.",
            "Mentalidade Rica: 'O que preciso fazer para poder comprar isso?'"
          ],
          commonErrors: "Buscar atalhos e esquemas de enriquecimento rápido em vez de constância.",
          summary: "O dinheiro é uma ferramenta estratégica. Paciência e disciplina vencem a pressa.",
          exercise: "Identifique uma frase limitante que você diz sobre dinheiro e a reescreva de forma positiva."
        })
      },
      {
        id: 'l3',
        title: '3. Os erros que 90% cometem',
        duration: '15 min',
        content: generateContent('Erros Comuns', {
          explanation: "A maioria das pessoas gasta sem planejar e vive mantendo seu orçamento no escuro. Erros como abusar do cartão, parcelar tudo e viver no limite do salário são extremamente comuns. Muitos acreditam que só precisam se organizar quando ganharem mais, e essa é uma das maiores armadilhas. Outro erro é deixar emoções guiarem decisões financeiras, comprando por impulso e buscando satisfação imediata. Além disso, muitos não fazem reserva de emergência e acabam dependendo de crédito caro. Reconhecer esses erros é fundamental para corrigi-los. Com pequenos ajustes, você já começa a mudar completamente sua vida financeira.",
          examples: [
            "Parcelar uma pizza ou roupas baratas em várias vezes.",
            "Gastar todo o aumento salarial elevando o padrão de vida imediatamente."
          ],
          commonErrors: "Achar que vai se organizar 'quando sobrar dinheiro' (nunca sobra se não organizar antes).",
          summary: "Não deixe emoções guiarem suas decisões. A organização deve preceder o aumento de renda.",
          exercise: "Liste 3 erros citados no texto que você cometeu recentemente."
        })
      },
      {
        id: 'l4',
        title: '4. A regra de ouro: gastar menos que ganha',
        duration: '10 min',
        content: generateContent('A Regra de Ouro', {
          explanation: "Essa regra simples é a base de qualquer prosperidade financeira, mas poucas pessoas realmente a aplicam. Para gastar menos do que ganha, é preciso primeiro saber exatamente quanto você gasta e com o que. Muitas vezes o problema não é o salário, mas os desperdícios escondidos no mês. Ajustar o estilo de vida à sua renda é um passo essencial. Quando você controla seus gastos, sobra dinheiro para investir, poupar e realizar objetivos. Esse controle devolve poder sobre sua vida e impede que o dinheiro desapareça sem explicação. É o primeiro hábito que transforma tudo.",
          examples: [
            "Ganhar R$ 5.000 e viver com um custo de R$ 4.000 (Sobra R$ 1.000 para o futuro).",
            "Ajustar o plano de celular ou TV a cabo para reduzir desperdícios fixos."
          ],
          commonErrors: "Subestimar os pequenos gastos diários achando que não afetam o saldo final.",
          summary: "Ajuste seu estilo de vida para caber na sua renda, não o contrário.",
          exercise: "Calcule: (Sua Renda Líquida) - (Seus Gastos Totais). O resultado é positivo ou negativo?"
        })
      },
      {
        id: 'l5',
        title: '5. Descobrindo seu ponto de partida',
        duration: '20 min',
        content: generateContent('Diagnóstico Financeiro', {
          explanation: "Antes de começar qualquer mudança, é preciso saber exatamente onde você está. Isso significa listar todos os seus ganhos, despesas, dívidas e compromissos. Veja quanto dinheiro realmente entra e quanto sai todos os meses. Analise também o que é necessário e o que é totalmente dispensável. Descobrir seu ponto de partida traz clareza absoluta e permite criar um plano realista. Esse diagnóstico mostra seus pontos fracos e fortes. É como enxergar o mapa completo da sua situação. Só com essa visão clara você consegue seguir para a próxima etapa.",
          examples: [
            "Criar um 'Raio-X': Listar Dívidas Totais, Dinheiro em Caixa e Valor dos Bens.",
            "Identificar assinaturas esquecidas que estão drenando sua conta."
          ],
          commonErrors: "Ignorar as dívidas por medo de encarar o valor total.",
          summary: "Você não pode mudar o que não conhece. Encare seus números para traçar um plano.",
          exercise: "Faça o levantamento de TODAS as suas dívidas e some o valor total hoje."
        })
      }
    ]
  },
  {
    id: 'mod2',
    title: 'Módulo 2: Organização e Controle',
    lessons: [
      {
        id: 'l6',
        title: '6. Montando um orçamento simples',
        duration: '15 min',
        content: generateContent('Orçamento Funcional', {
          explanation: "Um orçamento eficiente não precisa ser complicado. Basta organizar sua renda e seus gastos de forma clara e objetiva. Liste tudo que você ganha, depois categorize seus gastos mensais. Ao definir limites para cada categoria, você evita excessos e cria um controle natural. O orçamento deve ser revisado semanalmente para ajustes. Ele funciona como um guia que mostra para onde seu dinheiro deve ir, e não para onde ele vai por conta própria. Com o tempo, seguir esse controle se torna automático e leve. Um bom orçamento é o coração da organização financeira.",
          examples: [
            "Definir um teto de R$ 600 para supermercado e acompanhar semanalmente.",
            "Usar a regra 50/30/20 como base inicial para suas categorias."
          ],
          commonErrors: "Criar um orçamento e nunca mais olhar para ele durante o mês.",
          summary: "O orçamento diz para onde seu dinheiro vai, em vez de você se perguntar para onde ele foi.",
          exercise: "Escreva em um papel ou planilha suas 3 maiores categorias de gastos e defina um limite para elas."
        })
      },
      {
        id: 'l7',
        title: '7. Gastos fixos, variáveis e supérfluos',
        duration: '12 min',
        content: generateContent('Categorização de Gastos', {
          explanation: "Dividir seus gastos em categorias facilita muito o entendimento do seu dinheiro. Gastos fixos são aqueles que não mudam muito, como aluguel ou assinaturas. Gastos variáveis mudam a cada mês, como alimentação, transporte e compras domésticas. Os gastos supérfluos são desejos, não necessidades, e são justamente os que mais prejudicam seu orçamento sem que você perceba. Quando você separa tudo, enxerga quais áreas estão fora de controle. Isso permite cortar o que realmente pesa no bolso sem mexer no que é essencial. A organização por categorias traz clareza e equilíbrio.",
          examples: [
            "Fixo: Aluguel (Difícil de mudar rápido).",
            "Variável: Conta de luz (Pode economizar).",
            "Supérfluo: Delivery excessivo (Pode cortar hoje)."
          ],
          commonErrors: "Tratar gastos supérfluos (lazer, compras por impulso) como se fossem essenciais.",
          summary: "Corte os supérfluos e otimize os variáveis para fazer sobrar mais.",
          exercise: "Classifique seus últimos 10 gastos nessas 3 categorias: Fixo, Variável ou Supérfluo."
        })
      },
      {
        id: 'l8',
        title: '8. Rastreamento: para onde vai o dinheiro?',
        duration: '10 min',
        content: generateContent('Rastreamento de Despesas', {
          explanation: "Rastrear seus gastos por 30 dias é uma das práticas mais transformadoras. Anote cada compra, por menor que seja, e você verá padrões que nunca percebeu. Pequenos gastos diários, quando somados, podem representar centenas de reais no final do mês. Esse rastreamento revela desperdícios invisíveis e decisões impulsivas. A consciência gerada por esse processo muda seu comportamento na hora. Você passa a pensar duas vezes antes de gastar. Entender para onde seu dinheiro realmente vai é essencial para ter controle total.",
          examples: [
            "Descobrir que gasta R$ 400 por mês só em lanches e cafés na rua.",
            "Perceber taxas bancárias que você nem sabia que pagava."
          ],
          commonErrors: "Não anotar gastos pequenos (balas, gorjetas, estacionamento) achando que não importam.",
          summary: "Pequenos vazamentos afundam grandes navios. Acompanhe cada centavo por 30 dias.",
          exercise: "Desafio: Anote TUDO o que você gastar nos próximos 3 dias, sem exceção."
        })
      },
      {
        id: 'l9',
        title: '9. Planilha ou App: Qual escolher?',
        duration: '8 min',
        content: generateContent('Ferramentas de Controle', {
          explanation: "A ferramenta ideal depende do seu estilo de organização. Planilhas são ótimas para quem gosta de detalhar tudo e controlar cada número manualmente. Elas oferecem liberdade e personalização. Já aplicativos são mais práticos e rápidos, facilitando o processo para quem não tem paciência para planilhas. Muitos apps categorizam automaticamente seus gastos. O mais importante não é o método, mas sim a consistência. Use o que você consegue manter no dia a dia. O melhor sistema é aquele que você realmente utiliza.",
          examples: [
            "Planilhas (Excel/Google Sheets): Poder total de análise.",
            "Apps (Mobills, Organizze): Praticidade e automação no celular.",
            "Caderno: Consciência tátil ao escrever (ótimo para começar)."
          ],
          commonErrors: "Tentar usar uma ferramenta complexa demais e desistir na primeira semana.",
          summary: "A melhor ferramenta é aquela que você usa com consistência.",
          exercise: "Baixe um app ou crie uma planilha simples hoje e registre o dia de ontem."
        })
      },
      {
        id: 'l10',
        title: '10. Criando metas financeiras (SMART)',
        duration: '15 min',
        content: generateContent('Metas Claras', {
          explanation: "Metas financeiras precisam ser específicas e ter prazo. Em vez de “quero economizar”, defina “vou guardar 300 reais por mês durante 10 meses para juntar 3 mil”. Quando uma meta é clara, seu cérebro entende exatamente o que deve ser feito. Uma boa meta também precisa ser realista, para não criar frustração. Divida suas metas em pequenas etapas para facilitar. Cada avanço gera motivação. Metas bem definidas transformam disciplina em resultados concretos. Elas se tornam seu guia durante todo o processo financeiro.",
          examples: [
            "Meta Vaga: 'Quero viajar'.",
            "Meta SMART: 'Quero viajar para a praia em Dezembro, preciso de R$ 2.000 e vou guardar R$ 200/mês'."
          ],
          commonErrors: "Definir metas impossíveis de alcançar no curto prazo e se frustrar.",
          summary: "Transforme sonhos vagos em planos concretos com prazos e valores.",
          exercise: "Escreva agora uma meta financeira usando a estrutura: O QUE, QUANTO, QUANDO e COMO."
        })
      }
    ]
  },
  {
    id: 'mod3',
    title: 'Módulo 3: Como Guardar Dinheiro',
    lessons: [
      {
        id: 'l11',
        title: '11. A regra dos 10%: O primeiro passo',
        duration: '10 min',
        content: generateContent('Pague-se Primeiro', {
          explanation: "Guardar 10% de tudo o que você ganha é uma das formas mais simples de começar a construir estabilidade financeira. Mesmo que o valor pareça pequeno, o importante é o hábito. Esse método ensina você a se pagar primeiro, antes de pagar qualquer conta. Com o tempo, essa quantia acumulada começa a fazer diferença e cria segurança. A disciplina de separar esse valor treina sua mente a não gastar tudo que recebe. Aos poucos, você aprende a viver com menos sem sentir tanto impacto. O que começa pequeno se torna grande com constância.",
          examples: [
            "Recebeu R$ 2.000? Transfira R$ 200 para a corretora assim que o dinheiro cair.",
            "Não espere sobrar. Se você pagar todas as contas primeiro, nunca sobrará os 10%."
          ],
          commonErrors: "Deixar o dinheiro da poupança na conta corrente e gastar por acidente.",
          summary: "O boleto do seu futuro é o mais importante. Pague-se antes de pagar os outros.",
          exercise: "Calcule quanto é 10% da sua renda hoje e faça uma simulação mental de viver sem esse valor."
        })
      },
      {
        id: 'l12',
        title: '12. Método 50/30/20 na prática',
        duration: '12 min',
        content: generateContent('Método 50/30/20', {
          explanation: "Esse método organiza seu dinheiro dividindo sua renda em três partes: metade para necessidades, uma parte menor para desejos e o restante para metas e investimentos. Ele cria equilíbrio entre responsabilidade e qualidade de vida. Mesmo quem recebe pouco pode adaptar o modelo proporcionalmente. O grande benefício é a clareza, pois você passa a saber exatamente quanto pode gastar sem prejudicar seu futuro. Seguindo esse sistema, seus gastos deixam de ser aleatórios e passam a ter direção. Essa estrutura evita exageros e limita impulsos. É uma forma inteligente de manter controle sem complicação.",
          examples: [
            "50% Necessidades: Aluguel, Luz, Comida (Essencial para sobreviver).",
            "30% Desejos: Lazer, Netflix, Jantar fora (Qualidade de vida).",
            "20% Futuro: Quitar dívidas ou Investir (Liberdade)."
          ],
          commonErrors: "Achar que o método é rígido. Se você tem muitas dívidas, pode ser 50/10/40 temporariamente.",
          summary: "Um orçamento equilibrado prevê gastos com lazer, mas prioriza o futuro.",
          exercise: "Pegue sua renda líquida e divida por 50%, 30% e 20%. Compare com o que você gasta hoje."
        })
      },
      {
        id: 'l13',
        title: '13. Economizar sem viver apertado',
        duration: '15 min',
        content: generateContent('Economia Inteligente', {
          explanation: "Economizar não significa cortar tudo de vez e viver mal. Significa eliminar desperdícios e fazer escolhas mais inteligentes. Trocar marcas mais caras por opções mais econômicas, reduzir compras por impulso e cozinhar mais em casa já geram uma grande diferença no final do mês. Você não precisa abrir mão do que gosta, apenas adaptar a frequência. Pequenas mudanças acumulam resultados enormes ao longo dos meses. A ideia é economizar com consciência, não com sofrimento. Ajustar o estilo de vida traz leveza e liberdade financeira.",
          examples: [
            "Trocar o delivery de 3x na semana por 1x e cozinhar algo especial nos outros dias.",
            "Negociar tarifas bancárias e planos de internet (economia que não dói)."
          ],
          commonErrors: "Cortar o 'cafezinho' que traz felicidade e ignorar a taxa alta do cartão de crédito.",
          summary: "Economia inteligente é cortar o desperdício, não a alegria.",
          exercise: "Identifique 2 gastos recorrentes que você pode substituir por opções mais baratas hoje."
        })
      },
      {
        id: 'l14',
        title: '14. Controlando compras impulsivas',
        duration: '10 min',
        content: generateContent('Impulsividade', {
          explanation: "Grande parte dos gastos desnecessários nasce de emoções e não de necessidades. Quando bate a vontade de comprar, seu cérebro busca prazer imediato. Para evitar isso, espere 24 horas antes de decidir. Essa pausa reduz drasticamente compras impulsivas. Outra técnica útil é fazer listas e segui-las com disciplina. Entender o que causa seus impulsos, como estresse, ansiedade ou tédio, é essencial para quebrar o ciclo. Quando você aprende a controlar emoções, seu dinheiro deixa de escapar sem motivo. É um processo que exige consciência, mas traz resultados poderosos.",
          examples: [
            "Regra das 24h: Colocou no carrinho online? Espere até amanhã para fechar a compra.",
            "Nunca vá ao supermercado com fome ou triste (você comprará mais)."
          ],
          commonErrors: "Usar as compras como terapia para 'compensar' um dia ruim.",
          summary: "Não deixe emoções passageiras causarem dívidas permanentes.",
          exercise: "Lembre da última compra inútil que fez. Qual era seu sentimento no momento? (Tédio, pressa, tristeza?)"
        })
      },
      {
        id: 'l15',
        title: '15. Criando reserva de emergência',
        duration: '18 min',
        content: generateContent('Reserva de Emergência', {
          explanation: "A reserva de emergência é sua proteção contra imprevistos, como uma demissão ou problema de saúde. O ideal é guardar o equivalente a três a seis meses de despesas essenciais. Comece com pouco, mas comece. Esse dinheiro deve ficar em um lugar seguro e acessível, como Tesouro Selic ou uma conta remunerada. Não toque nessa reserva para luxos ou compras impulsivas. Ela existe para te dar tranquilidade e evitar dívidas. Ter uma reserva muda a forma como você vive o dia a dia. Você passa a ter controle e não medo.",
          examples: [
            "Custo de vida R$ 2.000 -> Meta da Reserva: Entre R$ 6.000 e R$ 12.000.",
            "Carro quebrou? Use a reserva, não o cheque especial."
          ],
          commonErrors: "Investir em ações ou criptomoedas antes de ter a reserva de segurança garantida.",
          summary: "Segurança vem antes da rentabilidade. A reserva é seu colchão contra quedas.",
          exercise: "Defina onde você guardará sua reserva (ex: Tesouro Selic) e qual o valor meta."
        })
      }
    ]
  },
  {
    id: 'mod4',
    title: 'Módulo 4: Dívidas e Armadilhas',
    lessons: [
      {
        id: 'l16',
        title: '16. Como as dívidas surgem',
        duration: '12 min',
        content: generateContent('Origem das Dívidas', {
          explanation: "Dívidas normalmente começam pequenas, mas crescem devido aos juros. Muitas vezes o problema não é a dívida em si, mas o atraso em resolvê-la. Compras parceladas, crédito fácil e uso descontrolado do cartão criam uma bola de neve. Quando você paga apenas o mínimo, os juros fazem o valor aumentar de forma agressiva. Entender como as dívidas funcionam ajuda a não cair nelas. O primeiro passo é assumir o problema e evitar novas despesas até estabilizar. Dívida não desaparece sozinha e precisa ser enfrentada o quanto antes.",
          examples: [
            "Parcelar algo em 12x achando que a parcela é pequena, mas comprometendo a renda futura.",
            "Usar o cheque especial para cobrir gastos do mês (juros altíssimos)."
          ],
          commonErrors: "Esconder as dívidas da família ou de si mesmo, fingindo que não existem.",
          summary: "A bola de neve só para de crescer quando você para de empurrá-la. Encare o problema.",
          exercise: "Liste todas as suas parcelas atuais e veja quanto da sua renda futura já está comprometida."
        })
      },
      {
        id: 'l17',
        title: '17. Negociando dívidas na prática',
        duration: '20 min',
        content: generateContent('Negociação Eficiente', {
          explanation: "Negociar é sempre possível e muitas vezes reduz mais da metade do valor devido. O ideal é entrar em contato com o credor e pedir uma proposta limpa, sem juros acumulados. Plataformas como Serasa Limpa Nome também podem oferecer descontos elevados. Pagar à vista geralmente traz maior redução, mas parcelar pode ser uma opção se couber no seu orçamento. O importante é negociar com calma e não aceitar valores que você não pode pagar. Dívida renegociada é uma libertação e permite recomeçar com mais segurança.",
          examples: [
            "Dívida de R$ 5.000 que virou R$ 20.000. Proposta de quitação à vista: R$ 2.500.",
            "Trocar uma dívida de cartão (400% a.a.) por um empréstimo consignado (30% a.a.)."
          ],
          commonErrors: "Aceitar o primeiro acordo que o banco oferece sem tentar contraproposta.",
          summary: "Bancos querem receber. Quem deve tem o poder de negociar as condições.",
          exercise: "Entre no site do Serasa Limpa Nome (ou similar) e verifique se há ofertas para seu CPF."
        })
      },
      {
        id: 'l18',
        title: '18. Cartão de Crédito: O jeito certo',
        duration: '15 min',
        content: generateContent('Uso do Cartão', {
          explanation: "O cartão não é um vilão, mas sim uma ferramenta que exige controle. O problema acontece quando ele vira uma extensão da renda, o que leva ao endividamento. O ideal é usar sempre dentro do limite do seu orçamento e nunca parcelar compras sem necessidade. Pagar a fatura completa é obrigatório para evitar juros abusivos. Estabeleça também um limite interno, menor que o limite do cartão. O cartão deve facilitar sua vida, não complicar. Com responsabilidade, ele pode até gerar benefícios.",
          examples: [
            "Limite do banco: R$ 5.000. Seu teto de gastos pessoal: R$ 2.000.",
            "Concentrar gastos para ganhar milhas, MAS ter o dinheiro na conta para pagar tudo."
          ],
          commonErrors: "Considerar o limite do cartão como dinheiro extra disponível.",
          summary: "Se você não tem dinheiro para pagar à vista, pense duas vezes antes de passar no crédito.",
          exercise: "Defina um 'Teto de Gastos' para seu cartão que seja 30% menor que seu limite atual."
        })
      },
      {
        id: 'l19',
        title: '19. Perigo: Rotativo e Juros Abusivos',
        duration: '10 min',
        content: generateContent('Armadilha do Rotativo', {
          explanation: "O crédito rotativo é uma das maiores armadilhas financeiras existentes. Quando você não paga a fatura completa, o valor restante entra em um juro extremamente alto. Isso faz a dívida multiplicar e sair do controle rapidamente. É por isso que tantas pessoas se endividam sem perceber. O rotativo nunca deve ser utilizado. Se não puder pagar a fatura, renegocie ou busque alternativas como empréstimo com juros menores. Entender esse mecanismo evita que você caia em uma das dívidas mais perigosas do mercado.",
          examples: [
            "Pagar o mínimo da fatura e deixar o restante rolando a 14% ao mês.",
            "Uma dívida de R$ 1.000 vira mais de R$ 4.000 em apenas um ano."
          ],
          commonErrors: "Achar que pagar o mínimo resolve o problema (só adia e piora).",
          summary: "O rotativo é o câncer das finanças. Evite a todo custo.",
          exercise: "Verifique na sua fatura a taxa de juros (CET) para atraso e rotativo."
        })
      },
      {
        id: 'l20',
        title: '20. Blindagem Financeira',
        duration: '12 min',
        content: generateContent('Proteção Patrimonial', {
          explanation: "Blindar suas finanças significa criar hábitos que te protegem de erros repetidos. Isso inclui manter orçamento atualizado, evitar parcelamentos longos, analisar cada compra e controlar emoções. Outra forma de blindagem é ter uma reserva de emergência, que impede que você entre em dívidas quando algo inesperado acontece. Revisar seus gastos semanalmente também ajuda a identificar riscos antes que virem problemas. Com esses cuidados, você cria uma vida financeira estável e resistente a armadilhas comuns. A blindagem é a fase que transforma consciência em liberdade.",
          examples: [
            "Ter a reserva de emergência impede que você use o cheque especial numa crise.",
            "Não emprestar seu nome ou cartão para terceiros (blindagem contra risco externo)."
          ],
          commonErrors: "Relaxar no controle assim que quita as dívidas, voltando aos velhos hábitos.",
          summary: "Constância e prevenção são as chaves da blindagem financeira.",
          exercise: "Crie um ritual semanal (ex: toda sexta-feira) para olhar seu extrato bancário."
        })
      }
    ]
  },
  {
    id: 'mod5',
    title: 'Módulo 5: Investimentos',
    lessons: [
      {
        id: 'l21',
        title: '21. O que são investimentos na prática',
        duration: '15 min',
        content: generateContent('Conceito de Investir', {
          explanation: "Investir significa fazer seu dinheiro trabalhar para você, gerando crescimento com o tempo. Ao contrário do que muitos pensam, não é algo arriscado quando feito com conhecimento e segurança. O objetivo dos investimentos é proteger seu dinheiro da inflação e criar patrimônio. Existem opções para todos os perfis e valores, inclusive para quem começa com pouco. O segredo é entender o básico e agir com consistência. Investir não é apostar, é construir. Quanto mais cedo você começar, mais resultados terá.",
          examples: [
            "Dinheiro parado na conta perde valor. Dinheiro investido ganha juros.",
            "Investir não é só Bolsa de Valores; é também emprestar para o banco (CDB) ou Governo (Tesouro)."
          ],
          commonErrors: "Achar que precisa ser especialista em economia para começar.",
          summary: "Não deixe seu dinheiro parado sendo corroído pela inflação. Faça-o crescer.",
          exercise: "Pesquise o termo 'Juros Compostos' e veja uma calculadora online de simulação."
        })
      },
      {
        id: 'l22',
        title: '22. Poupança ou Tesouro Selic?',
        duration: '12 min',
        content: generateContent('Tesouro vs Poupança', {
          explanation: "Durante muitos anos a poupança foi vista como opção segura, mas hoje sua rentabilidade é muito baixa. O Tesouro Selic oferece mais segurança, maior rendimento e é garantido pelo governo. Além disso, o dinheiro pode ser sacado em poucos dias, tornando-o ideal para reserva de emergência. A poupança perde para a inflação com frequência, fazendo você perder poder de compra ao longo do tempo. Já o Tesouro Selic acompanha a taxa básica de juros, protegendo seu dinheiro. É a escolha mais inteligente para quem quer segurança.",
          examples: [
            "R$ 1000 na Poupança rende menos que R$ 1000 no Tesouro Selic no mesmo período.",
            "O risco do Tesouro (país quebrar) é menor que o da Poupança (banco quebrar)."
          ],
          commonErrors: "Ter preguiça de abrir conta em corretora e deixar na poupança por comodismo.",
          summary: "A poupança é o pior lugar 'seguro' para seu dinheiro. Mude para o Tesouro Selic.",
          exercise: "Se você ainda tem dinheiro na poupança, planeje a migração para o Tesouro Selic esta semana."
        })
      },
      {
        id: 'l23',
        title: '23. Renda Fixa com segurança',
        duration: '15 min',
        content: generateContent('Renda Fixa', {
          explanation: "A renda fixa é a porta de entrada para quem quer investir sem medo. Ela oferece previsibilidade e risco baixo. Opções como CDBs, LCIs, LCAs e Tesouro Direto permitem começar com valores acessíveis. Antes de investir, observe o prazo, a liquidez e a taxa de rendimento. É importante escolher instituições confiáveis. A renda fixa é ideal para quem está montando reserva ou começando a diversificar. Investir com segurança é sempre a base para passos maiores no futuro.",
          examples: [
            "LCI/LCA são isentos de Imposto de Renda, ótimos para objetivos de médio prazo.",
            "CDBs de bancos menores pagam mais, mas têm garantia do FGC até R$ 250 mil."
          ],
          commonErrors: "Investir dinheiro que vai precisar mês que vem em um título preso por 2 anos.",
          summary: "Segurança e previsibilidade. Comece pela Renda Fixa antes de arriscar.",
          exercise: "Procure no seu banco ou corretora a opção 'CDB de Liquidez Diária' e veja quanto rende."
        })
      },
      {
        id: 'l24',
        title: '24. Fundos Imobiliários (FIIs) simples',
        duration: '18 min',
        content: generateContent('FIIs', {
          explanation: "FIIs são investimentos que permitem receber uma espécie de aluguel mensal sem precisar comprar um imóvel. Você compra cotas de fundos que investem em prédios, shoppings e lajes corporativas. Além disso, os rendimentos geralmente são isentos de imposto de renda. É um investimento acessível, pois você pode começar com pouco dinheiro. Os FIIs também oferecem liquidez, diferente de um imóvel tradicional. É uma forma inteligente de diversificar e construir renda passiva no longo prazo.",
          examples: [
            "Com R$ 10 ou R$ 100 você compra uma cota e recebe centavos/reais de aluguel no mês seguinte.",
            "Se precisar do dinheiro, você vende a cota na bolsa (liquidez), diferente de vender um apartamento."
          ],
          commonErrors: "Olhar só o quanto paga de aluguel e esquecer de ver a qualidade dos imóveis do fundo.",
          summary: "Seja dono de grandes imóveis e receba aluguel isento de IR com pouco dinheiro.",
          exercise: "Descubra o ticker (código) de um Fundo de Shopping e um Fundo de Galpão Logístico."
        })
      },
      {
        id: 'l25',
        title: '25. Começando com 20, 50 ou 100 reais',
        duration: '10 min',
        content: generateContent('Acessibilidade', {
          explanation: "Muita gente acredita que investir exige muito dinheiro, mas isso não é verdade. Com valores baixos é possível comprar Tesouro Selic, CDBs e até cotas fracionadas de FIIs. O importante é começar e criar o hábito. Pequenos investimentos feitos com constância crescem com o tempo. Use plataformas confiáveis e invista mensalmente o que for possível. A consistência vale mais do que o valor inicial. Começar com pouco não é problema; não começar é.",
          examples: [
            "Tesouro Direto permite investimentos a partir de aprox. R$ 30.",
            "O efeito dos juros sobre R$ 100 mensais por 30 anos é surpreendente."
          ],
          commonErrors: "Esperar 'ganhar mais' para começar a investir. Quem não investe pouco, não investe muito.",
          summary: "O melhor dia para começar foi ontem. O segundo melhor é hoje, com o que você tem.",
          exercise: "Faça um compromisso de investir qualquer valor (mesmo que R$ 30) no próximo pagamento."
        })
      }
    ]
  },
  {
    id: 'mod6',
    title: 'Módulo 6: Vida Financeira Organizada',
    lessons: [
      {
        id: 'l26',
        title: '26. Planejamento Mensal e Anual',
        duration: '15 min',
        content: generateContent('Planejamento Contínuo', {
          explanation: "O planejamento financeiro te dá visão clara do presente e direção para o futuro. No plano mensal, você organiza seus gastos, metas e obrigações. No plano anual, você define objetivos maiores, como viagens, investimentos e conquistas pessoais. Revisar mensalmente ajuda a corrigir falhas e melhorar sua gestão. É importante manter flexibilidade, já que imprevistos acontecem. Um bom planejamento te mantém no caminho certo. Ele funciona como um mapa para alcançar estabilidade e crescimento.",
          examples: [
            "Mensal: Pagar contas, aporte investimento, lazer do mês.",
            "Anual: IPVA, IPTU, Matrículas, Férias (Gastos que exigem preparação prévia)."
          ],
          commonErrors: "Fazer o plano e esquecer na gaveta. O plano deve ser vivo e revisado.",
          summary: "Quem falha em planejar, planeja falhar. Tenha visão de curto e longo prazo.",
          exercise: "Pegue um calendário e marque os meses onde você terá gastos extras (ex: impostos, aniversários)."
        })
      },
      {
        id: 'l27',
        title: '27. Definindo metas de curto, médio e longo prazo',
        duration: '12 min',
        content: generateContent('Metas Temporais', {
          explanation: "Metas são essenciais para dar propósito ao seu dinheiro. Metas de curto prazo podem ser coisas como quitar dívidas ou juntar para uma compra específica. As de médio prazo envolvem projetos maiores, como trocar de celular ou fazer uma viagem. As de longo prazo incluem aposentadoria, investir pesado ou comprar um imóvel. Cada meta precisa ter valor, prazo e motivo. Quando você sabe por que quer algo, fica mais fácil manter disciplina. Metas bem definidas mantêm sua motivação viva.",
          examples: [
            "Curto (até 1 ano): Reserva de emergência.",
            "Médio (1-5 anos): Viagem internacional ou carro.",
            "Longo (5+ anos): Aposentadoria ou Casa Própria."
          ],
          commonErrors: "Misturar o dinheiro das metas. O dinheiro da aposentadoria não paga a viagem.",
          summary: "Dê nome ao seu dinheiro. Dinheiro sem destino vira gasto supérfluo.",
          exercise: "Escreva 1 meta para cada prazo: Curto, Médio e Longo."
        })
      },
      {
        id: 'l28',
        title: '28. Controlando gatilhos emocionais',
        duration: '15 min',
        content: generateContent('Inteligência Emocional', {
          explanation: "Muitas vezes gastamos para aliviar emoções, e não porque precisamos. Ansiedade, tédio, estresse ou carência podem levar a decisões ruins. Para controlar isso, observe o que você sente antes de comprar. Respire profundamente e adie a decisão por algumas horas. Conversar com alguém, caminhar ou focar em outra atividade ajuda a reduzir impulsos. Entender seus gatilhos muda completamente sua relação com o dinheiro. Você passa a ter controle emocional, evitando arrependimentos. Com consciência, você reduz gastos desnecessários e vive com muito mais equilíbrio.",
          examples: [
            "Gatilho: Dia estressante no trabalho -> Vontade: Pedir comida cara -> Ação: Cozinhar algo simples e relaxar.",
            "Identificar que o 'Eu mereço' é muitas vezes uma desculpa para gastar sem poder."
          ],
          commonErrors: "Ir ao shopping para passear quando está entediado (armadilha de consumo).",
          summary: "Domine suas emoções ou elas dominarão sua carteira.",
          exercise: "Identifique seu maior gatilho emocional (Tédio? Tristeza? Euforia?) e crie uma estratégia para ele."
        })
      },
      {
        id: 'l29',
        title: '29. Acompanhando sua evolução',
        duration: '10 min',
        content: generateContent('Monitoramento', {
          explanation: "Acompanhar sua evolução financeira permite ver o impacto das suas escolhas. Atualize seus ganhos, gastos e investimentos todos os meses. Compare com meses anteriores para identificar melhorias ou retrocessos. Isso cria um ciclo de aprendizado contínuo. Quando você vê progresso, mesmo pequeno, a motivação aumenta. Ajustes se tornam mais fáceis e precisos. Acompanhar sua evolução transforma disciplina em resultado. É assim que você constrói estabilidade de verdade. Você passa a ter controle total da sua vida financeira.",
          examples: [
            "Criar um gráfico simples do seu Patrimônio Líquido subindo mês a mês.",
            "Comparar quanto você gastava com supérfluos há 3 meses e quanto gasta hoje."
          ],
          commonErrors: "Parar de acompanhar quando as coisas vão mal. É na crise que o controle é mais necessário.",
          summary: "O que não é medido não é gerenciado. Celebre cada pequena vitória.",
          exercise: "Marque um dia fixo no mês (ex: dia 01) para atualizar seus números e ver sua evolução."
        })
      },
      {
        id: 'l30',
        title: '30. Plano final: O Caminho',
        duration: '20 min',
        content: generateContent('Conclusão e Futuro', {
          explanation: "O plano final consiste em unir tudo o que você aprendeu até agora. Tenha orçamento atualizado, metas claras, reserva de emergência e investimentos consistentes. Controle impulsos, revise seu progresso e mantenha disciplina diária. Esse conjunto de hábitos cria uma vida financeira sólida. Você não precisa ser perfeito, apenas constante. Dominar suas finanças não é algo que acontece em um dia, mas sim um caminho contínuo. Cada escolha consciente te aproxima de uma vida estável e livre. O mais importante é não parar.",
          examples: [
            "A riqueza é construída na rotina, não nos eventos extraordinários.",
            "Conhecimento sem ação é inútil. Aplique o que aprendeu."
          ],
          commonErrors: "Achar que já sabe tudo e parar de estudar. O mercado e a vida mudam.",
          summary: "Você tem as ferramentas. A constância é o segredo do sucesso. Boa jornada!",
          exercise: "Escreva uma carta de compromisso para si mesmo, listando 3 mudanças permanentes que você fará a partir de hoje."
        })
      }
    ]
  }
];