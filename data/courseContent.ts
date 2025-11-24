
import { Module } from '../types';

export const COURSE_MODULES: Module[] = [
  {
    id: 'mod1',
    title: 'Módulo 1: Fundamentos da Riqueza',
    lessons: [
      {
        id: 'l1',
        title: '1. O Jogo do Dinheiro',
        duration: '8 min',
        content: {
          intro: "Você foi treinado para ser um bom funcionário, não para ser rico. Vamos reescrever as regras do jogo hoje.",
          explanation: `### O fracasso escolar
Passamos cerca de 15 anos na escola aprendendo a calcular a área de um triângulo, mas **zero horas** aprendendo a declarar imposto, investir ou criar renda. O sistema foi feito para criar mão de obra, não donos de capital.

### Os 3 Pilares da Soberania
Para vencer o jogo do dinheiro, você precisa dominar o **Triângulo da Riqueza**:

| Pilar | Função | Meta |
| --- | --- | --- |
| **Ganhar** (Ataque) | Capacidade de gerar renda | Aumentar o valor da sua hora |
| **Cuidar** (Defesa) | Gestão e economia | Gastar menos do que ganha |
| **Multiplicar** (Meio) | Investimentos | Fazer o dinheiro trabalhar |

### O Poder do Não
Dinheiro no banco não serve só para comprar coisas. Serve para comprar sua liberdade.
- Ter reservas permite dizer **NÃO** a um chefe abusivo.
- Ter reservas permite dizer **NÃO** a um relacionamento falido por dependência financeira.`,
          examples: [
            "**Mentalidade de Pobre:** Ganha R$ 3.000 -> Gasta R$ 3.000 -> Reclama do governo.",
            "**Mentalidade de Rico:** Ganha R$ 3.000 -> Investe R$ 300 -> Vive com R$ 2.700 -> Estuda para ganhar R$ 5.000."
          ],
          commonErrors: "Acreditar que precisa 'ser rico' para começar a organizar. A organização financeira precede a riqueza, nunca o contrário.",
          summary: "O dinheiro é um excelente servo, mas um péssimo mestre. Quem não domina o dinheiro, é dominado por ele.",
          exercise: "Pegue um papel agora. Liste 3 situações recentes onde a falta de dinheiro te obrigou a dizer 'sim' para algo que você queria dizer 'não'."
        }
      },
      {
        id: 'l2',
        title: '2. Mentalidade de Crescimento',
        duration: '10 min',
        content: {
          intro: "Seu bolso nunca crescerá mais que sua mente. A riqueza é criada primeiro internamente, depois externamente.",
          explanation: `### Crenças Limitantes
Muitos de nós fomos programados com 'vírus mentais' sobre dinheiro. Identifique se você fala frases como:
- "Dinheiro é sujo."
- "Rico é ganancioso."
- "Eu nasci pobre, vou morrer pobre."

Se você odeia dinheiro (inconscientemente), você vai se sabotar toda vez que começar a ganhar.

### Ativos vs. Passivos
Esta é a lição mais importante de Robert Kiyosaki. Entenda a diferença brutal:

| Tipo | Definição | Exemplo Prático |
| --- | --- | --- |
| **ATIVO** | Coloca dinheiro no seu bolso | Ações, Imóveis de aluguel, Negócios |
| **PASSIVO** | Tira dinheiro do seu bolso | Carro de luxo, Casa própria grande, Assinaturas |

**Regra de Ouro:** Pessoas ricas compram ativos. A classe média compra passivos achando que são ativos.`,
          examples: [
            "**Passivo:** Celular de R$ 8.000 parcelado em 24x (gera dívida e desvaloriza).",
            "**Ativo:** R$ 8.000 em Fundos Imobiliários (gera renda mensal para pagar a conta do celular)."
          ],
          commonErrors: "Terceirizar a culpa. Culpar o governo, a economia ou a família pela sua situação. Enquanto você for vítima, não será protagonista.",
          summary: "Enriqueça sua mente e seu bolso não terá escolha a não ser acompanhar.",
          exercise: "Faça um inventário da sua casa. Liste 3 coisas que você comprou achando que eram investimentos, mas que na verdade só geram despesas (passivos)."
        }
      },
      {
        id: 'l3',
        title: '3. Diagnóstico Financeiro',
        duration: '12 min',
        content: {
          intro: "Você não pode curar o que não diagnosticou. Hoje vamos acender a luz no quarto escuro das suas finanças.",
          explanation: `### O Raio-X Financeiro
Precisamos de dados frios. A intuição falha, os números não.
Divida sua vida financeira em 4 blocos:

1. **Receita Líquida:** O que cai na conta de verdade (pós-impostos).
2. **Despesas Fixas:** Sobrevivência (Aluguel, Luz, Mercado).
3. **Despesas Variáveis:** Estilo de vida (Lazer, Ifood, Uber).
4. **Dívidas:** O custo do passado (Parcelas e Juros).

### O Cálculo do Patrimônio
A conta real da sua riqueza hoje é:

| Ativos (O que tem) | Passivos (O que deve) | Resultado |
| --- | --- | --- |
| Dinheiro: R$ 5k | Cartão: R$ 2k | **Patrimônio Líquido** |
| Carro: R$ 40k | Financiamento: R$ 30k | **R$ 13.000** |

Se o número for negativo, você está tecnicamente falido. Mas calma, vamos resolver.`,
          examples: [
            "**Cenário de Risco:** Ganha 5k, gasta 5k. Qualquer imprevisto vira dívida.",
            "**Cenário Seguro:** Ganha 5k, gasta 4k. Tem margem de manobra."
          ],
          commonErrors: "Fazer estimativas de cabeça. 'Acho que gasto uns 500 de mercado'. Na prática, gasta 900. Use o extrato real.",
          summary: "O diagnóstico pode doer, mas é a dor da cura. Sem saber onde está, nenhum GPS funciona.",
          exercise: "Planilha da Verdade: Liste TODAS as suas dívidas hoje. Valor total, valor da parcela e taxa de juros."
        }
      },
      {
        id: 'l4',
        title: '4. A Regra de Ouro',
        duration: '8 min',
        content: {
          intro: "Existe uma lei universal na física financeira. Se você violar essa lei, vai quebrar. Se respeitar, vai prosperar.",
          explanation: `### O Gap Financeiro
A riqueza não vem do quanto você ganha, mas da diferença (Gap) entre o que entra e o que sai.

- Se ganha R$ 5.000, viva como quem ganha R$ 4.000.
- Se for promovido para R$ 10.000, continue vivendo com R$ 4.000 e invista a diferença.

### Inflação de Estilo de Vida
É o erro número 1 da classe média.
1. Ganha aumento -> Troca de carro.
2. Ganha bônus -> Viaja pra Disney.
3. Resultado -> Continua vivendo salário a salário, mas com contas mais caras.

Isso se chama **Corrida dos Ratos**: correr cada vez mais rápido apenas para ficar no mesmo lugar.`,
          examples: [
            "**Errado:** Aumento de salário = Aumento de despesa imediata.",
            "**Certo:** Aumento de salário = Aumento de aporte nos investimentos."
          ],
          commonErrors: "Achar que sobrar 'pouco' não adianta. R$ 100 investidos com consistência vencem R$ 1.000 investidos uma única vez.",
          summary: "Não importa o tamanho do seu salário, importa o tamanho da sua sobra. A riqueza reside na margem.",
          exercise: "Calcule sua 'Margem de Potência': (Receita - Despesas). Se for menor que 10% da sua renda, corte gastos hoje."
        }
      },
      {
        id: 'l5',
        title: '5. Armadilhas do Sistema',
        duration: '15 min',
        content: {
          intro: "O banco não é seu amigo. O sistema financeiro foi desenhado para transferir dinheiro do impaciente para o paciente.",
          explanation: `### Produtos Tóxicos
Identifique e fuja destas armadilhas comuns que os gerentes oferecem:

| Produto | Por que é ruim? | O que fazer? |
| --- | --- | --- |
| **Capitalização** | Você empresta dinheiro sem juros pro banco | Cancele imediatamente |
| **Cheque Especial** | Juros abusivos (8% a 14% ao mês) | Nunca use como renda |
| **Consórcio** | Taxa de administração alta e sorteio | Invista o dinheiro você mesmo |
| **Parcelamento** | Compromete renda futura | Pague à vista com desconto |

### O Custo da Antecipação
Comprar parcelado é antecipar o prazer e prolongar a dor. Você paga mais caro por algo que vai desvalorizar, comprometendo seu 'eu do futuro'.`,
          examples: [
            "**Carro Zero:** Perde 20% do valor ao sair da loja. É um passivo de luxo.",
            "**Cartão de Loja:** Oferece 10% de desconto na primeira compra e cobra juros altíssimos depois."
          ],
          commonErrors: "Aceitar o cafézinho do gerente e assinar papéis sem ler. O gerente tem metas de vendas, não metas de te deixar rico.",
          summary: "Seja cético. Se o banco está te oferecendo muito, é porque é bom para eles, não para você.",
          exercise: "Abra seu app do banco. Verifique se você tem algum título de capitalização ou seguro não solicitado e cancele."
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
        duration: '10 min',
        content: {
          intro: "Orçamento não é sobre privação, é sobre direção. O método 50/30/20 é a estrutura ideal para equilibrar presente e futuro.",
          explanation: `### A Divisão de Elite
Pegue sua renda líquida e divida em três potes mentais. Respeite essas porcentagens para ter saúde financeira:

| % | Categoria | Descrição |
| --- | --- | --- |
| **50%** | **Necessidades** | Aluguel, Luz, Mercado, Saúde, Transporte. O básico para viver. |
| **30%** | **Desejos** | Lazer, Ifood, Streaming, Viagens. A vida acontece agora. |
| **20%** | **Liberdade** | Investimentos e Quitação de Dívidas. O pagamento do seu futuro. |

### Ajuste de Rota
- Se suas necessidades passam de 50%, seu padrão de vida está alto demais para sua renda. Mude de casa ou ganhe mais.
- Se você gasta 0% em lazer, vai surtar e desistir. O equilíbrio é a chave.`,
          examples: [
            "**Renda R$ 5.000:**",
            "- R$ 2.500 para contas fixas.",
            "- R$ 1.500 para diversão.",
            "- R$ 1.000 direto para a corretora."
          ],
          commonErrors: "Investir 'o que sobra'. Nunca sobra. O investimento deve ser encarado como um boleto que você paga para si mesmo assim que recebe.",
          summary: "Teto para gastos, piso para investimentos. Essa é a fórmula da consistência.",
          exercise: "Faça a conta agora. Quanto é 50%, 30% e 20% do seu salário? Compare com o que você gastou mês passado."
        }
      },
      {
        id: 'l7',
        title: '7. Os Ladrões Invisíveis',
        duration: '8 min',
        content: {
          intro: "Não é o elefante que pica, são os pernilongos. Pequenos gastos recorrentes drenam mais riqueza do que grandes compras.",
          explanation: `### O Efeito Latte
Gastos pequenos diários somam montantes assustadores no ano.
- Café de R$ 10/dia = R$ 3.650/ano.
- Assinatura esquecida de R$ 30/mês = R$ 360/ano.

### Onde Cortar sem Dor
1. **Assinaturas Fantasmas:** Streaming que não assiste, academia que não vai.
2. **Tarifas Bancárias:** Pagar anuidade ou taxa de conta hoje em dia é rasgar dinheiro.
3. **Desperdício:** Multa por atraso de boleto, comida estragando na geladeira.

**Importante:** Não vire um miserável. Corte o que não importa (taxas) para gastar no que importa (lazer).`,
          examples: [
            "**Uber de 1km:** Custo R$ 15. Custo a pé: Zero + Saúde.",
            "**Delivery:** Custo R$ 60. Cozinhar em casa: R$ 15."
          ],
          commonErrors: "Achar que cortar o cafezinho vai te deixar milionário. Não vai. Mas cria a disciplina para gerenciar os milhões futuros.",
          summary: "Estanque a sangria. Um balde furado nunca enche, não importa quanta água você coloque.",
          exercise: "Auditoria de 30 minutos: Pegue a fatura do cartão. Circule tudo o que é assinatura recorrente. Cancele pelo menos duas hoje."
        }
      },
      {
        id: 'l8',
        title: '8. Ferramentas de Controle',
        duration: '10 min',
        content: {
          intro: "A melhor ferramenta não é a mais complexa, é a que você usa. A complexidade é inimiga da execução.",
          explanation: `### Escolha sua Arma
Não existe método perfeito, existe o que funciona para você:

| Método | Vantagem | Desvantagem |
| --- | --- | --- |
| **Automático (Apps)** | Puxa dados sozinho (Open Finance) | Risco de ignorar por estar "tudo lá" |
| **Manual (Planilha)** | Flexibilidade total | Exige disciplina de digitar |
| **Caderno (Físico)** | Consciência tátil do gasto | Difícil somar e gerar histórico |

### Rotina Semanal
Não deixe para ver as finanças uma vez por mês. Crie a **Sessão do Dinheiro**: 15 minutos toda semana para categorizar gastos e ajustar a rota.`,
          examples: [
            "Não categorize cada bala. Use categorias macro: 'Casa', 'Transporte', 'Lazer'.",
            "Use o cartão de crédito como concentrador de gastos (se tiver controle) para facilitar a visualização."
          ],
          commonErrors: "Baixar um app complexo, configurar por 3 horas e nunca mais abrir. Controle imperfeito constante é melhor que controle perfeito inexistente.",
          summary: "O que não é medido não é gerenciado. Escolha uma ferramenta hoje e use.",
          exercise: "Baixe uma planilha simples ou use um app. Registre todos os gastos de ONTEM."
        }
      },
      {
        id: 'l9',
        title: '9. Metas SMART',
        duration: '12 min',
        content: {
          intro: "Sonho sem prazo é apenas delírio. Vamos transformar 'vontade de ser rico' em um plano de batalha.",
          explanation: `### A Metodologia SMART
Para seu cérebro levar uma meta a sério, ela precisa preencher 5 requisitos:

- **S (Específica):** Não diga "Quero viajar". Diga "Quero ir para Paris".
- **M (Mensurável):** "Custa R$ 15.000".
- **A (Atingível):** É possível com sua renda atual?
- **R (Relevante):** Por que isso importa para você?
- **T (Temporal):** "Em Outubro de 2025".

### Engenharia Reversa
R$ 15.000 em 15 meses = R$ 1.000 por mês.
Agora você tem um boleto mensal com seu sonho. Pague ele antes de pagar a Netflix.`,
          examples: [
            "**Meta Ruim:** Quero limpar meu nome.",
            "**Meta SMART:** Quero quitar os R$ 4.000 do Itaú até 20/Dez, economizando R$ 400/mês de extra."
          ],
          commonErrors: "Metas irreais. 'Vou juntar 1 milhão em 1 ano ganhando salário mínimo'. Isso gera frustração e desistência.",
          summary: "Dê um nome, um valor e uma data para seu dinheiro. Dinheiro sem destino acaba virando pizza.",
          exercise: "Defina sua Meta #1 para este ano. Escreva no formato SMART e cole no espelho."
        }
      },
      {
        id: 'l10',
        title: '10. O Fundo da Paz',
        duration: '15 min',
        content: {
          intro: "Esqueça o termo 'Reserva de Emergência'. Emergência atrai problema. Vamos chamar de Fundo da Paz. É o dinheiro que te permite dormir.",
          explanation: `### O Colchão de Segurança
Antes de investir em ações ou trocar de carro, você precisa ter liquidez.
**Valor Ideal:** 6 a 12 meses do seu Custo de Vida mensal.

### Regras do Fundo
Para este dinheiro, a rentabilidade não importa. O que importa é a disponibilidade.

| Regra | Explicação | Onde Investir? |
| --- | --- | --- |
| **Liquidez** | Saque imediato (D+0) | Tesouro Selic |
| **Segurança** | Risco zero de perda | CDB de Banco Grande (100% CDI) |
| **Intocável** | Uso exclusivo para caos | Caixinhas do Nubank / Porquinho |

### Quando usar?
- Desemprego.
- Doença grave.
- Carro quebrou (ferramenta de trabalho).
**Nota:** Trocar de celular ou viagem surpresa NÃO é emergência.`,
          examples: [
            "Com fundo: Carro quebra -> Paga à vista -> Vida segue.",
            "Sem fundo: Carro quebra -> Paga no cartão -> Juros -> Dívida -> Bola de neve."
          ],
          commonErrors: "Investir a reserva em Ações ou FIIs. Se o mercado cair na hora que você precisar sacar, você realiza prejuízo.",
          summary: "Primeiro a segurança, depois o risco. Construa o alicerce antes do telhado.",
          exercise: "Calcule quanto é 6 meses do seu custo de vida. Essa é sua primeira grande meta financeira."
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
        duration: '10 min',
        content: {
          intro: "A guerra contra os juros começa agora. Pare de ignorar as ligações de cobrança e vamos para o ataque.",
          explanation: `### O Inventário da Dívida
Crie uma tabela com todas as suas dívidas. Você precisa saber o tamanho do monstro.
Colunas necessárias: **Credor**, **Valor Original**, **Valor Atual** e **CET (Custo Efetivo Total)**.

### A Triagem de Guerra
Classifique as dívidas por periculosidade:

| Tipo | Risco | Exemplo | Ação |
| --- | --- | --- | --- |
| **Explosiva** | Altíssimo | Cartão de Crédito, Cheque Especial | Pagar PRIMEIRO (Juros > 100% a.a.) |
| **Perigosa** | Médio | Financiamento de Casa/Carro | Manter em dia (Pode perder o bem) |
| **Suave** | Baixo | Empréstimo familiar, Consignado | Negociar com calma |`,
          examples: [
            "Erro clássico: Pagar o tio que emprestou sem juros antes de pagar o cartão que cobra 14% ao mês.",
            "Honra é importante, mas a matemática é cruel. Mate os juros altos primeiro."
          ],
          commonErrors: "Fazer acordo picadinho pagando o mínimo. Isso só alimenta os juros. Junte força para quitar à vista.",
          summary: "Encare os números. O monstro é sempre menor quando acendemos a luz.",
          exercise: "Preencha a Tabela de Dívidas hoje. Descubra qual tem o maior CET. Essa é a sua inimiga número 1."
        }
      },
      {
        id: 'l12',
        title: '12. O Jogo da Negociação',
        duration: '15 min',
        content: {
          intro: "O banco não quer seu nome sujo, ele quer algum dinheiro. Recuperar 10% é melhor que 0%. Use isso a seu favor.",
          explanation: `### A Regra dos 90%
Dívidas bancárias antigas (vencidas há mais de 2 anos) são vendidas para recuperadoras por centavos.
Você consegue descontos de até 95% se pagar à vista.

### Táticas de Guerrilha
1. **Nunca aceite a primeira oferta.** O atendente tem script para cobrar o máximo.
2. **Ofereça valor à vista.** "Tenho R$ 1.000 hoje para quitar essa dívida de R$ 15.000. É pegar ou largar."
3. **Feirões Limpa Nome:** Serasa e SPC fazem mutirões com descontos agressivos pré-aprovados.

### Registrato
Acesse o sistema do Banco Central para ver todas as dívidas atreladas ao seu CPF e garantir que não esqueceu nada.`,
          examples: [
            "Dívida de cartão de R$ 20.000 negociada por R$ 1.800 no Feirão do Serasa.",
            "Ameaçar portabilidade de salário para outro banco força o gerente a melhorar as taxas."
          ],
          commonErrors: "Renegociar a dívida trocando uma velha por uma nova (Reparcelamento). Isso confirma a dívida cheia e zera seu poder de barganha.",
          summary: "Quem deve tem o dinheiro, logo, tem o poder. Negocie sem medo e sem vergonha.",
          exercise: "Acesse o site do Serasa Consumidor agora e veja se há ofertas pré-aprovadas para seu CPF."
        }
      },
      {
        id: 'l13',
        title: '13. Portabilidade Estratégica',
        duration: '10 min',
        content: {
          intro: "Trocar uma dívida cara por uma barata é a jogada de mestre da matemática financeira.",
          explanation: `### Troca de Juros
Se você deve no cartão (300% ao ano), pegue um empréstimo barato (30% ao ano) e quite o cartão.
Você 'vende' a dívida cara e fica com a barata.

### Fontes de Crédito Barato

| Modalidade | Juros Médios | Vantagem |
| --- | --- | --- |
| **Consignado** | 1,5% a.m. | Desconto em folha, menor risco pro banco. |
| **Garantia de Veículo** | 1,8% a.m. | Dá o carro como garantia, juro cai. |
| **Antecipação FGTS** | 1,9% a.m. | Usa dinheiro parado para limpar o nome. |

**Atenção:** Só faça isso se for para QUITAR a dívida cara integralmente.`,
          examples: [
            "Dívida de 10k no cartão vira 30k em um ano.",
            "Dívida de 10k no consignado vira 13k em um ano.",
            "Economia: R$ 17.000 apenas trocando a fonte."
          ],
          commonErrors: "Pegar o empréstimo e gastar o dinheiro em consumo. Isso dobra sua dívida e te quebra de vez.",
          summary: "Seja esperto. Use as armas do sistema contra o sistema.",
          exercise: "Simule um empréstimo pessoal no seu banco e compare a taxa com a fatura do seu cartão em atraso."
        }
      },
      {
        id: 'l14',
        title: '14. Psicologia do Consumidor',
        duration: '12 min',
        content: {
          intro: "O marketing gasta bilhões para hackear seu cérebro. Se você não entender os gatilhos, será uma marionete.",
          explanation: `### O Método HALT
Nunca compre nada se estiver em um destes estados emocionais. Seu cérebro racional estará desligado.

- **H**ungry (Com fome)
- **A**ngry (Com raiva)
- **L**onely (Solitário)
- **T**ired (Cansado)

O shopping não é terapia. A fatura depois causa mais depressão do que a alegria da compra.

### Conversão em Horas
Pare de olhar o preço em Reais. Converta em **Horas de Vida**.
- Ganha R$ 20/hora?
- Tênis de R$ 600 = **30 horas de trabalho**.
Vale a pena ficar sentado 4 dias no escritório, aguentando cliente chato, só para ter esse tênis?`,
          examples: [
            "**Promoção 'Só hoje':** Gatilho de urgência falso. O produto estará lá amanhã.",
            "**Frete grátis acima de R$ 300:** Faz você gastar R$ 100 a mais para 'economizar' R$ 20."
          ],
          commonErrors: "Passear no shopping. Quem passeia em shopping, compra o que não precisa. Passeie no parque.",
          summary: "Domine suas emoções ou elas devorarão seu salário.",
          exercise: "Calcule o valor da sua hora de trabalho hoje. Tenha esse número na cabeça na próxima vez que entrar numa loja."
        }
      },
      {
        id: 'l15',
        title: '15. Blindagem Financeira',
        duration: '10 min',
        content: {
          intro: "Sair do buraco é difícil, cair de novo é fácil. Vamos instalar cercas elétricas no seu comportamento.",
          explanation: `### A Vida à Vista
Adote o mantra: **"Se eu não tenho dinheiro para pagar à vista, eu não posso comprar."**
O crédito deve ser usado apenas para alavancagem (milhas) se você já tiver o dinheiro na conta.

### Destrua a Facilidade
A facilidade é inimiga da economia. Dificulte o gasto:
1. **Delete cartões salvos** no iFood, Uber e Amazon. Ter que levantar para pegar o cartão salva seu dinheiro.
2. **Cancele e-mails** de promoção.
3. **Pare de seguir lojas** no Instagram. O que os olhos não veem, o bolso não sente.`,
          examples: [
            "Juntar por 10 meses para comprar a TV à vista com desconto.",
            "Comprar parcelado é pagar juros embutidos e ficar preso ao passado."
          ],
          commonErrors: "Reativar o cartão de crédito assim que limpa o nome, achando que 'agora vai ser diferente' sem mudar a mentalidade.",
          summary: "Liberdade é não dever nada a ninguém. Proteja essa liberdade com unhas e dentes.",
          exercise: "Remova seu cartão de crédito de todos os aplicativos de celular agora. Crie a fricção necessária."
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
        duration: '12 min',
        content: {
          intro: "Investir não é cassino. É alocação de recursos baseada em risco e retorno. Entenda onde você está pisando.",
          explanation: `### O Grande Duelo
Entenda de uma vez por todas a diferença entre os dois mundos dos investimentos:

| Característica | Renda Fixa (Defesa) | Renda Variável (Ataque) |
| --- | --- | --- |
| **O que é?** | Empréstimo (para banco/governo) | Sociedade (em empresas/imóveis) |
| **Segurança** | Alta (Garantia FGC ou Gov) | Baixa (Oscilação diária) |
| **Retorno** | Previsível (ex: 10% a.a.) | Potencialmente Infinito |
| **Prazo Ideal** | Curto e Médio (1 a 5 anos) | Longo (5 a 20 anos) |
| **Exemplos** | Tesouro, CDB, LCI | Ações, FIIs, Cripto |

### A Carteira Ideal
Não existe 'o melhor'. Existe o equilíbrio.
- Use a Renda Fixa para proteger e guardar dinheiro com data marcada.
- Use a Renda Variável para multiplicar patrimônio sem data para usar.`,
          examples: [
            "**Erro:** Colocar dinheiro da conta de luz em Ações (Risco de cair 50% no dia do pagamento).",
            "**Erro:** Deixar dinheiro da aposentadoria (20 anos) na Poupança (Perde para inflação)."
          ],
          commonErrors: "Buscar 'Dica Quente'. Quem segue dica vira sardinha e é engolido pelos tubarões.",
          summary: "Diversificação é o único almoço grátis do mercado. Nunca coloque todos os ovos na mesma cesta.",
          exercise: "Descubra seu perfil de investidor (Suitability) no app da sua corretora: Conservador, Moderado ou Arrojado?"
        }
      },
      {
        id: 'l17',
        title: '17. O Tesouro Direto',
        duration: '15 min',
        content: {
          intro: "O investimento mais seguro do Brasil. Empreste para o dono da impressora de dinheiro (o Governo) e durma tranquilo.",
          explanation: `### O Cardápio do Tesouro
Existem 3 tipos principais de títulos. Escolha pelo seu objetivo:

| Título | Rentabilidade | Risco de Perda? | Objetivo Ideal |
| --- | --- | --- | --- |
| **Tesouro Selic** | Acompanha juros básicos | Não (Sempre sobe) | Reserva de Emergência |
| **Tesouro IPCA+** | Inflação + Juro fixo | Sim (Se vender antes) | Aposentadoria / Longo Prazo |
| **Prefixado** | Taxa fixa (ex: 12%) | Sim (Se vender antes) | Médio Prazo / Especulação |

### Marcação a Mercado
Nos títulos **IPCA** e **Prefixado**, o preço oscila todo dia.
- Se você segurar até o vencimento: Recebe exatamente o contratado.
- Se vender antes: Pode ter prejuízo se os juros subirem.
**Regra:** Só compre IPCA/Prefixado se puder levar até o fim.`,
          examples: [
            "**Meta:** Trocar de carro em 2 anos -> Tesouro Selic.",
            "**Meta:** Parar de trabalhar em 2045 -> Tesouro IPCA+ 2045."
          ],
          commonErrors: "Vender Tesouro IPCA antecipado em momento de crise. Você transforma uma perda teórica em prejuízo real.",
          summary: "A base da carteira brasileira deve ser sólida. O Tesouro é o alicerce.",
          exercise: "Acesse o site do Tesouro Direto e use o 'Simulador'. Veja quanto R$ 500 mensais viram em 10 anos."
        }
      },
      {
        id: 'l18',
        title: '18. Fundos Imobiliários (FIIs)',
        duration: '18 min',
        content: {
          intro: "Seja dono de Shoppings e Prédios na Faria Lima com R$ 10,00. Receba aluguel isento de IR todo mês na sua conta.",
          explanation: `### O que são FIIs?
São 'condomínios' de investidores. O fundo capta milhões, compra imóveis gigantes e divide o aluguel proporcionalmente entre as cotas.

### Tijolo vs. Papel
Os dois principais tipos de FIIs:

| Tipo | Onde investe? | Risco | Retorno |
| --- | --- | --- | --- |
| **Tijolo** | Imóveis Físicos (Lajes, Galpões) | Vacância (ficar vazio) | Aluguel + Valorização do imóvel |
| **Papel** | Dívidas (CRIs) | Calote (Crédito) | Juros altos (Isento de IR) |

### O Número Mágico (Magic Number)
A meta é atingir a quantidade de cotas necessária para que o rendimento mensal compre uma nova cota sozinho. A partir daí, o juro composto explode (Bola de Neve).`,
          examples: [
            "**Imóvel Físico:** Custa 500k, paga 2k aluguel, tem IR e inquilino chato.",
            "**FIIs:** Com 500k, você compra 50 fundos diferentes, recebe 4.5k livre de imposto e tem liquidez em 2 dias."
          ],
          commonErrors: "Olhar apenas o 'Dividend Yield' (pagamento atual). Fundos ruins pagam muito pouco antes de quebrar. Olhe a qualidade dos imóveis.",
          summary: "Viva de aluguel sem ter dor de cabeça com inquilino, reforma ou IPTU.",
          exercise: "Pesquise o ticker 'MXRF11' (apenas estudo). Veja quanto custa uma cota e quanto pagou de dividendo no último mês."
        }
      },
      {
        id: 'l19',
        title: '19. Ações: Sócios de Gigantes',
        duration: '20 min',
        content: {
          intro: "Não compre ações para vender semana que vem. Compre para ser sócio dos melhores empresários do país.",
          explanation: `### O que é uma ação?
É o menor pedaço de uma empresa. Você vira dono. Se a empresa lucra, você recebe **Dividendos**. Se ela cresce, sua cota valoriza.

### Fundamentos Básicos
Não olhe gráfico piscando. Olhe o negócio.
1. **Lucratividade:** A empresa dá lucro consistente há 10 anos?
2. **Dívida:** Ela deve menos do que pode pagar?
3. **Setor:** O setor é perene? (Energia, Bancos, Saneamento são mais seguros que Varejo e Aviação).

### Buy and Hold
A estratégia dos vencedores (Barsi, Buffett).
Comprar boas empresas e **NUNCA** vender. Apenas acumular mais cotas ao longo das décadas. O tempo é o fermento.`,
          examples: [
            "Quem comprou R$ 1.000 de Apple em 2000, hoje teria centenas de milhares.",
            "Day Trade (comprar e vender no mesmo dia) dá prejuízo para 97% das pessoas. Não tente vencer o mercado, associe-se a ele."
          ],
          commonErrors: "Vender na baixa por pânico. Quando o mercado cai, é promoção. Você não vende sua casa porque o mercado imobiliário caiu.",
          summary: "A bolsa é um mecanismo de transferir dinheiro dos impacientes para os pacientes.",
          exercise: "Entre no site 'Investidor10'. Procure por WEGE3 e veja o gráfico de lucro histórico vs cotação."
        }
      },
      {
        id: 'l20',
        title: '20. ETFs: O Investimento Preguiçoso',
        duration: '10 min',
        content: {
          intro: "E se você pudesse comprar todas as ações do mundo de uma vez só, sem analisar nada? Apresento os ETFs.",
          explanation: `### O Cesto de Ações
ETF (Exchange Traded Fund) é um pacote fechado que copia um índice.
- **IVVB11:** Compra as 500 maiores empresas dos EUA (Apple, Microsoft, Google...).
- **BOVA11:** Compra as maiores do Brasil (Vale, Petrobras, Itaú...).

### Vantagens Brutais
| Característica | Ações Individuais (Stock Picking) | ETFs (Gestão Passiva) |
| --- | --- | --- |
| **Esforço** | Alto (Analisar balanços) | Zero (Compra automática) |
| **Diversificação** | Você escolhe 10-20 empresas | Compra 500 empresas de uma vez |
| **Risco** | Uma empresa pode falir | O mercado inteiro dificilmente zera |

### Dolarização
Ter parte do patrimônio em Dólar é vital. O IVVB11 é a forma mais fácil de proteger seu dinheiro contra a desvalorização do Real.`,
          examples: [
            "Em vez de tentar acertar qual empresa vai subir (agulha no palheiro), você compra o palheiro inteiro (ETF).",
          ],
          commonErrors: "Achar que ETF é 'chato'. Investimento bom é chato e rentável. Emoção você busca no futebol.",
          summary: "Para 90% das pessoas, ETFs são a melhor estratégia. Menos tempo analisando, mais tempo vivendo.",
          exercise: "Compare a rentabilidade do IVVB11 contra o BOVA11 nos últimos 5 anos no Google Finance."
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
        duration: '12 min',
        content: {
          intro: "Você não ganha pelo seu esforço, ganha pelo valor que gera. Entenda a diferença entre trabalhar duro e trabalhar certo.",
          explanation: `### Escala e Impacto
Para ganhar mais, você precisa mexer em uma destas duas alavancas:

1. **Escala:** Atingir mais pessoas com o mesmo trabalho.
   - *Professor de sala:* Ensina para 40 alunos (Renda Limitada).
   - *Professor Online:* Grava uma vez, vende para 40.000 alunos (Renda Escalável).

2. **Impacto:** Resolver problemas mais caros.
   - *Faxineiro:* Resolve problema de limpeza (Baixo valor de mercado).
   - *Neurocirurgião:* Resolve problema de vida ou morte (Alto valor de mercado).

### Renda Passiva vs. Ativa
- **Ativa:** Vende horas (Se parar, para de receber).
- **Passiva:** Vende produtos/ativos (Ganha enquanto dorme).
O objetivo é migrar da Ativa para a Passiva.`,
          examples: [
            "Não peça aumento falando 'tenho contas para pagar'. O mercado não liga.",
            "Peça aumento falando 'trouxe X reais de lucro para a empresa'."
          ],
          commonErrors: "Focar apenas em economizar cafezinho e esquecer de aumentar a renda. O teto de economia é baixo, o teto de renda é infinito.",
          summary: "Pare de perseguir o dinheiro e comece a perseguir problemas. O dinheiro é consequência da solução.",
          exercise: "Liste 3 habilidades que você tem. Como você poderia transformar uma delas em um produto escalável (curso, e-book, app)?"
        }
      },
      {
        id: 'l22',
        title: '22. Negociação Salarial',
        duration: '15 min',
        content: {
          intro: "Seu chefe não vai te dar aumento por bondade. Aumento se conquista com estratégia e dados.",
          explanation: `### O Dossiê de Valor
Nunca entre na sala do chefe de mãos vazias. Prepare um documento de uma página:
1. Resultados entregues nos últimos 12 meses.
2. Dinheiro economizado ou gerado para a empresa.
3. Média salarial do mercado (Glassdoor).

### Timing é tudo
Não peça aumento quando a empresa perdeu um cliente. Peça quando você acabou de resolver um grande problema.

### A Pergunta de Ouro
Se a resposta for não, pergunte:
*"O que preciso entregar nos próximos 6 meses para que a resposta seja sim?"*
Isso cria um contrato verbal de compromisso.`,
          examples: [
            "**Errado:** 'Preciso de aumento porque o aluguel subiu'.",
            "**Certo:** 'Aumentei as vendas em 20%, gostaria de ajustar minha remuneração para compatibilizar com a entrega'."
          ],
          commonErrors: "Ficar ressentido com a negativa e passar a trabalhar mal. Isso só garante sua demissão.",
          summary: "Você é uma empresa de uma pessoa só (Eu S.A). Negocie seu contrato com profissionalismo.",
          exercise: "Pesquise no Glassdoor ou LinkedIn qual a média salarial real para o seu cargo na sua região."
        }
      },
      {
        id: 'l23',
        title: '23. Empreendedorismo Digital',
        duration: '18 min',
        content: {
          intro: "A internet é o maior alavancador de riqueza da história. Com um celular, você tem uma loja global aberta 24h.",
          explanation: `### Modelos Leves (Baixo Custo)
Não comece alugando loja física. Comece digital:

| Modelo | Como funciona | Vantagem |
| --- | --- | --- |
| **Infoprodutor** | Vender conhecimento (Curso, E-book) | Margem de lucro de quase 100% |
| **Afiliado** | Vender produto dos outros | Sem preocupação com produto ou entrega |
| **Serviços** | Gestão de tráfego, Copy, Design | Baixo risco, alta demanda |

### O conceito de MVP
Mínimo Produto Viável. Não gaste meses criando o site perfeito.
Crie uma versão simples, tente vender. Se vender, você melhora. O erro é gastar antes de faturar.`,
          examples: [
            "Escrever um E-book de receitas e vender por R$ 29,90 no Instagram.",
            "Oferecer gestão de Google Meu Negócio para padarias do bairro."
          ],
          commonErrors: "Achar que o mercado está saturado. O mercado está saturado de gente ruim. Sempre há espaço para excelência.",
          summary: "Não seja apenas um usuário da internet. Seja um criador.",
          exercise: "Crie uma conta na Hotmart ou Kiwify e explore o 'Mercado' para ver o que vende bem."
        }
      },
      {
        id: 'l24',
        title: '24. Freelance Estratégico',
        duration: '10 min',
        content: {
          intro: "Use suas noites e finais de semana para construir sua liberdade, não apenas para descansar do trabalho que você odeia.",
          explanation: `### Renda em Dólar
Sites como **Upwork** e **Fiverr** permitem vender serviços para gringos.
Ganhar em dólar e gastar em real multiplica seu poder de compra por 5x.

### Construindo Portfólio
Ninguém quer ver seu diploma. Querem ver o que você sabe fazer.
- Faça os primeiros trabalhos barato para ganhar 5 estrelas.
- A reputação vale mais que o dinheiro no início.

### A Transição
Quando sua renda extra for igual a 70% do seu salário fixo, você pode considerar demitir seu chefe.`,
          examples: [
            "Tradução, Transcrição, Edição de Vídeo, Assistente Virtual.",
            "Um trabalho de US$ 20 (barato lá fora) vira R$ 100 aqui."
          ],
          commonErrors: "Vender tempo barato demais para sempre. Aprenda a precificar por projeto/valor, não por hora.",
          summary: "Troque Netflix por prospecção de clientes durante 6 meses e sua vida muda.",
          exercise: "Cadastre-se no Workana ou Upwork hoje e envie proposta para 3 projetos simples."
        }
      },
      {
        id: 'l25',
        title: '25. Networking: O Ativo Invisível',
        duration: '10 min',
        content: {
          intro: "Você é a média das 5 pessoas com quem convive. Se anda com 5 quebrados, você será o sexto.",
          explanation: `### Ambiência
Se você quer ser rico, precisa estar onde os ricos estão. O ambiente molda o comportamento.
Falar de negócios, investimentos e ideias expande a mente. Falar de pessoas e novelas atrofia.

### Como conectar?
Networking não é pedir favor. É **oferecer valor**.
- "Como posso te ajudar?" é a frase mais poderosa.
- Conecte pessoas que não se conhecem.
- Seja interessante, não interesseiro.

### Mentores
Aprenda com os erros dos outros. É mais barato. Siga quem já chegou lá e consuma tudo o que produzem.`,
          examples: [
            "Ir a eventos presenciais da área vale mais pelo cafezinho (conexões) do que pela palestra.",
            "Comentar posts de forma inteligente chama atenção de pessoas grandes."
          ],
          commonErrors: "Pedir mentoria de graça para gente ocupada. Ofereça trabalho ou ajuda em troca do aprendizado.",
          summary: "Sozinho você vai mais rápido, acompanhado você vai mais longe.",
          exercise: "Faça uma limpa no Instagram. Deixe de seguir quem não agrega e siga 5 mentores de negócios."
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
        title: '26. O Leão do Imposto',
        duration: '15 min',
        content: {
          intro: "Sonegar é crime, elisão fiscal é inteligência. Aprenda a pagar o mínimo possível dentro da lei.",
          explanation: `### Tabela Regressiva
Na Renda Fixa, o tempo é seu amigo contra o imposto.

| Prazo do Investimento | Imposto sobre o Lucro |
| --- | --- |
| Até 6 meses | **22,5%** (A Mordida Máxima) |
| De 6 a 12 meses | 20,0% |
| De 1 a 2 anos | 17,5% |
| Acima de 2 anos | **15,0%** (A Mordida Mínima) |

**Lição:** Girar carteira no curto prazo enriquece o governo, não você.

### Isenções Mágicas
Alguns investimentos são 100% isentos de IR para Pessoa Física:
- **LCI / LCA** (Crédito Imobiliário e Agro).
- **CRI / CRA** (Crédito Privado).
- **Dividendos de FIIs**.
- **Venda de Ações** até R$ 20k/mês (exceto Day Trade).`,
          examples: [
            "Resgatar um CDB com 5 meses: Paga o maior imposto possível.",
            "Usar PGBL na previdência para abater 12% da renda bruta no IR Anual (dinheiro grátis se usado certo)."
          ],
          commonErrors: "Esquecer de declarar ações no IR Anual. Mesmo isento de pagar, é obrigatório declarar a posse. Bloqueia o CPF.",
          summary: "Não divida seu lucro com o governo mais do que o estritamente necessário.",
          exercise: "Verifique na sua corretora se você tem algum título vencendo em menos de 2 anos."
        }
      },
      {
        id: 'l27',
        title: '27. Proteção Patrimonial',
        duration: '12 min',
        content: {
          intro: "Você levou anos para construir. Um processo ou acidente pode levar tudo em dias. Blinde seu castelo.",
          explanation: `### O Tripé da Proteção
1. **Seguro de Vida:** Se alguém depende de você financeiramente, é obrigatório. Deve cobrir 5 a 10 anos de despesas da família.
2. **Seguro Residencial:** Custa preço de pizza e protege seu maior bem contra incêndio.
3. **Responsabilidade Civil:** Vital para médicos e profissionais liberais (processos de erro profissional).

### Casamento e Regime de Bens
Amor é emoção, casamento é contrato.
- **Comunhão Parcial:** Divide tudo o que construíram juntos.
- **Separação Total:** O que é meu é meu, o que é seu é seu. (Ideal para empresários com risco de falência, para não contaminar o patrimônio do cônjuge).`,
          examples: [
            "Morrer sem seguro deixa dívidas e inventário caro para a família. O seguro paga em dias e não entra em inventário.",
          ],
          commonErrors: "Achar que seguro é 'jogar dinheiro fora'. Seguro a gente paga rezando para não usar. É custo de paz.",
          summary: "O ataque ganha jogos, a defesa ganha campeonatos.",
          exercise: "Cote um seguro de vida hoje. Você vai se surpreender com como é barato ter paz mental."
        }
      },
      {
        id: 'l28',
        title: '28. A Filosofia da Riqueza',
        duration: '10 min',
        content: {
          intro: "Dinheiro potencializa quem você é. Se você é generoso, será um filantropo. Se é mesquinho, será um tirano.",
          explanation: `### Dinheiro compra felicidade?
Sim, até pagar as contas básicas e conforto. Depois disso, o gráfico estagna.
A verdadeira felicidade vem da **Autonomia**: acordar e fazer o que quiser, com quem quiser.

### Minimalismo Essencialista
Não é viver em uma casa vazia. É gastar rios de dinheiro no que você ama e cortar impiedosamente o que você faz só por status.
Status é comprar o que você não quer, com o dinheiro que não tem, para impressionar gente que você não gosta.

### O Poder da Doação
Exercitar o desapego financeiro cura a ganância. Quem doa sinaliza para o cérebro que vive em abundância.`,
          examples: [
            "Comprar experiências (viagens) gera mais felicidade duradoura que comprar coisas (objetos).",
          ],
          commonErrors: "Ser o 'mais rico do cemitério'. Viver miseravelmente hoje para ter milhões aos 80 anos. O equilíbrio é vital.",
          summary: "Use o dinheiro para comprar tempo, não coisas. Tempo é o único recurso não renovável.",
          exercise: "Defina seu 'Número de Suficiência'. Quanto você precisa para viver bem? Pare de correr sem linha de chegada."
        }
      },
      {
        id: 'l29',
        title: '29. O Plano de 10 Anos',
        duration: '15 min',
        content: {
          intro: "A maioria superestima o que pode fazer em 1 ano e subestima o que pode fazer em 10 anos.",
          explanation: `### A Curva Exponencial
Nos primeiros anos, o juro composto é tímido (Fase de Acumulação). Parece que não cresce.
Depois do 7º ou 8º ano, a curva vira vertical (Fase de Explosão).
O segredo é sobreviver ao tédio do início.

### Rebalanceamento Anual
Uma vez por ano, ajuste a carteira:
- Ações subiram muito? Venda um pouco e compre Renda Fixa (Vendeu na alta).
- Bolsa caiu? Use a Renda Fixa para comprar ações baratas (Comprou na baixa).
Isso automatiza o lucro sem emoção.

### Disciplina > Inteligência
É melhor investir R$ 500 todo mês por 10 anos do que R$ 10.000 uma vez e parar. O aporte regular vence o *timing*.`,
          examples: [
            "Warren Buffett fez 99% da fortuna depois dos 50 anos. O tempo é o fator principal.",
          ],
          commonErrors: "Girar patrimônio toda hora seguindo notícias. Isso gera taxas e impostos que matam o rendimento no longo prazo.",
          summary: "O longo prazo é apenas uma soma de vários 'hoje' bem vividos. Mantenha o plano.",
          exercise: "Escreva uma carta para o seu 'Eu de 2035'. Onde você quer estar? Guarde e leia só daqui a 10 anos."
        }
      },
      {
        id: 'l30',
        title: '30. A Execução Final',
        duration: '5 min',
        content: {
          intro: "Chegamos ao fim do curso, mas ao início da sua jornada. Conhecimento sem prática é peso morto.",
          explanation: `### O Ciclo da Maestria
1. **Aprender:** (Você fez isso aqui).
2. **Aplicar:** (Onde a mágica acontece. Teste, erre, ajuste).
3. **Ensinar:** (A melhor forma de fixar. Ensine sua família).

### Checklist de Saída
Verifique se você cumpriu os passos:

1. [ ] Dívidas mapeadas e plano de ataque definido?
2. [ ] Fundo da Paz iniciado?
3. [ ] Conta na corretora aberta?
4. [ ] Primeiro investimento feito?

### Adeus Obesidade Mental
Não compre outro curso agora. Vá e execute o que aprendeu aqui até dar certo. O mundo pertence aos executores.`,
          examples: [
            "Melhor feito do que perfeito.",
            "O segundo melhor momento para plantar uma árvore é hoje."
          ],
          commonErrors: "Esperar o 'momento ideal' para começar. Comece com R$ 10,00 se for o que tem.",
          summary: "Você tem o mapa. O terreno é com você. Nos vemos no topo.",
          exercise: "Faça seu primeiro aporte IMEDIATAMENTE após fechar este vídeo. Quebre a inércia agora!"
        }
      }
    ]
  }
];
