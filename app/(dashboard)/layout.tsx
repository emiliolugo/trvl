import { ReactNode } from 'react';


interface DashboardLayoutProps {
    children: ReactNode;
    apiLimitCount: number;
}

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
    
    return (
        <div>            <main>
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
