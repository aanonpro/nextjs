import { redirect } from "next/navigation";


export default function Dashboard() {
    const isLoggedIn = true;
    if(isLoggedIn){
        redirect("/dashboard/overview")
    }else{
        redirect("/login")
    }
    // return (
    //     <h2 className='text-center text-2xl text-blue-700'>welcome dashboard</h2>
    // )
}