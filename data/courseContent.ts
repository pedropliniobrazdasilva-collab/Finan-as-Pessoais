
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
          intro: "Bem-vindo à Matrix do Dinheiro. A maioria das pessoas passa a vida jogando para não perder. Eu vou te ensinar a jogar para ganhar.",
          explanation: `### Por que a escola falhou com você?
Passamos anos aprendendo fórmulas complexas, mas zero minutos sobre como declarar imposto, investir ou criar renda passiva. O sistema educacional foi desenhado para criar operários, não donos de capital.

### Os 3 Pilares da Soberania Financeira
Para construir um patrimônio que sustente gerações, você precisa dominar o triângulo da riqueza:

1. **Ganhar (Ataque):** Sua capacidade de gerar caixa. Sem dinheiro novo entrando, não há o que gerenciar.
2. **Cuidar (Defesa):** Gestão de fluxo de caixa e proteção patrimonial. É aqui que a maioria sangra até morrer financeiramente.
3. **Multiplicar (Meio de Campo):** Investimentos. Fazer o dinheiro trabalhar enquanto você dorme.

### Liberdade não é luxo, é opção
Ter dinheiro guardado não é sobre comprar carros caros. É sobre ter o "Poder do Não". Dinheiro no banco permite que você diga não para um chefe tóxico e não para a estagnação.`,
          examples: [
            "**Mentalidade de Escassez:** Ganha R$ 2.000, gasta R$ 2.000 e reclama que não sobra nada.",
            "**Mentalidade de Abundância:** Ganha R$ 2.000, investe R$ 200 primeiro, vive com R$ 1.800 e busca formas de ganhar R$ 3.000."
          ],
          commonErrors: "Acreditar que precisa 'ser rico' para começar a organizar. A organização financeira precede a riqueza, nunca o contrário.",
          summary: "O dinheiro é um excelente servo, mas um péssimo mestre. Tome as rédeas hoje.",
          exercise: "Pegue um papel agora. Liste 3 situações recentes onde a falta de dinheiro te obrigou a dizer 'sim' para algo que você queria dizer 'não'."
        }
      },
      {
        id: 'l2',
        title: '2. Mentalidade de Crescimento',
        duration: '10 min',
        content: {
          intro: "A diferença entre quem enriquece e quem quebra não está na conta bancária, está no software mental que roda na cabeça dessa pessoa.",
          explanation: `### Crenças Limitantes
Frases como "dinheiro é sujo", "rico é ganancioso" ou "eu nasci pobre, vou morrer pobre" são travas psicológicas. Se seu subconsciente acredita que dinheiro é ruim, ele vai te sabotar toda vez que você começar a prosperar.

### O Segredo: Ativos vs. Passivos
Robert Kiyosaki definiu isso melhor que ninguém:
- **Ativo:** Coloca dinheiro no seu bolso (Ações, Imóveis Alugados, Negócios).
- **Passivo:** Tira dinheiro do seu bolso (Carro, Casa Própria grande demais, Assinaturas, Dívidas).

Pessoas ricas compram Ativos. Pessoas pobres compram Passivos achando que são Ativos.`,
          examples: [
            "**Passivo:** Comprar um celular de 8 mil parcelado em 24x apenas por status.",
            "**Ativo:** Comprar 8 mil em ações e usar os dividendos para pagar sua conta de celular."
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
          intro: "Chega de fugir do extrato. A clareza traz poder. Hoje vamos acender a luz no quarto escuro das suas finanças.",
          explanation: `### O Raio-X
Você não pode mudar o que não mede. Precisamos de dados frios e duros.

1. **Receita Líquida:** Quanto realmente cai na conta (desconte impostos).
2. **Despesas Fixas:** Aquilo que você paga para sobreviver (Moradia, Luz, Mercado).
3. **Despesas Variáveis:** Onde o dinheiro some (Lazer, Delivery, Transporte extra).
4. **Dívidas:** O valor total e o custo mensal (Juros).

### Patrimônio Líquido
A conta final da sua vida financeira hoje:
*(Tudo o que você tem) - (Tudo o que você deve) = Seu Patrimônio.*`,
          examples: [
            "**João:** Ganha 5k, gasta 5k. Patrimônio estagnado. Risco altíssimo de quebra.",
            "**Maria:** Ganha 3k, gasta 2k, investe 1k. Patrimônio cresce todo mês. Segurança alta."
          ],
          commonErrors: "Fazer estimativas de cabeça. 'Acho que gasto uns 500 de mercado'. Na prática, gasta 900. Os números não mentem, a mente sim.",
          summary: "O diagnóstico pode doer, mas é a dor da cura. Sem saber onde está, nenhum GPS funciona.",
          exercise: "Planilha da Verdade: Liste TODAS as suas dívidas hoje. Valor total, valor da parcela e taxa de juros. Some tudo e encare o número."
        }
      },
      {
        id: 'l4',
        title: '4. A Regra de Ouro',
        duration: '8 min',
        content: {
          intro: "Existe uma lei universal na física financeira. Se você violar essa lei, vai quebrar. Se respeitar, vai prosperar.",
          explanation: `### Viva um degrau abaixo
A regra não é sobre quanto você ganha, é sobre o **Gap Financeiro**.
O Gap é a diferença entre o que entra e o que sai.

- Se você ganha R$ 5.000, viva como quem ganha R$ 4.000.
- Se for promovido para R$ 10.000, continue vivendo com R$ 4.000 (ou suba para R$ 5.000) e invista a diferença massiva.

### Inflação de Estilo de Vida
É o erro número 1 da classe média. Ganhou aumento? Troca de carro. Ganhou bônus? Viaja pra Disney.
Isso te mantém na "Corrida dos Ratos".`,
          examples: [
            "**Cenário A:** Aumento de salário -> Aumento de despesa imediata. Resultado: Estagnação.",
            "**Cenário B:** Aumento de salário -> Aumento de aporte nos investimentos. Resultado: Liberdade acelerada."
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
          intro: "O sistema financeiro foi desenhado para tirar dinheiro de você e transferir para os bancos. Aprenda a identificar as arapucas.",
          explanation: `### 1. O Parcelamento "Sem Juros"
Não existe almoço grátis. O preço à vista geralmente tem desconto. Se você parcela, está pagando o preço cheio (inflacionado). Além disso, parcelas comprometem sua renda futura.

### 2. Títulos de Capitalização
O pior produto bancário da história. Você empresta dinheiro pro banco, não recebe juros e ainda perde pra inflação. Fuja.

### 3. Consórcio sem Planejamento
Pagar taxa de administração alta para ter dinheiro no futuro? Matematicamente, investir o dinheiro costuma ser mais vantajoso.

### 4. Cheque Especial
É o dinheiro mais caro do mundo. Usar cheque especial como extensão do salário é suicídio financeiro.`,
          examples: [
            "**Carro Zero:** Perde 20% do valor ao sair da loja. É um passivo de luxo que drena recursos.",
            "**Cartão de Loja:** Oferece 10% de desconto na primeira compra e te cobra 15% de juros ao mês depois."
          ],
          commonErrors: "Confundir limite do cartão de crédito com renda disponível. O limite é dívida potencial, não dinheiro seu.",
          summary: "Se o gerente do banco está te oferecendo com cafézinho e sorriso, desconfie. Bons investimentos você precisa pedir.",
          exercise: "Abra seu app do banco. Cancele qualquer título de capitalização ou seguro de cartão que você não contratou conscientemente."
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
          intro: "Orçamento não é sobre cortar cafezinho, é sobre direcionar recursos com inteligência. O método 50/30/20 é a estrutura mais robusta.",
          explanation: `### A Divisão de Elite
Pegue sua renda líquida e divida em três potes:

**50% - Sobrevivência (Necessidades):**
Aluguel, Luz, Água, Mercado, Transporte.
Se passar disso, seu padrão de vida está incompatível com sua renda.

**30% - Estilo de Vida (Desejos):**
Restaurante, Streaming, Hobbies, Viagens curtas.
A vida acontece hoje. Sem lazer, você surta e chuta o balde.

**20% - Liberdade (Investimentos/Dívidas):**
Este dinheiro não é seu, é do seu "Eu do Futuro". Pague-se primeiro. Caiu o salário, 20% some para a corretora.`,
          examples: [
            "**Renda 5k:** R$ 2.500 para contas fixas, R$ 1.500 para lazer, R$ 1.000 para investimento.",
            "Nunca inverta a ordem. Investir o que sobra é garantia de fracasso, pois nunca sobra."
          ],
          commonErrors: "Classificar 'Uber' como necessidade quando poderia ir de ônibus. Seja honesto brutalmente na categorização.",
          summary: "Teto para gastos, piso para investimentos. Essa é a fórmula da consistência.",
          exercise: "Faça a conta agora. Quanto é 50%, 30% e 20% do seu salário? Compare com o que você gastou mês passado."
        }
      },
      {
        id: 'l7',
        title: '7. Os Ladrões Invisíveis',
        duration: '8 min',
        content: {
          intro: "Não é o elefante que te pica, são os pernilongos. Pequenos gastos recorrentes drenam mais riqueza do que grandes compras esporádicas.",
          explanation: `### Assinaturas Fantasmas
Aquele streaming que você não vê há 3 meses. A academia que você paga o plano anual mas não vai.
R$ 30 aqui, R$ 50 ali. No ano, são R$ 3.000 jogados no lixo.

### Tarifas Bancárias
Em plena era das Fintechs, pagar tarifa de conta corrente é rasgar dinheiro. Todo banco é obrigado pelo Banco Central a oferecer uma conta essencial gratuita.

### Desperdício
Comida estragando na geladeira. Luz acesa em quarto vazio. Multa por atraso de boleto. Isso é amadorismo financeiro.`,
          examples: [
            "**Uber de 1km:** Custo R$ 15. Custo a pé: Zero + Saúde.",
            "**Delivery por preguiça:** Custo R$ 60. Cozinhar o básico: R$ 15."
          ],
          commonErrors: "Achar que cortar esses gastos vai te deixar rico. Não vai. Mas cria a disciplina necessária para gerenciar milhões.",
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
          explanation: `### 1. O Método Automático (Apps)
Apps como Mobills, Organizze ou a própria área do banco.
- **Vantagem:** Puxa dados sozinho via integração.
- **Risco:** Você para de olhar porque "está tudo lá".

### 2. O Método Manual (Planilha/Excel)
Exige que você digite cada gasto.
- **Vantagem:** A dor de digitar gera consciência imediata.
- **Risco:** Preguiça de atualizar.

### 3. O Caderninho (Old School)
Para quem é tátil. Anotar cada real gasto no dia.
- **Vantagem:** Conexão neural imediata com o gasto.
- **Risco:** Difícil gerar relatórios de longo prazo.`,
          examples: [
            "Não tente categorizar cada bala. Crie categorias macro: 'Casa', 'Transporte', 'Lazer', 'Investimento'.",
          ],
          commonErrors: "Baixar um app complexo, configurar por 3 horas e nunca mais abrir. Controle semanal imperfeito é melhor que controle perfeito inexistente.",
          summary: "O que não é medido não é gerenciado. Escolha sua arma e use-a.",
          exercise: "Baixe nossa planilha modelo ou pegue um caderno. Registre todos os gastos de ONTEM. Cada centavo."
        }
      },
      {
        id: 'l9',
        title: '9. Metas SMART',
        duration: '12 min',
        content: {
          intro: "Sonho sem prazo é apenas delírio. Vamos transformar 'vontade de ser rico' em um plano de batalha executável.",
          explanation: `### A Metodologia SMART
Para seu cérebro levar a sério, a meta precisa ser:

- **S (Específica):** "Quero viajar" (Ruim). "Quero ir para Paris" (Bom).
- **M (Mensurável):** "Custa R$ 15.000".
- **A (Atingível):** É possível guardar esse valor com sua renda atual?
- **R (Relevante):** Por que isso importa?
- **T (Temporal):** "Em Outubro de 2025".

### Quebrando em pedaços
R$ 15.000 em 15 meses = R$ 1.000 por mês.
Agora você tem um boleto mensal com seu sonho. Pague ele antes de pagar a Netflix.`,
          examples: [
            "**Meta Vaga:** Quitar dívidas.",
            "**Meta SMART:** Pagar os R$ 4.000 do cartão Itaú até dia 20/Dez, economizando R$ 400/mês de Uber e fazendo R$ 200 de renda extra."
          ],
          commonErrors: "Metas irreais. 'Vou juntar 1 milhão em 1 ano ganhando salário mínimo'. Isso gera frustração e desistência imediata.",
          summary: "Dê um nome, um valor e uma data para seu dinheiro. Dinheiro sem destino acaba virando cerveja e pizza.",
          exercise: "Defina sua Meta #1 para este ano. Escreva no formato SMART e cole no espelho do banheiro."
        }
      },
      {
        id: 'l10',
        title: '10. O Fundo da Paz',
        duration: '15 min',
        content: {
          intro: "Esqueça o termo 'Reserva de Emergência'. Emergência atrai desgraça. Vamos chamar de Fundo da Paz. É o dinheiro que te permite dormir tranquilo.",
          explanation: `### O Colchão Financeiro
É o valor de **6 a 12 meses** do seu Custo de Vida (não do salário).
Se você gasta 3k para viver, seu fundo deve ter entre 18k e 36k.

### Regras do Fundo
1. **Liquidez Imediata:** Tem que poder sacar a qualquer hora.
2. **Segurança Extrema:** Não é para render muito, é para não perder nada. Tesouro Selic ou CDB 100% CDI de bancão.
3. **Intocável:** Só use em caso de *morte, hospital ou desemprego*. Trocar de celular não é emergência.`,
          examples: [
            "**O carro quebrou?** Usa o fundo e repõe depois. Sem dívida no cartão, sem juros.",
            "**Foi demitido?** Tem 12 meses para achar o emprego ideal, sem aceitar qualquer vaga ruim por desespero."
          ],
          commonErrors: "Investir em Ações ou FIIs antes de ter a reserva. Se o mercado cair e você precisar sacar, você realiza o prejuízo.",
          summary: "Primeiro a segurança, depois o risco. Construa o alicerce antes do telhado.",
          exercise: "Calcule sua meta do Fundo da Paz hoje. Quanto você já tem? Quanto falta? Estabeleça uma data para concluir."
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
          intro: "A guerra contra os juros começa agora. Para vencer, precisamos saber o tamanho, a localização e a força do inimigo.",
          explanation: `### O Inventário da Dívida
Pare de esconder as cartas de cobrança. Abra tudo. Crie uma tabela com:
1. **Credor:** Para quem devo?
2. **Valor Original:** Quanto peguei?
3. **Valor Atual:** Quanto dizem que devo?
4. **CET (Custo Efetivo Total):** A taxa de juros real.

### A Triagem
Separe as dívidas em:
- **Explosivas:** Cartão de crédito, cheque especial (Juros > 100% a.a.). Prioridade máxima.
- **Perigosas:** Financiamento de carro/casa (Podem tomar seu bem). Mantenha em dia.
- **Suaves:** Empréstimo familiar, consignado.`,
          examples: [
            "Pagar o tio que emprestou sem juros antes de pagar o cartão que cobra 14% ao mês é erro estratégico (embora seja honrado). O cartão te quebra, o tio espera.",
          ],
          commonErrors: "Fazer acordo picadinho pagando o mínimo. Isso só alimenta os juros. Junte força para quitar ou abater grandes blocos.",
          summary: "Encare os números. O monstro é sempre menor quando acendemos a luz.",
          exercise: "Preencha a Tabela de Dívidas hoje. Descubra qual tem o maior CET. Essa é a sua inimiga número 1."
        }
      },
      {
        id: 'l12',
        title: '12. O Jogo da Negociação',
        duration: '15 min',
        content: {
          intro: "O banco não quer seu nome sujo, ele quer seu dinheiro. E ele sabe que recuperar 20% é melhor que recuperar 0%. Use isso a seu favor.",
          explanation: `### A Regra dos 90%
Dívidas antigas (mais de 2 anos) com bancos podem ser negociadas com descontos de até 95% no valor atual.
Uma dívida que virou 50k pode voltar a ser 2k se paga à vista.

### Táticas de Guerrilha
1. **Nunca aceite a primeira oferta.** O call center tem script para cobrar o máximo.
2. **Ofereça à vista.** "Tenho R$ 1.500 hoje para quitar essa dívida de R$ 10.000. É pegar ou largar."
3. **Feirões Limpa Nome:** Serasa e SPC fazem mutirões onde os descontos são agressivos.`,
          examples: [
            "Dívida de cartão de R$ 20.000 negociada por R$ 1.800 no Feirão do Serasa.",
          ],
          commonErrors: "Renegociar a dívida parcelada trocando uma dívida velha por uma nova (Reparcelamento). Isso confirma a dívida cheia e zera seu poder de barganha.",
          summary: "Quem deve tem o dinheiro, logo, tem o poder. Negocie sem medo e sem vergonha.",
          exercise: "Acesse o site do Serasa Consumidor agora e veja se há ofertas pré-aprovadas para seu CPF."
        }
      },
      {
        id: 'l13',
        title: '13. Portabilidade Estratégica',
        duration: '10 min',
        content: {
          intro: "Trocar uma dívida cara por uma barata é a jogada de mestre. É matemática pura trabalhando para estancar a sangria.",
          explanation: `### Troca de Juros
Se você deve no rotativo do cartão (300% ao ano), pegue um empréstimo consignado (30% ao ano) e quite o cartão.
Você trocou um juro de 14% ao mês por um de 2% ao mês.

### Onde buscar crédito barato?
1. **Consignado:** Desconto em folha.
2. **Antecipação FGTS:** Use seu fundo parado para matar dívida ativa.
3. **Garantia:** Empréstimo com garantia de imóvel ou veículo tem juros muito menores.`,
          examples: [
            "**Economia:** Uma dívida de 10k no cartão cresce 3k em 3 meses. No consignado, cresce 300 reais. A diferença salva seu ano.",
          ],
          commonErrors: "Usar o troco do empréstimo para consumo. O dinheiro deve ir 100% para a quitação da dívida tóxica.",
          summary: "Seja esperto. Use as armas do sistema contra o sistema.",
          exercise: "Simule um empréstimo pessoal no seu banco e compare a taxa com a fatura do seu cartão em atraso."
        }
      },
      {
        id: 'l14',
        title: '14. Psicologia do Consumidor',
        duration: '12 min',
        content: {
          intro: "O marketing gasta bilhões para hackear seu cérebro. Se você não entender os gatilhos, será uma marionete nas mãos deles.",
          explanation: `### O Método HALT
Nunca compre se estiver:
- **H**ungry (Com fome)
- **A**ngry (Com raiva)
- **L**onely (Solitário)
- **T**ired (Cansado)

Nesses estados, seu autocontrole é zero. O shopping vira terapia e a fatura vira ressaca.

### Custo de Vida (Hora/Trabalho)
Converta o preço em horas de suor.
Ganha R$ 20/hora? Um tênis de R$ 600 custa **30 horas** de trabalho.
Vale a pena ficar sentado no escritório de segunda a quinta só para pagar aquele tênis?`,
          examples: [
            "**Promoção 'Só hoje':** Gatilho de urgência falso. O produto estará lá amanhã.",
            "**Frete grátis acima de R$ 300:** Faz você gastar R$ 100 a mais para 'economizar' R$ 20 de frete.",
          ],
          commonErrors: "Shopping como passeio. Quem passeia em shopping, compra o que não precisa. Passeie no parque.",
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
Adote o mantra: "Se eu não posso pagar à vista, eu não posso comprar".
O crédito deve ser usado apenas para alavancagem (milhas/pontos) se você tiver o dinheiro em conta, ou para bens duráveis essenciais (casa).

### Destrua os Gatilhos
- Remova o cartão salvo no iFood/Uber/Amazon. A preguiça de digitar o número salva seu dinheiro.
- Cancele e-mails de promoção.
- Pare de seguir lojas no Instagram.`,
          examples: [
            "Juntar por 10 meses para comprar a TV. Você ganha desconto à vista e juros do investimento no período.",
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
        title: '16. Renda Fixa vs. Variável',
        duration: '12 min',
        content: {
          intro: "Investir não é cassino. É alocação de recursos baseada em risco e retorno. Vamos separar os adultos das crianças.",
          explanation: `### Renda Fixa: O Zagueiro
Você empresta dinheiro (para o banco ou governo) e recebe juros.
- **Segurança:** Alta.
- **Retorno:** Previsível.
- **Função:** Proteger patrimônio e reserva de oportunidade.

### Renda Variável: O Atacante
Você vira sócio de negócios reais ou dono de imóveis.
- **Segurança:** Baixa (O preço oscila todo dia).
- **Retorno:** Potencialmente infinito (Crescimento da empresa + Dividendos).
- **Função:** Multiplicar patrimônio no longo prazo.

### A Carteira Ideal
Não existe 'o melhor investimento'. Existe o melhor para o seu perfil.`,
          examples: [
            "Colocar dinheiro da conta de luz em Ações: **Estupidez** (Risco alto para necessidade imediata).",
            "Deixar dinheiro da aposentadoria (20 anos) na Poupança: **Estupidez** (Perde para inflação).",
          ],
          commonErrors: "Buscar 'Dica Quente'. Quem segue dica vira sardinha e é engolido pelos tubarões.",
          summary: "Diversificação é o único almoço grátis do mercado financeiro. Nunca coloque todos os ovos na mesma cesta.",
          exercise: "Descubra seu perfil (Suitability) no site da sua corretora. Você é Conservador, Moderado ou Arrojado?"
        }
      },
      {
        id: 'l17',
        title: '17. O Tesouro Direto',
        duration: '15 min',
        content: {
          intro: "O investimento mais seguro do Brasil. Empreste para o dono da impressora de dinheiro (o Governo) e durma tranquilo.",
          explanation: `### 1. Tesouro Selic (O Caixa Forte)
Acompanha a taxa básica de juros. Nunca perde valor nominal. Liquidez diária.
**Uso:** Reserva de Emergência e metas de curto prazo.

### 2. Tesouro IPCA+ (O Aposentado)
Garante Juro Fixo + Inflação. Protege seu poder de compra por décadas.
**Uso:** Aposentadoria e metas acima de 5 anos.

### 3. Tesouro Prefixado (A Aposta)
Trava uma taxa fixa hoje (ex: 12%). Se os juros caírem, você ganha muito. Se subirem, você 'perde' oportunidade.
**Uso:** Especulação estratégica de médio prazo.`,
          examples: [
            "**Meta:** Trocar de carro em 2 anos -> Tesouro Selic.",
            "**Meta:** Parar de trabalhar em 2045 -> Tesouro IPCA+ 2045.",
          ],
          commonErrors: "Comprar título longo (IPCA+ 2045) com dinheiro que vai precisar mês que vem. Você será obrigado a vender com prejuízo.",
          summary: "A base da carteira brasileira deve ser sólida. O Tesouro é o alicerce.",
          exercise: "Acesse o site do Tesouro Direto e use o 'Simulador'. Veja quanto R$ 500 mensais viram em 10 anos."
        }
      },
      {
        id: 'l18',
        title: '18. Fundos Imobiliários (FIIs)',
        duration: '18 min',
        content: {
          intro: "Seja dono de Shoppings, Galpões Logísticos e Prédios na Faria Lima com R$ 100,00. Receba aluguel isento de IR todo mês.",
          explanation: `### Como funciona?
O Fundo capta milhões, compra imóveis gigantes e divide em pedacinhos (cotas). Você compra a cota e recebe o aluguel proporcional.

### Tijolo vs. Papel
- **Tijolo:** Imóveis reais. Ganha no aluguel e na valorização do imóvel.
- **Papel:** Dívidas imobiliárias (CRIs). Pagam juros altos, mas não têm o imóvel físico.

### A Bola de Neve
O segredo dos FIIs é o **Número Mágico**: A quantidade de cotas necessária para que o rendimento mensal compre uma nova cota sozinho.`,
          examples: [
            "Comprar um apartamento de 500k para alugar por 2k (0,4% a.m).",
            "Comprar 500k em FIIs, diversificar em 20 prédios e receber 4.5k (0,9% a.m) isento de IR."
          ],
          commonErrors: "Olhar apenas o 'Dividend Yield' (pagamento atual) e esquecer a qualidade do imóvel. Prédio ruim paga bem pouco antes de falir.",
          summary: "Viva de aluguel sem ter dor de cabeça com inquilino ou reforma.",
          exercise: "Pesquise o que é o fundo 'MXRF11' (apenas estudo, não recomendação). Veja quanto custa uma cota."
        }
      },
      {
        id: 'l19',
        title: '19. Ações: Sócios de Gigantes',
        duration: '20 min',
        content: {
          intro: "Não compre ações para vender semana que vem. Compre para ser sócio dos melhores empresários do país.",
          explanation: `### O que é uma ação?
É o menor pedaço de uma empresa. Ao comprar, você tem direito a parte do lucro (Dividendos) e valorização.

### Análise Fundamentalista (O Básico)
Não olhe gráfico. Olhe o negócio:
- A empresa dá lucro há 10 anos?
- Ela tem dívida controlada?
- Ela é líder de mercado?

### Buy and Hold
A estratégia dos bilionários. Comprar boas empresas e nunca vender, apenas acumular mais. O tempo é o fermento do bolo.`,
          examples: [
            "Quem comprou R$ 1.000 de Apple em 2000, hoje teria centenas de milhares de reais.",
            "Day Trade: 97% das pessoas perdem dinheiro tentando adivinhar o preço de curto prazo."
          ],
          commonErrors: "Vender na baixa por pânico. Quando o mercado cai, é promoção. Você não vende sua casa porque o mercado imobiliário caiu.",
          summary: "A bolsa de valores é o mecanismo de transferência de dinheiro dos impacientes para os pacientes.",
          exercise: "Entre no site 'Investidor10' ou 'StatusInvest'. Procure por WEGE3 e veja o gráfico de lucro histórico."
        }
      },
      {
        id: 'l20',
        title: '20. ETFs: O Investimento Preguiçoso',
        duration: '10 min',
        content: {
          intro: "E se você pudesse comprar todas as ações do mundo de uma vez só, sem precisar analisar balanços? Apresento os ETFs.",
          explanation: `### O Cesto de Ações
Um ETF (Exchange Traded Fund) é um pacote fechado.
- **IVVB11:** Compra as 500 maiores empresas dos EUA (Apple, Microsoft, Amazon...).
- **BOVA11:** Compra as maiores do Brasil (Vale, Petrobras, Itaú...).

### Vantagens
1. **Diversificação Automática:** Com uma cota, você é sócio de 500 empresas.
2. **Dolarização:** Protege seu patrimônio em moeda forte.
3. **Simplicidade:** Não precisa ler relatórios. Se a economia mundial cresce, você cresce.`,
          examples: [
            "Em vez de tentar acertar qual empresa vai subir (Agulha no palheiro), você compra o palheiro inteiro (ETF).",
          ],
          commonErrors: "Achar que ETF é 'chato' porque não tem emoção. Investimento bom é investimento chato e rentável.",
          summary: "Para 90% das pessoas, ETFs são a melhor estratégia de longo prazo.",
          exercise: "Compare a rentabilidade do IVVB11 (S&P 500) contra o BOVA11 nos últimos 5 anos."
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
          intro: "Você não ganha pelo quanto você trabalha (esforço), você ganha pelo quanto você resolve problemas (valor).",
          explanation: `### O Mito do Trabalho Duro
Trabalhar 14h por dia cavando buraco não te deixa rico.
Para ganhar mais, você precisa:
1. **Escala:** Atingir mais pessoas.
2. **Impacto:** Resolver um problema maior ou mais caro.

### Renda Ativa vs. Renda Extra
Renda Extra é vender horas vagas (Uber, Garçom). Ajuda na emergência, mas tem teto.
Renda Passiva/Escalável é criar algo uma vez e vender mil vezes (Infoproduto, Royalties, Investimentos).`,
          examples: [
            "**Faxineira:** Trabalha muito, ganha pouco (Baixa escala, problema comum).",
            "**Criador de Software de Limpeza:** Trabalha uma vez, vende para 1000 empresas (Alta escala)."
          ],
          commonErrors: "Pedir aumento justificando 'tempo de casa'. Justifique com 'lucro gerado'.",
          summary: "Pare de perseguir o dinheiro e comece a perseguir problemas para resolver. O dinheiro virá atrás.",
          exercise: "Liste 3 habilidades que você tem e que outras pessoas pagariam para aprender ou usar."
        }
      },
      {
        id: 'l22',
        title: '22. Negociação Salarial',
        duration: '15 min',
        content: {
          intro: "Seu chefe não vai te dar aumento por bondade. Aumento se conquista com estratégia e dados.",
          explanation: `### O Dossiê de Valor
Nunca entre na sala do chefe de mãos vazias.
Prepare um documento de uma página:
- "Nos últimos 12 meses, entreguei X."
- "Economizei Y para a empresa."
- "A média de mercado para minha função é Z."

### O Momento Certo
Não peça aumento quando a empresa perdeu um cliente. Peça quando você acabou de entregar um grande resultado.

### O Plano B
Se a empresa disser não, pergunte: "O que preciso entregar nos próximos 6 meses para justificar esse aumento?". Se não houver clareza, é hora de atualizar o LinkedIn.`,
          examples: [
            "**Errado:** 'Preciso de aumento porque meu aluguel subiu'. (Problema seu).",
            "**Certo:** 'Aumentei as vendas em 20%, gostaria de ajustar minha remuneração para compatibilizar'. (Interesse da empresa)."
          ],
          commonErrors: "Aceitar a primeira negativa e ficar ressentido trabalhando menos. Isso só garante sua demissão.",
          summary: "Você é uma empresa de uma pessoa só (Eu S.A). Negocie seu contrato.",
          exercise: "Pesquise no Glassdoor ou LinkedIn qual a média salarial real para o seu cargo na sua região."
        }
      },
      {
        id: 'l23',
        title: '23. Empreendedorismo Digital',
        duration: '18 min',
        content: {
          intro: "A barreira de entrada nunca foi tão baixa. Com um celular e internet, você tem uma loja aberta para o mundo.",
          explanation: `### Modelos de Negócio Leves
1. **Afiliado:** Vender produto dos outros (Zero estoque).
2. **Infoprodutor:** Vender seu conhecimento (E-book, Curso).
3. **Dropshipping:** Vender produto físico sem ter estoque.
4. **Serviços Digitais:** Gestão de tráfego, Edição de vídeo, Copywriting.

### Comece Pequeno (MVP)
Não alugue escritório. Não contrate ninguém. Valide a ideia. Venda primeiro, construa depois.`,
          examples: [
            "Escrever um E-book de receitas saudáveis e vender por R$ 29,90 no Instagram.",
            "Oferecer gestão de Google Meu Negócio para padarias do bairro."
          ],
          commonErrors: "Gastar meses criando logomarca e site perfeito antes de ter o primeiro cliente.",
          summary: "A internet é o maior alavancador de riqueza da história da humanidade. Não seja apenas um usuário, seja um criador.",
          exercise: "Crie uma conta na Hotmart, Eduzz ou Kiwify e explore o 'Mercado' para ver o que vende."
        }
      },
      {
        id: 'l24',
        title: '24. Freelance Estratégico',
        duration: '10 min',
        content: {
          intro: "Use suas noites e finais de semana para construir sua liberdade, não apenas para descansar do trabalho que você odeia.",
          explanation: `### Plataformas Globais
Sites como Upwork, Workana e 99Freelas conectam você a quem precisa.
Sabia que gringos pagam em Dólar por tarefas simples de assistente virtual ou tradução?

### O Portfólio
Ninguém quer ver seu diploma. Querem ver o que você fez.
Faça os primeiros trabalhos de graça ou muito barato para ganhar 5 estrelas e depoimentos.

### A Transição
Quando sua renda extra igualar 70% do seu salário fixo, você pode considerar demitir seu chefe.`,
          examples: [
            "Traduzir textos, editar fotos, transcrever áudios, testar sites.",
          ],
          commonErrors: "Pegar trabalhos que pagam muito mal e demoram muito tempo. Aprenda a precificar por projeto, não por hora.",
          summary: "Troque Netflix por prospecção de clientes durante 6 meses e sua vida muda.",
          exercise: "Cadastre-se no Workana hoje e envie proposta para 3 projetos iniciantes."
        }
      },
      {
        id: 'l25',
        title: '25. Networking: Sua Rede é Seu Líquido',
        duration: '10 min',
        content: {
          intro: "Você é a média das 5 pessoas com quem convive. Se você anda com 5 quebrados, você será o sexto.",
          explanation: `### Ambientes Geram Comportamento
Se você quer ser fitness, ande com quem treina.
Se você quer ser rico, ande com quem fala de negócios e investimentos, não de novela e fofoca.

### Como fazer Networking sem ser chato
Não seja interesseiro, seja interessante.
Ajude primeiro. Conecte pessoas. Ofereça valor antes de pedir favor.

### Mentores
Aprenda com os erros dos outros. É mais barato. Siga pessoas que já chegaram onde você quer ir.`,
          examples: [
            "Ir a eventos presenciais da sua área. O cafezinho do evento vale mais que a palestra.",
          ],
          commonErrors: "Pedir mentoria para alguém ocupado sem oferecer nada em troca. Pergunte: 'Como posso te ajudar no seu projeto X?'.",
          summary: "Sozinho você vai mais rápido, acompanhado você vai mais longe (e fica mais rico).",
          exercise: "Faça uma limpa no seu Instagram. Deixe de seguir quem não agrega e comece a seguir 5 mentores de finanças/negócios."
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
          intro: "A sonegação é crime, a elisão fiscal é inteligência. Aprenda a pagar o mínimo possível dentro da lei.",
          explanation: `### Renda Fixa e IR
A maioria segue a tabela regressiva:
- Até 6 meses: 22,5% de imposto sobre o lucro.
- Acima de 2 anos: 15% de imposto.
Segurar o investimento aumenta seu retorno líquido.

### Isenções Mágicas
- **LCI/LCA e Debêntures Incentivadas:** Isentos de IR para Pessoa Física.
- **FIIs:** Dividendos isentos.
- **Ações:** Vendas até R$ 20.000/mês com lucro são isentas (exceto Day Trade).

### PGBL vs VGBL**
Previdência privada pode deduzir até 12% da sua renda bruta tributável no IR anual. É dinheiro grátis do governo se usado certo.`,
          examples: [
            "Resgatar um CDB com 5 meses paga o maior imposto possível. Planejamento tributário é dinheiro no bolso.",
          ],
          commonErrors: "Esquecer de declarar ações no IR Anual. Mesmo que não pague imposto, é obrigatório declarar a posse. O CPF pode ser bloqueado.",
          summary: "Não divida seu lucro com o governo mais do que o estritamente necessário.",
          exercise: "Verifique se sua declaração de IR do ano passado está correta ou caiu na malha fina."
        }
      },
      {
        id: 'l27',
        title: '27. Proteção Patrimonial',
        duration: '12 min',
        content: {
          intro: "Você levou anos para construir. Um processo judicial, um divórcio ou um acidente podem levar tudo em dias.",
          explanation: `### Seguros Essenciais
- **Seguro de Vida:** Se você tem dependentes (filhos/cônjuge), é obrigatório. Garante que eles não passem fome se você faltar.
- **Seguro Residencial:** É baratíssimo e protege seu maior bem físico contra incêndio/roubo.
- **Seguro Responsabilidade Civil:** Para médicos, dentistas e profissionais liberais.

### Regime de Casamento
Amor é amor, contrato é contrato.
Comunhão Parcial de Bens é o padrão, mas entenda as regras do jogo antes de assinar.

### Holdings (Nível Avançado)
Para grandes patrimônios, criar uma empresa para gerir os bens facilita a sucessão e paga menos imposto no aluguel.`,
          examples: [
            "Morrer sem seguro de vida deixando dívidas e inventário caro para a família pagar.",
          ],
          commonErrors: "Achar que seguro é 'dinheiro jogado fora'. Seguro a gente paga rezando para não usar.",
          summary: "O ataque ganha jogos, a defesa ganha campeonatos. Proteja seu castelo.",
          exercise: "Cote um seguro de vida hoje. Muitas vezes custa o preço de uma pizza por mês."
        }
      },
      {
        id: 'l28',
        title: '28. A Filosofia da Riqueza',
        duration: '10 min',
        content: {
          intro: "Dinheiro potencializa quem você é. Se você é generoso, será um filantropo. Se é mesquinho, será um tirano.",
          explanation: `### O Paradoxo de Easterlin
Mais dinheiro traz felicidade? Sim, até certo ponto (pagar contas e conforto).
Depois desse ponto, mais dinheiro não aumenta a felicidade proporcionalmente.
A felicidade vem da **Autonomia** e do **Propósito**.

### Minimalismo Essencialista
Não é viver com nada. É viver apenas com o que faz sentido para você, e gastar rios de dinheiro nisso, cortando impiedosamente o resto.

### Doação
A lei do retorno. Exercitar o desapego financeiro cura a ganância e sinaliza abundância para seu cérebro.`,
          examples: [
            "Comprar experiências (Viagens) gera mais felicidade duradoura que comprar coisas (Carros).",
          ],
          commonErrors: "Viver uma vida miserável hoje para ser 'o mais rico do cemitério'. O equilíbrio é a chave.",
          summary: "Use o dinheiro para comprar tempo, não coisas.",
          exercise: "Defina qual é o seu 'número de suficiência'. Quanto você precisa para viver a vida dos sonhos? Pare de correr sem linha de chegada."
        }
      },
      {
        id: 'l29',
        title: '29. O Plano de 10 Anos',
        duration: '15 min',
        content: {
          intro: "A maioria superestima o que pode fazer em 1 ano e subestima o que pode fazer em 10 anos.",
          explanation: `### A Mágica dos Juros Compostos
No começo, a curva é chata e plana. Depois do 7º ou 8º ano, ela se torna vertical (Exponencial).
O segredo é sobreviver ao tédio do início.

### Revisão Anual
Todo ano, sente-se e rebalanceie sua carteira.
- Ações subiram muito? Venda um pouco e compre Renda Fixa.
- Bolsa caiu? Use a Renda Fixa para comprar ações baratas.
Isso te obriga a 'comprar na baixa e vender na alta' automaticamente.

### Constância > Intensidade
É melhor investir R$ 500 todo mês por 10 anos do que R$ 10.000 uma vez e parar.`,
          examples: [
            "Warren Buffett fez 99% da sua fortuna depois dos 50 anos. O tempo é o fator exponencial.",
          ],
          commonErrors: "Ficar girando patrimônio (comprando e vendendo) toda hora. Isso gera taxas e impostos que matam o rendimento.",
          summary: "O longo prazo é apenas uma soma de vários 'curto prazos' bem vividos. Mantenha o plano.",
          exercise: "Escreva uma carta para o seu 'Eu de 2035'. Conte como está sua vida financeira lá. Guarde e leia só daqui a 10 anos."
        }
      },
      {
        id: 'l30',
        title: '30. Aula Final: A Execução',
        duration: '5 min',
        content: {
          intro: "Chegamos ao fim do curso, mas ao início da sua jornada. Conhecimento sem prática é peso morto.",
          explanation: `### O Ciclo da Maestria
1. **Aprender:** (Você fez isso aqui).
2. **Aplicar:** (Onde a mágica acontece).
3. **Ensinar:** (A melhor forma de fixar).

### Checklist de Saída
1. [ ] Dívidas mapeadas e estancadas?
2. [ ] Fundo da Paz iniciado?
3. [ ] Conta na corretora aberta?
4. [ ] Primeiro aporte agendado?

### O Convite
Não seja um 'obesidade mental'. Não compre outro curso agora. Vá e execute o que aprendeu aqui até dar certo.`,
          examples: [
            "Melhor feito do que perfeito.",
          ],
          commonErrors: "Esperar o momento ideal. O momento ideal foi ontem. O segundo melhor é agora.",
          summary: "Você tem o mapa. O terreno é com você. Boa sorte e nos vemos no topo.",
          exercise: "Faça seu primeiro investimento (nem que seja R$ 10,00) IMEDIATAMENTE após fechar este vídeo. Quebre a inércia."
        }
      }
    ]
  }
];
