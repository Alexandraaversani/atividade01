import { Router } from "express";

const canditadosRoutes = Router();

let canditados = [
    {
        id: Math.random() * 1000000,
        nome: "Capitã Lucimara",
        partido: "PSD",
        idade: 42,
        segundo: true, // Concorrente ao segundo mandato 
        propostas: [
            "Aumento do salário mínimo",
            "Redução de impostos",
            "Mais investimentos em educação",
        ]
      
    },


]

canditadosRoutes.get("/", (req, res) => {
    return res.status(200).json(canditados)

})
//Criar nova emoção 
canditadosRoutes.post("/", (req, res) => {
    const { nome, cor } = req.body

    const novaEmocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }

    emocoes.push(novaEmocao)
    return res.status(201).send(novaEmocao);

});
//Rota para buscar uma emocao pelo id
canditadosRoutes.get("/:id", (req, res) => {
    const{id} = req.params;

   // console.log(id);
   const emocao = emocoes.find((emotion) => emotion.id == id)

   if (!emocao) {
    return res.status(404).send({
        message: "Emoção não encontrada!",
    });
   }
   return res.status(200).send({
    message:"Emoção encontrada",
    emocao,
   });

});

canditadosRoutes.put("/:id", (req, res) => {
    const{id} = req.params;

    const emocao = emocoes.find((emotion) => emotion.id == id);

    if (!emocao) {
        return res.status(404).send({
            message: "Emoção não encontrada!",
        });
    }
    const { nome, cor } = req.body;
    emocao.nome = nome;
    emocao.cor = cor;

    return res.status(200).send({
        message:"Emoção atualizada!",
        emocao,
       });
});

canditadosRoutes.delete("/:id", (req, res) => {
    const{id} = req.params;

    const emocao = emocoes.find((emotion) => emotion.id == id);

    if (!emocao) {
        return res.status(404).send({
            message: "Emoção não encontrada!",
        });
    }

    emocoes = emocoes.filter((emotion) => emotion.id != id)

    return res.status(200).send({
        message:"Emoção deletada!",
        emocao,
       });

});

export default canditadosRoutes;