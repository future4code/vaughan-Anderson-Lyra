import express from 'express';  
import cors from 'cors';
import { users, products } from './data';
  

const app = express();

app.use(express.json());
app.use(cors());



//EXERCICIOS

//1)
app.get("/test", (req, res) => {
    
    res.status(200).send("API Funcionando");
});

//2)
app.get("/products", (req, res) => {
    
const allProduts = products;
return res.status(200).send(allProduts);
  
});


//3)
app.post("/addproducts", (req, res) => {
    
const newProduct = req.body;
products.push({
    id: Date.now().toString(),
    name: newProduct.name,
    price: newProduct.price,
});
res.status(201).send(products);
  
});


//4)
app.get("/products", (req, res) => {
    
    const allProducts = products;
    return res.status(200).send(allProducts);
      
    });
    
//5)
app.put("/editPrice/:idPrice", (req, res) => {
        
        const newPrice = req.body.price;
        let id = req.params.idPrice;
        products.forEach(product => {
            if(id === product.id){  
                product.price = newPrice;
            }

            
        });
        res.status(200).send(products);
    });
       
       


//6)
app.delete("/products/:id", (req, res) => {
    let id = req.params.id;
    const productIndex = products.findIndex(product => product.id === id);

    if (productIndex < 0) {
        return res.status(404).send("Produto não encontrado");
    }
    else {
        products.splice(productIndex, 1);
        return res.status(200).send(products);
    }
});


    


      







// ENDPOINTS
//Aula 1

// getAllPlaylists
app.get("/playlists", (req, res) => {
    
    const allUsers = users;

    const playlists = allUsers.map((user) => {
        return user.playlists;
    });

    const resultPlaylists = playlists.flat(1) // flat(profundidade da busca)
    // [1,[2,3], 4] -> flat(1) -> [1,2,3,4]

    res.status(200).send(resultPlaylists);
});

// getPlaylistTracks
app.get("/tracks", (req, res) => {

    const playlists = users.map((user) => {
        return user.playlists;
    }).flat(1);

    const tracks = playlists.map((playlist) => {
        return playlist.tracks
    }).flat(1);

    res.status(200).send(tracks);
})

// deletePlaylistsByUserId
app.delete("/playlists/:userId", (req, res) => {
    const userId = req.params.userId;

    const usersUpdated = users.map((user) => {
        if (user.id === userId) {
            return { ...user, playlists: [] }
        } else {
            return user
        }
    });

    res.send(usersUpdated);
})

// deleteTracksByPlaylistId
app.delete("/tracks/:playlistId", (req, res) => {
    const playlistId = req.params.playlistId;

    const usersUpdated = users.map((user) => {
        
    })

    res.send(usersUpdated);
})

//======================================================================
//Aula 2
//reflexão de Rota
// "país/estado/cidade/bairro/rua/numero/quarto" 
// "https://localhost:3003/"

//exemplos

app.get('/test/:number', (req, res) => {
    
    res.send(
        `Seu número da sorte é ${Number(req.params.number) + 3}!
        `)
        })

app.get('/test/hello', (req, res) => {
            res.send(`Olá, mundo!`)
            })
//exercicios 

//searchPlaylist
app.get("/playlists/search", (req, res) => {
    const usuario = req.headers.authorization
    const consulta = req.query.name 

    const playlistDoUsuario = users.filter(user => {
        return user.id === usuario
    })
    const playlistFiltrada = playlistDoUsuario[0].playlists.filter(playlist => {
        return playlist.name.toLowerCase().includes(String(consulta).toLowerCase())
    })

    const playlistMapeada = playlistFiltrada.map(playlist => {
        return {id: playlist.id, name: playlist.name}
    })
    
     type repsosta = {
        quantity: Number,
        list: any[]
    }
    const resposta: repsosta = {
        quantity: playlistFiltrada.length,
        list: playlistMapeada
    }



    res.send({result : resposta})
    

})

//createPlaylist
app.post("/playlists", (req, res) => {
    const usuario = req.headers.authorization
    const nomeDaPlaylist = req.body.name

    type playlist = {
        id: string,
        name: string,
        tracks: any[]
    }

    const novaPlaylist = {
        id: Date.now().toString(),
        name: nomeDaPlaylist,
        tracks: []
    }

    for(let i = 0; i < users.length; i++){
        if(users[i].id === usuario){
            users[i].playlists.push(novaPlaylist)
        }
    }


    res.send(users)
})

//addTrackToPlaylist
app.post("/playlists/:playlistId/tracks", (req, res) => {
    //input
    const usuario = req.headers.authorization
    const playlistId = req.params.playlistId
    const novaMusica = {
        id: Date.now().toString(),
        name: req.body.name,
        artist: req.body.artist,
        url: req.body.url
               }

//tratamento de dados
    for(let i = 0; i < users.length; i++){
        if(users[i].id === usuario){
            for(let j = 0; j < users[i].playlists.length; j++){
                if(users[i].playlists[j].id === playlistId){
                    users[i].playlists[j].tracks.push(novaMusica)
                }
            }
        }
    }


res.send(users)

})

app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!");
});