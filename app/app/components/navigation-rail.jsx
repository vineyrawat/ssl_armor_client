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
        "flex w-full items-center border-b",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <TooltipProvider key={item.href}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  pathname == item.href
                    ? "border-b border-primary bg-muted"
                    : "hover:bg-transparent hover:underline",
                  "justify-start rounded-none"
                )}
              >
                <div className="text-2xl">
                  {item.icon}
                </div>
                {item.title}
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