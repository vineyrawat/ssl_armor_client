"use client"

import { Button } from "@/components/ui/button"
import { CardContent, Card, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { HiChevronDown } from "react-icons/hi2";


export default function ApplicationLogs() {

    function handleClearLogs() { }

    return (
        <div className="space-y-6">
            <section className="space-y-4">
                <div className="space-y-1">
                    <h1 className="text-lg font-bold leading-none">
                        Application Logs</h1>
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                        All application logs are listed here
                    </p>
                </div>

                <Card>
                    <CardHeader>
                        <div className="flex justify-between">
                            <LogTypeSelect />
                            <Button onClick={handleClearLogs}>Clear Logs</Button>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <LogsList />
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}


function LogTypeSelect() {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Log Type" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="notification">Notification</SelectItem>
                    <SelectItem value="error">Error</SelectItem>
                    <SelectItem value="info">Info</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}


function LogsList() {
    const invoices = [
        {
            status: "Notification",
            subject: "Notification ID 4532 sent to user",
        },
    ]
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[150px]">Type</TableHead>
                    <TableHead className="w-full">Log Message</TableHead>
                    {/* <TableHead>Created On</TableHead> */}
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((notifications) => (
                    <TableRow key={notifications.invoice}>
                        <TableCell className="font-medium">{notifications.status}</TableCell>
                        <TableCell className="w-full">{notifications.subject}</TableCell>
                        {/* <TableCell>{invoice.paymentMethod}</TableCell> */}
                        <TableCell className="text-right">
                            <ActionsButtons />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}



function ActionsButtons() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <HiChevronDown />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuItem >Edit</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500 hover:text-red-500">Delete</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
