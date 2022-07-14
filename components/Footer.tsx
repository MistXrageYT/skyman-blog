import Link from "next/link"

const footer = () => {
  return (
      <div className="pt-5">
        <hr className="py-0"/>
        <div className='py-8 text-center text-sm'>Copyright &#169; 2009 - 2022 <span className="text-gray-400 hover:underline"><Link href="https://www.youtube.com/c/SkymanFilms">Skyman Films</Link></span>. All Rights Reserved</div>
    </div>
  )
}

export default footer


