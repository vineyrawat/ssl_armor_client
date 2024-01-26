import { Separator } from "@/components/ui/separator"
import { NavigationRail } from "./components/navigation-rail"
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import AppHeader from "./components/header";



export const metadata = {
    title: "Forms",
    description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
    {
        title: "Dashboard",
        href: "/app",
        icon: <HiOutlineChartBarSquare />
    },
    {
        title: "Settings",
        href: "/app/settings",
        icon: <HiOutlineCog8Tooth />
    }
]


export default function AppLayout({ children }) {
    return (
        <>
            <div className="">
                <div className="flex flex-row">
                    <NavigationRail items={sidebarNavItems} />
                    <div className="flex-1 h-screen overflow-y-scroll">
                        <AppHeader />
                        <div className="flex-1">{children}</div>
                    </div>
                </div>
            </div>
        </>
    )
}