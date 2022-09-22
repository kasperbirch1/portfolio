// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { PageInfo } from "../../typings";

const pageInfoQuery = groq`
  *[_type == "pageInfo"][0]
`;

type Data = {
  pageInfo: PageInfo;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const pageInfo: PageInfo = await sanityClient.fetch(pageInfoQuery);

  res.status(200).json({ pageInfo });
};

export default handler;
