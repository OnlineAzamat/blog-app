"use client"

import { Facebook, Link2, Linkedin, Send, Twitter } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

function ShareBtns() {
  const pathname = usePathname();

  const onCopy = () => {
    const promise = navigator.clipboard.writeText(window.location.origin + pathname);
    toast.promise(promise, {
      success: "Copied to clipboard",
      error: "An error occurred while copying"
    })
  }
  
  return (
    <div className="flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4">
      <Button size={'icon'} variant={'outline'}><Twitter /></Button>
      <Button size={'icon'} variant={'outline'}><Facebook /></Button>
      <Button size={'icon'} variant={'outline'}><Linkedin /></Button>
      <Button size={'icon'} variant={'outline'}><Send /></Button>
      <Button size={'icon'} variant={'outline'} onClick={onCopy}><Link2 /></Button>
    </div>
  )
}

export default ShareBtns