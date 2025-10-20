import { Service } from "@/server";

async function ServerPage() {
  const data = await Service.getPosts().then(res => res);
  
  return (
    <div>
      <h1 className="text-4xl font-mono py-6">Server Component</h1>
      {data && data.map((post, index) => {
        return <p key={index}>{post.title}</p>
      })}
    </div>
  )
}

export default ServerPage