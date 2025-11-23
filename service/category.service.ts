import { IBlog } from "@/types";
import request, { gql } from "graphql-request";

const grapgQLAPI: string = process.env.NEXT_PUBLIC_GRAHPCMS_ENDPOINT!;

export const getBlogsByCategory = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      category(where: { slug: $slug }) {
        blogs {
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
        name
      }
    }
  `;

  const { category } = await request<{ category: { blogs: IBlog[], name: string } }>(grapgQLAPI, query, { slug });
  return category;
}