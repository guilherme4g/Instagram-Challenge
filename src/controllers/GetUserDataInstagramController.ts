import getUserDataInstagramService from "../services/GetUserDataInstagramService";
import { Request,Response } from "express";

export default (httpRequest: Request, httpResponse: Response) => {
  const { idUser, token } = httpRequest.query;

  if (typeof idUser !== "string" ||  typeof token !== "string")  {
    return httpResponse.status(400).json({ error: "incorrect  params format" });
  }

  getUserDataInstagramService(idUser, token)
  .then(user => {
    return httpResponse.status(200).json(user);
  }).catch(error => {
    console.log(error);
    return httpResponse.status(400).json(error);
  });
}