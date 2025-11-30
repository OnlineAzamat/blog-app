import { IBlog, ICategoryAndTags } from "@/types";
import request, { gql } from "graphql-request";
import { cache } from "react";

const grapgQLAPI: string = process.env.NEXT_PUBLIC_GRAHPCMS_ENDPOINT!;

export const getTags = cache(async () => {
  const query = gql`
    query getTags {
      tags {
        name
        slug
        blogs {
          id
        }
      }
    }
  `;

  const { tags } = await request<{ tags: ICategoryAndTags[] }>(grapgQLAPI, query);
  return tags;
});

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
            tags {
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