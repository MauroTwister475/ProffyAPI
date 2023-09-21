import { Router, Response, Request, NextFunction } from "express";
import { ProffyController } from "../controllers/ProffyController";

export const routes = Router();

function middlewareGET(req: Request, res: Response, next: NextFunction) {
  
  const { 
    subject, 
    weekday, 
    from, 
    to
  } = req.body;


  if(!(subject && weekday && from && to)){
    return res.json({
      error: "Faça o seu filtro",
    });
  }

  next();
}

function middlewarePOST(req: Request, res: Response, next: NextFunction) {
  const { 
    name, 
    avatar, 
    biografia, 
    whatsApp, 
    subject, 
    cost, 
    weekday, 
    from, 
    to
  } = req.body;

  const data = {
    
  }

  if(!(name || avatar || biografia || whatsApp ||
    subject || cost || weekday || from || to)){

    return res.json({
      error: "Dados incompletos",
    });
  }
  next();
}

const proffy = new ProffyController();
routes.post('/create_proffy',middlewarePOST, proffy.create);
routes.get('/study', proffy.filter);
routes.get('/conections', proffy.conections);
