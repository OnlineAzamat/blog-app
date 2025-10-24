import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User2 } from "lucide-react"

const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-24 flex-col container max-w-2xl space-y-12">
      <h1 className="text-5xl font-crete text-center">Get latest posts delivered right to your inbox</h1>

      <div className="grid max-md:grid-cols-1 grid-cols-3 md:gap-4 w-full">
        <Input className="w-full col-span-2" placeholder="Your email address" />
        <Button size={"lg"}>
          <User2 />
          <span>Join Today</span>
        </Button>
      </div>
    </footer>
  )
}

export default Footer