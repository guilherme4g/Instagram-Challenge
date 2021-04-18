import getUserDataInstagramService from "../services/GetUserDataInstagramService";
import { Request,Response } from "express";

export default (httpRequest: Request, httpResponse: Response) => {
  const { token } = httpRequest.query;

  if ( typeof token !== "string")  {
    return httpResponse.status(400).json({ error: "incorrect  params format" });
  }

  getUserDataInstagramService(token)
  .then(user => {
    return httpResponse.status(200).json(user);
  }).catch(error => {
    console.log(error);
    return httpResponse.status(400).json(error);
  });
}