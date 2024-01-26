import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenu, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

export default function AppDashboard() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
                {/* <div className="max-w-6xl w-full mx-auto grid gap-2">
                    <h1 className="font-semibold text-3xl">Servers</h1>
                </div> */}
                <div className="grid gap-6 max-w-6xl w-full mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <Input className="bg-white md:flex-1 dark:bg-gray-950" placeholder="Search servers..." type="search" />
                        <div className="flex items-center gap-4">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline">
                                        <CalendarClockIcon className="mr-2 h-4 w-4 shrink-0" />
                                        Select Date
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent align="end" className="w-auto p-0">
                                    <Calendar mode="range" numberOfMonths={2} />
                                </PopoverContent>
                            </Popover>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        Status
                                        <ChevronDownIcon className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuCheckboxItem checked>Expiring soon</DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>Expired</DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>Valid</DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button size="sm">
                                Add Server
                            </Button>
                        </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden grid gap-4 lg:gap-px lg:bg-gray-100">
                        <div className="flex flex-col lg:flex-row bg-white text-sm p-2 relative dark:bg-gray-950">
                            <div className="p-2 grid gap-1 flex-1">
                                <div className="font-medium">Server 1</div>
                                <div className="text-gray-500 dark:text-gray-400">Expiring in 2 days</div>
                            </div>
                            <Separator className="my-2 lg:hidden" />
                            <div className="p-2 grid gap-1 flex-1">
                                <div className="flex items-start gap-2">
                                    <span className="inline-flex w-3 h-3 bg-red-400 rounded-full translate-y-1" />
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
                        <div className="flex flex-col lg:flex-row bg-white text-sm p-2 relative dark:bg-gray-950">
                            <div className="p-2 grid gap-1 flex-1">
                                <div className="font-medium">Server 2</div>
                                <div className="text-gray-500 dark:text-gray-400">Expiring in 10 days</div>
                            </div>
                            <Separator className="my-2 lg:hidden" />
                            <div className="p-2 grid gap-1 flex-1">
                                <div className="flex items-start gap-2">
                                    <span className="inline-flex w-3 h-3 bg-yellow-400 rounded-full translate-y-1" />
                                    <div>
                                        Expiring soon
                                        <div className="text-gray-500 dark:text-gray-400">10 days ago</div>
                                    </div>
                                </div>
                            </div>
                            <Separator className="my-2 lg:hidden" />
                            <div className="p-2 grid gap-1 flex-1">
                                <div className="flex items-center gap-2">
                                    <CalendarDaysIcon className="w-4 h-4" />
                                    10 days
                                </div>
                                <div className="flex items-center gap-2">
                                    <LockIcon className="w-4 h-4" />
                                    SSL Certificate
                                </div>
                            </div>
                            <Separator className="my-2 lg:hidden" />
                            <div className="p-2 grid gap-1 flex-1">
                                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">32m ago by maxleiter</div>
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
                        <div className="flex flex-col lg:flex-row bg-white text-sm p-2 relative dark:bg-gray-950">
                            <div className="p-2 grid gap-1 flex-1">
                                <div className="font-medium">Server 3</div>
                                <div className="text-gray-500 dark:text-gray-400">Valid for 30 days</div>
                            </div>
                            <Separator className="my-2 lg:hidden" />
                            <div className="p-2 grid gap-1 flex-1">
                                <div className="flex items-start gap-2">
                                    <span className="inline-flex w-3 h-3 bg-green-400 rounded-full translate-y-1" />
                                    <div>
                                        Valid
                                        <div className="text-gray-500 dark:text-gray-400">30 days</div>
                                    </div>
                                </div>
                            </div>
                            <Separator className="my-2 lg:hidden" />
                            <div className="p-2 grid gap-1 flex-1">
                                <div className="flex items-center gap-2">
                                    <CalendarDaysIcon className="w-4 h-4" />
                                    30 days
                                </div>
                                <div className="flex items-center gap-2">
                                    <LockIcon className="w-4 h-4" />
                                    SSL Certificate
                                </div>
                            </div>
                            <Separator className="my-2 lg:hidden" />
                            <div className="p-2 grid gap-1 flex-1">
                                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">1 day ago by shadcn</div>
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
                    </div>
                </div>
            </main>
        </div>
    )
}

function CalendarClockIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
            <path d="M16 2v4" />
            <path d="M8 2v4" />
            <path d="M3 10h5" />
            <path d="M17.5 17.5 16 16.25V14" />
            <path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
        </svg>
    )
}


function CalendarDaysIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
        </svg>
    )
}


function ChevronDownIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}


function FrameIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="22" x2="2" y1="6" y2="6" />
            <line x1="22" x2="2" y1="18" y2="18" />
            <line x1="6" x2="6" y1="2" y2="22" />
            <line x1="18" x2="18" y1="2" y2="22" />
        </svg>
    )
}


function LockIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    )
}


function MoreHorizontalIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
        </svg>
    )
}
