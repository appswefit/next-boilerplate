import Fetcher from "@/infra/http";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { IBffResponse } from "./types";

export async function POST(request: NextApiRequest) {
  try {
    const { body } = request;

    const fetcher = new Fetcher({ baseUrl: process.env.NEXT_PUBLIC_BFF_API_URL ?? '' });

    const response = await fetcher.post('/products', body);

    return response;
  } catch (error) {
    console.log(error)
    return NextResponse.error();
  }
}

export async function GET(request: NextApiRequest) {
  try {
    const { query } = request;

    const fetcher = new Fetcher({ 
      baseUrl: process.env.NEXT_PUBLIC_BFF_API_URL ?? '' 
    });

    const data = await fetcher.get<IBffResponse>('/products', query);

    return NextResponse.json({ body: data.body });
  } catch (error) {
    console.log(error)
    return NextResponse.error();
  }
}
