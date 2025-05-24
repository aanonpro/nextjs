"use client"
import { useParams, usePathname, useSearchParams } from "next/navigation";

export default function Page(){
    const params = useParams<{account:string}>()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    return (
        <h2 className="text-center">
            Overview: {params.account}
            pathname: {pathName}
            search id: {searchParams.get("id")}
            search name: {searchParams.get("name")}
        </h2>
    )
}