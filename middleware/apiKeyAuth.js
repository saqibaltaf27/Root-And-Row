const API_KEY = "SAQIB_SECRET_ALTAF_@47"; // Hardcoded API Key

function apiKeyAuth(req, res, next) {
    const key = req.headers["x-api-key"];
    if(!key || key !== API_KEY) {
        return res.status(401).json({
            error: "Unauthorized: Invalid API Key"
        });
    }
    next();
}

module.exports = apiKeyAuth;

