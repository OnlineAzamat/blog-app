import { IArchivedBlogs, IBlog } from "@/types";
import request, { gql } from "graphql-request";
import { cache } from "react";

const grapgQLAPI: string = process.env.NEXT_PUBLIC_GRAHPCMS_ENDPOINT!;

export const getBlogs = async () => {
  const queryPublished = gql`
    query GetPublishedBlogs {
      blogs(where: { archive: false }) {
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
        views
      }
    }
  `;

  const { blogs } = await request<{ blogs: IBlog[] }>(grapgQLAPI, queryPublished);
  return blogs;
}

export const getArchivedBlogs = async () => {
  const queryArchived = gql`
    query GetArchivedBlogs {
      blogs(where: { archive: true }) {
        id
        title
        slug
        createdAt
      }
    }
  `;

  const { blogs } = await request<{ blogs: IBlog[] }>(grapgQLAPI, queryArchived, {}, { cache: 'no-store' });
  /**
   * {blogs} - serverden kelgen bloglardı {year} boyınsha filtirlew ushın Array.Reduce isletildi
   */
  const filteredBlogs = blogs.reduce((acc: { [year: string]: IArchivedBlogs }, blog: IBlog) => {
    const year = blog.createdAt.substring(0, 4);
    if (!acc[year]) {
      acc[year] = { year, blogs: [] };
    }
    acc[year].blogs.push(blog);
    return acc;
  }, {});

  /**
   * @returns [ { year: number, blogs: IBlog[] } ]
   */
  const results: IArchivedBlogs[] = Object.values(filteredBlogs);
  return results;
}

export const getDetailedBlog = cache(async (slug: string) => {
  const query = gql`
    query GetDetailedBlog($slug: String!) {
      blog(where: { slug: $slug }) {
        id
        title
        slug
        tags {
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
        views
      }
    }
  `;

  const { blog } = await request<{ blog: IBlog }>(grapgQLAPI, query, { slug }, { cache: 'no-store' });
  return blog;
})