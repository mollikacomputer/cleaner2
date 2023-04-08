import { servicesData } from "../../../../servicesData";

export default function handler(req, res) {

    res.status(200).json(servicesData)
  }