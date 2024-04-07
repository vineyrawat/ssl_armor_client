import { Separator } from "@/components/ui/separator";
import { CalendarDaysIcon, LockIcon, MoreHorizontalIcon } from "../page";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { parseISO, isBefore, differenceInDays, formatDistanceToNow } from "date-fns"
import { HiOutlineExternalLink } from "react-icons/hi";


export default function ServerListItem({ server }) {
    const expiryDate = !server.not_after ? null : parseISO(server.not_after)
    const modifiedDate = !server.modified_time ? null : parseISO(server.modified_time)
    const issuedDate = !server.not_before ? null : parseISO(server.not_before)
    const noOfDays = !server.not_after ? null : differenceInDays(new Date(), expiryDate)

    console.log(expiryDate, noOfDays)

    let color = "bg-gray-500"
    let currentStatus = "-"

    if (!expiryDate || isBefore(expiryDate)) {
        color = "bg-red-400"
        currentStatus = "Expired"
    } else if (noOfDays < 7) {
        color = "bg-yellow-400"
        currentStatus = "Expiring soon"
    } else if (noOfDays > 7) {
        color = "bg-green-400"
        currentStatus = "Valid"
    }


    return (
        <div className="flex flex-col lg:flex-row bg-white text-sm p-2 relative dark:bg-gray-950">
            <div className="p-2 grid gap-1 flex-1">
                <div className="font-medium">{server.server_name ?? "-"}</div>
                <a href={`https://${server.url}`} target="_blank" rel="noreferrer" className="hover:underline flex items-center  gap-2">
                    <div className="text-gray-500 dark:text-gray-400">{server.url ?? "-"}</div>
                    <HiOutlineExternalLink className="w-4 h-4" />
                </a>
            </div>
            <Separator className="my-2 lg:hidden" />
            <div className="p-2 grid gap-1 flex-1">
                <div className="flex items-start gap-2">
                    <span className={`inline-flex w-3 h-3  rounded-full ${color} translate-y-1`} />
                    <div>
                        {currentStatus}
                        <div className="text-gray-500 dark:text-gray-400">{!expiryDate || expiryDate < Date() ? "Expired" : `Expiring in ${formatDistanceToNow(expiryDate)}`}</div>
                    </div>
                </div>
            </div>
            <Separator className="my-2 lg:hidden" />
            <div className="p-2 grid gap-1 flex-1">
                <div className="flex items-center gap-2">
                    <CalendarDaysIcon className="w-4 h-4" />
                    {issuedDate ? `Issued ${formatDistanceToNow(issuedDate)} ago` : "-"}
                </div>
                <div className="flex items-center gap-2">
                    <LockIcon className="w-4 h-4" />
                    {!expiryDate || expiryDate < Date() ? "No SSL" : "SSL Certificate"}
                </div>
            </div>
            <Separator className="my-2 lg:hidden" />
            <div className="p-2 grid gap-1 flex-1">
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">Last updated {formatDistanceToNow(modifiedDate)} ago</div>
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