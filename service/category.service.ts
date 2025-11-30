import { IBlog, ICategoryAndTags } from "@/types";
import request, { gql } from "graphql-request";
import { cache } from "react";

const grapgQLAPI: string = process.env.NEXT_PUBLIC_GRAHPCMS_ENDPOINT!;

export const getCategories = cache(async () => {
  const query = gql`
    query MyQuery {
      categories {
        name
        slug
        blogs {
          id
        }
      }
    }
  `;

  const { categories } = await request<{ categories: ICategoryAndTags[] }>(grapgQLAPI, query);
  return categories;
});

export const getBlogsByCategory = cache(async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      category(where: { slug: $slug }) {
        blogs {
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
        name
      }
    }
  `;

  const { category } = await request<{ category: { blogs: IBlog[], name: string } }>(grapgQLAPI, query, { slug });
  return category;
});