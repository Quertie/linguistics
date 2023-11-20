import Link from "@/node_modules/next/link"

export function NavBar()
{
    return (
        <div className='border-b shadow-lg fixed w-screen bg-white py-4 px-5 md:px-20'>
            <p className='text-xl'><Link href='/'>The English corner</Link></p>
        </div>
    )
}