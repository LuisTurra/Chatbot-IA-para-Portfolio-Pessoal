# Chatbot IA para Portfólio Pessoal - Luis Turra

Um chatbot interativo embarcado no meu portfólio pessoal (https://luisturra.github.io/MyPortfolio/), construído com **Cloudflare Workers AI** + modelo Llama da Meta. O bot responde perguntas sobre meus projetos, habilidades, experiência e mais, usando IA generativa real com streaming de respostas.


## Funcionalidades
- **IA real com streaming**: Respostas aparecem letra por letra (efeito de digitação natural).
- **Prompt personalizado**: O bot sabe tudo sobre meu background, projetos de ML, dashboards Power BI, etc.
- **Widget flutuante responsivo**: Botão 💬 no canto inferior direito, adaptação mobile (≤420px).
- **CORS habilitado**: Funciona embedado em site estático (GitHub Pages).
- **100% gratuito**: Usa free tier do Cloudflare Workers AI (modelo Llama 3.1 8B ou similar).
- **Efeito de digitação lenta**: Para uma experiência mais humana.

## Tecnologias usadas
- **Backend**: Cloudflare Workers + Workers AI (`@cf/meta/llama-3.1-8b-instruct` ou equivalente)
- **Frontend**: JavaScript puro + CSS inline (sem frameworks pesados)
- **Deploy**: Wrangler CLI (serverless edge)
- **Integração**: Embed via `<script>` no HTML do portfólio

## Como rodar / Deploy
1. Clone o repo:
   ```bash
   git clone https://github.com/LuisTurra/portfolio-chatbot-cloudflare.git
   cd portfolio-chatbot-cloudflare

2. Instale dependências (se não tiver):bash

npm install

3. Faça login no Cloudflare (primeira vez):bash

npx wrangler login

4. Deploy:bash

npx wrangler deploy

A URL do Worker será algo como https://seu-nome.seu-subdominio.workers.dev.

Embed no seu site (ex: portfólio):Adicione o <style>, <div id="chat-widget-container">...</div> e <script> no final do index.html.
Atualize CHATBOT_URL com a URL do seu Worker.

Estrutura do projeto

.
├── src/
│   └── index.js          # Código principal do Worker (IA + prompt + CORS)
├── wrangler.jsonc        # Configuração (bindings AI, name, etc.)
├── package.json          # Dependências e scripts
├── .gitignore
└── README.md

## Por que esse projeto?
Demonstra integração prática com GenAI em produção.
Mostra skills em serverless, edge computing e frontend interativo.
Diferencial no portfólio: recrutadores podem interagir diretamente com IA sobre meus projetos reais.

## Próximos passos / Melhorias 
possíveisAdicionar RAG (Vectorize + D1 para respostas mais precisas com docs do portfólio).
Histórico de conversa (KV ou D1).
Suporte multilíngue completo.
Indicador "Digitando..." + cursor piscando.

Feito com  por Luis Turra | Cientista de Dados | Portfólio | LinkedIn | X/Twitter
Última atualização: Janeiro 2026

### Dicas finais
- **Adicione imagens**: Tire screenshots do chat aberto (desktop e mobile), suba no repo (ex: `images/demo-desktop.png`) e linke no README com `![Demo Desktop](images/demo-desktop.png)`.
- **License**: Adicione um MIT License se quiser (crie `LICENSE` com texto padrão).
- **Link no portfólio principal**: No seu site, crie um card na seção "Projetos" com:
  - Título: Chatbot IA Integrado ao Portfólio
  - Descrição curta + tech stack
  - Link pro repo novo + demo (seu site)

Pronto! Esse repo vai ficar profissional, bem documentado e atrativo para recrutadores. Se quiser adicionar badges (ex: Cloudflare, JavaScript), posso te dar o código Markdown.

Commitou? Me conta como ficou o README ou se precisa de ajustes! 🚀
