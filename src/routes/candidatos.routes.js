import { Router } from "express";

const canditadosRoutes = Router();

let canditados = [
    {
        id:Math.floor( Math.random() * 1000000),
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
    const {
        nome,
        partido,
        idade,
        segundo,
        propostas
    } = req.body;

    //Validação dos campos nome e partido
    if (!nome || !partido) {
        return res.status(400).send({
            message: "O nome ou o partido não foi preenchido",
        });
    }

    //validação de idade
    if(idade < 18) {
        return res.status(400).send({
            message: "O canditado não possui idade suficiente para participar deste debate!",
        });
    }

    const novoCandidato = {
        id: Math.floor( Math.random() * 1000000),
        nome,
        partido,
        idade,
        segundo,
        propostas
    };

    canditados.push(novoCandidato);
    return res.status(201).json({
        message: "Candidato cadastrado com sucesso!",
        novoCandidato,
    });

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