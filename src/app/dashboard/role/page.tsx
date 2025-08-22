import { Heading } from "@/components/heading";
import PageContainer from "@/components/layout/page-container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";

export default function PageRole(){
    return (
        <PageContainer scrollable={false}>
            <div className='flex flex-1 flex-col space-y-4'>
                <div className='flex items-start justify-between'>
                    <Heading
                        title='Role Management'
                        description='Manage Role in report system'
                        sub_title="Role was control here"
                    />
                    <Link
                        href='/dashboard/role/new'
                        className={cn(buttonVariants(), 'text-xs md:text-sm')}
                    >
                        <IconPlus className='mr-2 h-4 w-4' /> Add New
                    </Link>
                </div>
                <Separator />
                
            </div>
        </PageContainer>
    )
}