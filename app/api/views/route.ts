import { gql, GraphQLClient } from "graphql-request";
import { NextRequest, NextResponse } from "next/server";

const grapgQLAPI = process.env.NEXT_PUBLIC_GRAHPCMS_ENDPOINT!;
const graphCDNToken = process.env.HYGRAPH_MUTATION_TOKEN!;

export async function POST(req: NextRequest) {
  const { slug, views } = await req.json();

  if (!slug) {
    return NextResponse.json({ message: "Slug is required" }, { status: 400 });
  }

  try {
    const client = new GraphQLClient(grapgQLAPI, {
      headers: {
        authorization: `Bearer ${graphCDNToken}`,
      },
    });

    const mutation = gql`
      mutation PublishBlog($slug: String!, $views: Int!) {
        updateBlog(data: { views: $views }, where: { slug: $slug }) {
          id
          views
        }
        publishBlog(where: { slug: $slug }, to: PUBLISHED) {
          id
        }
      }
    `;

    const data = await client.request(mutation, { slug, views });

    return NextResponse.json({ message: "View updated", data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error updating view", error }, { status: 500 });
  }
}