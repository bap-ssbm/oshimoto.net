import UpArrow from "../components/ui/UpArrow"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <> 
            {children}
            <UpArrow/>
        </>

    )
}