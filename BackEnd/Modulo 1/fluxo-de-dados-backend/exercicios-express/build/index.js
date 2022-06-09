"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//EXERCICIOS
//1)
app.get("/test", (req, res) => {
    res.status(200).send("API Funcionando");
});
//2)
app.get("/products", (req, res) => {
    const allProduts = data_1.products;
    return res.status(200).send(allProduts);
});
//3)
app.post("/addproducts", (req, res) => {
    const newProduct = req.body;
    data_1.products.push({
        id: Date.now().toString(),
        name: newProduct.name,
        price: newProduct.price,
    });
    res.status(201).send(data_1.products);
});
//4)
app.get("/products", (req, res) => {
    const allProducts = data_1.products;
    return res.status(200).send(allProducts);
});
//5)
app.put("/editPrice/:idPrice", (req, res) => {
    const newPrice = req.body.price;
    let id = req.params.idPrice;
    data_1.products.forEach(product => {
        if (id === product.id) {
            product.price = newPrice;
        }
    });
    res.status(200).send(data_1.products);
});
//6)
app.delete("/products/:id", (req, res) => {
    let id = req.params.id;
    const productIndex = data_1.products.findIndex(product => product.id === id);
    if (productIndex < 0) {
        return res.status(404).send("Produto não encontrado");
    }
    else {
        data_1.products.splice(productIndex, 1);
        return res.status(200).send(data_1.products);
    }
});
//4)
// const { id, name, price } = req.body;
// try {
//     const newProduct = {
//         id: Date.now().toString(),
//         name: req.body.name,
//         price: req.body.price,
//     };
//     products.push(newProduct);
//     return res.status(201).send(newProduct);
// }    
// // const newProduct = req.body;
// // products.push(newProduct);
// // res.status(200).send(newProduct);
// }); catch (error: any) {
//     return res.status(400).send(error);
// }
// ENDPOINTS
//Aula 1
// getAllPlaylists
app.get("/playlists", (req, res) => {
    const allUsers = data_1.users;
    const playlists = allUsers.map((user) => {
        return user.playlists;
    });
    const resultPlaylists = playlists.flat(1); // flat(profundidade da busca)
    // [1,[2,3], 4] -> flat(1) -> [1,2,3,4]
    res.status(200).send(resultPlaylists);
});
// getPlaylistTracks
app.get("/tracks", (req, res) => {
    const playlists = data_1.users.map((user) => {
        return user.playlists;
    }).flat(1);
    const tracks = playlists.map((playlist) => {
        return playlist.tracks;
    }).flat(1);
    res.status(200).send(tracks);
});
// deletePlaylistsByUserId
app.delete("/playlists/:userId", (req, res) => {
    const userId = req.params.userId;
    const usersUpdated = data_1.users.map((user) => {
        if (user.id === userId) {
            return Object.assign(Object.assign({}, user), { playlists: [] });
        }
        else {
            return user;
        }
    });
    res.send(usersUpdated);
});
// deleteTracksByPlaylistId
app.delete("/tracks/:playlistId", (req, res) => {
    const playlistId = req.params.playlistId;
    const usersUpdated = data_1.users.map((user) => {
    });
    res.send(usersUpdated);
});
//======================================================================
//Aula 2
//reflexão de Rota
// "país/estado/cidade/bairro/rua/numero/quarto" 
// "https://localhost:3003/"
//exemplos
app.get('/test/:number', (req, res) => {
    res.send(`Seu número da sorte é ${Number(req.params.number) + 3}!
        `);
});
app.get('/test/hello', (req, res) => {
    res.send(`Olá, mundo!`);
});
//exercicios 
//searchPlaylist
app.get("/playlists/search", (req, res) => {
    const usuario = req.headers.authorization;
    const consulta = req.query.name;
    const playlistDoUsuario = data_1.users.filter(user => {
        return user.id === usuario;
    });
    const playlistFiltrada = playlistDoUsuario[0].playlists.filter(playlist => {
        return playlist.name.toLowerCase().includes(String(consulta).toLowerCase());
    });
    const playlistMapeada = playlistFiltrada.map(playlist => {
        return { id: playlist.id, name: playlist.name };
    });
    const resposta = {
        quantity: playlistFiltrada.length,
        list: playlistMapeada
    };
    res.send({ result: resposta });
});
//createPlaylist
app.post("/playlists", (req, res) => {
    const usuario = req.headers.authorization;
    const nomeDaPlaylist = req.body.name;
    const novaPlaylist = {
        id: Date.now().toString(),
        name: nomeDaPlaylist,
        tracks: []
    };
    for (let i = 0; i < data_1.users.length; i++) {
        if (data_1.users[i].id === usuario) {
            data_1.users[i].playlists.push(novaPlaylist);
        }
    }
    res.send(data_1.users);
});
//addTrackToPlaylist
app.post("/playlists/:playlistId/tracks", (req, res) => {
    //input
    const usuario = req.headers.authorization;
    const playlistId = req.params.playlistId;
    const novaMusica = {
        id: Date.now().toString(),
        name: req.body.name,
        artist: req.body.artist,
        url: req.body.url
    };
    //tratamento de dados
    for (let i = 0; i < data_1.users.length; i++) {
        if (data_1.users[i].id === usuario) {
            for (let j = 0; j < data_1.users[i].playlists.length; j++) {
                if (data_1.users[i].playlists[j].id === playlistId) {
                    data_1.users[i].playlists[j].tracks.push(novaMusica);
                }
            }
        }
    }
    res.send(data_1.users);
});
app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});
