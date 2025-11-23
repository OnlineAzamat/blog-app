import { IBlog } from "@/types";
import request, { gql } from "graphql-request";

const grapgQLAPI: string = process.env.NEXT_PUBLIC_GRAHPCMS_ENDPOINT!;

export const getBlogsBySearch = async (title: string) => {
  // Minimal fields
  const query = gql`
    query MyQuery($title: String!) {
      blogs(where: {title_contains: $title}) {
        id
        title
        description
        slug
        tag {
          name
          slug
        }
        image {
          url
        }
        category {
          name
          slug
        }
        author {
          name
          image {
            url
          }
        }
        createdAt
      }
    }
  `;

  const { blogs } = await request<{ blogs: IBlog[] }>(grapgQLAPI, query, { title });
  return blogs;
}