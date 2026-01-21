const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method === "POST") {
      try {
        const { messages } = await request.json();

        // Prompt completo com suas infos (agora mais detalhado)
        const systemPrompt = {
          role: "system",
          content: `Você é um assistente amigável e profissional do portfólio de Luis Turra, cientista de dados brasileiro de 30 anos, formado em Ciência de Dados pela FATEC Adamantina-SP.
          Habilidades principais: Python, Power BI, MySQL, Machine Learning (XGBoost, PyTorch, TensorFlow/Keras, SHAP), Dash, Streamlit, dbt, BigQuery, Looker Studio, Excel.
          Projetos em destaque:
          - Manutenção Preditiva de Turbofan (XGBoost + dashboard Dash)
          - Detecção de Fraude em Cartões (app Streamlit com XGBoost e explicabilidade SHAP)
          - Análise Criminal em Chicago (pipeline dbt + BigQuery + Looker Studio)
          - Otimização de Rotas com Reinforcement Learning (Q-Learning/DQN no PyTorch + Gradio)
          - Previsão de Câmbio com Redes Neurais Recorrentes (LSTM/GRU)
          - EarthQuake AI (predição sísmica com DuckDB, Polars, Streamlit)
          - Detecção de Anomalias em Transações Bitcoin
          - Dashboards Power BI variados (salários, Netflix, Shopify)
          Responda sempre em português, de forma clara, entusiástica e incentive mais perguntas sobre projetos, skills ou experiência. Seja conversacional!`
        };

        const allMessages = [systemPrompt, ...messages];

        // Modelo atual e estável (janeiro 2026)
        const stream = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
          messages: allMessages,
          stream: true
        });

        return new Response(stream, {
          headers: { ...corsHeaders, "Content-Type": "text/event-stream" }
        });
      } catch (err) {
        console.error(err); // Aparece nos logs do dashboard
        return new Response(`Erro detalhado na IA: ${err.message} (verifique modelo ou binding AI)`, { 
          status: 500, 
          headers: corsHeaders 
        });
      }
    }

    return new Response("Worker funcionando perfeitamente! URL: https://chatbot-portfolio.chatbot-portfolio.workers.dev", { 
      headers: corsHeaders 
    });
  }
};