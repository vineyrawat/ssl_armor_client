/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ldQa5Tinygy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
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
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="recipients">
                                Recipients
                            </Label>
                            <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                                Add email addresses to receive notifications. Use commas to separate multiple addresses.
                            </p>
                            <Textarea className="min-h-[100px]" id="recipients" placeholder="Email addresses" />
                        </div>

                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Sender Email Settings</CardTitle>
                        <CardDescription>Configure your sender email settings.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="sender-email">
                                Sender Email
                            </Label>
                            <Input id="sender-email" placeholder="Your sender email" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="smtp-settings">
                                SMTP/IMAP Settings
                            </Label>
                            <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                                Configure your SMTP/IMAP settings for sending and receiving emails.
                            </p>
                            <Textarea className="min-h-[100px]" id="smtp-settings" placeholder="SMTP/IMAP settings" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="smtp-username">
                                SMTP Username
                            </Label>
                            <Input id="smtp-username" placeholder="Your SMTP username" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="smtp-password">
                                SMTP Password
                            </Label>
                            <Input id="smtp-password" placeholder="Your SMTP password" type="password" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="imap-server">
                                IMAP Server
                            </Label>
                            <Input id="imap-server" placeholder="IMAP server address" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="imap-username">
                                IMAP Username
                            </Label>
                            <Input id="imap-username" placeholder="Your IMAP username" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="imap-password">
                                IMAP Password
                            </Label>
                            <Input id="imap-password" placeholder="Your IMAP password" type="password" />
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
