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
  `;

  const { blogs } = await request<{blogs: IBlog[]}>(grapgQLAPI, query);
  return blogs;
}

export const getDetailedBlog = async (slug: string) => {
  const query = gql`
    query MyQuery($slug: String!) {
      blog(where: { slug: $slug }) {
        id
        title
        slug
        tag {
          name
          slug
        }
        image {
          url
        }
        author {
          id
          name
          bio
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
  `;

  const { blog } = await request<{blog: IBlog}>(grapgQLAPI, query, { slug })
  return blog;
}