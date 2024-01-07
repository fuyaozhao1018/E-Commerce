//[storeId] means things comes to this file must have storeId
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import prismadb from '@/lib/prismadb';
// import Navbar from '@/components/navbar'

export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await prismadb.store.findFirst({ 
    where: {
      id: params.storeId,
      userId,
    }
   });

    //check if store exists
    if (!store) {
        redirect('/');
    };

    return (
        <>
        <div>This will be a NavBar</div>
        {/* <Navbar /> */}
        {children}
        </>
    );
};