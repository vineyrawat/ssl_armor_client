import { Separator } from "@/components/ui/separator";
import { CalendarDaysIcon, LockIcon, MoreHorizontalIcon } from "../page";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";


export default function ServerListItem({ variant }) {
    let color = ""
    if (variant === "expiring") {
        color = "bg-yellow-400"
    } else if (variant === "expired") {
        color = "bg-red-400"
    } else if (variant === "valid") {
        color = "bg-green-400"
    }

    return (
        <div className="flex flex-col lg:flex-row bg-white text-sm p-2 relative dark:bg-gray-950">
            <div className="p-2 grid gap-1 flex-1">
                <div className="font-medium">Server 1</div>
                <div className="text-gray-500 dark:text-gray-400">Expiring in 2 days</div>
            </div>
            <Separator className="my-2 lg:hidden" />
            <div className="p-2 grid gap-1 flex-1">
                <div className="flex items-start gap-2">
                    <span className={`inline-flex w-3 h-3  rounded-full ${color} translate-y-1`} />
                    <div>
                        Expired
                        <div className="text-gray-500 dark:text-gray-400">2 days ago</div>
                    </div>
                </div>
            </div>
            <Separator className="my-2 lg:hidden" />
            <div className="p-2 grid gap-1 flex-1">
                <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="w-4 h-4" />
                    2 days
                </div>
                <div className="flex items-center gap-2">
                    <LockIcon className="w-4 h-4" />
                    SSL Certificate
                </div>
            </div>
            <Separator className="my-2 lg:hidden" />
            <div className="p-2 grid gap-1 flex-1">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">17m ago by shadcn</div>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="absolute top-4 right-4" size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-4 h-4" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Renew</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}