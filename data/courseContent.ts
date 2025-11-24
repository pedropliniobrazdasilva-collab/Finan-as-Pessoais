
import { Module } from '../types';

export const COURSE_MODULES: Module[] = [
  {
    id: 'mod1',
    title: 'Módulo 1: Fundamentos da Riqueza',
    lessons: [
      {
        id: 'l1',
        title: '1. O Jogo do Dinheiro',
        duration: '15 min',
        content: {
          intro: "Você foi treinado para ser um bom funcionário, mas ninguém te ensinou a ser dono do seu próprio destino financeiro. O sistema foi desenhado para criar mão de obra, não detentores de capital. Hoje vamos reescrever essas regras.",
          explanation: `### A Falha Educacional
Passamos cerca de quinze anos na escola aprendendo a calcular a área de um triângulo isósceles ou a fórmula de Bhaskara, mas saímos do ensino médio sem saber como declarar imposto de renda, como funcionam os juros compostos ou como proteger nosso dinheiro da inflação. O sistema educacional tradicional foi desenhado durante a Revolução Industrial para formar operários qualificados e obedientes, não investidores ou empreendedores.

O primeiro passo para a liberdade financeira é reconhecer que a responsabilidade pelo seu conhecimento financeiro é exclusivamente sua. Ninguém virá te salvar. O governo, o banco e o seu chefe têm interesses que, na maioria das vezes, são opostos aos seus. Eles lucram com a sua ignorância e dependência.

### Os 3 Pilares da Soberania Financeira
Para vencer o jogo do dinheiro não basta trabalhar duro. Você precisa dominar o que chamamos de Triângulo da Riqueza. Se um desses pilares estiver fraco, toda a estrutura desmorona.

| Pilar | Função | Objetivo Prático |
| --- | --- | --- |
| Ganhar | Capacidade de gerar renda | Aumentar o valor da sua hora de trabalho e criar múltiplas fontes de receita. |
| Cuidar | Gestão e eficiência | Gastar menos do que ganha, otimizar custos e evitar desperdícios. |
| Multiplicar | Investimentos inteligentes | Fazer o dinheiro trabalhar para você através de juros compostos. |

A maioria das pessoas foca apenas no primeiro pilar e ignora os outros dois. O resultado é gente que ganha 20 mil reais por mês, mas gasta 21 mil e vive endividada. A riqueza não é medida pelo quanto você ganha, mas pelo quanto você acumula e multiplica ao longo do tempo.

### O Poder do "Não"
Dinheiro no banco não serve apenas para comprar coisas. Sua função primordial e mais nobre é comprar liberdade. Ter reservas financeiras permite que você diga não a situações degradantes. Um chefe abusivo, um relacionamento falido mantido por dependência financeira ou um cliente que desrespeita seu trabalho. Quem não tem dinheiro guardado é obrigado a dizer "sim" para tudo e vender sua dignidade por sobrevivência.`,
          examples: [
            "Mentalidade de Pobre: Recebe o salário, paga as contas, gasta o que sobra com lazer e reclama que não tem dinheiro para investir.",
            "Mentalidade de Rico: Recebe o salário, separa a parte do investimento primeiro (paga-se primeiro) e ajusta o padrão de vida para caber no restante."
          ],
          commonErrors: "Acreditar que precisa 'ter dinheiro sobrando' para começar a organizar as finanças. A verdade é o oposto: você só terá dinheiro sobrando quando começar a organizar, mesmo que seja com pouco.",
          summary: "O dinheiro é um excelente servo, mas um péssimo mestre. Se você não assumir o controle dele hoje, ele controlará suas decisões pelo resto da vida.",
          exercise: "Pegue um papel agora. Liste 3 situações recentes nos últimos anos onde a falta de dinheiro te obrigou a aceitar algo que você queria recusar."
        }
      },
      {
        id: 'l2',
        title: '2. Mentalidade de Crescimento',
        duration: '18 min',
        content: {
          intro: "Seu bolso nunca crescerá mais que sua mente. A riqueza é criada primeiro internamente, através de crenças e comportamento, para só depois se manifestar na conta bancária.",
          explanation: `### Crenças Limitantes e Dinheiro
Muitos de nós fomos programados com ideias nocivas sobre dinheiro desde a infância. Frases como "dinheiro é sujo", "rico é ganancioso" ou "dinheiro não traz felicidade" instalam um bloqueio subconsciente. Se o seu cérebro associa riqueza a algo negativo ou imoral, ele trabalhará ativamente para sabotar qualquer tentativa sua de enriquecer.

É preciso ressignificar o dinheiro. Ele é neutro. Ele apenas potencializa quem você já é. Se você é generoso, o dinheiro permitirá que você ajude muito mais pessoas. Se você é mesquinho, o dinheiro apenas tornará sua mesquinhez mais visível. Dinheiro é uma ferramenta de liberdade e ampliação do bem.

### Ativos vs Passivos
Esta é a distinção técnica mais importante que você aprenderá neste curso. A confusão entre estes dois conceitos é o que mantém a classe média endividada, mesmo ganhando bem.

| Tipo | Definição Simples | Exemplos Reais |
| --- | --- | --- |
| Ativo | Tudo aquilo que coloca dinheiro no seu bolso. | Ações, Imóveis alugados, Tesouro Direto, Negócios próprios. |
| Passivo | Tudo aquilo que tira dinheiro do seu bolso. | Carro, Casa própria (manutenção), Assinaturas não usadas. |

A regra do jogo é simples: pessoas ricas focam obsessivamente em adquirir ativos. A classe média compra passivos achando que são ativos (como financiar um carro de luxo achando que é um investimento), gerando despesas recorrentes que corroem a renda e aprisionam a pessoa no emprego.`,
          examples: [
            "Passivo: Comprar um iPhone de última geração parcelado em 12x. Ele perde valor assim que sai da loja e gera uma dívida mensal.",
            "Ativo: Pegar o mesmo valor e comprar cotas de Fundos Imobiliários. Todo mês, esse dinheiro gera uma renda que pode pagar a conta do seu celular atual."
          ],
          commonErrors: "Terceirizar a culpa. Culpar o governo, a economia, a família ou o chefe pela situação financeira. Enquanto você se vir como vítima, não terá poder para mudar sua realidade.",
          summary: "Enriqueça sua mente e seu bolso não terá escolha a não ser acompanhar esse crescimento. Foque em comprar ativos, não aparências.",
          exercise: "Faça um inventário da sua casa. Identifique pelo menos 3 coisas caras que você comprou achando que eram investimentos, mas que hoje apenas geram despesas ou perdem valor."
        }
      },
      {
        id: 'l3',
        title: '3. Diagnóstico Financeiro',
        duration: '20 min',
        content: {
          intro: "Você não pode curar o que não diagnosticou. Hoje vamos acender a luz no quarto escuro das suas finanças e encarar os números frios.",
          explanation: `### O Raio-X Financeiro
A maioria das pessoas vive no "achismo" financeiro. Acham que gastam X, mas na verdade gastam 2X. Para entender sua situação real, precisamos de dados, não de sentimentos. A intuição falha, os números não. Vamos dividir sua vida financeira em quatro blocos claros para análise.

1. Receita Líquida: O que realmente cai na sua conta após impostos. Não conte com o bruto, conte com o disponível.
2. Despesas Fixas: Moradia, luz, internet, escola. Custos de sobrevivência que acontecem todo mês.
3. Despesas Variáveis: Lazer, iFood, Uber, compras impulsivas. É aqui que o dinheiro costuma vazar.
4. Dívidas: O custo do passado. Parcelas de cartão, empréstimos e financiamentos.

### O Cálculo do Patrimônio Líquido
A medida real da sua riqueza não é seu salário, mas seu Patrimônio Líquido. Se você ganha 30 mil reais mas gasta tudo, você é pobre com alto padrão de vida. O Patrimônio Líquido é o resultado de tudo o que você tem (Ativos) menos tudo o que você deve (Passivos).

A fórmula é simples: Ativos menos Passivos é igual a sua Riqueza Real. Se o resultado for negativo, significa que você está tecnicamente quebrado. Reconhecer isso dói, mas é a dor da cura necessária para começar a mudança.`,
          examples: [
            "Cenário de Risco: O profissional que ganha bem, anda de carro importado financiado, mora em bairro nobre de aluguel e não tem reserva. Qualquer demissão o leva à falência em 30 dias.",
            "Cenário Seguro: Alguém que ganha menos, mas tem casa simples quitada, carro popular e investimentos que cobrem 6 meses de custo de vida."
          ],
          commonErrors: "Fazer estimativas de cabeça. Achar que gasta 800 reais de mercado quando, na realidade, gasta 1.500 porque vai picado várias vezes na semana. Use o extrato bancário dos últimos 3 meses.",
          summary: "O diagnóstico pode ser assustador, mas ele te dá o mapa. Sem saber onde você está, nenhum GPS consegue te levar para onde você quer ir.",
          exercise: "Crie sua Planilha da Verdade hoje. Liste todas as suas dívidas com: Valor Total, Valor da Parcela e Taxa de Juros Mensal."
        }
      },
      {
        id: 'l4',
        title: '4. A Regra de Ouro',
        duration: '15 min',
        content: {
          intro: "Existe uma lei universal na física financeira: a Lei do Gap. Se você violar essa lei, vai quebrar. Se respeitar, vai prosperar inevitavelmente.",
          explanation: `### O Gap Financeiro
A riqueza não provém do valor absoluto que você ganha, mas da diferença (o Gap) entre o que entra e o que sai. Se você ganha R$ 5.000,00 e gasta R$ 5.000,00, você está correndo parado. Se ganha R$ 20.000,00 e gasta R$ 21.000,00, está cavando um buraco.

O segredo não é apenas "ganhar mais", é manter o custo de vida controlado enquanto a renda sobe. Se você recebe um aumento, sua tendência natural é aumentar o padrão de vida. É preciso lutar contra isso.

### Inflação de Estilo de Vida
Este é o erro número um que impede a prosperidade da classe média. Ao ser promovido, a pessoa imediatamente troca o carro, muda para um apartamento maior ou começa a frequentar restaurantes mais caros. Isso a mantém na Corrida dos Ratos: correndo cada vez mais rápido apenas para permanecer no mesmo lugar financeiro, mas agora com boletos mais caros e maior estresse.

### Viva um Degrau Abaixo
A regra prática é viver um degrau abaixo da sua capacidade. Se você pode pagar um aluguel de R$ 3.000, more num de R$ 2.000. Se pode ter um carro de R$ 100 mil, tenha um de R$ 60 mil. Essa diferença é o que constrói sua liberdade.`,
          examples: [
            "Errado: Receber um aumento de R$ 1.000 e assumir uma nova parcela de R$ 1.000.",
            "Certo: Usar 100% do aumento salarial para aumentar o aporte mensal nos investimentos, mantendo o padrão de vida anterior."
          ],
          commonErrors: "Achar que sobrar pouco dinheiro não adianta e por isso gastar tudo. 'Ah, só sobrou 50 reais, vou pedir uma pizza'. Juros compostos funcionam com qualquer valor, o hábito é mais importante que a quantia inicial.",
          summary: "Não importa o tamanho do seu salário, importa o tamanho da sua sobra. A riqueza reside na margem.",
          exercise: "Calcule sua margem atual: (Receita - Despesas) / Receita. Se o resultado for menor que 10%, você está em zona de perigo e precisa cortar gastos urgentemente."
        }
      },
      {
        id: 'l5',
        title: '5. Armadilhas do Sistema',
        duration: '18 min',
        content: {
          intro: "O banco não é seu amigo. O gerente do banco não é seu consultor financeiro, ele é um vendedor com metas para bater. Aprenda a se defender.",
          explanation: `### Conflito de Interesses
O sistema financeiro foi desenhado para transferir dinheiro de quem tem pressa para quem tem paciência. Gerentes de banco possuem metas de venda de produtos que, na maioria das vezes, são péssimos para o cliente e ótimos para o banco. Você precisa estar ciente de que a instituição financeira visa o lucro dela, não o seu.

### Produtos Tóxicos Comuns
Você precisa saber identificar e recusar produtos que drenam seu patrimônio silenciosamente.

| Produto | O que o gerente diz | A realidade |
| --- | --- | --- |
| Título de Capitalização | "É uma forma forçada de guardar dinheiro e concorrer a prêmios." | É um empréstimo gratuito que você faz para o banco. O rendimento perde feio para a inflação. |
| Cheque Especial | "É um dinheiro extra para emergências." | É um dos juros mais caros do mundo. Usar isso é suicídio financeiro. |
| Consórcio | "É um investimento seguro para comprar bens." | Tem taxas de administração altas e você depende da sorte ou lance para ter o bem. |

### O Custo da Antecipação
A sociedade de consumo te vende a ideia de que você merece tudo "agora". Comprar parcelado é, na essência, antecipar o prazer e prolongar a dor. Você paga mais caro (juros embutidos) por algo que irá desvalorizar, comprometendo sua renda futura com decisões passadas.`,
          examples: [
            "Carro Zero: Perde cerca de 15% a 20% do valor no momento em que sai da concessionária. É um triturador de dinheiro.",
            "Cartão de Loja: Oferece 10% de desconto na primeira compra para te prender em um cartão com juros rotativos de 400% ao ano."
          ],
          commonErrors: "Aceitar 'cafézinho' com o gerente e sair com um seguro de vida ou previdência privada ruim. Lembre-se: se o banco está te ligando para oferecer, é porque é bom para eles.",
          summary: "Seja cético. Ninguém cuida do seu dinheiro melhor do que você. Aprenda a dizer 'não' para o gerente sem culpa.",
          exercise: "Abra o aplicativo do seu banco agora. Verifique se você está pagando 'Cesta de Serviços' (tarifa de manutenção). Por lei, você tem direito a uma conta de Serviços Essenciais gratuita. Cancele a tarifa."
        }
      }
    ]
  },
  {
    id: 'mod2',
    title: 'Módulo 2: Domando o Orçamento',
    lessons: [
      {
        id: 'l6',
        title: '6. O Método 50/30/20',
        duration: '16 min',
        content: {
          intro: "Orçamento não é sobre privação, é sobre direção. Se você não disser para onde seu dinheiro deve ir, ele vai desaparecer sem se despedir.",
          explanation: `### A Estrutura Ideal
Muitas pessoas falham em fazer orçamento porque tentam categorizar cada bala que compram. Isso é chato e insustentável. O método 50/30/20 simplifica tudo dividindo sua renda líquida em apenas três grandes blocos.

1. 50% para Necessidades (Essencial): Aqui entra tudo que é vital para sua sobrevivência e trabalho. Aluguel ou financiamento, condomínio, luz, água, mercado básico, transporte, saúde, educação. Se você perder o emprego, é esse valor que você precisa para não morar na rua.

2. 30% para Desejos (Estilo de Vida): A vida não é só pagar boleto. Aqui entra o lazer, jantar fora, streaming, viagens, hobbies, compras de roupas que não são essenciais. É o dinheiro da diversão. Se você cortar isso a zero, vai desistir do plano em dois meses por exaustão.

3. 20% para Liberdade (Prioridade Financeira): Este é o dinheiro do seu futuro. Serve para quitar dívidas (se tiver) ou para investir (se estiver no azul). Esse dinheiro deve sair da conta assim que o salário cai. Não é o que sobra, é prioridade.

### Ajuste de Rota
Se sua realidade hoje é 70/30/0, você tem um problema claro. Você precisará tomar decisões difíceis: mudar para uma casa mais barata, vender o carro ou aumentar drasticamente a renda extra para reequilibrar a balança.`,
          examples: [
            "Renda de R$ 4.000: R$ 2.000 para contas fixas, R$ 1.200 para lazer/compras, R$ 800 para investir.",
            "Automatização: Programe uma transferência automática para a corretora no dia do pagamento. O que os olhos não veem, o coração não sente (e você não gasta)."
          ],
          commonErrors: "Tentar investir 'o que sobrar' no fim do mês. A Lei de Parkinson diz que os gastos sempre se expandem para ocupar toda a renda disponível. Nunca sobra. Pague-se primeiro.",
          summary: "Defina um teto para seus gastos e um piso para seus investimentos. Essa é a fórmula matemática da consistência.",
          exercise: "Faça as contas agora. Distribua seu salário atual nas categorias 50/30/20 e veja onde está o maior desequilíbrio."
        }
      },
      {
        id: 'l7',
        title: '7. Os Ladrões Invisíveis',
        duration: '12 min',
        content: {
          intro: "Não é o elefante que pica, são os pernilongos. Pequenos gastos recorrentes e despercebidos drenam mais riqueza ao longo de uma década do que grandes compras esporádicas.",
          explanation: `### O Efeito Latte (Gastos Formiguinha)
Um gasto de R$ 15,00 por dia em lanche ou café parece inofensivo. Mas R$ 15 vezes 30 dias dá R$ 450,00 por mês. Em um ano, são R$ 5.400,00. Investido a juros compostos por 10 anos, isso viraria um carro popular. Não estou dizendo para você nunca tomar café, mas para ter consciência de que esses gastos não são invisíveis e impactam seu futuro.

### Assinaturas Fantasmas
Vivemos a era da subscrição. Netflix, Amazon, Spotify, Academia, Clube de Vinho, App de Meditação. Muitas vezes assinamos, usamos por um mês e esquecemos de cancelar. São débitos automáticos que comem 10%, 20% da sua verba de lazer sem você perceber.

### Tarifas Bancárias e Anuidades
Pagar anuidade de cartão de crédito hoje em dia é um atestado de desinformação. Com a concorrência das Fintechs, quase todos os grandes bancos oferecem isenção se você pedir ou gastar um mínimo. Pagar R$ 400 de anuidade é jogar dinheiro no lixo.`,
          examples: [
            "Uber para distâncias curtas: Substituir por caminhada gera economia e saúde.",
            "Delivery diário: Preparar marmitas semanais (meal prep) pode reduzir seu custo de alimentação em até 60%."
          ],
          commonErrors: "Achar que cortar o cafezinho vai te deixar milionário. O corte de gastos serve para criar disciplina e margem, mas o que enriquece de verdade é aumentar a renda e investir bem.",
          summary: "Estanque a sangria. Um balde furado nunca enche, não importa quanta água (dinheiro) você coloque nele.",
          exercise: "Pegue sua fatura do cartão. Identifique e cancele imediatamente pelo menos 2 assinaturas ou serviços recorrentes que você não usa com frequência."
        }
      },
      {
        id: 'l8',
        title: '8. Ferramentas de Controle',
        duration: '14 min',
        content: {
          intro: "A melhor ferramenta não é a mais complexa, é a que você usa. A complexidade é inimiga da execução. Vamos escolher o método que funciona para você.",
          explanation: `### Escolha sua Arma
Não existe um "melhor app". Existe o que se adapta à sua rotina e personalidade.

* Aplicativos Automáticos: Conectam na conta e puxam gastos sozinhos. Exigem pouco esforço, mas podem errar a categoria. Ideal para quem tem pouco tempo.
* Planilha Excel/Google: Personalização total. Você vê os números grandes na tela. Exige disciplina para abrir o PC e lançar. Ideal para analíticos.
* Caderno / Bloco de Notas: Consciência tátil. O ato de escrever dói e fixa a memória do gasto. Ideal para quem está endividado e precisa sentir a "dor" do gasto para parar de comprar.

### A Rotina Semanal
Não deixe para organizar as finanças uma vez por mês. Você vai esquecer o que comprou, vai desanimar com o tamanho da lista e vai desistir. Crie uma rotina sagrada: toda sexta-feira ou domingo, tire 15 minutos para categorizar a semana e ver se está dentro da meta.`,
          examples: [
            "Simplificação: Não crie categorias como 'Pão', 'Leite', 'Carne'. Use categorias macro: 'Mercado', 'Lazer', 'Transporte'.",
            "Centralização: Tente concentrar gastos no Cartão de Crédito (se tiver controle) pois ele gera um extrato único categorizado, facilitando o controle."
          ],
          commonErrors: "Baixar o app mais completo, configurar tudo e parar de usar na primeira semana. Comece simples. Um controle imperfeito que é feito é melhor que um perfeito que não existe.",
          summary: "O que não é medido não é gerenciado. Se você não sabe para onde seu dinheiro vai, nunca conseguirá redirecioná-lo para seus sonhos.",
          exercise: "Escolha uma ferramenta HOJE (App, Planilha ou Caderno) e registre todos os gastos de ontem e hoje. Só comece."
        }
      },
      {
        id: 'l9',
        title: '9. Metas SMART',
        duration: '15 min',
        content: {
          intro: "Sonho sem prazo é apenas delírio. 'Quero ser rico' não é uma meta, é um desejo vago. Vamos transformar vontades em planos de batalha.",
          explanation: `### A Metodologia SMART
Para que seu cérebro leve uma meta a sério e trabalhe por ela, é preciso sair do abstrato e ir para o concreto.

S (Específica): O que exatamente você quer? (Não "um carro", mas "um Honda Civic 2020 preto").
M (Mensurável): Quanto custa? (R$ 80.000).
A (Atingível): É possível com sua renda atual ou projetada?
R (Relevante): Por que isso importa? Vai melhorar sua vida de verdade?
T (Temporal): Quando? (Até dezembro de 2025).

### Engenharia Reversa
Quando você define o valor e o prazo, a meta se transforma em um boleto mensal. Se você quer uma viagem de R$ 12.000 em 12 meses, a conta é simples: R$ 1.000 por mês. Agora você não tem mais um "sonho", você tem uma conta de R$ 1.000 para pagar todo mês para o seu "Eu do Futuro". Se não couber no orçamento, você ajusta o prazo ou a meta, mas agora com base na realidade.`,
          examples: [
            "Meta Ruim: Quero limpar meu nome algum dia.",
            "Meta Boa (SMART): Quero quitar a dívida de R$ 4.000 do Santander até dia 20 de dezembro, economizando R$ 400 por mês cortando o iFood."
          ],
          commonErrors: "Estabelecer metas irreais, como juntar 1 milhão em um ano ganhando um salário mínimo. Isso gera frustração e desistência. Comece com metas pequenas para ganhar tração.",
          summary: "Dê um nome, um valor e uma data para seu dinheiro. Dinheiro sem destino definido acaba sendo gasto com trivialidades que você nem lembra depois.",
          exercise: "Defina sua meta principal para este ano. Escreva seguindo os 5 critérios SMART e cole na porta da geladeira ou no espelho do banheiro."
        }
      },
      {
        id: 'l10',
        title: '10. O Fundo da Paz (Reserva)',
        duration: '18 min',
        content: {
          intro: "Esqueça o termo 'Reserva de Emergência'. Emergência atrai problema. Vamos chamar de 'Fundo da Paz'. É o dinheiro que te permite dormir tranquilo quando o mundo lá fora está pegando fogo.",
          explanation: `### O Colchão de Segurança
Antes de pensar em investir em ações, criptomoedas ou trocar de carro, você tem uma obrigação: ter liquidez. Imprevistos NÃO são imprevistos, eles são certezas estatísticas. O carro VAI quebrar, alguém VAI ficar doente, o dente VAI doer ou uma demissão VAI acontecer. O Fundo da Paz serve para que esses eventos sejam apenas inconvenientes, não tragédias financeiras.

### Quanto guardar?
Para trabalhadores CLT ou Funcionários Públicos, recomendamos 6 meses do seu custo de vida mensal. Para Autônomos ou Empreendedores, o ideal são 12 meses, pois a renda oscila mais.

### Onde investir esse dinheiro?
A regra de ouro aqui é que rentabilidade não importa. O que importa é SEGURANÇA e LIQUIDEZ (poder sacar na hora). O Tesouro Selic ou CDBs de Liquidez Diária de grandes bancos são as melhores opções. A Poupança perde para a inflação, e Ações ou Fundos Imobiliários oscilam e não servem para reserva.`,
          examples: [
            "Com fundo: O carro quebra, custa R$ 2.000. Você paga à vista, ganha desconto e segue a vida.",
            "Sem fundo: O carro quebra. Você parcela no cartão, paga juros, se enrola na fatura seguinte, entra no cheque especial e cria uma bola de neve de dívidas."
          ],
          commonErrors: "Usar a reserva para oportunidades de consumo ('Ah, o iPhone tá em promoção, é uma emergência'). Isso é autossabotagem. Reserva é para proteger a vida, não para melhorar o estilo de vida.",
          summary: "Construa o alicerce antes do telhado. Dormir sabendo que você tem 6 meses de contas pagas no banco é o melhor travesseiro do mundo.",
          exercise: "Calcule quanto é seu custo de vida mensal x 6. Anote esse valor. Essa é sua 'Linha de Chegada' da Fase 1."
        }
      }
    ]
  },
  {
    id: 'mod3',
    title: 'Módulo 3: Exterminador de Dívidas',
    lessons: [
      {
        id: 'l11',
        title: '11. Mapeando o Inimigo',
        duration: '16 min',
        content: {
          intro: "A guerra contra os juros começa agora. Pare de ignorar as ligações de cobrança e de esconder as cartas fechadas na gaveta. Vamos partir para o ataque.",
          explanation: `### O Inventário da Dívida
O primeiro passo para sair do buraco é parar de cavar e olhar para cima. Você precisa listar TODAS as suas dívidas. Não esconda nada de si mesmo. Crie uma tabela com: Credor, Valor Original, Valor Atual (com juros), Custo Efetivo Total (CET - a taxa real de juros) e Status (em dia ou atrasada).

### Triagem de Guerra: O Que Pagar Primeiro?
Nem todas as dívidas são iguais. Devemos classificá-las pelo dano que causam.
Primeiro, as Dívidas Explosivas (Cartão de Crédito e Cheque Especial), que possuem juros abusivos de até 400% ao ano.
Segundo, as Dívidas Essenciais (Luz, Água, Aluguel), que garantem sua sobrevivência.
Terceiro, Dívidas com Garantia (Carro, Casa), onde você pode perder o bem.
Por último, Dívidas Suaves (familiares ou empréstimos com taxas baixas).`,
          examples: [
            "Erro crasso: Usar o dinheiro que tinha para pagar o Cartão de Crédito (juros altos) para pagar uma dívida com um tio (juros zero) só por vergonha. A matemática não liga para seus sentimentos.",
            "Focar em pagar a dívida menor primeiro (Método Bola de Neve) para ganhar motivação psicológica, mesmo que a matemática diga para pagar a de maior juros (Avalanche)."
          ],
          commonErrors: "Fazer acordos de parcelamento pagando apenas o mínimo da fatura ou aceitando a primeira proposta do banco. Isso apenas 'rola' a dívida e a torna impagável.",
          summary: "Encare os números. O monstro sempre parece menor quando acendemos a luz e olhamos diretamente para ele.",
          exercise: "Preencha a tabela de dívidas hoje. Identifique qual delas possui a maior taxa de juros (CET). Essa é sua Inimiga Número 1."
        }
      },
      {
        id: 'l12',
        title: '12. O Jogo da Negociação',
        duration: '20 min',
        content: {
          intro: "O banco não quer seu nome sujo, ele quer recuperar dinheiro. Para ele, receber 10% de uma dívida perdida é melhor que zero. Use isso a seu favor.",
          explanation: `### A Regra dos 90% de Desconto
Dívidas bancárias antigas (vencidas há mais de 2 ou 3 anos) e sem garantia real geralmente são consideradas 'Prejuízo' no balanço do banco e vendidas para empresas de recuperação de crédito por centavos. Isso abre margem para descontos agressivos. É comum ver dívidas de R$ 20.000 sendo quitadas por R$ 2.000 ou menos em feirões como o do Serasa Limpa Nome.

### Táticas de Negociação
Nunca demonstre desespero. Se o cobrador perceber que você precisa limpar o nome hoje para um financiamento, ele não dará desconto. Tenha o dinheiro à vista, pois os maiores descontos são para quitação cash. Parcelar dívida velha é ruim, pois reativa os juros. Use canais oficiais como Feirões do Serasa ou o chat direto do banco, que costumam ter alçadas de desconto maiores que o atendente do telefone.

### Dívida Caduca?
Após 5 anos, o nome sai do SPC/Serasa (a dívida 'caduca' nos bureaus de crédito). Porém, a dívida continua existindo internamente no banco. Você não será processado, mas dificilmente conseguirá crédito naquela instituição novamente (o tal do 'Restrição Interna').`,
          examples: [
            "Ameaçar portabilidade: Dizer ao gerente que vai levar seu salário para outro banco se as taxas não melhorarem é uma arma poderosa.",
            "Proposta firme: 'Tenho R$ 1.500 para quitar essa dívida de R$ 5.000 agora. É pegar ou largar.' Muitas vezes, funciona."
          ],
          commonErrors: "Fazer um acordo que não consegue pagar. Se você pagar a primeira parcela e falhar na segunda, o acordo é quebrado, a dívida volta ao valor original (cheio) e você perdeu o dinheiro da entrada.",
          summary: "Quem deve tem o dinheiro, logo, tem o poder. Negocie sem vergonha. É apenas um negócio.",
          exercise: "Acesse o site do Serasa Limpa Nome ou o Registrato do Banco Central e verifique a situação real das suas dívidas e ofertas disponíveis."
        }
      },
      {
        id: 'l13',
        title: '13. Troca de Dívida (Portabilidade)',
        duration: '15 min',
        content: {
          intro: "A matemática financeira pode salvar sua pele. Trocar uma dívida cara por uma barata é a jogada mais inteligente para estancar a sangria dos juros.",
          explanation: `### Arbitragem de Juros
Se você deve R$ 5.000 no Cheque Especial pagando 12% ao mês, sua dívida dobra em menos de um ano. Se você pegar um Empréstimo Consignado (ou Pessoal) de R$ 5.000 a 2% ou 3% ao mês, quitar o Cheque Especial e ficar devendo o Consignado, você trocou uma dívida impagável por uma pagável.

### Ranking de Crédito
Sempre busque descer nessa escada do crédito mais caro para o mais barato. O Empréstimo com Garantia (Imóvel/Veículo) tem as menores taxas. Depois vem o Consignado, seguido da Antecipação de FGTS e Empréstimo Pessoal. Fuja do Cheque Especial e do Cartão Rotativo, que são o inferno financeiro.

Atenção: Essa estratégia SÓ funciona se você pegar o crédito barato, quitar a dívida cara E PARAR de usar o cartão/limite. Se você liberar o limite e gastar de novo, terá duas dívidas e quebrará.`,
          examples: [
            "Usar o FGTS: Muitas vezes vale a pena antecipar o Saque-Aniversário para matar uma dívida de cartão, pois o rendimento do FGTS (3% ao ano + TR) perde feio para os juros da dívida.",
            "Garantia de Carro: Refinanciar seu carro quitado pode levantar dinheiro com juros de 1.5% a.m. para pagar um cartão de 14% a.m."
          ],
          commonErrors: "Pegar o empréstimo para 'limpar o nome' e voltar a gastar. Isso não é solução, é cavar um buraco mais fundo.",
          summary: "Seja inteligente. Use as próprias armas do sistema financeiro para se libertar dele. Troque juros abusivos por juros justos.",
          exercise: "Simule um empréstimo pessoal no seu banco ou em fintechs e compare o Custo Efetivo Total (CET) com a taxa que você paga hoje no cartão/cheque especial."
        }
      },
      {
        id: 'l14',
        title: '14. Psicologia do Consumo',
        duration: '18 min',
        content: {
          intro: "O marketing gasta bilhões para hackear seu cérebro. Se você não entender seus gatilhos mentais, será uma marionete nas mãos das lojas.",
          explanation: `### O Método HALT
Nunca tome decisões financeiras (compras ou investimentos) quando estiver em estados emocionais alterados. A sigla HALT resume os perigos: Hungry (Fome), Angry (Raiva), Lonely (Solidão) e Tired (Cansaço). Esses estados diminuem sua força de vontade racional e aumentam a impulsividade.

### O Custo em Vida
Pare de olhar o preço em Reais. Converta para Horas de Vida. Divida o preço do produto pelo quanto você ganha por hora líquida. Se um tênis custa R$ 600 e você ganha R$ 20 por hora, ele custa 30 horas de trabalho. Vale a pena ficar sentado 30 horas no escritório, aguentando trânsito e chefe, em troca desse par de tênis? Essa pergunta costuma matar a vontade de comprar na hora.`,
          examples: [
            "Promoções falsas: 'De R$ 500 por R$ 299'. Seu cérebro foca na 'economia' de R$ 200, mas esquece que você gastou R$ 299 que não precisava.",
            "Frete grátis: Gastar R$ 50 a mais em produtos inúteis só para não pagar R$ 15 de frete. Matemática básica falhando."
          ],
          commonErrors: "Ir ao shopping como 'passeio'. Shopping é centro de compras, feito para tirar dinheiro de você. Se quer passear, vá a um parque. Quem passeia em shopping compra o que não precisa.",
          summary: "Domine suas emoções ou elas devorarão seu salário. A compra por impulso é uma tentativa rápida de sentir alívio, mas o efeito passa e a fatura fica.",
          exercise: "Calcule o valor da sua hora de trabalho hoje (Salário Líquido / Horas trabalhadas). Tenha esse número na cabeça na próxima compra."
        }
      },
      {
        id: 'l15',
        title: '15. Blindagem de Comportamento',
        duration: '14 min',
        content: {
          intro: "Sair do buraco é difícil, cair de novo é muito fácil. Vamos instalar barreiras de proteção para que você nunca mais volte a ser escravo de dívidas.",
          explanation: `### A Vida à Vista
Adote uma filosofia radical pelos próximos 12 meses: Se não tem dinheiro para pagar à vista no débito ou PIX, você não pode comprar. Ponto. O crédito deve ser tratado como uma ferramenta perigosa, útil se souber usar, fatal se distrair. Pagar à vista garante descontos e mantém seus pés no chão.

### Crie Fricção
A facilidade é inimiga da economia. O "Comprar com 1 Clique" da Amazon é genial para eles e terrível para você. Remova cartões salvos dos apps e navegadores. Obrigue-se a levantar e pegar a carteira. Desinscreva-se de e-mails de ofertas. Quanto mais difícil for o processo de compra, mais tempo seu cérebro racional terá para assumir o controle e perguntar: 'Eu realmente preciso disso?'.`,
          examples: [
            "Regra das 24 horas: Se quiser comprar algo não essencial, espere 24 horas. Em 80% dos casos, a vontade passa.",
            "Desinstalar apps de e-commerce do celular e usar apenas no computador. Isso reduz drasticamente as compras por tédio."
          ],
          commonErrors: "Reativar o cartão de crédito e aumentar o limite assim que limpa o nome, achando que 'agora aprendi'. O hábito leva tempo para mudar. Mantenha limites baixos.",
          summary: "Liberdade é não dever nada a ninguém. Proteja essa liberdade criando barreiras contra seus próprios impulsos.",
          exercise: "Remova os dados do seu cartão de crédito de todos os aplicativos (iFood, Uber, Amazon) e sites de compra agora mesmo. Crie a dificuldade necessária."
        }
      }
    ]
  },
  {
    id: 'mod4',
    title: 'Módulo 4: A Multiplicação',
    lessons: [
      {
        id: 'l16',
        title: '16. Renda Fixa x Renda Variável',
        duration: '20 min',
        content: {
          intro: "Investir não é aposta, loteria ou cassino. É alocação racional de recursos baseada em risco e retorno. Vamos entender o terreno onde você vai pisar.",
          explanation: `### O Grande Duelo
Existem, basicamente, dois tipos de investimento no universo.

Na Renda Fixa (Dívida), você EMPRESTA dinheiro para alguém (Banco ou Governo). Em troca, eles te devolvem o dinheiro mais juros numa data combinada. O risco é menor e o retorno é previsível. Exemplos: Tesouro Direto, CDB, LCI. Serve para proteger patrimônio e reservas de curto prazo.

Na Renda Variável (Sociedade), você se torna SÓCIO de um negócio (Empresas ou Imóveis). Você não tem garantia de retorno, mas participa dos lucros. O risco oscilação de preço é maior, mas o potencial de retorno no longo prazo é infinito. Exemplos: Ações e Fundos Imobiliários. Serve para multiplicar patrimônio no longo prazo.

### A Carteira Inteligente
Não coloque tudo em um só lugar. Use a Renda Fixa para segurança e objetivos com data (viagem, carro). Use a Renda Variável para aposentadoria e liberdade financeira, dinheiro que pode ficar investido por 10 anos ou mais.`,
          examples: [
            "Erro clássico: Colocar dinheiro do casamento (que acontece em 1 ano) na Bolsa de Valores. O mercado cai 30% na véspera e você se desespera.",
            "Erro conservador: Deixar dinheiro da aposentadoria (20 anos) na Poupança. A inflação vai destruir seu poder de compra e você chegará pobre na velhice."
          ],
          commonErrors: "Buscar a 'dica quente' ou o 'investimento do momento'. Quem segue manada vira churrasco. Estude os fundamentos.",
          summary: "Diversificação é o único 'almoço grátis' do mercado. Nunca coloque todos os ovos na mesma cesta.",
          exercise: "Descubra seu perfil de investidor (Suitability) no app da sua corretora. Isso vai te dizer quanto de risco seu estômago aguenta."
        }
      },
      {
        id: 'l17',
        title: '17. O Tesouro Direto',
        duration: '22 min',
        content: {
          intro: "A porta de entrada dos investimentos. Empreste dinheiro para o Governo Federal e tenha a garantia mais sólida do país.",
          explanation: `### O Cardápio do Tesouro
Existem 3 pratos principais no cardápio do governo, e escolher o errado pode te dar prejuízo.

O Tesouro Selic acompanha a taxa básica de juros. Ele sempre sobe, nunca cai (rentabilidade positiva diária). É ideal para Reserva de Emergência e objetivos de curto prazo.

O Tesouro IPCA+ paga a Inflação mais uma taxa fixa. Ele garante que seu dinheiro sempre vai comprar mais no futuro do que compra hoje (ganho real). É ideal para aposentadoria e longo prazo.

O Tesouro Prefixado tem uma taxa fixa combinada na hora. É bom para médio prazo, mas se a inflação subir muito, você pode perder poder de compra.

### Marcação a Mercado
Nos títulos IPCA e Prefixado, o preço do título oscila todo dia. Se você precisar vender ANTES do vencimento, pode perder dinheiro. A regra é clara: Se comprar IPCA ou Prefixado, leve até a data final para receber exatamente o contratado. O Tesouro Selic é o único que você pode vender a qualquer hora sem risco de perda nominal.`,
          examples: [
            "Selic: Você coloca R$ 1.000. Amanhã tem R$ 1.000,50. Depois R$ 1.001,00. É a escadinha segura.",
            "IPCA+ 2045: Você coloca R$ 1.000. Amanhã pode ter R$ 980 (se os juros subirem) ou R$ 1.050 (se caírem). Se esperar até 2045, recebe o combinado. Se vender no susto, perde."
          ],
          commonErrors: "Vender títulos de longo prazo (IPCA) antecipadamente em momentos de estresse do mercado. Isso transforma uma oscilação virtual em prejuízo real.",
          summary: "O Tesouro é o alicerce. Sem uma base sólida em Renda Fixa, você não terá paz para arriscar na Bolsa.",
          exercise: "Entre no site oficial do Tesouro Direto e use o simulador. Veja quanto R$ 300 mensais no Tesouro IPCA+ virariam em 20 anos."
        }
      },
      {
        id: 'l18',
        title: '18. Fundos Imobiliários (FIIs)',
        duration: '25 min',
        content: {
          intro: "O sonho do brasileiro é viver de aluguel. Com os FIIs, você pode ser dono de shoppings, prédios corporativos e galpões logísticos com R$ 10,00, sem lidar com inquilino ou IPTU.",
          explanation: `### O Que São FIIs?
Imagine que um Shopping custa 100 milhões. Você não pode comprar. Mas dividimos esse shopping em 10 milhões de pedacinhos (cotas) de R$ 10,00. Você compra 10 cotas. Você é dono de uma fração do shopping. Todo mês, o shopping recebe os aluguéis das lojas, paga as despesas e divide o lucro líquido entre os donos das cotas, isento de Imposto de Renda. Isso cai direto na sua conta.

### Tijolo vs Papel
Existem Fundos de Tijolo, que são donos de imóveis reais e ganham com aluguel e valorização do imóvel. E existem Fundos de Papel, que investem em dívidas do setor imobiliário (CRIs). Eles funcionam como um banco emprestando para construtoras. Pagam dividendos maiores, mas não têm o imóvel físico protegendo contra a inflação no longo prazo.

### A Bola de Neve
O objetivo do investidor de FIIs é atingir o "Número Mágico": a quantidade de cotas necessária para que o rendimento mensal pague uma nova cota. Exemplo: Se uma cota custa R$ 10 e paga R$ 0,10, você precisa de 100 cotas. Quando atingir isso, você compra uma cota nova sem tirar do bolso, e o efeito dos juros compostos explode.`,
          examples: [
            "Liquidez: Vender um apartamento demora meses e custa caro (cartório, corretagem). Vender cotas de FIIs leva segundos pelo celular e o dinheiro cai em 2 dias.",
            "Diversificação: Com R$ 1.000 você compra cotas de 10 fundos diferentes, se expondo a centenas de imóveis e inquilinos. Risco diluído."
          ],
          commonErrors: "Olhar apenas o Dividend Yield (quanto paga de aluguel) e ignorar a qualidade dos imóveis. Fundo ruim pode pagar muito por pouco tempo antes de quebrar. Olhe a localização e a gestão.",
          summary: "FIIs são a melhor ferramenta para gerar renda passiva mensal e motivar o investidor iniciante a continuar aportando.",
          exercise: "Pesquise o fundo 'MXRF11' (apenas exemplo educativo, não recomendação). Veja quanto custa uma cota e quanto pagou de rendimento no último mês."
        }
      },
      {
        id: 'l19',
        title: '19. Ações: Sócios de Gigantes',
        duration: '25 min',
        content: {
          intro: "Bolsa não é cassino. Ao comprar uma ação, você não está comprando um papelzinho piscando na tela, você está comprando um pedaço de um negócio real, com funcionários, produtos e lucro.",
          explanation: `### Mentalidade de Sócio
Quando você compra uma ação da WEG, Itaú ou Vale, você se torna sócio. Se a empresa lucra, você ganha parte desse lucro (Dividendos). Se a empresa cresce e vale mais, sua cota valoriza. O investidor de verdade torce para a ação CAIR. Por quê? Porque se a empresa é boa e o preço cai, ele pode comprar mais barato e aumentar sua participação.

### Buy and Hold
A estratégia mais vencedora da história não é ficar comprando e vendendo todo dia (Day Trade), enriquecendo a corretora com taxas. É comprar boas empresas, que dão lucro consistente há anos, têm dívidas controladas e boa gestão, e SEGURAR por décadas. O tempo e os juros compostos fazem o trabalho pesado.

### Como escolher empresas?
Use o filtro básico de qualidade: A empresa dá lucro há 5 ou 10 anos seguidos? Ela deve menos do que consegue gerar de caixa? Ela está em um setor perene (que sempre vai existir, como bancos, energia, seguros)?`,
          examples: [
            "Quem comprou ações do Banco do Brasil há 20 anos e apenas reinvestiu os dividendos, multiplicou o capital por dezenas de vezes.",
            "Day Trade: Estatísticas mostram que mais de 95% das pessoas que tentam viver de Day Trade perdem dinheiro. Não tente ser o esperto, seja o consistente."
          ],
          commonErrors: "Vender tudo em pânico quando o jornal diz que 'A Bolsa despencou'. Nessas horas, o patrimônio troca de mãos: dos desesperados para os preparados.",
          summary: "A Bolsa de Valores é um mecanismo eficiente de transferência de dinheiro dos impacientes para os pacientes. Seja paciente.",
          exercise: "Entre no site 'Status Invest' ou 'Investidor10'. Pesquise o histórico de lucros de uma empresa que você admira. Veja se a barrinha de lucro é crescente."
        }
      },
      {
        id: 'l20',
        title: '20. ETFs: O Investimento Preguiçoso',
        duration: '18 min',
        content: {
          intro: "E se você não quiser analisar balanços, ler relatórios ou escolher empresas? E se você pudesse comprar 'o mercado inteiro' de uma vez só? Apresento os ETFs.",
          explanation: `### O Cesto de Ações
ETF (Exchange Traded Fund) é um fundo passivo. Imagine uma cesta. Em vez de escolher qual maçã comprar, você compra a cesta inteira com todas as frutas do mercado. O ETF "BOVA11", por exemplo, compra as 80 maiores empresas do Brasil (Itaú, Vale, Petrobras...). Se o Brasil cresce, você ganha. O "IVVB11" compra as 500 maiores empresas dos Estados Unidos. Você investe nas maiores potências do mundo, em Dólar, sem sair do Brasil.

### Vantagens da Gestão Passiva
Com pouco dinheiro você se expõe a centenas de empresas (diversificação extrema). Se uma empresa falir, não afeta seu patrimônio. Além disso, o índice elimina as empresas ruins e coloca as boas automaticamente. Você sempre está posicionado nas vencedoras com baixo custo.

### A Estratégia Neutra
Para 99% das pessoas, comprar um ETF global todo mês, sem olhar preço, vai entregar um resultado superior a tentar escolher ações individuais. É chato, é simples e funciona absurdamente bem.`,
          examples: [
            "IVVB11: Permite dolarizar parte do seu patrimônio. Se o Dólar sobe ou as empresas americanas crescem, você ganha nas duas pontas.",
            "WRLD11: Investe em mais de 9.000 empresas do mundo todo. É literalmente comprar a economia global."
          ],
          commonErrors: "Achar que ETF é ruim porque 'não vai te deixar rico rápido'. Investimento bom é como ver a grama crescer. Se quer emoção, vá ao estádio de futebol.",
          summary: "Na dúvida, compre o mercado. É difícil ganhar do mercado consistentemente, então junte-se a ele.",
          exercise: "Compare o gráfico de rentabilidade do ETF IVVB11 contra o índice Bovespa (IBOV) nos últimos 5 anos. O resultado vai te surpreender."
        }
      }
    ]
  },
  {
    id: 'mod5',
    title: 'Módulo 5: Acelerando a Renda',
    lessons: [
      {
        id: 'l21',
        title: '21. A Equação da Renda',
        duration: '20 min',
        content: {
          intro: "Economizar tem limite (você só pode cortar gastos até o zero). Ganhar mais não tem limite (o teto é infinito). Vamos parar de jogar na defesa e começar a atacar.",
          explanation: `### Por que você ganha o que ganha?
Você não é pago pelo seu esforço, pelo seu suor ou pelo quanto você precisa. O mercado é frio. Você é pago pela complexidade do problema que resolve e pela escala (quantas pessoas atinge). Um neurocirurgião ganha mais que um porteiro não porque é melhor pessoa, mas porque resolve um problema mais difícil e raro. Um professor online ganha mais que um presencial porque ensina 10.000 alunos ao invés de 30.

Para ganhar mais, você precisa se tornar RARO ou ESCALÁVEL.

### Renda Ativa vs Passiva vs Escalável
Renda Ativa é vender horas (Salário, Uber). Se parar, não recebe.
Renda Passiva é dinheiro trabalhando (Dividendos, Aluguéis).
Renda Escalável é vender produtos ou sistemas (Curso online, Livro, Software). Você cria uma vez e vende para milhões. O esforço é desvinculado do ganho. O objetivo do jogo é usar a Renda Ativa para comprar Ativos e criar projetos Escaláveis.`,
          examples: [
            "Escala: O Neymar não ganha milhões por chutar uma bola. Ele ganha porque milhões de pessoas assistem ele chutar a bola (Publicidade/TV).",
            "Impacto: Se você economiza R$ 1 milhão para uma empresa, é justo cobrar R$ 100 mil de comissão. Se você só cumpre horário, receberá o piso da categoria."
          ],
          commonErrors: "Focar 100% em cortar o cafezinho e 0% em aprender novas habilidades para ser promovido. O aumento de salário tem muito mais impacto na riqueza que a economia doméstica.",
          summary: "Pare de perseguir o dinheiro e comece a perseguir problemas. O dinheiro é apenas o aplauso do mercado pela solução que você entregou.",
          exercise: "Liste 3 habilidades que você tem. Como você poderia empacotar uma delas para vender para 100 pessoas ao invés de 1?"
        }
      },
      {
        id: 'l22',
        title: '22. Negociação Salarial e Carreira',
        duration: '22 min',
        content: {
          intro: "Seu chefe não vai te dar aumento por bondade. Empresas são moinhos de lucro. Você precisa provar, com números, que você é um investimento, não um custo.",
          explanation: `### O Dossiê de Valor
Nunca entre na sala do chefe para pedir aumento de mãos vazias ("Ah, o aluguel subiu"). O mercado não liga para suas contas. Prepare um documento de 1 página com os resultados que você entregou nos últimos 12 meses, quanto dinheiro você fez a empresa ganhar ou economizar e um comparativo salarial do mercado mostrando que você está defasado.

### O Timing e a Abordagem
Peça feedback ANTES de pedir aumento. "O que eu preciso fazer para atingir o próximo nível?". Crie um compromisso. Quando você entregar o combinado, o aumento é a consequência natural. Se você entregar e o aumento não vier, você tem sua resposta: é hora de mudar de empresa. Mudar de emprego a cada 2 ou 3 anos costuma aumentar o salário mais rápido que esperar promoções internas.`,
          examples: [
            "Postura: Não peça 'por favor'. Apresente um 'business case'. 'Entreguei X, o mercado paga Y, gostaria de ajustar minha remuneração para Z para continuarmos crescendo juntos.'",
            "Contraproposta: Se a empresa não pode dar dinheiro agora, negocie benefícios (home office, curso pago, bônus variável)."
          ],
          commonErrors: "Levar a negativa para o lado pessoal, ficar de 'birra' e parar de trabalhar. Isso queima seu filme e te impede de conseguir boas referências para o próximo emprego.",
          summary: "Você é uma empresa de uma pessoa só (S.A.). Seu empregador é seu cliente. Se o cliente paga mal, você busca clientes melhores, mas nunca entrega um serviço ruim.",
          exercise: "Pesquise no Glassdoor ou LinkedIn Vagas a média salarial para seu cargo. Você está sendo pago o justo? Se não, atualize seu currículo hoje."
        }
      },
      {
        id: 'l23',
        title: '23. Empreendedorismo Digital',
        duration: '25 min',
        content: {
          intro: "A internet democratizou a riqueza. Nunca na história da humanidade foi tão barato começar um negócio. Você tem uma loja global no seu bolso.",
          explanation: `### O Poder da Margem e Escala
No mundo físico, abrir uma loja custa R$ 100 mil. No digital, custa o preço de um domínio. Existem modelos excelentes para começar como Renda Extra.
O Infoprodutor vende conhecimento (cursos, e-books) com margem de lucro de quase 100%. O Afiliado vende produtos dos outros e ganha comissão. Serviços Digitais como Gestão de Tráfego e Design têm demanda infinita. E o Dropshipping permite vender produtos físicos sem ter estoque.

### O Conceito de MVP
Não gaste meses criando a logo perfeita. Crie uma versão "feia" e funcional do seu produto e tente vender. O mercado vai dizer se vale a pena. Falhe rápido e barato.`,
          examples: [
            "Exemplo Real: Uma pessoa que ama organizar armários cria um Instagram dando dicas, ganha seguidores e lança um e-book 'Guia da Casa Organizada' por R$ 47. Vende 100 cópias = R$ 4.700 extras.",
            "Freelance Global: Vender serviços para fora (Upwork, Fiverr) ganhando em Dólar. O real vale 5x menos. Seu esforço vale 5x mais."
          ],
          commonErrors: "Achar que o mercado está saturado. O mercado está cheio de amadores ruins. Sempre existe espaço enorme para quem é profissional, cumpre prazos e entrega qualidade.",
          summary: "Não seja apenas um consumidor de conteúdo. Torne-se um criador. A internet é uma ferramenta de impressão de dinheiro se souber usar.",
          exercise: "Cadastre-se em uma plataforma (Hotmart, Kiwify, Eduzz) e olhe o 'Mercado'. Veja o que as pessoas estão vendendo. Isso vai te dar ideias."
        }
      },
      {
        id: 'l24',
        title: '24. Renda Extra e Freelance',
        duration: '18 min',
        content: {
          intro: "Use suas noites e finais de semana para construir seu império, não apenas para descansar do trabalho que você talvez nem goste.",
          explanation: `### Ocupando o Tempo Ocioso
Todos temos as mesmas 24 horas. A diferença é o que fazemos das 19h às 23h. Se você usar esse tempo para Netflix, terá diversão. Se usar para Renda Extra, terá liberdade. Renda extra não deve ser usada para pagar pizza. Deve ser 100% investida. É o turbo da sua máquina de riqueza.

### Freelance Estratégico
Não faça bicos aleatórios. Tente fazer renda extra em áreas que te ensinem habilidades valiosas. Entregar panfleto não ensina nada escalável. Gerenciar o Instagram da padaria do bairro ensina marketing, negociação e design.

### A Transição de Carreira
Quando sua renda extra atingir 70% a 100% do seu salário fixo de forma consistente por 6 meses, você tem a opção de demitir seu chefe e empreender full-time com segurança.`,
          examples: [
            "Arbitragem de Serviços: Você fecha um contrato de design por R$ 500, contrata um designer iniciante por R$ 200, gerencia a qualidade e lucra R$ 300 sem 'colocar a mão na massa' (apenas gestão).",
            "Passeador de Cães (Dog Walker): Alta demanda em grandes cidades, paga bem por hora e exercita o corpo."
          ],
          commonErrors: "Gastar o dinheiro da renda extra aumentando o padrão de vida. Esse dinheiro é sagrado. Ele deve ir direto para a corretora.",
          summary: "O trabalho enriquece, o trabalho inteligente liberta. Use sua força de trabalho excedente para comprar sua liberdade futura.",
          exercise: "Pense em um serviço que você pode oferecer este fim de semana para um vizinho ou amigo por R$ 50 ou R$ 100. Execute."
        }
      },
      {
        id: 'l25',
        title: '25. Networking e Ambiente',
        duration: '15 min',
        content: {
          intro: "Você é a média das 5 pessoas com quem mais convive. Se você anda com 5 endividados que reclamam da vida, você será o sexto.",
          explanation: `### O Poder do Contágio Social
O ser humano é um animal social mimético. Copiamos o comportamento do grupo para sermos aceitos. Se seu grupo gasta tudo em balada e carro financiado, você se sentirá um alienígena por investir. Se seu grupo fala de negócios e investimentos, você terá vergonha de não evoluir. Para mudar de vida, muitas vezes é preciso mudar de ambiente.

### Networking Verdadeiro
Networking não é trocar cartão de visita ou adicionar no LinkedIn. É gerar valor. O interesseiro pergunta "O que você pode fazer por mim?". O interessante pergunta "Como eu posso te ajudar?". Seja útil. Conecte pessoas. Resolva problemas. Quando você precisar, a reciprocidade agirá a seu favor.`,
          examples: [
            "Eventos Presenciais: Pagar para ir em eventos da sua área não é gasto, é investimento em acesso. Uma conversa no café pode valer milhões ou gerar uma parceria de anos.",
            "Mentores Virtuais: Se você não conhece ninguém rico pessoalmente, use a internet. Siga e consuma conteúdo de pessoas que estão onde você quer chegar."
          ],
          commonErrors: "Pedir mentoria de graça para gente ocupada. Ninguém tem tempo a perder. Em vez de pedir, ofereça ajuda específica. Isso chama atenção.",
          summary: "Sozinho você vai mais rápido, acompanhado (das pessoas certas) você vai mais longe. Cuide do seu ecossistema social.",
          exercise: "Faça uma limpa no Instagram. Deixe de seguir perfis de fofoca ou ostentação vazia. Comece a seguir 5 perfis de educação financeira e negócios."
        }
      }
    ]
  },
  {
    id: 'mod6',
    title: 'Módulo 6: Liberdade e Legado',
    lessons: [
      {
        id: 'l26',
        title: '26. Elisão Fiscal (O Leão do Imposto)',
        duration: '20 min',
        content: {
          intro: "Sonegar é crime e dá cadeia. Elisão Fiscal é inteligência e dá lucro. Aprenda a usar a lei para pagar o mínimo de imposto possível.",
          explanation: `### O Sócio Majoritário
O Governo é seu sócio em tudo. Ele leva 27,5% do seu salário, parte do seu lucro e do seu consumo. Reduzir essa mordida legalmente é essencial para acelerar a riqueza.

### Estratégias Básicas
A Tabela Regressiva da Renda Fixa beneficia quem tem paciência: quanto mais tempo o dinheiro fica, menos imposto paga (cai de 22,5% para 15% após 2 anos).
Existem investimentos isentos, como LCI, LCA e dividendos de Fundos Imobiliários. O governo incentiva esses setores e não cobra IR.
Para quem ganha muito e declara no modelo completo, a Previdência PGBL permite abater até 12% da renda bruta anual na base de cálculo, gerando uma restituição gorda hoje.`,
          examples: [
            "Giro de Carteira: O investidor ansioso que compra e vende toda hora paga taxas e impostos máximos. No final de 10 anos, ele tem 40% menos patrimônio que o investidor quieto.",
            "PJ x CLT: Para rendas altas, abrir uma empresa (PJ) e emitir nota fiscal pode reduzir a carga tributária drasticamente. Consulte um contador."
          ],
          commonErrors: "Esquecer de declarar ações no IR Anual. Mesmo que não tenha imposto a pagar, a declaração da posse e das operações é obrigatória. Um erro bobo pode bloquear seu CPF.",
          summary: "Não divida seu lucro com o governo mais do que o estritamente necessário. Conheça as regras do jogo para jogar melhor.",
          exercise: "Verifique se seus investimentos atuais pagam IR. Se pagam, veja se há alternativas isentas (LCI/LCA) com rentabilidade líquida similar ou superior."
        }
      },
      {
        id: 'l27',
        title: '27. Proteção Patrimonial',
        duration: '18 min',
        content: {
          intro: "Você levou 10 anos para construir seu patrimônio. Um processo judicial, um acidente de carro ou uma doença podem levar tudo em 10 dias. O ataque ganha jogos, a defesa ganha campeonatos.",
          explanation: `### O Tripé da Proteção
Seguro de Vida é essencial se alguém depende da sua renda. Não é para você, é para eles. Escolha seguros resgatáveis ou temporários que são baratos.
Seguro de Bens (Auto/Residencial) tem custo irrisório perto do risco. Um incêndio ou roubo pode zerar seu patrimônio.
Seguro de Responsabilidade Civil é vital para médicos, dentistas, engenheiros e empresários, protegendo contra processos de terceiros.

### Estrutura Jurídica
O casamento é o contrato financeiro mais importante da sua vida. O regime de Comunhão Parcial é o padrão, onde tudo que crescer é dos dois (inclusive dívidas). A Separação Total é recomendada para empresários para blindar o patrimônio do cônjuge caso a empresa quebre. Não é falta de amor, é gestão de risco racional.`,
          examples: [
            "Inventário: Processos de herança no Brasil são caros e travam os bens por meses. Um Seguro de Vida garante liquidez imediata para os herdeiros pagarem as custas sem vender os imóveis barato.",
            "Acidentes: Bater numa BMW sem seguro pode custar R$ 100 mil. Um seguro de terceiros custa R$ 100/mês."
          ],
          commonErrors: "Achar que seguro é 'dinheiro jogado fora'. Seguro é custo de paz. Você paga rezando para perder (não usar). Se usar, o retorno sobre o investimento é infinito.",
          summary: "Blinde seu castelo. Não deixe portas abertas para o azar entrar e levar o que você suou para construir.",
          exercise: "Faça uma cotação de seguro de vida nesta semana. É mais barato do que você imagina (muitas vezes o preço de uma pizza por mês)."
        }
      },
      {
        id: 'l28',
        title: '28. A Filosofia da Riqueza',
        duration: '15 min',
        content: {
          intro: "Dinheiro sem propósito é apenas papel pintado. Se você não souber para que quer ser rico, a riqueza vai te trazer mais problemas que soluções.",
          explanation: `### A Curva da Felicidade
Estudos mostram que dinheiro traz felicidade SIM, mas até o ponto onde cobre suas necessidades básicas, segurança e conforto. Depois disso, a curva estagna. O iate de 100 pés não traz 10x mais felicidade que o barco de 10 pés. A verdadeira felicidade financeira vem da AUTONOMIA: a capacidade de acordar de manhã e dizer "hoje eu posso fazer o que eu quiser".

### Minimalismo Essencialista
Não é viver numa casa vazia. É remover o ruído para focar no que importa. É gastar muito (sem culpa) no que você ama e cortar impiedosamente o gasto com o que você não liga (status). Status é comprar coisas que você não quer, com o dinheiro que você não tem, para impressionar gente de quem você não gosta. Saia dessa roda.`,
          examples: [
            "Experiências > Coisas: Viajar, jantar com amigos e aprender algo novo gera memórias duradouras. Comprar um relógio caro gera um pico de dopamina que passa em 1 semana.",
            "A prática da doação: Doar dinheiro diz para o seu cérebro: 'Eu tenho tanto que posso dar'. Isso cura a escassez e a ganância."
          ],
          commonErrors: "Tornar-se o 'Tio Patinhas', o mais rico do cemitério. Acumular milhões vivendo de forma miserável e morrer sem aproveitar. O dinheiro é meio, não fim.",
          summary: "Use o dinheiro para comprar tempo, não coisas. O tempo é o único recurso não renovável da sua vida.",
          exercise: "Defina o que é 'Vida Rica' para VOCÊ. Para alguns é viajar 4x por ano. Para outros é buscar os filhos na escola todo dia as 15h. Qual é a sua versão?"
        }
      },
      {
        id: 'l29',
        title: '29. O Plano de 10 Anos',
        duration: '20 min',
        content: {
          intro: "A maioria das pessoas superestima o que pode fazer em 1 ano e subestima drasticamente o que pode fazer em 10 anos. O jogo é longo.",
          explanation: `### A Curva Exponencial
Nos primeiros anos de investimento, o resultado é decepcionante. Você aporta R$ 1.000 e ganha R$ 10 de juros. Parece inútil. É a fase de acumulação, o "Vale da Decepção". Porém, se você continuar, chega um ponto de inflexão onde os rendimentos superam seus aportes. Dali para frente, a curva empina verticalmente. Warren Buffett acumulou 99% da sua riqueza DEPOIS dos 50 anos.

### Manutenção da Rota
Não fique olhando a cotação todo dia. Trabalhe para aumentar a renda, aporte todo mês religiosamente, rebalanceie a carteira uma vez ao ano e tenha paciência. O tédio é seu amigo. Investimento emocionante geralmente dá prejuízo. O bom investimento é chato como ver a tinta secar.`,
          examples: [
            "O Poder da Constância: Aportar R$ 500 todo mês por 30 anos bate de longe o investidor que aporta R$ 10.000 uma vez e para. O tempo é o maior multiplicador.",
            "Cenários: Em 10 anos, você terá envelhecido de qualquer jeito. Você prefere chegar lá com liberdade financeira ou com as mesmas dívidas de hoje? O tempo vai passar igual."
          ],
          commonErrors: "Girar o patrimônio a cada notícia ruim do jornal. O mundo sempre parece que vai acabar. Quem investiu nas piores crises ficou rico. Quem saiu, perdeu.",
          summary: "O longo prazo nada mais é do que uma sucessão de vários 'dias de hoje' com disciplina. Plante hoje para colher na década que vem.",
          exercise: "Escreva uma carta para o seu Eu do Futuro (daqui a 10 anos). Descreva exatamente onde você mora, quanto tem no banco e como é sua rotina. Guarde e leia quando desanimar."
        }
      },
      {
        id: 'l30',
        title: '30. A Execução Final (Ação)',
        duration: '12 min',
        content: {
          intro: "Chegamos ao fim da teoria. Mas conhecimento sem prática é apenas obesidade mental. Saber e não fazer é o mesmo que não saber.",
          explanation: `### O Ciclo da Maestria
Primeiro você aprende (teoria). Depois você aplica (teste, erro e ajuste). Por fim, você ensina (fixação). Não feche este curso sem ter feito o básico: mapear as dívidas, abrir conta na corretora, definir a meta da reserva e fazer o primeiro investimento, nem que seja R$ 30.

### Adeus Inércia
O medo de errar paralisa. "E se eu investir errado?". O maior erro é não investir. Deixar o dinheiro na Poupança ou debaixo do colchão é o único jeito garantido de perder para a inflação. Comece pequeno, mas comece. O movimento cura o medo.`,
          examples: [
            "Feito é melhor que perfeito. Um orçamento imperfeito numa folha de papel vale mais que uma planilha complexa vazia.",
            "A melhor hora para plantar uma árvore foi há 20 anos. A segunda melhor hora é AGORA."
          ],
          commonErrors: "Comprar outro curso imediatamente achando que precisa aprender mais. Não, você precisa executar o que já sabe. Pare de procrastinar estudando.",
          summary: "Você tem o mapa, a bússola e o veículo. A estrada é sua. O topo da montanha é solitário, mas a vista compensa. Nos vemos lá.",
          exercise: "Sua missão final: Faça um PIX de qualquer valor para sua corretora AGORA e invista. Quebre a inércia física do dinheiro. Bem-vindo à sua nova vida."
        }
      }
    ]
  }
];
