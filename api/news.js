// api/news.js
import fetch from 'node-fetch';

const CACHE_TTL = 60 * 10; // cache 10 minutos
let cache = { ts: 0, data: null };

export default async function handler(req, res) {
  const now = Date.now() / 1000;

  // Retorna cache se ainda válido
  if (cache.data && (now - cache.ts) < CACHE_TTL) {
    return res.json(cache.data);
  }

 const key = process.env.NEWSAPI_KEY;
if (!key) return res.status(500).json({ error: 'API key missing' });

  // Endpoint da NewsAPI: top headlines sobre finanças/mercados
  const url = `https://newsapi.org/v2/top-headlines?q=finance OR markets&language=en&pageSize=12&apiKey=${key}`;

  try {
    const r = await fetch(url);
    const body = await r.json();

    // Limpa dados e só envia o que precisamos
    const articles = (body.articles || []).map(a => ({
      title: a.title,
      description: a.description,
      source: a.source?.name,
      url: a.url,
      publishedAt: a.publishedAt,
      urlToImage: a.urlToImage
    }));

    cache = { ts: now, data: { articles } };
    res.json({ articles });
  } catch (e) {
    res.status(500).json({ error: 'Fetch failed', details: e.message });
  }
}
