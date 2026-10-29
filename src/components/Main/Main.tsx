import type { ReactNode } from 'react';
import './Main.module.css'

interface MainProps {
    className? : string,
    children: ReactNode
}
const Main = ({ className,children} : MainProps ) => {
    return (
        <main className={className}>
            {children}
        </main>
    )
    }

export default Main
