"use client"
import * as React from "react"
import { BASE_URL } from "../constants"
import { useSession } from "next-auth/react"
export function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        if (!timer) {
            func.apply(this, args);
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = undefined;
        }, timeout);
    };
}

export default function useServers() {
    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [servers, setServers] = React.useState([])
    const session = useSession()

    const debouncedFetchServers = debounce(fetchServers, 1000)

    async function fetchServers() {
        console.log("API CALLED INNER")

        try {
            if (!isLoading) {
                setIsLoading(true)
            }
            setError(null)
            setServers([])
            const res = await fetch(`${BASE_URL}/api/get_servers/`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `token ${session.data.jwt}`
                }
            })
            console.log("RES: ", res)
            if (res.status !== 200) {
                throw new Error("Unable to load servers")
            }
            const jsonRes = await res.json()
            console.log("SERVERS: ", jsonRes)
            setServers(jsonRes.servers)
        } catch (e) {
            console.log("SERVER FETCH ERROR: ", e)
            setError("Unable to load servers")
            setServers([])
        } finally {
            setIsLoading(false)
        }
    }

    return { isLoading, error, servers, fetchServers: debouncedFetchServers }
}