import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import createMongoConnection from "./context/MongoConnection";

dotenv.config();

createMongoConnection()

const app = express();
const port = process.env.PORT;
app.use(express.json());
const allowedOrigins = ["*"];


const options: cors.CorsOptions = {
  origin: allowedOrigins,
};
app.use(cors(options));

app.set('view engine', 'ejs');
app.set('views', './context/views');


//routers
import { routerPeriodista } from "./periodista/infrastructure/rest/Periodista.route";
app.use("/api", routerPeriodista);

import { routerNoticia } from "./noticia/infrastructure/res/Noticia.route";
app.use("/api", routerNoticia);

app.listen(process.env.PORT, () => {
  console.log(`Application started on port ${port}`);
});