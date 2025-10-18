export const Service = {
  getPosts: async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = response.json();
    return data;
  }
}