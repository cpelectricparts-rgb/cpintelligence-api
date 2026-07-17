export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    service: "CP Intelligence API",
    version: "5.0.0"
  });
}
