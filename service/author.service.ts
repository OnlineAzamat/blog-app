import { IAuthor } from "@/types";
import request, { gql } from "graphql-request";

const grapgQLAPI: string = process.env.NEXT_PUBLIC_GRAHPCMS_ENDPOINT!;

export const getAuthors = async () => {
  const query = gql`
    query GetAuthors {
      authors {
        id
        name
        bio
        image {
          url
        }
        blogs {
          id
        }
      }
    }
  `;

  const { authors } = await request<{ authors: IAuthor[] }>(grapgQLAPI, query);
  return authors;
}

export const getDetailedAuthor = async (id: string) => {
  const query = gql`
    query GetDetailedAuthor($id: ID) {
      author(where: { id: $id }) {
        name
        bio
        image {
          url
        }
        blogs {
          id
          title
          description
          content {
            html
          }
          tag {
            name
            slug
          }
          category {
            name
            slug
          }
          image {
            url
          }
          author {
            name
            image {
              url
            }
          }
          slug
          createdAt
        }
      }
    }
  `;

  const { author } = await request<{ author: IAuthor }>(grapgQLAPI, query, { id });
  return author;
}