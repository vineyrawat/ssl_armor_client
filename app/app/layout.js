"use client";

import { NavigationRail } from "./components/navigation-rail"
import { HiOutlineChartBarSquare, HiOutlineCog8Tooth } from "react-icons/hi2";
import AppHeader from "./components/header";
import { signOut, useSession } from "next-auth/react";



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
    const session = useSession();

    if (!session.data) {
        return <div className="absolute w-full h-screen flex items-center justify-center text-lg">Loading...</div>
    }

    if (session.data.tokenExpiry && (new Date(session.data.tokenExpiry) < new Date())) {
        signOut({ callbackUrl: "/" }).then(() => {
            console.log("Token expired, logging out")
        }).catch((e) => {
            console.log("Error logging out: ", e)
        })
    }

    return (
        <div className="">
            <div className="flex flex-row">
                <div className="flex-1 h-screen overflow-y-scroll">
                    <AppHeader />
                    <NavigationRail items={sidebarNavItems} />
                    <div className="flex-1">{children}</div>
                </div>
            </div>
        </div>
    )
}