export default async function handler(req, res) {
  const { q } = req.query;

  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(q)}&limit=10`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}
