"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function NavigationRail({ className, items, ...props }) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "flex w-min flex-col items-center p-2 border h-screen space-y-2",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  pathname === item.href
                    ? "bg-muted hover:bg-muted"
                    : "hover:bg-transparent border hover:underline",
                  "justify-start text-2xl"
                )}
              >
                {item.icon}
                {/* {item.title} */}
              </Link>
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>{item.title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </nav>
  )
}