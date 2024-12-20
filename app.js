"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoute = loginRoute;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.post('/api/login', loginRoute);
app.listen(3000);
function loginRoute(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const pubKey = `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA53MhkOzupi/pmer+pTiI
UwzVZKmsQ4fKhYFpjH4jAsCjr/2ccWVCv49nn3X7j0s55enixIeyTr9q7Tk2FK4f
CcRvQuqZJWQ41BUTmVQgTPnD8dw0FHIsAEfO8puSWfjTuIJt2bV3fGkakWuzKlvt
igc18kwJTvE0lDx55sXsDBaRYnKBHgI3L3TkizgArXVNr5wEROWvM1njUa+ApxbP
lMPY3QNzcGa1RMdO3ubBCyfhgyRrwJOOZTq/elngX/z3+Yn5wz7+5rYoNf1RVYZ3
6MbCsBK06O5P1VGivFCaEYKtFAOlZHAS6Hxs+jG4MKWFuDcNzh4a6Zf8qwu5yYwL
JQIDAQAB
-----END PUBLIC KEY-----
    `;
    const privKey = `
-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDncyGQ7O6mL+mZ
6v6lOIhTDNVkqaxDh8qFgWmMfiMCwKOv/ZxxZUK/j2efdfuPSznl6eLEh7JOv2rt
OTYUrh8JxG9C6pklZDjUFROZVCBM+cPx3DQUciwAR87ym5JZ+NO4gm3ZtXd8aRqR
a7MqW+2KBzXyTAlO8TSUPHnmxewMFpFicoEeAjcvdOSLOACtdU2vnARE5a8zWeNR
r4CnFs+Uw9jdA3NwZrVEx07e5sELJ+GDJGvAk45lOr96WeBf/Pf5ifnDPv7mtig1
/VFVhnfoxsKwErTo7k/VUaK8UJoRgq0UA6VkcBLofGz6MbgwpYW4Nw3OHhrpl/yr
C7nJjAslAgMBAAECggEAI3VBs/J8eETYWK6F/xlrVy/c5FxTKhBcYDosiavMYNBS
83Qa2st835yQbz9TwAbyEo1TorC4SjSspLWyWZY4ZpZrxjhrKG2TgDhPZZrcDPbp
xDysVOKN56gYphXb5MFIbFi9DBCvQsXWXmd9zhRBzrbelqV7+pZc7AXc1hRF3q7u
weYTwrYIgCtn+I82F22OQwOD0GWm7I+fqopg08cG97v5jk/ilPXaA4Lmy0Mrb/AN
yYTSSYkmiYuhViCMgijC3wVhLqzKjRc2io4BbTnv2IaiGvA39KWAvw7mqypzF4QF
tyyS5A/mXO1wyKgxdQ5PxOqCV6zjmKhiOgWu6yrIiQKBgQD/KvOIMtqJaLyPOb4q
wIrYPHAnKcA4YhI0rW5O6wTFpucrJ6P8Hp9R0+lfoDckt7WMI0vsNldi1PYQ2uwG
GXlZd+/crDtWvvbdl7kZ/BlPFt3QyB0ugL3c9/5o6MDjGbdGB877CGHS7qSpfanL
KiOKoYU9sKtnW953NY5kjL2kGQKBgQDoNGB0TKShMcrSWHOAh/y0JWqauDEgmv6w
rwAsR9aIz2aHcT7VCFkejOwuByj11o+Kl4katTgEw6kMljb48ymoQ7nqmoyuK1Xr
k4mJpH6AkFGIJcTqv7xMUt7gJoOab/EOZqtd6JvggWRRob613+d746KnkClEtX6m
nULrhDgg7QKBgGHb6RX82s8D+fy72nCu8xDG7QQ4AN4eznihYsKlY2kh/1oPk9Zn
MBbDvKbN3RgZ1GhwSPfIR29B2TTRoN8d+eoUE0uASimUhzyoqXaLtnEchelCNd7V
xPrvqQQ273KpNB6JdBnWNx4cI85UwT+HY6YRF/Z2wOWc2A7D3V42k6xRAoGABlav
r10MPW47iCRr+r07k7tVvqV6idZRT4dnbM4FODTZKqdXvL7+l8vnApalcpiJ0JG0
Z2s8/TxOGA7dr0wL/hDjOVlAr9x0+vpLDdvUrDPEVgAZ8QKM5FR6ywmiHAwkO21o
Dic0YhuGHohYyWQ0UHh1TzerOLnvnCK82esBET0CgYBhHj2etldOr6IdWCwD6D7l
f0NWcJxRN33b2XfBrvMtgrz4wtITQPz0mxPI3/exfc3p9FUBTs8zDF7SE49ORyyp
Imr+h6rnJAED1De11eWRrsfP+nzv5+sadr/CEKmYJ/6NSBjf4mfPZGxsIyo6hA/t
b7Jlw049/Jz947CeQbbsMg==
-----END PRIVATE KEY-----
    `;
    const token = jsonwebtoken_1.default.sign({
        data: username
    }, privKey, {
        expiresIn: '1h',
        algorithm: 'RS256'
    });
    res.send({
        body: token
    });
}
