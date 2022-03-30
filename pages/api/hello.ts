// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}


export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  // Podemos obtener las cookies cada que el usuario hace un req
  console.log(req.cookies)
  res.status(200).json({ 
    name: 'John Doe',
    ...req.cookies
  })
}
