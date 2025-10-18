import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full h-[10vh] bg-gray-800">
      <div className="container h-full flex justify-between items-center mx-auto">
        <h1 className="text-4xl">Logo</h1>
        <div className="flex items-center gap-2">
          <Link href={"client"}>Client</Link>
          <Link href={"server"}>Server</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;