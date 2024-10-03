import { Router } from "express";
import canditadosRoutes from "./candidatos.routes.js";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).json({ message: "Hello, world"})

});

routes.use("/canditados", canditadosRoutes)

export default routes;