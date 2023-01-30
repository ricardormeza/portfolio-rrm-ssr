import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { PageInfo } from "../../../typing.d.ts";

const query = groq`
    *[_type == "pageInfo"][0]
`;
// type Data = {
//     pageInfo: PageInfo;
// }
// const Data = pageInfo;   

export default async function handler(req, res) {
    try{
        const pageInfo = await sanityClient.fetch(query);
        res.status(200).json({ pageInfo });
    }catch (err) {
        res.status(500).send({ error: 'failed to fetch data' })
    }

}