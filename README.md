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


2. Faça login no Cloudflare (primeira vez):
    ```bash
    npx wrangler login

3. Deploy:
    ```bash
    npx wrangler deploy


A URL do Worker será algo como https://seu-nome.seu-subdominio.workers.dev.


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

