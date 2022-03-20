import * as express from "express";
import { Request, Response } from "express";
import * as cors from "cors";
import { createConnection } from "typeorm";

createConnection().then(async (connection) => {
  const productRepository = connection.getRepository("Product");

  // create express app
  const app = express();

  app.use(
    cors({
      origin: ["http://localhost:3000", "https://localhost:8080", "http://localhost:4200"],
    })
  );

  app.use(express.json());

  app.get("/api/products", async (req: Request, res: Response) => {
    const products = await productRepository.find();
    res.json(products);
  });

  app.post("/api/products", async (req: Request, res: Response) => {
    const product = await productRepository.create(req.body);
    const result = await productRepository.save(product);
    return res.send(result);
  });

  app.get("/api/products/:id", async (req: Request, res: Response) => {
    const product = await productRepository.findOne(req.params.id);
    return res.send(product);
  });

  app.put("/api/products/:id", async (req: Request | any, res: Response) => {
    const product = await productRepository.findOne(req.params.id);
    productRepository.merge(product, req.body);
    const result = await productRepository.save(product);
    return res.send(result);
  });

  console.log("✅ Listening on port: 8000");
  app.listen(8000);
});
