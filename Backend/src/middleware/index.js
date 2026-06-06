import express from "express";
import cors from "cors";

const setupMiddleware = (app) => {
  app.use(cors());
  app.use(express.json());
};

export default setupMiddleware;
