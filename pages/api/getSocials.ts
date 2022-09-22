// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo, Social } from "../../typings";

const query = groq`
  *[_type == "social"]
`;

type Data = {
  socials: Social[];
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const socials: Social[] = await sanityClient.fetch(query);

  res.status(200).json({ socials });
};

export default handler;
