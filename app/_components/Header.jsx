import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div>
        <div> 
            <Image src={'/1-nobg.png'} width={150} height={150} alt="logo" />
             <ul className='md:flex gap-10'>
                <li> For Rent</li>
                <li> For Sale</li>
                <li> Agent Finder</li>
            </ul>
        </div>
        <div>
            <Button><Plus/> Add a new listing</Button>
        </div>
    </div>
  )
}

export default Header








