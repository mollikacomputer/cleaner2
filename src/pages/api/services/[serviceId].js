// export default function handler(req, res) {

import { servicesData } from "../../../../servicesData";

//     res.status(200).json(servicesData)
//   }

export default function handler(req, res){
    const {serviceId} = req.query;
    const service = servicesData.find( service => service.id == parseInt(serviceId));
    res.status(200).json(service)
}