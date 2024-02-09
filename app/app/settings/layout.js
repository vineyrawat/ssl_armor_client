import Image from "next/image"
import { SidebarNav } from "./components/sidenav"
import { Separator } from "@/components/ui/separator"

export const metadata = {
    title: "Forms",
    description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
    {
        title: "Profile",
        href: "/app/settings",
    },
    {
        title: "Email Settings",
        href: "/app/settings/email-settings",
    },
    {
        title: "Account",
        href: "/app/settings/account",
    },
    {
        title: "Appearance",
        href: "/app/settings/appearance",
    },
    {
        title: "Notifications",
        href: "/app/settings/notifications",
    },
    {
        title: "Display",
        href: "/app/settings/display",
    },
]


export default function SettingsLayout({ children }) {
    return (
        <>
            <div className="space-y-6 p-10 pb-16">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                    <p className="text-muted-foreground">
                        Manage your  settings and set notification preferences.
                    </p>
                </div>
                <Separator className="my-6" />
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="-mx-4 lg:w-1/5">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="flex-1 lg:max-w-5xl">{children}</div>
                </div>
            </div>
        </>
    )
}