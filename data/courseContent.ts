

import { Module } from '../types';

export const COURSE_MODULES: Module[] = [
  {
    id: 'mod0',
    title: 'Módulo 0: Os primeiros passos',
    lessons: [
      {
        id: 'l1',
        title: '1. Introdução às Finanças Pessoais',
        duration: '10 min',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200', // Accounting / Planning / Start
        content: {
          intro: "Você já se perguntou por que, independentemente de quanto ganha, o dinheiro parece nunca ser suficiente? A resposta não está na matemática, mas no comportamento. Bem-vindo à sua jornada de transformação.",
          explanation: `### O que é Educação Financeira?

Muitas pessoas confundem educação financeira com 'aprender a economizar café' ou 'ficar rico rápido'. Não é nada disso.

Educação financeira é a arte de **gerenciar recursos escassos para maximizar sua qualidade de vida** ao longo do tempo. É sobre ter opções.

### Controle desde Cedo

Imagine que você está construindo uma casa. Se a fundação (seus hábitos financeiros) estiver torta, não adianta colocar um telhado de ouro (investimentos sofisticados). A casa vai cair.

Controlar receitas e despesas não é sobre privação, é sobre **direção**. Você precisa dizer ao seu dinheiro para onde ir, em vez de se perguntar para onde ele foi.

### Comparativo de Cenários

Veja como o gerenciamento é mais poderoso que a renda absoluta:

| Cenário | Renda | Gastos | Sobra | Resultado Emocional |
|---|---|---|---|---|
| **❌ Sem Educação** | R$ 5.000 | R$ 5.100 | - R$ 100 | Estresse, Ansiedade, Medo |
| **✅ Com Educação** | R$ 3.000 | R$ 2.500 | + R$ 500 | Paz, Segurança, Futuro |

Observe que quem ganha menos (Cenário 2) está acumulando riqueza, enquanto quem ganha mais (Cenário 1) está destruindo patrimônio.

### Os 3 Pilares Fundamentais

| Pilar | Definição |
|---|---|
| **1. Autonomia** | Deixar de ser refém do salário do próximo mês. Você trabalha porque quer, não só porque precisa comer. |
| **2. Segurança** | Saber que um imprevisto (carro quebrado, doença) não vai destruir sua vida. Você tem colchão financeiro. |
| **3. Liberdade** | Poder fazer escolhas baseadas em propósito, não em sobrevivência. Viajar, trocar de carreira, ajudar família. |`,
          examples: [
            "Sem educação financeira: Ganha R$ 5.000, gasta R$ 5.100, vive estressado e sem margem.",
            "Com educação financeira: Ganha R$ 3.000, vive com R$ 2.500, investe R$ 500 e dorme tranquilo."
          ],
          commonErrors: "Achar que precisa ganhar muito para começar a organizar. Pelo contrário: se você não organiza o pouco, o muito só vai amplificar sua bagunça.",
          summary: "Finanças pessoais são 20% conhecimento técnico e 80% comportamento. O objetivo deste curso é mudar o seu comportamento.",
          exercise: "Escreva em um papel: O que a liberdade financeira permitiria que você fizesse hoje que você não pode fazer?"
        }
      },
      {
        id: 'l2',
        title: '2. Mentalidade Financeira',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1475518117521-7c46087905e5?q=80&w=1200', // Lightbulb / Idea / Mindset
        content: {
          intro: "O maior obstáculo entre você e a riqueza não é o governo, o seu chefe ou a economia. É o espelho. Suas crenças sobre dinheiro ditam sua conta bancária.",
          explanation: `### Crenças Limitantes

Fomos programados desde crianças com frases como "dinheiro é sujo", "ricos são gananciosos" ou "dinheiro não nasce em árvore". Essas frases criam bloqueios mentais.

### Mentalidade de Escassez vs. Abundância

Para mudar sua vida financeira, você precisa substituir o pensamento de "Eu não posso pagar isso" por **"Como eu posso pagar isso?"**. Veja as diferenças fundamentais:

| Aspecto | ❌ Mentalidade de Escassez | ✅ Mentalidade de Abundância |
|---|---|---|
| **Foco Principal** | Custo das coisas | Valor e retorno |
| **Visão de Mundo** | Para um ganhar, outro perde | Riqueza se cria (todos ganham) |
| **Ação** | Guarda dinheiro por medo | Investe para multiplicar |
| **Reação ao Sucesso** | Critica quem tem sucesso | Admira e aprende com eles |
| **Problemas** | Reclama e culpa os outros | Busca soluções criativas |

A primeira trava seu cérebro; a segunda força ele a buscar soluções criativas.`,
          examples: [
            "Pessoa com mentalidade pobre: Recebe um aumento e imediatamente troca de carro para mostrar aos outros.",
            "Pessoa com mentalidade rica: Recebe um aumento e investe a diferença para comprar liberdade futura."
          ],
          commonErrors: "Culpar fatores externos. Enquanto você achar que é pobre por culpa do sistema, você entrega seu poder de mudança para o sistema.",
          summary: "Enriqueça sua mente e seu bolso não terá escolha a não ser acompanhar.",
          exercise: "Identifique uma crença negativa que você tem sobre dinheiro (ex: 'Investir é difícil') e escreva uma nova verdade para substituí-la."
        }
      },
      {
        id: 'l3',
        title: '3. Autoconhecimento Financeiro (Selfie)',
        duration: '20 min',
        image: 'https://images.unsplash.com/photo-1512358958014-b651a70c75cd?q=80&w=1200', // Golden Compass - Direction
        content: {
          intro: "Para chegar a algum lugar, o GPS precisa de dois pontos: onde você quer ir e onde você está agora. Hoje vamos descobrir onde você está.",
          explanation: `### A Selfie Financeira

Você precisa tirar uma foto crua e realista da sua situação. Sem filtros. Isso dói, mas cura.

A maioria das pessoas vive no "achismo": acha que sabe quanto gasta, mas subestima os valores em 30% a 50%.

### Os 3 Perfis Financeiros

Ao fazer sua análise, você se encontrará em um destes cenários. Identifique o seu:

| Perfil | Comportamento | Sintoma Clássico | Diagnóstico |
|---|---|---|---|
| **1. O Endividado** | Gasta MAIS do que ganha | Usa cheque especial e rotativo | **Emergência:** Estancar a sangria já. |
| **2. O Equilibrado** | Gasta IGUAL ao que ganha | Sem dívidas, mas sem reservas | **Risco:** Um imprevisto te quebra. |
| **3. O Investidor** | Gasta MENOS do que ganha | Tem reserva e aplicações | **Liberdade:** O dinheiro trabalha. |

O objetivo deste módulo não é julgar, é diagnosticar. Você não pode curar o que não diagnosticou.`,
          examples: [
            "O falso rico: Ganha 20 mil, gasta 22 mil. Parece rico, mas é pobre de patrimônio.",
            "O milionário invisível: Ganha 10 mil, vive com 5 mil, investe 5 mil há 15 anos. Ninguém nota, mas ele é livre."
          ],
          commonErrors: "Ignorar as pequenas despesas. O café, o Uber, a assinatura que você não usa. Eles são os cupins da sua riqueza.",
          summary: "Os números não mentem, mas eles podem te libertar se você tiver coragem de encará-los.",
          exercise: "Abra seu extrato bancário dos últimos 30 dias. Some TUDO. O valor total gasto foi maior ou menor do que você imaginava?"
        }
      }
    ]
  },
  {
    id: 'mod1',
    title: 'Módulo 1: Traça os teus objetivos',
    lessons: [
      {
        id: 'l4',
        title: '4. Objetivos de Curto, Médio e Longo Prazo',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200', // Checklist / Planning
        content: {
          intro: "Dinheiro sem destino vira paisagem. Se você não der um nome e um prazo para cada centavo, ele vai desaparecer com coisas triviais.",
          explanation: `### A Linha do Tempo Financeira

Nossa mente tem dificuldade de processar o futuro distante. Por isso, precisamos quebrar nossos sonhos em etapas tangíveis e alocar o dinheiro corretamente para cada uma.

| Tipo de Prazo | Tempo Estimado | Exemplos Reais | Onde Investir (Risco) |
|---|---|---|---|
| **Curto Prazo** | Até 1 ano | Férias, Reserva, Celular | **Baixo:** Tesouro Selic, CDB Liq. Diária |
| **Médio Prazo** | 1 a 5 anos | Carro, Casamento, Pós | **Médio:** LCI, LCA, CDB Prefixado |
| **Longo Prazo** | +5 anos | Aposentadoria, Faculdade Filhos | **Alto:** Ações, FIIs, Tesouro IPCA+ |

Observe que para metas longas, podemos correr mais riscos para buscar maior retorno. Para metas curtas, a segurança é prioridade.`,
          examples: [
            "Curto: Juntar R$ 3.000 até dezembro para o Natal.",
            "Longo: Acumular R$ 1 milhão em 20 anos para gerar uma renda passiva de R$ 8.000 mensais."
          ],
          commonErrors: "Usar dinheiro de curto prazo (reserva) para objetivos de longo prazo (bolsa de valores) e vice-versa. Isso gera perdas e frustração.",
          summary: "Quem não sabe o que quer, compra o que não precisa.",
          exercise: "Liste 3 objetivos financeiros: um para realizar em 6 meses, um em 3 anos e um em 10 anos."
        }
      },
      {
        id: 'l5',
        title: '5. Definindo Objetivos SMART',
        duration: '18 min',
        image: 'https://images.unsplash.com/photo-1533227297135-345be19655d4?q=80&w=1200', // Dartboard / Bullseye / Focus
        content: {
          intro: "'Quero ser rico' não é uma meta, é um delírio. Para transformar sonhos em planos, precisamos de engenharia reversa.",
          explanation: `### O Método SMART

Uma meta financeira precisa passar por 5 filtros para funcionar. Se falhar em um, provavelmente não será alcançada.

**S - Specific (Específico):**
O que exatamente você quer? "Quero um carro" é vago. "Quero um Honda Civic 2020 Prata" é específico.

**M - Measurable (Mensurável):**
Quanto custa? Você precisa de um número exato para saber quando chegou lá.

**A - Achievable (Atingível):**
Cabe no seu bolso hoje? A meta deve ser desafiadora, mas não impossível.

**R - Relevant (Relevante):**
Por que isso importa para você? Se não houver emoção ligada à meta, você desiste no primeiro obstáculo.

**T - Time-bound (Temporal):**
Quando você vai realizar? Uma meta sem data é apenas um sonho.

Agora você não tem mais um sonho vago. Você tem um boleto de R$ 1.000/mês consigo mesmo até 2025. Isso é um plano.`,
          examples: [
            "Meta Ruim: Quero economizar dinheiro.",
            "Meta SMART: Quero juntar R$ 5.000 (M) para trocar de notebook (S) até dezembro deste ano (T), guardando R$ 500 por mês (A) para melhorar meu trabalho (R)."
          ],
          commonErrors: "Criar metas impossíveis (juntar 1 milhão em um ano ganhando pouco) e desistir no primeiro mês por frustração.",
          summary: "Transforme intenções em números e datas. O universo gosta de especificidade.",
          exercise: "Pegue seu objetivo de Médio Prazo da aula anterior e reescreva-o usando o formato SMART completo."
        }
      }
    ]
  },
  {
    id: 'mod2',
    title: 'Módulo 2: O teu património atual',
    lessons: [
      {
        id: 'l6',
        title: '6. Selfie Financeira (Diagnóstico Inicial)',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200', // Calculator / Audit (Standard)
        content: {
          intro: "Você não começa uma dieta sem se pesar. Nas finanças, a balança é o seu fluxo de caixa e patrimônio.",
          explanation: `### A Foto do Momento

Vamos aprofundar o exercício da aula 3. Agora vamos categorizar. Você precisa saber exatamente quanto entra (Renda Líquida) e quanto sai.

O grande segredo não é o quanto você ganha, mas o **GAP (a diferença)** entre o que entra e o que sai.

Se você ganha R$ 10.000 e gasta R$ 10.000, você está correndo na esteira: muito esforço, nenhum deslocamento.

Se você ganha R$ 3.000 e gasta R$ 2.000, você está construindo riqueza.

Visualize seu objetivo e entenda que cada real economizado hoje é um tijolo nessa construção.`,
          examples: [
            "Renda Extra não é aumento de padrão de vida. É acelerador de objetivos.",
            "Se entrou R$ 500 extras, isso deve ir para o seu Fundo de Liberdade, não para o iFood."
          ],
          commonErrors: "Esquecer de contar os impostos e descontos do salário bruto. Trabalhe sempre com o valor Líquido (o que cai na conta).",
          summary: "Seu diagnóstico atual não define seu futuro, mas define seu ponto de partida.",
          exercise: "Calcule sua 'Taxa de Poupança' atual: (Dinheiro Guardado / Renda Líquida) * 100. Se for zero, temos trabalho a fazer."
        }
      },
      {
        id: 'l7',
        title: '7. Patrimônio Líquido',
        duration: '20 min',
        image: 'https://images.unsplash.com/photo-1611974765270-ca1258ef3612?q=80&w=1200', // Balance scale / Justice / Weight
        content: {
          intro: "Riqueza não é salário. Riqueza é Patrimônio. É o que sobra se você vender tudo o que tem e pagar tudo o que deve.",
          explanation: `### A Fórmula da Riqueza

**Patrimônio Líquido = Ativos - Passivos**

Esta é a conta mais importante da sua vida financeira. Aprenda a diferenciar o que coloca dinheiro no seu bolso do que tira.

| Categoria | Descrição | Exemplo Prático | Impacto na Riqueza |
|---|---|---|---|
| **🟢 Ativos** | Colocam dinheiro no bolso | Ações, Imóveis, Investimentos | 📈 Aumenta |
| **🔴 Passivos** | Tiram dinheiro do bolso | Financiamentos, Dívidas, Carro | 📉 Diminui |

Se o resultado da subtração for negativo, você está tecnicamente "quebrado", mesmo que tenha um bom salário. O objetivo do jogo é aumentar a coluna dos Ativos e diminuir a dos Passivos.`,
          examples: [
            "João tem um apto de R$ 500 mil, mas deve R$ 450 mil ao banco. Patrimônio real dele no imóvel: R$ 50 mil.",
            "Maria tem R$ 100 mil investidos e zero dívidas. O patrimônio da Maria é o dobro do de João, embora ele more numa casa 'melhor'."
          ],
          commonErrors: "Confundir limite de cartão de crédito com ativo. Limite é dívida potencial, não dinheiro seu.",
          summary: "Pare de focar em parecer rico e comece a focar em ser rico (ter patrimônio positivo).",
          exercise: "Liste todos os seus bens e todas as suas dívidas em uma folha dividida ao meio. Faça a subtração."
        }
      },
      {
        id: 'l8',
        title: '8. Registro de Receitas e Despesas',
        duration: '18 min',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200', // Writing in notebook / Meeting
        content: {
          intro: "Pequenos vazamentos afundam grandes navios. Se você não sabe para onde vão os centavos, nunca terá milhões.",
          explanation: `### Rastreador de Dinheiro

Para estancar a sangria financeira, você precisa registrar tudo. Não importa a ferramenta (caderno, Excel, app), importa o hábito.

**Receitas:**
Salário, renda extra, aluguéis recebidos, dividendos. (Registre quando CAI na conta, não quando você acha que vai receber).

**Despesas:**
Classifique em categorias macro: Habitação, Alimentação, Transporte, Lazer, Saúde.

O registro revela a verdade. Você descobrirá que gasta R$ 600 em Uber achando que gastava R$ 200. Esse choque de realidade é necessário para mudar o comportamento.`,
          examples: [
            "O 'Cafezinho': R$ 10 por dia parece nada. No ano, são R$ 3.650. Investido em 20 anos, vira um carro popular.",
            "A 'Pizza de Sexta': R$ 80 por semana = R$ 4.160 por ano. Vale a pena ou prefere viajar nas férias?"
          ],
          commonErrors: "Registrar só as contas grandes e ignorar os gastos 'picados' do dia a dia. São eles que quebram o orçamento.",
          summary: "Você não pode gerenciar o que não mede. O registro é a luz que ilumina o quarto escuro das suas finanças.",
          exercise: "Durante os próximos 7 dias, anote absolutamente tudo que você comprar, até uma bala. Analise no fim da semana."
        }
      },
      {
        id: 'l9',
        title: '9. Planejamento Anual de Despesas',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1506784335131-d6959de13a5a?q=80&w=1200', // Calendar / Planning / Dates
        content: {
          intro: "Janeiro nunca deveria ser uma surpresa. O IPVA vence todo ano na mesma data. O Natal é sempre em dezembro. Por que agimos como se fossem imprevistos?",
          explanation: `### O Efeito Sazonal

Muitas dívidas surgem porque esquecemos das despesas que não são mensais, mas são certas.

*   **Janeiro/Fevereiro:** IPVA, IPTU, Matrícula Escolar, Material Escolar.
*   **Datas Comemorativas:** Dia das Mães, Pais, Namorados, Crianças, Natal.
*   **Aniversários:** Presentes para família e amigos.

### A Técnica do Rateio

Some todas essas despesas anuais. Vamos supor que dê R$ 6.000 no ano.

Divida esse valor por 12 meses (R$ 500).

Você deve guardar R$ 500 todo mês numa 'Conta de Despesas Anuais'. Quando o IPVA chegar em janeiro, o dinheiro já estará lá e você pagará à vista com desconto, sem sufoco.`,
          examples: [
            "Pagando IPVA: Quem planeja paga à vista com 3% a 5% de desconto.",
            "Quem não planeja: Parcela e perde o desconto (ou paga juros)."
          ],
          commonErrors: "Usar o 13º salário para pagar dívidas feitas durante o ano. O ideal é usar o 13º para alavancar investimentos ou pagar as despesas de janeiro à vista.",
          summary: "Transforme despesas anuais em parcelas mensais que você paga para si mesmo.",
          exercise: "Pegue um calendário. Marque todas as despesas grandes previsíveis dos próximos 12 meses e estime o valor total."
        }
      },
      {
        id: 'l10',
        title: '10. Orçamento Mensal',
        duration: '22 min',
        image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1200', // Coins stacked / Savings / Money
        content: {
          intro: "Orçamento não é uma camisa de força para te prender, é um plano para te libertar de culpa.",
          explanation: `### A Regra 50/30/20

Uma das formas mais eficazes de dividir o orçamento é o método dos potes percentuais. Veja como dividir sua renda líquida:

| Pote | Porcentagem | O que entra aqui? | Função |
|---|---|---|---|
| **🟢 Necessidades** | 50% | Aluguel, Luz, Comida, Saúde | Sobrevivência Básica |
| **🟡 Desejos** | 30% | Lazer, Hobbies, Viagens, Roupas | Estilo de Vida |
| **🔵 Futuro** | 20% | Reserva, Aposentadoria, Dívidas | Liberdade Financeira |

Se suas necessidades consomem 80% da sua renda, você tem um problema estrutural: ou ganha pouco ou vive numa casa/carro incompatível com sua realidade.`,
          examples: [
            "Exemplo prático: Se você ganha R$ 4.000 líquidos.",
            "R$ 2.000 para contas fixas e essenciais.",
            "R$ 1.200 para curtir a vida.",
            "R$ 800 para investir e construir patrimônio."
          ],
          commonErrors: "Tentar investir 'o que sobra'. Nunca sobra. A Lei de Parkinson diz que seus gastos sempre expandem até ocupar toda a renda disponível. Invista assim que receber.",
          summary: "Dê uma função para cada real antes mesmo de recebê-lo.",
          exercise: "Desenhe um gráfico de pizza da sua renda atual. Quanto % está indo para cada área? Compare com o ideal 50/30/20."
        }
      }
    ]
  },
  {
    id: 'mod3',
    title: 'Módulo 3: Aprende a gerir o teu dinheiro',
    lessons: [
      {
        id: 'l11',
        title: '11. Organização do Orçamento Mensal',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200', // Meeting / Planning / Org
        content: {
          intro: "Organização vence a força de vontade. Se você depender da memória, vai falhar.",
          explanation: `### Classificação Inteligente

Para gerir, precisamos separar o joio do trigo. Entenda a diferença crucial entre os tipos de gastos:

| Tipo | Fixas | Variáveis |
|---|---|---|
| **Definição** | Valor previsível, todo mês | Valor oscila, depende do uso |
| **Exemplos** | Aluguel, Escola, Internet | Mercado, Uber, Lazer, Roupas |
| **Dificuldade** | Difícil cortar (exige mudança) | Fácil cortar (exige disciplina) |
| **Estratégia** | Renegociar anualmente | **Estabelecer um TETO mensal** |

O segredo da gestão está nas **Variáveis**. É no supermercado e no lazer que o orçamento estoura. Estabeleça tetos: "Só posso gastar R$ 600 de mercado este mês".`,
          examples: [
            "Teto de Gastos: Levar dinheiro vivo ou cartão pré-pago para a balada/bar.",
            "Quando o dinheiro acaba, a festa acaba. Isso evita a ressaca financeira moral do dia seguinte."
          ],
          commonErrors: "Deixar as contas em débito automático e nunca conferir. Empresas erram cobranças com frequência.",
          summary: "A previsibilidade traz paz. Saiba quanto vai sair antes do mês começar.",
          exercise: "Defina um teto máximo de gastos para 'Lazer' e 'Supermercado' para o próximo mês."
        }
      },
      {
        id: 'l12',
        title: '12. Método dos Envelopes',
        duration: '12 min',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200', // Paper Envelopes / Organization
        content: {
          intro: "Uma técnica antiga, analógica e brutalmente eficiente para quem tem dificuldade de controle.",
          explanation: `### Dinheiro Físico vs. Digital

Estudos mostram que gastar no cartão de crédito dói menos no cérebro do que entregar dinheiro vivo. O método dos envelopes usa essa psicologia a seu favor.

**Como funciona:**
1.  Saque o dinheiro das despesas variáveis (Mercado, Lazer, Gasolina).
2.  Coloque em envelopes separados.
3.  Escreva "MERCADO" no envelope.
4.  Quando for ao mercado, leve o envelope.

Se o dinheiro acabar no dia 20, você come o que tem na despensa até o dia 30.

Isso cria **consciência real** de escassez e te força a fazer escolhas melhores durante o mês.`,
          examples: [
            "Visualização: Ver o envelope ficando vazio na segunda semana te faz economizar naturalmente.",
            "Sem precisar de planilha, seu cérebro entende o limite."
          ],
          commonErrors: "Roubar de um envelope para colocar no outro. Se acabou o dinheiro do lazer, acabou. Disciplina é a chave.",
          summary: "Se o digital te faz gastar demais, volte ao analógico até reeducar seu cérebro.",
          exercise: "Teste o método dos envelopes por 1 semana apenas com a categoria 'Lazer'."
        }
      },
      {
        id: 'l13',
        title: '13. Planilhas e Apps Financeiros',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200', // Smartphone / Data Analytics / Graphs
        content: {
          intro: "A tecnologia pode ser sua melhor amiga ou sua maior distração. Escolha a ferramenta que você realmente usa.",
          explanation: `### Digitalizando o Controle

Para quem odeia papel, apps e planilhas são a solução.

**Planilhas (Excel/Google Sheets):**
Permitem personalização total e projeções complexas. Ótimo para quem gosta de detalhes e sentar no computador 1x por semana.

**Apps Automáticos (Organizze, Mobills, Bankin):**
Conectam nas contas e categorizam sozinhos. Ótimo para quem não tem tempo, mas exige revisão para corrigir categorias erradas.

O melhor app é aquele que você abre. Não adianta ter um sistema complexo que você abandona em 3 dias.`,
          examples: [
            "Automação: Apps que mandam notificação 'Você gastou 80% do seu orçamento de Restaurantes' ajudam a frear o comportamento em tempo real.",
          ],
          commonErrors: "Baixar 5 apps e não alimentar nenhum.",
          summary: "A melhor ferramenta é aquela que funciona para você.",
          exercise: "Escolha UMA ferramenta (App ou Planilha) e comprometa-se a usá-la por 30 dias sem falhar."
        }
      }
    ]
  },
  {
    id: 'mod4',
    title: 'Módulo 4: Saindo do Vermelho (Dívidas)',
    lessons: [
      {
        id: 'l14',
        title: '14. O Inventário da Dívida',
        duration: '20 min',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200', // Chains / Lock / Freedom
        content: {
          intro: "A dívida é um cupim financeiro. Se você ignorar, ela consome a casa inteira. Hoje vamos acender a luz e olhar o estrago.",
          explanation: `### Encarando o Monstro

O primeiro passo para sair das dívidas é saber o tamanho exato do problema. A maioria das pessoas tem medo de somar.

Você precisa criar uma tabela com:
1.  Para quem deve (Banco, Loja, Parente).
2.  Valor original.
3.  Valor atual (com juros).
4.  Custo Efetivo Total (CET) - a taxa de juros real.

### A Hierarquia do Pagamento

Nem toda dívida é igual. Algumas são "câncer" (juros altos), outras são "gripe" (juros baixos).

| Prioridade | Tipo de Dívida | Juros Médios | Ação |
|---|---|---|---|
| **🚨 1. Urgentíssima** | Cartão de Crédito, Cheque Especial | 300% a.a. | Pagar ou Renegociar ONTEM. |
| **⚠️ 2. Urgente** | Empréstimo Pessoal | 80% a.a. | Tentar portabilidade. |
| **🟠 3. Média** | Financiamento de Carro | 20% a.a. | Manter em dia se possível. |
| **🟢 4. Baixa** | Financiamento Imobiliário | 9% a.a. | Pagar conforme o fluxo. |

Nunca pague a dívida da casa antes de quitar o cartão de crédito. É matemática básica.`,
          examples: [
            "Erro comum: Usar o dinheiro da poupança (rende 6% ao ano) para manter dinheiro aplicado enquanto deve no cartão (custa 300% ao ano).",
            "Matematicamente, quitar a dívida é o melhor investimento que existe nesse caso."
          ],
          commonErrors: "Aceitar a primeira proposta de renegociação do banco. O gerente tem meta de lucro, não de te ajudar.",
          summary: "A dívida não define quem você é, mas define onde você pode chegar. Limpe o caminho.",
          exercise: "Faça o inventário completo de suas dívidas e ordene-as da maior taxa de juros para a menor."
        }
      },
      {
        id: 'l15',
        title: '15. Estratégias de Negociação',
        duration: '25 min',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200', // Handshake / Deal / Negotiation
        content: {
          intro: "O banco não quer tomar sua casa ou sujar seu nome para sempre. Eles querem dinheiro. E preferem receber pouco do que nada.",
          explanation: `### A Regra de Ouro da Negociação

Nunca demonstre desespero. Se você tem uma dívida antiga (mais de 2 anos), o poder de barganha virou para o seu lado.

**Passo a passo para negociar:**
1.  **Tenha dinheiro na mão:** Junte um valor para oferecer à vista. "Devo 5 mil, tenho 1 mil agora para quitar. Aceita?"
2.  **Feirões Limpa Nome:** Serasa e bancos fazem eventos onde os descontos chegam a 90%.
3.  **Portabilidade:** Se seu banco cobra 8% de juros, o banco vizinho pode comprar sua dívida cobrando 4%.

### O Que NÃO Fazer

Jamais faça um novo empréstimo para pagar o antigo, a menos que os juros sejam MUITO menores (Troca de Dívida Cara por Barata).

Exemplo: Trocar Cheque Especial (12% a.m.) por Consignado (2% a.m.) é inteligente. Trocar por outro pessoal (10% a.m.) é trocar seis por meia dúzia.`,
          examples: [
            "Caso Real: Dívida de Cartão de R$ 10.000 virou R$ 50.000 em 3 anos. No Feirão, o banco aceitou R$ 2.000 à vista para quitar.",
            "O banco já considerava esse dinheiro perdido, então R$ 2.000 é lucro."
          ],
          commonErrors: "Renegociar uma parcela que não cabe no bolso. Você vai falhar novamente, e na segunda vez o banco não será bonzinho.",
          summary: "Quem deve tem a força, desde que saiba jogar o jogo. Negocie com frieza.",
          exercise: "Ligue para um credor ou simule no Serasa Limpa Nome qual seria o desconto para pagamento à vista de uma dívida."
        }
      },
      {
        id: 'l16',
        title: '16. Método Bola de Neve',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200', // Snow / Mountain / Avalanche
        content: {
          intro: "Às vezes, a matemática diz uma coisa, mas a psicologia diz outra. O método Bola de Neve foca na sua motivação.",
          explanation: `### Bola de Neve vs. Avalanche

Existem duas formas principais de atacar múltiplas dívidas:

**1. Avalanche (Matemática Pura):**
Foca na dívida com **maior juros**. É a que economiza mais dinheiro no longo prazo, mas pode demorar para ver resultado (se a dívida for grande).

**2. Bola de Neve (Psicológica):**
Foca na dívida de **menor valor total**, independente dos juros.

**Como funciona a Bola de Neve:**
1.  Liste as dívidas da menor para a maior.
2.  Pague o mínimo em todas, exceto a menor.
3.  Ataque a menor com tudo o que tiver.
4.  Quando quitar a menor, pegue o dinheiro que sobrava dela e ataque a próxima.

O efeito psicológico de eliminar uma linha da sua planilha é poderoso e te dá gás para continuar.`,
          examples: [
            "Dívida A: R$ 500 (Loja). Dívida B: R$ 10.000 (Banco).",
            "Pague logo a de R$ 500. A sensação de vitória vai te motivar a encarar a de 10 mil.",
            "Sem essa pequena vitória, você pode desanimar olhando para a montanha de 10 mil."
          ],
          commonErrors: "Desistir no meio do caminho porque o progresso parece lento. A consistência vence a intensidade.",
          summary: "O melhor método é aquele que você não abandona.",
          exercise: "Decida qual método usar (Matemático ou Psicológico) e circule qual dívida será a 'Vítima Número 1' a ser eliminada."
        }
      }
    ]
  },
  {
    id: 'mod5',
    title: 'Módulo 5: Blindagem Patrimonial',
    lessons: [
      {
        id: 'l17',
        title: '17. Reserva de Emergência',
        duration: '20 min',
        image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200', // Umbrella / Rain / Protection
        content: {
          intro: "Imprevistos não são azar, são estatística. O carro vai quebrar, o dente vai doer, o emprego pode acabar. A Reserva é seu colete à prova de balas.",
          explanation: `### O Que é a Reserva?

É um dinheiro guardado EXCLUSIVAMENTE para emergências reais. Não é para trocar de celular ou viajar.

**Quanto guardar?**
Depende da estabilidade da sua renda.

| Perfil Profissional | Tamanho da Reserva |
|---|---|
| **Funcionário Público** | 3 a 6 meses do custo de vida |
| **CLT (Setor Privado)** | 6 a 9 meses do custo de vida |
| **Autônomo / Empreendedor** | 12 meses do custo de vida |

Se seu custo mensal é R$ 2.000 e você é CLT, sua meta é ter entre R$ 12.000 e R$ 18.000 guardados.`,
          examples: [
            "Sem Reserva: Pneu fura, você usa o cheque especial, paga juros e se endivida.",
            "Com Reserva: Pneu fura, você saca da reserva, paga à vista com desconto e dorme tranquilo."
          ],
          commonErrors: "Investir em ações antes de ter a reserva. Se a bolsa cair e você precisar do dinheiro, você realiza o prejuízo.",
          summary: "A Reserva de Emergência compra a sua paz de espírito. E paz não tem preço.",
          exercise: "Calcule o valor exato da sua Reserva Ideal (Custo Mensal x Meses de Segurança)."
        }
      },
      {
        id: 'l18',
        title: '18. Onde Guardar a Reserva?',
        duration: '15 min',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200', // Safe / Vault / Gold
        content: {
          intro: "Reserva de emergência não é para ficar rico, é para estar disponível. Rentabilidade aqui não importa, liquidez é rainha.",
          explanation: `### O Tripé da Reserva

O dinheiro da emergência precisa ter 3 características obrigatórias:
1.  **Liquidez Diária:** Posso sacar hoje ou amanhã?
2.  **Segurança:** Risco quase zero de perder valor.
3.  **Baixa Volatilidade:** Não pode oscilar como ações.

### Onde Investir?

| Investimento | Adequado? | Por que? |
|---|---|---|
| **Tesouro Selic** | ✅ Sim | Mais seguro do país, rende 100% da taxa básica. |
| **CDB Liq. Diária** | ✅ Sim | Garantia FGC, fácil resgate em bancos digitais. |
| **Poupança** | ⚠️ Ruim | Perde para a inflação, mas serve se você não sabe usar app. |
| **Ações/FIIs** | ❌ JAMAIS | Podem cair 50% no dia que você precisar sacar. |

Não invente moda. Reserva é no feijão com arroz.`,
          examples: [
            "Deixar a reserva em Bitcoin: O Bitcoin cai 20% no dia que seu carro quebra. Você perdeu dinheiro duplamente.",
            "Deixar no Tesouro Selic: O valor sobe um pouquinho todo dia, faça chuva ou faça sol."
          ],
          commonErrors: "Deixar o dinheiro parado na conta corrente (dinheiro morto) ou travado em investimentos de 2 anos (dinheiro preso).",
          summary: "Lugar de reserva é onde você consegue pegar o dinheiro em 24 horas sem perder nada.",
          exercise: "Abra conta em um banco digital ou corretora e verifique quanto rende o CDB de Liquidez Diária deles."
        }
      },
      {
        id: 'l19',
        title: '19. Seguros: O Mal Necessário',
        duration: '18 min',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200', // Insurance / Hands protection / House
        content: {
          intro: "Você leva 10 anos para construir um patrimônio e 10 minutos para perdê-lo em um incêndio ou acidente. Blindagem é essencial.",
          explanation: `### Transferindo o Risco

Seguro é pagar um pouco para não ter que pagar muito se algo der errado. É transferir o risco da ruína para a seguradora.

**Seguros Indispensáveis:**
1.  **Seguro de Vida:** Se você tem dependentes (filhos, cônjuge), é obrigatório. Se você morrer, quem paga as contas?
2.  **Seguro Auto:** Bater um carro de luxo pode custar R$ 200.000. Você tem esse dinheiro? Se não, tenha seguro contra terceiros.
3.  **Seguro Residencial:** É barato (R$ 300/ano) e protege contra incêndio, roubo e danos elétricos.

Muitos veem seguro como "gasto". Na verdade, é a garantia de que seu patrimônio não vai virar pó.`,
          examples: [
            "Acidente de carro sem seguro: Você paga o seu conserto e o do outro. Sua reserva de 5 anos some em 1 dia.",
            "Acidente com seguro: Você paga a franquia e segue a vida."
          ],
          commonErrors: "Fazer seguro de celular (bem barato) e não fazer seguro de vida (bem insubstituível). Proteja o que vale mais.",
          summary: "O melhor seguro é aquele que você paga e nunca usa.",
          exercise: "Verifique se você possui os 3 seguros básicos. Se não, cote um Seguro de Vida ou Residencial esta semana."
        }
      }
    ]
  },
  {
    id: 'mod6',
    title: 'Módulo 6: O Mundo dos Investimentos',
    lessons: [
      {
        id: 'l20',
        title: '20. O Tripé dos Investimentos',
        duration: '22 min',
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200', // Balance / Triangle / Scale
        content: {
          intro: "Não existe investimento perfeito. Existe o investimento adequado para o seu objetivo. Aprenda a regra do cobertor curto.",
          explanation: `### Rentabilidade, Segurança, Liquidez

Você nunca terá os três ao mesmo tempo. Você deve escolher dois.

1.  **Alta Rentabilidade + Alta Segurança:** Não tem Liquidez (Imóveis na planta, CDBs longos).
2.  **Alta Segurança + Alta Liquidez:** Baixa Rentabilidade (Poupança, Tesouro Selic).
3.  **Alta Rentabilidade + Alta Liquidez:** Baixa Segurança (Ações, Day Trade).

Quando alguém te oferecer algo com "Alto retorno, seguro e que pode sacar quando quiser", **FOGE. É GOLPE.**

### Alinhando Expectativas

Para curto prazo, priorize Liquidez e Segurança (abre mão do lucro).
Para longo prazo, priorize Rentabilidade (abre mão da liquidez e aceita risco).`,
          examples: [
            "Pirâmides financeiras prometem os 3: 10% ao mês (Rentabilidade), Garantido (Segurança) e saque diário (Liquidez). Não existe mágica.",
          ],
          commonErrors: "Buscar o 'melhor investimento do mundo'. Ele não existe. Existe uma carteira diversificada que equilibra os 3 pontos.",
          summary: "Entender o tripé é a vacina contra golpes e frustrações.",
          exercise: "Analise um investimento que te ofereceram recentemente. Qual dos 3 pés ele sacrifica?"
        }
      },
      {
        id: 'l21',
        title: '21. Renda Fixa: Sopa de Letrinhas',
        duration: '25 min',
        image: 'https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?q=80&w=1200', // Bonds / Papers / Certificates
        content: {
          intro: "CDB, LCI, LCA, CRI, CRA. Parece complicado, mas é simples: Você empresta dinheiro e recebe juros de volta.",
          explanation: `### Para quem você empresta?

*   **Tesouro Direto:** Empresta para o **Governo**. (Risco Baixíssimo).
*   **CDB:** Empresta para o **Banco**. (Risco Baixo - Garantido pelo FGC).
*   **LCI/LCA:** Empresta para **Imóveis/Agro**. (Isento de Imposto de Renda).
*   **Debêntures:** Empresta para **Empresas**. (Risco Médio/Alto).

### Indexadores (Como rende?)

1.  **Pós-fixado (% do CDI):** Segue a taxa de juros do país. Se a Selic sobe, você ganha mais. Ótimo para conservadores.
2.  **Prefixado (12% ao ano):** Taxa fixa. Bom quando os juros vão cair. Ruim se a inflação explodir.
3.  **Híbrido (IPCA + 6%):** Protege contra a inflação e garante um ganho real. O melhor para aposentadoria.`,
          examples: [
            "Tesouro IPCA+ 2045: Garante que seu dinheiro não vai perder valor para a inflação por 20 anos.",
            "CDB 100% do CDI: Rende praticamente a mesma coisa que a taxa Selic."
          ],
          commonErrors: "Comprar título prefixado achando que é seguro e vender antes do vencimento. Você pode perder dinheiro na 'Marcação a Mercado'.",
          summary: "Renda Fixa não é fixa. Ela só é fixa se você levar até o vencimento.",
          exercise: "Entre na sua corretora e encontre um CDB que pague mais de 100% do CDI."
        }
      },
      {
        id: 'l22',
        title: '22. Renda Variável: Sócio de Grandes Empresas',
        duration: '30 min',
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200', // Stock Market / Bull / Screen
        content: {
          intro: "Quer enriquecer de verdade? Pare de emprestar dinheiro e comece a ser dono. Bem-vindo à Bolsa de Valores.",
          explanation: `### O Que é uma Ação?

É o menor pedaço de uma empresa. Ao comprar uma ação da Petrobras, você vira sócio dela. Se ela lucra, você recebe parte (Dividendos). Se ela valoriza, seu patrimônio cresce.

### O Risco e o Tempo

No curto prazo, a bolsa é um cassino: sobe e desce sem lógica.
No longo prazo, a cotação segue o lucro. Empresas boas tendem a valorizar.

| Mindset Perdedor | Mindset Vencedor |
|---|---|
| Compra porque subiu (Efeito Manada) | Compra empresas sólidas e lucrativas |
| Vende porque caiu (Pânico) | Compra mais quando cai (Promoção) |
| Quer ficar rico em 1 mês | Constrói patrimônio em 20 anos |

### Fundos Imobiliários (FIIs)

A porta de entrada. Você compra cotas de shoppings, galpões e escritórios e recebe 'aluguel' isento de IR todo mês na conta. É como ter um imóvel sem a dor de cabeça do inquilino.`,
          examples: [
            "Mágica dos Dividendos: Comprar 10 cotas de um FII. No mês seguinte, com o aluguel recebido, você consegue comprar mais um pedacinho da 11ª cota sem tirar dinheiro do bolso. É a Bola de Neve positiva.",
          ],
          commonErrors: "Fazer Day Trade (tentar adivinhar o movimento do dia). 95% das pessoas perdem dinheiro com isso.",
          summary: "A bolsa é um mecanismo de transferir dinheiro dos impacientes para os pacientes.",
          exercise: "Pesquise o que é o índice BOVESPA e veja o gráfico dele nos últimos 20 anos. A tendência é de alta ou baixa?"
        }
      },
      {
        id: 'l23',
        title: '23. Montando sua Carteira Vencedora',
        duration: '20 min',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200', // Pie Chart / Diversification / Tablet
        content: {
          intro: "Não coloque todos os ovos na mesma cesta. A diversificação é o único almoço grátis do mercado financeiro.",
          explanation: `### A Alocação de Ativos

O segredo não é acertar "a ação do momento", mas ter uma divisão equilibrada.

**Sugestão para Iniciantes:**
*   **60% Renda Fixa:** Tesouro Selic, CDBs, IPCA+ (Segurança).
*   **25% Fundos Imobiliários:** Geração de Renda Mensal.
*   **15% Ações:** Potencial de explosão a longo prazo.

### Rebalanceamento

Se as ações subirem muito e virarem 30% da carteira, você não vende. Você para de comprar ações e compra Renda Fixa até equilibrar novamente. Isso te força a comprar barato e vender caro automaticamente.`,
          examples: [
            "Crise de 2020 (Covid): Quem tinha 100% em ações desesperou. Quem tinha diversificação, usou a Renda Fixa para comprar ações baratas na crise.",
          ],
          commonErrors: "Copiar a carteira do youtuber famoso. O perfil de risco dele é diferente do seu.",
          summary: "Uma carteira bem montada te permite dormir tranquilo mesmo quando o mundo está pegando fogo.",
          exercise: "Desenhe como você gostaria que fosse sua pizza de investimentos ideal daqui a 5 anos."
        }
      }
    ]
  }
];