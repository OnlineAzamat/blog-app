import { IBlog } from "@/types";
import request, { gql } from "graphql-request";

const grapgQLAPI: string = process.env.NEXT_PUBLIC_GRAHPCMS_ENDPOINT!;

export const getBlogs = async () => {
  const query = gql`
    query MyQuery {
      blogs {
        id
        title
        description
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

  const { blogs } = await request<{blogs: IBlog[]}>(grapgQLAPI, query);
  return blogs;
}