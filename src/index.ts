import express from "express"

import { PrismaClient } from "../src/generated/prisma/client";

const app = express();
const prismaClient = new PrismaClient();

app.get("/",async (req: express.Request, res: express.Response) => {

  const data = await prismaClient.user.findMany();

  res.json({
    "data": data,
    "message": "Get Endpoint"
  })
});

app.post("/", async (req: express.Request, res: express.Response) => {
  await prismaClient.user.create ({
    data: {
      email: Math.random().toString(),
      password: Math.random().toString(),
      username: Math.random().toString(),
    }
  })
  res.json({
    "message": "Post Endpoint"
  })
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
