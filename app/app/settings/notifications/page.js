import { Button } from "@/components/ui/button"
import { CardContent, Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { HiChevronDown } from "react-icons/hi2";


export default function NotificationSettings() {
    return (
        <div className="space-y-6">
            <section className="space-y-4">
                <div className="space-y-1">
                    <h1 className="text-lg font-bold leading-none">
                        Notification preferences</h1>
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                        Configure notification.
                    </p>
                </div>

                <Card>
                    <CardHeader >
                        <div className="flex justify-between">
                            <div>
                                <CardTitle>Notifications</CardTitle>
                                <CardDescription>Configure notification for different channels.</CardDescription>
                            </div>
                            <AddNotification />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <NotificationList />
                    </CardContent>
                </Card>
            </section>
        </div>
    )
}

export function AddNotification() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>Add Notification</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Add Notification</SheetTitle>
                    <SheetDescription>
                        Create a notification trigger to notify users.
                    </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col mt-2 gap-5">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="channel">
                            Name
                        </Label>
                        <Select id="channel">
                            <SelectTrigger>
                                <SelectValue placeholder="Select Channel" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Notification Channel</SelectLabel>
                                    <SelectItem value="email" selected>Email</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="subject">
                            Subject
                        </Label>
                        <Input id="subject" type="text" placeholder="Enter notification subject" />
                    </div>
                </div>
                <SheetFooter className={"mt-5"}>
                    <SheetClose asChild>
                        <Button type="submit">Create Notification</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}



function NotificationList() {
    const invoices = [
        {
            status: "Enabled",
            subject: "Your ssl is expiring on 01/01/2024",
        },
    ]
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Status</TableHead>
                    <TableHead className="w-full">Subject</TableHead>
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
