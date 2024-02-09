"use client"
import * as React from "react"
import { BASE_URL } from "../constants"

export default function useServers() {
    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [servers, setServers] = React.useState([])


    async function fetchServers() {
        try {
            if (!isLoading) {
                setIsLoading(true)
            }
            setError(null)
            setServers([])
            const res = await fetch(`${BASE_URL}/api/get_servers`, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const jsonRes = await res.json()
            console.log("SERVERS: ", jsonRes)
            setServers(jsonRes.servers)
            setIsLoading(false)
        } catch (e) {
            console.log("SERVER FETCH ERROR: ", e)
            setError("Unable to load servers")
            setServers([])
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        fetchServers()
    }, [])

    return { isLoading, error, servers, retry: fetchServers }
}