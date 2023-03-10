import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { NextApiRequest, NextApiResponse } from "next";
import { Experience } from "@/typings";

{/*building query via groq and returning it as API endpoint */}
const query = groq` 
*[_type == "experience"] {
  ...,
  technologies[]->
  
}`;

type Data = {
  experiences: Experience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] = await sanityClient.fetch(query);
  res.status(200).json({ experiences });
  
}
