import Link from "next/link"


export const metadata = {
    title: 'Post',
    description: 'Post Description',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className='p-6'>
            <body>

                <hr />
                {children}
            </body>
        </html>
    )
}
