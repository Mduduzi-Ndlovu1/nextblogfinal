"use client"
import { Button, Navbar, TextInput } from 'flowbite-react';
import Link from 'next/link';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
import { usePathname } from 'next/navigation';
export default function Header() {
  const path = usePathname();
  return (
    <Navbar className='border-b-2'>
      <Link 
      href='/'
      className='m-3 self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Between The Thoughts
        </span>
      </Link>

      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>

      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch/>
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon/>
        </Button>

        <Link href='/sign-in'>
          <Button gradientDuoTone='purpleToBlue' outline>
              Sign in
          </Button>
        </Link>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link href='/'>
          <Navbar.Link active={path === '/'}>Home</Navbar.Link>
        </Link>
        <Link href='/about'>
          <Navbar.Link active={path === '/about'}>About</Navbar.Link>
        </Link>
        <Link href='/contact'>
          <Navbar.Link active={path === '/contact'}>Contact</Navbar.Link>
        </Link>
      </Navbar.Collapse>

    </Navbar>
  )
}