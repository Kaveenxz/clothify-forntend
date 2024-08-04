import Sidebar from '@/app/components/admin/Sidebar';

const layout = ({children,}:Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className="flex  h-full max-lg:block max-lg:w-max ">
    <Sidebar/>
    {children}
    </div>
  )
}

export default layout
