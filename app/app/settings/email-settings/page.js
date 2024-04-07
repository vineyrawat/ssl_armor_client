import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { CardContent, Card, CardTitle, CardDescription, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function EmailSettings() {
    return (
        <div className=" space-y-6">
            <section className="space-y-4">
                <div className="space-y-1">
                    <h1 className="text-lg font-bold leading-none">
                        Email notification preferences</h1>
                    <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                        Configure how you receive email notifications.
                    </p>
                </div>
                <Card>
                    <CardHeader>
                        <div className="flex items-center space-x-4">
                            <Switch id="airplane-mode" />
                            <Label htmlFor="airplane-mode">Enable Email Notifications</Label>
                        </div>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Sender Email Settings</CardTitle>
                        <CardDescription>Configure your sender email settings.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="sender-email">
                                Sender Name
                            </Label>
                            <Input id="sender-name" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="sender-email">
                                Sender Email
                            </Label>
                            <Input id="sender-email" placeholder="Your sender email" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="smtp-username">
                                SMTP Username
                            </Label>
                            <Input id="smtp-username" placeholder="Your SMTP username" />
                        </div>
                        <div className="flex items-center space-x-2 space-y-2">
                            <Checkbox id="use-tls" />
                            <label
                                htmlFor="use-tls"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Use TLS
                            </label>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="smtp-port">
                                Port
                            </Label>
                            <Input id="smtp-password" placeholder="Enter PORT" type="number" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="smtp-outgoing-server">
                                Outgoing Server
                            </Label>
                            <Input id="smtp-outgoing-server" placeholder="e.g. smtp.google.com" type="text" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="smtp-password">
                                SMTP Password
                            </Label>
                            <Input id="smtp-password" placeholder="Your SMTP password" type="password" />
                        </div>
                    </CardContent>
                </Card>
                <div className="flex justify-end gap-4">
                    <Button variant="outline">Test Configuration</Button>
                    <Button>Save Configuration</Button>
                </div>
            </section>
        </div>
    )
}

function MailIcon(props) {
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
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}
