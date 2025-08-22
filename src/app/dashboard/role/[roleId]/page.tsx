import PageContainer from '@/components/layout/page-container';
import RoleViewPage from '@/features/roles/components/role-view-page';
import PageRole from '../page';
import { Heading } from '@/components/heading';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { IconPlus } from '@tabler/icons-react';
import { Separator } from '@radix-ui/react-dropdown-menu';
// import UserViewPage from '@/features/users/components/user-view-page';

export const metadata = {
    title: 'Dashboard : User View'
};

type PageProps = { params: Promise<{ userId: string }> };

export default async function Page(props: PageProps) {

    const params = await props.params;

    return (
        <PageContainer scrollable>
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
                <RoleViewPage userId={params.userId} /> 
            </div>
            {/* <PageRole />
            <div className='flex-1 space-y-4 mt-16 content-center '>
                <RoleViewPage userId={params.userId} />
            </div> */}
        </PageContainer>
    );
}