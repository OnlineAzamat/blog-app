'use client'

import { Service } from "@/server";
import { useEffect, useState } from "react";

function ClientPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    Service.getPosts().then(res => setData(res)).finally(() => setIsLoading(false));
  }, []);
  
  return (
    <div>
      {isLoading && "Loading..."}
      {data && data.map((post, index) => {
        return <p key={index}>{post.title}</p>
      })}
    </div>
  )
}

export default ClientPage