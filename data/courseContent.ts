
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
          intro: "Bem-vindo à Matrix do Dinheiro. A maioria das pessoas passa a vida jogando para não perder. Eu vou te ensinar a jogar para ganhar. Entender as regras invisíveis é o primeiro passo para sair da mediocridade.",
          explanation: `### Por que a escola falhou com você?
Passamos anos aprendendo fórmulas complexas, mas zero minutos sobre como declarar imposto, investir ou criar renda passiva. O sistema educacional foi desenhado para criar operários, não donos de capital.

### Os 3 Pilares da Soberania Financeira
Para construir um patrimônio que sustente gerações, você precisa dominar o triângulo da riqueza:

1. **Ganhar (Ataque):** Sua capacidade de gerar caixa. Sem dinheiro novo entrando, não há o que gerenciar.
2. **Cuidar (Defesa):** Gestão de fluxo de caixa e proteção patrimonial. É aqui que a maioria sangra até morrer financeiramente.
3. **Multiplicar (Meio de Campo):** Investimentos. Fazer o dinheiro trabalhar enquanto você dorme.

### Liberdade não é luxo, é opção
Ter dinheiro guardado não é sobre comprar carros caros. É sobre ter o "Poder do Não".
Dinheiro no banco permite que você diga "não" para um chefe tóxico, "não" para um relacionamento abusivo e "não" para a estagnação.`,
          examples: [
            "**Mentalidade de Escassez:** Ganha R$ 2.000, gasta R$ 2.000 e reclama que não sobra nada.",
            "**Mentalidade de Abundância:** Ganha R$ 2.000, investe R$ 200 primeiro, vive com R$ 1.800 e busca formas de ganhar R$ 3.000."
          ],
          commonErrors: "Acreditar que precisa 'ser rico' para começar a organizar. A organização financeira precede a riqueza, nunca o contrário.",
          summary: "O dinheiro é um excelente servo, mas um péssimo mestre. Tome as rédeas hoje ou ele controlará suas decisões para sempre.",
          exercise: "Pegue um papel agora. Liste 3 situações recentes onde a falta de dinheiro te obrigou a dizer 'sim' para algo que você queria dizer 'não'."
        }
      },
      {
        id: 'l2',
        title: '2. Mentalidade de Crescimento',
        duration: '10 min',
        content: {
          intro: "A diferença entre quem enriquece e quem quebra não está na conta bancária, está no software mental que roda na cabeça dessa pessoa.",
          explanation: `### Crenças Limitantes: O vírus invisível
Frases como "dinheiro é sujo", "rico é ganancioso" ou "eu nasci pobre, vou morrer pobre" são travas psicológicas. Se seu subconsciente acredita que dinheiro é ruim, ele vai te sabotar toda vez que você começar a prosperar.

### O Segredo: Ativos vs. Passivos
Robert Kiyosaki definiu isso melhor que ninguém:
- **Ativo:** Coloca dinheiro no seu bolso (Ações, Imóveis Alugados, Negócios).
- **Passivo:** Tira dinheiro do seu bolso (Carro, Casa Própria grande demais, Assinaturas, Dívidas).

Pessoas ricas compram Ativos. Pessoas pobres compram Passivos achando que são Ativos.

### Visão de Longo Prazo
O prazer imediato é inimigo da liberdade futura. A mentalidade rica entende que sacrificar um jantar caro hoje pode significar uma semana de liberdade daqui a 10 anos.`,
          examples: [
            "**Passivo:** Comprar um celular de 8 mil parcelado em 24x apenas por status.",
            "**Ativo:** Comprar 8 mil em ações da Apple e usar os dividendos (lucros) para pagar sua conta de celular."
          ],
          commonErrors: "Terceirizar a culpa. Culpar o governo, a economia ou a família pela sua situação. Enquanto você for vítima, não será protagonista da sua conta bancária.",
          summary: "Enriqueça sua mente e seu bolso não terá escolha a não ser acompanhar.",
          exercise: "Faça um inventário da sua casa. Liste 3 coisas que você comprou achando que eram investimentos, mas que na verdade só geram despesas (passivos)."
        }
      },
      {
        id: 'l3',
        title: '3. Diagnóstico Financeiro',
        duration: '12 min',
        content: {
          intro: "Chega de fugir do extrato. A clareza traz poder. Hoje vamos acender a luz no quarto escuro das suas finanças e ver exatamente o que está acontecendo.",
          explanation: `### O Raio-X
Você não pode mudar o que não mede. Precisamos de dados frios e duros.

1. **Receita Líquida:** Quanto realmente cai na conta (desconte impostos).
2. **Despesas Fixas:** Aquilo que você paga para sobreviver (Moradia, Luz, Mercado).
3. **Despesas Variáveis:** Onde o dinheiro some (Lazer, Delivery, Transporte extra).
4. **Dívidas:** O valor total e o custo mensal (Juros).

### Patrimônio Líquido
A conta final da sua vida financeira hoje:
*(Tudo o que você tem) - (Tudo o que você deve) = Seu Patrimônio.*

Se for negativo, acenda o alerta vermelho. Você está tecnicamente falido e vivendo de crédito alheio.`,
          examples: [
            "**João:** Ganha 5k, gasta 5k. Patrimônio estagnado. Risco altíssimo de quebra.",
            "**Maria:** Ganha 3k, gasta 2k, investe 1k. Patrimônio cresce todo mês. Segurança alta."
          ],
          commonErrors: "Fazer estimativas de cabeça. 'Acho que gasto uns 500 de mercado'. Na prática, gasta 900. Os números não mentem, a mente sim.",
          summary: "O diagnóstico pode doer, mas é a dor da cura. Sem saber onde está, nenhum GPS consegue te levar para onde você quer ir.",
          exercise: "Planilha da Verdade: Liste TODAS as suas dívidas hoje. Valor total, valor da parcela e taxa de juros. Some tudo e encare o número."
        }
      },
      {
        id: 'l4',
        title: '4. A Regra de Ouro',
        duration: '8 min',
        content: {
          intro: "Existe uma lei universal na física financeira. Se você violar essa lei, vai quebrar. Se respeitar, vai prosperar. É simples, mas brutal.",
          explanation: `### Viva um degrau abaixo
A regra não é sobre quanto você ganha, é sobre o **Gap Financeiro**.
O Gap é a diferença entre o que entra e o que sai.

- Se você ganha R$ 5.000, viva como quem ganha R$ 4.000.
- Se for promovido para R$ 10.000, continue vivendo com R$ 4.000 (ou suba para R$ 5.000) e invista a diferença massiva.

### Inflação de Estilo de Vida
É o erro número 1 da classe média. Ganhou aumento? Troca de carro. Ganhou bônus? Viaja pra Disney.
Isso te mantém na "Corrida dos Ratos". Você corre mais rápido, mas continua no mesmo lugar porque a esteira acelerou junto.`,
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
Não existe almoço grátis. O preço à vista geralmente tem desconto. Se você parcela, está pagando o preço cheio (inflacionado). Além disso, parcelas comprometem sua renda futura, te algemando ao emprego atual.

### 2. Títulos de Capitalização
O pior produto bancário da história. Você empresta dinheiro pro banco, não recebe juros e ainda perde pra inflação. É uma loteria disfarçada de investimento. Fuja.

### 3. Consórcio sem Planejamento
Pagar taxa de administração alta para ter dinheiro no futuro? Matematicamente, investir o dinheiro costuma ser mais vantajoso do que pagar boleto de consórcio, a menos que você precise do bem imediatamente e não tenha disciplina.

### 4. Cheque Especial
É o dinheiro mais caro do mundo. Usar cheque especial como extensão do salário é suicídio financeiro.`,
          examples: [
            "**Carro Zero:** Perde 20% do valor ao sair da loja. É um passivo de luxo que drena recursos.",
            "**Cartão de Loja:** Oferece 10% de desconto na primeira compra e te cobra 15% de juros ao mês depois."
          ],
          commonErrors: "Confundir limite do cartão de crédito com renda disponível. O limite é dívida potencial, não dinheiro seu.",
          summary: "Se o gerente do banco está te oferecendo com cafézinho e sorriso, desconfie. Bons investimentos você precisa pedir, produtos ruins eles precisam empurrar.",
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
          intro: "Orçamento não é sobre cortar cafezinho, é sobre direcionar recursos com inteligência. O método 50/30/20 é a estrutura mais robusta para equilibrar presente e futuro.",
          explanation: `### A Divisão de Elite
Pegue sua renda líquida e divida em três potes:

**50% - Sobrevivência (Necessidades):**
Aluguel, Luz, Água, Mercado, Transporte.
Se passar disso, seu padrão de vida está incompatível com sua renda. Mude de casa ou venda o carro.

**30% - Estilo de Vida (Desejos):**
Restaurante, Streaming, Hobbies, Viagens curtas.
A vida acontece hoje. Sem lazer, você surta e chuta o balde.

**20% - Liberdade (Investimentos/Dívidas):**
Este dinheiro não é seu, é do seu "Eu do Futuro". Pague-se primeiro. Caiu o salário, 20% some para a corretora ou para quitar dívidas.

### Ajuste de Guerra
Está endividado? Mude para **60/10/30** (Reduza o lazer drasticamente, aumente o pagamento de dívidas) até sair do buraco.`,
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
Aquele streaming que você não vê há 3 meses. A academia que você paga o plano anual mas não vai. O clube de assinatura de vinhos.
R$ 30 aqui, R$ 50 ali. No ano, são R$ 3.000 jogados no lixo.

### Tarifas Bancárias
Em plena era das Fintechs, pagar R$ 40 de "Cesta de Serviços" é rasgar dinheiro. Todo banco é obrigado pelo Banco Central a oferecer uma conta essencial gratuita.

### Desperdício
Comida estragando na geladeira. Luz acesa em quarto vazio. Multa por atraso de boleto. Isso é amadorismo financeiro.`,
          examples: [
            "**Uber de 1km:** Custo R$ 15. Custo a pé: Zero + Saúde.",
            "**Delivery por preguiça:** Custo R$ 60. Cozinhar o básico: R$ 15."
          ],
          commonErrors: "Achar que cortar esses gastos vai te deixar rico. Não vai. Mas cria a **disciplina** necessária para gerenciar os milhões que virão.",
          summary: "Estanque a sangria. Um balde furado nunca enche, não importa quanta água (dinheiro) você coloque.",
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
- **Risco:** Você para de olhar porque "está tudo lá", e perde a consciência do gasto.

### 2. O Método Manual (Planilha/Excel)
Exige que você digite cada gasto.
- **Vantagem:** A dor de digitar gera consciência imediata. Você vê o dinheiro saindo.
- **Risco:** Preguiça de atualizar e acumular recibos.

### 3. O Caderninho (Old School)
Para quem é tátil. Anotar cada real gasto no dia.
- **Vantagem:** Conexão neural imediata com o gasto.
- **Risco:** Difícil gerar relatórios de longo prazo.

### Recomendação
Comece simples. Uma planilha de "Entradas vs Saídas" no Google Sheets é suficiente para 99% das pessoas.`,
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
- **R (Relevante):** Por que isso importa? O "porquê" te segura quando a motivação acaba.
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
1. **Liquidez Imediata:** Tem que poder sacar a qualquer hora (D+0 ou D+1).
2. **Segurança Extrema:** Não é para render muito, é para não perder nada. Tesouro Selic ou CDB 100% CDI de bancão.
3. **Intocável:** Só use em caso de *morte, hospital ou desemprego*. Trocar de celular não é emergência.

### A sensação de poder
Quem tem 1 ano de contas pagas no banco anda diferente, negocia diferente e trabalha melhor. O medo de ser demitido desaparece.`,
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
- **Suaves:** Empréstimo familiar, consignado (Juros menores). Negocie por último.`,
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
3. **Feirões Limpa Nome:** Serasa e SPC fazem mutirões onde os descontos são institucionais e agressivos.

### Blefe Institucional
Seja firme. "Minha situação está difícil, essa é minha única oferta. Se não aceitarem, vou priorizar outros credores."`,
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
1. **Consignado:** Desconto em folha (para CLT/Funcionário Público).
2. **Antecipação FGTS:** Use seu fundo parado para matar dívida ativa.
3. **Garantia:** Empréstimo com garantia de imóvel ou veículo tem juros muito menores.

### O Perigo Mortal
Só faça isso se você **CANCELAR O CARTÃO** ou tiver disciplina de monge. Se você quitar o cartão com empréstimo e voltar a gastar no cartão, terá duas dívidas e quebrará de vez.`,
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
Vale a pena ficar sentado no escritório de segunda a quinta só para pagar aquele tênis?

### A Regra das 48h
Gostou? Espere 2 dias. Se a vontade passar, era impulso. Se ficar, planeje a compra.`,
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
          intro: "Sair do buraco é difícil, cair de novo é fácil. Vamos instalar cercas elétricas no seu comportamento para garantir que você nunca mais volte para a dívida.",
          explanation: `### A Vida à Vista
Adote o mantra: "Se eu não posso pagar à vista, eu não posso comprar".
O crédito deve ser usado apenas para alavancagem (milhas/pontos) se você tiver o dinheiro em conta, ou para bens duráveis essenciais (casa).

### Destrua os Gatilhos
- Remova o cartão salvo no iFood/Uber/Amazon. A preguiça de digitar o número salva seu dinheiro.
- Cancele e-mails de promoção.
- Pare de seguir lojas no Instagram.

### O Preço da Paz
Aprenda a sentir prazer em ver dinheiro na conta, não em ver sacolas no armário. A dopamina da segurança financeira dura muito mais que a dopamina da compra nova.`,
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
- *Ex:* Tesouro Direto, CDB, LCI.

### Renda Variável: O Atacante
Você vira sócio de negócios reais ou dono de imóveis.
- **Segurança:** Baixa (O preço oscila todo dia).
- **Retorno:** Potencialmente infinito (Crescimento da empresa + Dividendos).
- **Função:** Multiplicar patrimônio no longo prazo.
- *Ex:* Ações, FIIs, Cripto.

### A Carteira Ideal
Não existe 'o melhor investimento'. Existe o melhor para o seu perfil.
- **Conservadores:** 80% Fixa / 20% Variável.
- **Agressivos:** 40% Fixa / 60% Variável.`,
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
*Cuidado:* Se vender antes do vencimento, pode perder dinheiro (Marcação a Mercado).

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
          intro: "Seja dono de Shoppings, Galpões Logísticos e Prédios na Faria Lima com R$ 100,00. E o melhor: Receba aluguel isento de IR todo mês.",
          explanation: `### Como funciona?
O Fundo capta milhões, compra imóveis gigantes e divide em pedacinhos (cotas). Você compra a cota e recebe o aluguel proporcional.

### Tijolo vs. Papel
- **Tijolo:** Imóveis reais. Ganha no aluguel e na valorização do imóvel. Mais seguro contra inflação.
- **Papel:** Dívidas imobiliárias (CRIs). Pagam juros altos, mas não têm o imóvel físico. Maior risco, maior retorno imediato.

### A Bola de Neve
O segredo dos FIIs é o **Número Mágico**: A quantidade de cotas necessária para que o rendimento mensal compre uma nova cota sozinho.
Quando você atinge esse ponto, o juro composto explode.`,
          examples: [
            "Comprar um apê de 300k para alugar por 1.5k (e pagar IR + reforma).",
            "Comprar 300k em FIIs, receber 2.5k limpo na conta sem lidar com inquilino.",
          ],
          commonErrors: "Olhar só o Dividend Yield (quanto paga) e ignorar a qualidade do imóvel. Fundo que paga muito pode estar quebrando (risco alto).",
          summary: "Geração de renda passiva mensal consistente. É o salário extra que vai pagar suas contas no futuro.",
          exercise: "Pesquise o ticker HGLG11 ou MXRF11 no Google. Veja quanto pagaram de provento no último mês."
        }
      },
      {
        id: 'l19',
        title: '19. Ações e Dividendos',
        duration: '20 min',
        content: {
          intro: "A Bolsa de Valores não é um gráfico piscando. A Bolsa é um mercado de empresas. Ao comprar uma ação, aja como se estivesse comprando a padaria da esquina: foque no lucro.",
          explanation: `### Sócio Torcedor
Você quer empresas que:
1. Dão lucro consistente há anos.
2. Têm dívida controlada.
3. São líderes de mercado (Fosso Competitivo).

### Setores Perenes (BEST)
Para iniciantes, foque no que nunca quebra:
- **B**ancos
- **E**nergia Elétrica
- **S**aneamento / Seguros
- **T**elecom

### Dividendos
Empresas maduras não têm onde crescer muito, então distribuem o lucro. Reinvista esses dividendos para comprar mais ações. É assim que se cria riqueza geracional.`,
          examples: [
            "Preço importa? Sim, mas qualidade importa mais. É melhor pagar preço justo numa empresa excelente do que preço baixo numa empresa falida (Oi, Americanas).",
          ],
          commonErrors: "Day Trade. Tentar comprar na baixa e vender na alta todo dia. 95% perdem dinheiro. Seja investidor, não apostador.",
          summary: "Acumule patrimônio em boas empresas e deixe o tempo agir. A paciência é a virtude do milionário.",
          exercise: "Identifique 3 empresas do setor elétrico ou bancário na bolsa brasileira. Compare o lucro delas nos últimos 5 anos."
        }
      },
      {
        id: 'l20',
        title: '20. Cripto e Pimenta',
        duration: '12 min',
        content: {
          intro: "O futuro do dinheiro ou uma bolha? Criptoativos são a fronteira final do risco e retorno. Entre com cuidado, mas não ignore.",
          explanation: `### Bitcoin: A Reserva Digital
Escasso (só existem 21 milhões), descentralizado e incensurável. Funciona como Ouro Digital. É uma proteção contra a inflação das moedas governamentais no longo prazo.

### Altcoins: O Cassino
Todo o resto é aposta. Pode subir 10.000% ou ir a zero. Trate como Capital de Risco (Venture Capital).

### Regra de Ouro da Cripto
Tenha de **1% a 5%** do patrimônio.
- Se o Bitcoin subir 10x, seus 5% viram 50% e mudam sua vida.
- Se o Bitcoin for a zero, você perdeu 5% e sua vida segue normal.
Isso é assimetria convexa.`,
          examples: [
            "**Not Your Keys, Not Your Coins:** Deixar cripto na corretora é pedir para perder (Vide caso FTX). Aprenda a usar carteira própria (Wallet).",
          ],
          commonErrors: "Cair em golpe de pirâmide que promete 'rendimento garantido em Bitcoin'. Cripto é renda variável, não existe garantia.",
          summary: "Um pouco de pimenta deixa o prato delicioso, muita pimenta torna intragável. Dose o risco.",
          exercise: "Estude o conceito de 'Blockchain' hoje. Entenda a tecnologia antes de comprar a moeda."
        }
      }
    ]
  },
  {
    id: 'mod5',
    title: 'Módulo 5: Renda Extra e Empreendedorismo',
    lessons: [
      {
        id: 'l21',
        title: '21. Monetizando Habilidades',
        duration: '12 min',
        content: {
          intro: "Você não tem um problema de despesa, você tem um problema de receita. Economizar tem limite (zero), ganhar mais não tem limite.",
          explanation: `### O que você sabe fazer?
O mercado paga por resolução de problemas.
- Sabe inglês? Traduza textos.
- Sabe organizar? Seja Personal Organizer.
- Sabe Excel? Venda planilhas para pequenas empresas.

### Freelancer
Sites como Workana, 99Freelas e VintePila são balcões de emprego imediato. Cadastre-se e ofereça serviço hoje.

### A Troca
Pare de vender tempo, comece a vender resultado.
Não venda "1 hora de aula", venda "Falar inglês básico em 3 meses". O valor percebido é muito maior.`,
          examples: [
            "O designer que cobra R$ 50 por logo vs o designer que cobra R$ 2.000 por 'Identidade Visual Estratégica'. A habilidade é a mesma, o posicionamento muda tudo.",
          ],
          commonErrors: "Ter vergonha de cobrar. Se você resolve um problema, merece ser pago. Dinheiro é aplauso em forma de papel.",
          summary: "Transforme seu tempo livre em tempo produtivo. Renda extra investida acelera a aposentadoria em décadas.",
          exercise: "Liste 3 coisas que as pessoas sempre te pedem ajuda. Como você pode empacotar isso e vender?"
        }
      },
      {
        id: 'l22',
        title: '22. A Alavanca Digital',
        duration: '15 min',
        content: {
          intro: "A internet permite que você venda para 1 milhão de pessoas com o mesmo esforço de vender para uma. Isso é escala.",
          explanation: `### Os Caminhos do Digital
1. **Infoprodutos:** Venda seu conhecimento (E-books, Cursos). Margem de lucro de quase 100%.
2. **Afiliado:** Venda o produto dos outros e ganhe comissão. Ótimo para começar sem criar nada.
3. **Serviços High Ticket:** Consultoria, Mentoria, Gestão de Tráfego. Poucos clientes, alto valor.

### Criação de Conteúdo
Não é sobre dancinha no TikTok. É sobre **autoridade**.
Se você ensina, você vende. Gere valor gratuito para gerar confiança, depois venda a solução completa.`,
          examples: [
            "Vender um E-book de 'Receitas Fit' por R$ 27. Vender 10 por dia = R$ 8.100 no mês. Isso é mais que o salário de muito gerente.",
          ],
          commonErrors: "Achar que é dinheiro fácil. O digital exige estudo de Copywriting, Tráfego e Vendas. É uma profissão séria.",
          summary: "Use o wi-fi para encher o bolso, não apenas para ver a vida dos outros.",
          exercise: "Crie uma conta na Hotmart ou Kiwify e veja o 'Mercado de Afiliados'. Escolha um produto que você compraria."
        }
      },
      {
        id: 'l23',
        title: '23. Vendas: A Habilidade Mestra',
        duration: '10 min',
        content: {
          intro: "Ninguém fica rico sem vender algo. Um produto, um serviço ou uma ideia. Se você tem medo de vender, você tem medo de ganhar dinheiro.",
          explanation: `### Vender é Ajudar
Se você tem a cura para a dor de alguém e não oferece, você é egoísta. Vender é um ato de serviço.

### Gatilhos Mentais (Éticos)
- **Escassez:** "Só restam 3 vagas". (Tem que ser verdade).
- **Prova Social:** "100 alunos satisfeitos".
- **Autoridade:** "Faço isso há 10 anos".
Isso ajuda o cérebro do cliente a tomar a decisão que é boa para ele.

### Lidando com o 'Não'
O 'Não' é estatístico. A cada 10 nãos, vem um sim. Colecione 'nãos' para chegar no 'sim'.`,
          examples: [
            "Numa entrevista de emprego, você está vendendo sua força de trabalho. Quem vende melhor (comunica melhor), leva a vaga e o maior salário.",
          ],
          commonErrors: "Ser o vendedor chato. Não empurre, atraia. Faça perguntas, entenda a dor e ofereça o remédio.",
          summary: "Tudo é vendas. Aprenda Copywriting e Negociação e você nunca passará fome.",
          exercise: "Anuncie algo usado na OLX ou Facebook Marketplace hoje. O objetivo é treinar a negociação com interessados."
        }
      },
      {
        id: 'l24',
        title: '24. Networking Estratégico',
        duration: '12 min',
        content: {
          intro: "Seu Networth (patrimônio) é proporcional ao seu Network (rede). Você é a média das 5 pessoas com quem anda.",
          explanation: `### Mude de Mesa
Se você é o mais esperto da mesa, você está na mesa errada. Procure ambientes onde as pessoas são melhores que você financeira e intelectualmente. Isso puxa sua régua para cima.

### Interessante vs. Interesseiro
- **Interesseiro:** Pede favor logo de cara.
- **Interessante:** Entrega valor primeiro. "Vi seu projeto e fiz essa análise gratuita para te ajudar". Isso abre portas blindadas.

### Capital Social
Indicações valem ouro. Seja a pessoa que conecta pontas. Quem conecta, é lembrado.`,
          examples: [
            "Pagar caro num ingresso de evento não é pelo conteúdo, é pelo Coffee Break. Um aperto de mão lá pode valer milhões em negócios.",
          ],
          commonErrors: "Andar com gente que só reclama e gasta. O mindset de escassez é contagioso. Blinde-se.",
          summary: "Diga-me com quem andas e te direi quanto ganhas.",
          exercise: "Convide alguém que você admira profissionalmente para um café (virtual ou real). Pague a conta e faça perguntas inteligentes. Não peça nada."
        }
      },
      {
        id: 'l25',
        title: '25. Produtividade e Foco',
        duration: '10 min',
        content: {
          intro: "Tempo é o único recurso que não se recupera. Ricos compram tempo, pobres vendem tempo. Otimize suas 24 horas.",
          explanation: `### Ocupado vs. Produtivo
Correr na esteira cansa, mas não te leva a lugar nenhum.
Produtividade é **Direção + Velocidade**.

### Técnica Pomodoro
Foque 25 minutos, descanse 5. O cérebro não aguenta foco infinito.

### Elimine Distrações
Notificação de celular é o inimigo nº 1 da riqueza. Cada 'plim' te custa 15 minutos para retomar o foco profundo. Trabalhe com o celular em outro cômodo.

### A Regra de Pareta (80/20)
20% das suas ações geram 80% dos resultados. Descubra quais são esses 20% e elimine o resto.`,
          examples: [
            "Ficar 2h no Instagram 'pesquisando' não é trabalho. É procrastinação. Fazer 30min de prospecção de clientes é trabalho.",
          ],
          commonErrors: "Multitarefa. Tentar fazer duas coisas ao mesmo tempo garante que ambas ficarão medíocres.",
          summary: "Proteja sua agenda. Se você não definir suas prioridades, os outros definirão por você.",
          exercise: "Amanhã, nas primeiras 2 horas do dia, não toque no celular. Foque na tarefa mais difícil (Engula o Sapo). Veja a diferença."
        }
      }
    ]
  },
  {
    id: 'mod6',
    title: 'Módulo 6: Legado e Liberdade',
    lessons: [
      {
        id: 'l26',
        title: '26. O Número da Liberdade (FIRE)',
        duration: '15 min',
        content: {
          intro: "Aposentadoria não é uma idade (65 anos), é um número financeiro. Quando você atinge esse número, trabalhar vira opção.",
          explanation: `### A Regra dos 300
Pegue seu Custo de Vida Mensal e multiplique por 300.
Ex: Gasta 5k? 5.000 x 300 = **R$ 1.5 Milhão**.

Com 1.5 Milhão investido a uma taxa segura, você retira 4% ao ano (R$ 5k/mês) sem nunca acabar com o patrimônio principal. É a máquina de dinheiro infinito.

### O Fator Tempo
Quanto antes começar, menos precisa investir. Juros compostos precisam de tempo.
Quem começa aos 20 com R$ 300 chega lá. Quem começa aos 45 precisa de R$ 3.000.

### Semi-Aposentadoria (Coast FIRE)
Você junta um valor X e deixa rendendo. Pode trabalhar menos, num emprego mais leve, só para pagar as contas do mês, enquanto o bolo principal cresce sozinho no fundo.`,
          examples: [
            "Viver de renda não é ficar na rede. É poder trabalhar no projeto que ama sem se preocupar se vai dar lucro este mês.",
          ],
          commonErrors: "Aumentar o custo de vida conforme o patrimônio cresce. Isso move a linha de chegada para frente. Mantenha o custo fixo.",
          summary: "Calcule seu número. Persiga ele obsessivamente. Chegue lá e seja livre.",
          exercise: "Faça a conta: (Seu gasto mensal x 300). Esse é seu alvo. Escreva-o bem grande."
        }
      },
      {
        id: 'l27',
        title: '27. Proteção Patrimonial',
        duration: '12 min',
        content: {
          intro: "Ganhar o jogo é difícil, mas manter a vitória é mais difícil ainda. Um erro jurídico, um acidente ou um divórcio podem zerar o game.",
          explanation: `### O Tripé da Proteção
1. **Seguros:** Carro, Casa e Vida. Seguro não é gasto, é compra de certeza. Se você tem dependentes, seguro de vida é obrigação moral.
2. **Jurídico:** Casamento com regime de bens correto. Contratos bem feitos. Não faça negócios no 'boca a boca'.
3. **Diversificação Geográfica:** Tenha parte do dinheiro fora do Brasil (Dólar). Se o país afundar, você tem um bote salva-vidas.

### Sucessão
Facilite a vida de quem fica. Inventário é caro e demorado. Previdência Privada (VGBL) e Seguros não entram em inventário e garantem liquidez para a família.`,
          examples: [
            "O empresário que tinha milhões em imóveis mas zero liquidez. Faleceu e a família teve que vender os prédios a preço de banana para pagar o imposto do inventário.",
          ],
          commonErrors: "Achar que 'comigo não acontece'. O seguro existe para o imponderável.",
          summary: "Defesa ganha campeonato. Blinde o que você conquistou.",
          exercise: "Revise sua apólice de seguro de vida ou cote uma hoje. Verifique se cobre invalidez (proteção para você em vida)."
        }
      },
      {
        id: 'l28',
        title: '28. Riqueza Real vs. Aparência',
        duration: '10 min',
        content: {
          intro: "Riqueza é o que você não vê. Carros, roupas e joias são dinheiro gasto, não dinheiro tido. Não confunda palco com bastidores.",
          explanation: `### Stealth Wealth (Riqueza Invisível)
Os verdadeiros milionários costumam ser discretos. Eles não precisam provar nada. Quem ostenta demais geralmente está endividado para manter a aparência.

### O Ego
O Ego é o maior destruidor de capital. Comprar coisas para impressionar pessoas que você não gosta, com dinheiro que você não tem.
Quebre esse ciclo. Seja rico, não pareça rico.

### Aprendizado Contínuo
O jogo muda. O que funcionou em 2010 não funciona em 2024. Continue estudando. Leia livros, faça cursos, esteja atualizado.`,
          examples: [
            "Warren Buffett vive na mesma casa há 50 anos e dirige o próprio carro. Ele foca em *ser*, não em *mostrar*.",
          ],
          commonErrors: "Subir o padrão de vida imediatamente após enriquecer. Espere o patrimônio solidificar.",
          summary: "A verdadeira flexibilidade financeira é poder acordar de manhã e dizer: 'hoje eu posso fazer o que eu quiser'.",
          exercise: "Identifique um gasto recente que foi feito apenas por status social. Elimine-o mentalmente para a próxima vez."
        }
      },
      {
        id: 'l29',
        title: '29. O Código da Generosidade',
        duration: '8 min',
        content: {
          intro: "Reter tudo gera escassez. Transbordar gera abundância. A doação não é apenas caridade, é um sinal de poder e suficiência para seu cérebro.",
          explanation: `### O Fluxo
Dinheiro é energia em movimento (Currency = Corrente). Se você represa tudo, a água apodrece. Deixe fluir.
Doe tempo, doe conhecimento ou doe dinheiro.

### Propósito
Acumular por acumular é vazio. Ter dinheiro para ajudar sua família, sua igreja ou sua comunidade dá um propósito inabalável para acordar cedo e trabalhar.

### Comece Agora
"Quando eu for milionário eu doo". Mentira. Se você não doa R$ 10 de R$ 100, não doará R$ 1 milhão de R$ 10 milhões. O caráter é o mesmo, só mudam os zeros.`,
          examples: [
            "Pagar uma terapia para alguém que precisa. Financiar o estudo de um jovem. Isso é legado real.",
          ],
          commonErrors: "Achar que doação diminui seu patrimônio. Matematicamente sim, energeticamente e socialmente, multiplica.",
          summary: "Mão fechada não entra nada, nem sai nada. Mantenha a mão aberta.",
          exercise: "Faça uma doação consciente essa semana. Sinta como isso muda sua percepção de 'eu tenho o suficiente'."
        }
      },
      {
        id: 'l30',
        title: '30. O Plano Mestre',
        duration: '15 min',
        content: {
          intro: "Chegamos ao fim do curso, mas ao início da sua vida rica. Conhecimento sem ação é obesidade mental. É hora de executar.",
          explanation: `### O Mapa da Década
Onde você quer estar em 10 anos?
Faça a Engenharia Reversa:
- **10 Anos:** R$ 2 Milhões e Casa na Praia.
- **5 Anos:** R$ 800 mil e Sócio da empresa.
- **1 Ano:** R$ 100 mil investidos e Dívidas Zero.
- **1 Mês:** Organizar orçamento e começar a investir R$ 500.
- **HOJE:** Abrir conta na corretora.

### A Constância
Não espere motivação. Motivação é sentimento, disciplina é decisão.
Faça o chato, o básico e o difícil, todos os dias, por 10 anos. O resultado será 'sorte' aos olhos dos outros.

### Você é o Guardião
Ninguém vai cuidar do seu dinheiro por você. Assuma a responsabilidade total. Você é o CEO da sua vida S.A.`,
          examples: [
            "O bambu chinês cresce 5 anos para baixo (raiz) antes de crescer metros para cima em semanas. Você está criando raízes.",
          ],
          commonErrors: "Parar aqui. Achar que já sabe tudo. O mercado pune a arrogância.",
          summary: "Voe. O mundo é seu. Construa, proteja, multiplique e transborde. Nos vemos no topo.",
          exercise: "Escreva uma Carta para o seu Eu do Futuro (daqui a 5 anos). Conte o que você fez, quanto tem e como vive. Guarde e leia na data."
        }
      }
    ]
  }
];
