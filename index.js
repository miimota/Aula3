const express = require ("express")
const app = express();

app.get("/idade/:nome/:idade", (req, res)=>{
    const {nome,idade} = req.params
    res.status(200).json({
        mensagem:`Nome ${nome}, idade ${idade}!`
})

});

app.get("/teste", (req, res)=>{
    res.send("Olá Mundo");
})

app.listen(3008, (res)=>{
    console.log ("Michele o Servidor on");
})

