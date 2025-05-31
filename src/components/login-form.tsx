"use client"
import { GalleryVerticalEnd } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { authUser } from "@/constants/data"
import { useState } from "react"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 chars"
    }).max(50, {
        message: "Username must be 50 max chars"
    }),
    password: z.string().nonempty({
        message: "Password must be required"
    })
})

// type LoginRequest = {
//     username: string;
//     password: string;
// }

export function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    })

    // const form = useForm<LoginRequest>()
    const {
        // register,
        handleSubmit,
        // formState: { errors },
        watch
    } = form //destructuring

    const username = watch("username")

    const [authMessage,setAuthMessage] = useState<string>()

    function onSubmit(data: z.infer<typeof formSchema>) {
        const {username,password} = authUser
        if(username === data.username && password ===data.password){
            router.replace("/dashboard/overview")
        }else{
            setAuthMessage("Bad Credential")
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>

            <Form {...form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col items-center gap-2">
                            <a
                                href="#"
                                className="flex flex-col items-center gap-2 font-medium"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-md">
                                    <GalleryVerticalEnd className="size-6" />
                                </div>
                                <span className="sr-only">Acme Inc.</span>
                            </a>
                            <h1 className="text-xl font-bold">Welcome {username} to Acme Inc.</h1>
                            <p className="text-red-500">{authMessage}</p>
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <a href="#" className="underline underline-offset-4">
                                    Sign up
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                {/* <Label htmlFor="username">Username</Label> */}
                                {/* <Input
                                    {...register("username")}
                                    id="username"
                                    type="text"
                                    placeholder="username"
                                    className={errors.username && "border-red-500 focus-visible:outline-red-500 focus-visible:border-2 focus-visible:border-red-2"}

                                />
                                <p className="text-red-500">{errors.username?.message}</p> */}

                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input placeholder="username" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>
                            <div className="grid gap-2">
                                {/* <Label htmlFor="password">Password</Label> */}

                                {/* <Input
                                    {...register("password")}
                                    id="password"
                                    type="password"
                                    placeholder="password" />
                                <p className="text-red-500">{errors.password?.message}</p> */}

                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="*****" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                            </div>
                            <Button type="submit" className="w-full">
                                Login
                            </Button>
                        </div>
                    </div>
                </form>
            </Form>


            <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
                By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    )
}
