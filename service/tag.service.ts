import { IBlog } from "@/types";
import request, { gql } from "graphql-request";

const grapgQLAPI: string = process.env.NEXT_PUBLIC_GRAHPCMS_ENDPOINT!;

export const getBlogsByTag = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      tag(where: { slug: $slug }) {
        blogs {
          ... on Blog {
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
            content {
              html
            }
          }
        }
        name
      }
    }
  `;

  const { tag } = await request<{ tag: { blogs: IBlog[], name: string } }>(grapgQLAPI, query, { slug });
  return tag;
}