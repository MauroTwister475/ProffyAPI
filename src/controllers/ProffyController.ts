import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import { convertHoursToMinutes } from "../utils/convertHoursToMinutes";
import { convertWeekday } from "../utils/convertWeekday";

export class ProffyController {
  async create(req: Request, res: Response) {

    const {
      name,
      avatar,
      whatsApp,
      biografia,
      weekday,
      time_from,
      time_to,
      subject,
      cost,
    } = req.body;

    try {

      const proffyCreated = await prisma.proffys.create({
        data: {
          name, 
          avatar,
          whatsApp,
          biografia,

          classes: {
            create: {
              subject,
              cost,
            }
          },

          schedule: {
            create: {
              weekday,
              time_from: convertHoursToMinutes(time_from),
              time_to: convertHoursToMinutes(time_to),
            }
          },
        }, 
      });

      const totProffys = await prisma.proffys.count();

      await prisma.conections.create({
        data: {
          conection: totProffys, // num de counts dos proffys
        }
      });

      return res.status(201).json(proffyCreated);
    
    } catch (error) {
      console.log("Error: " + error);//fazer um alert...
    }
  }

  async filter(req: Request, res: Response) { 
    const { subject, weekday, time } = req.query;
    const hour = convertHoursToMinutes(time as string);
    const day = convertWeekday(weekday as string);

    const query = await prisma.$queryRaw`
      SELECT * FROM proffys JOIN schedule JOIN classes 
      WHERE proffys.id = schedule.id AND schedule.weekday = ${day} 
      AND ${hour} >= schedule.time_from AND ${hour} <= schedule.time_to
      AND proffys.id = classes.id AND classes.subject = ${subject}
    `;

    return res.json(query);
  }

  async conections(req: Request, res: Response){
    try {
      const totConections = await prisma.classes.count();
      return res.json(totConections);
    }catch(error) {
      console.log("Erro: "+error);
    }
  }
}
