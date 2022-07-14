import Link from "next/link"

function Header() {
    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto">
            <div className="flex items-center space-x-5">
                <Link href='/'>
                    <h1 className='w-44 object-contain cursor-pointer font-serif text-2xl font-bold'>SkyMan Films</h1>

                </Link>
            </div>
            <div className="flex items-center space-x-5 text-green-600">
                <h3 className="cursor-pointer ease-in-out"><Link href="../about">About Us</Link></h3>


                
                <h3 className="ease-in-out border border-white px-4 py-1 rounded-full cursor-pointer text-white bg-green-600 hover:border-green-600 hover:bg-white hover:text-green-600"><Link href='https://www.youtube.com/c/SkymanFilms'>Channel</Link></h3>
            </div>
        </header>
    )
}

export default Header