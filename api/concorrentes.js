export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({
      erro: "Informe o parâmetro q"
    });
  }

  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(q)}&limit=10`;

    const response = await fetch(url);
    const data = await response.json();

    const resultado = data.results.map(item => ({
      id: item.id,
      titulo: item.title,
      preco: item.price,
      link: item.permalink,
      catalogo: item.catalog_listing || false,
      vendedor: item.seller?.nickname || ""
    }));

    res.status(200).json(resultado);

  } catch (e) {
    res.status(500).json({
      erro: e.message
    });
  }
}
