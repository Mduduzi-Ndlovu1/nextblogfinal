import Link from 'next/link';
import CallToAction from './components/CallToAction';
import RecentPosts from './components/RecentPosts';

export default async function Home() {
  let posts = null;
  try {
    const result = await fetch('https://nextblogfinal.vercel.app'+ '/api/post/get', {
      method: 'POST',
      body: JSON.stringify({ limit: 9, order: 'desc' }),
      cache: 'no-store',
    });
    const data = await result.json();
    posts = data.posts;
  } catch (error) {
    console.log('Error getting post:', error);
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
  <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to My Tech Journey</h1>
  <p className='text-gray-500 text-sm sm:text-base'>
    Dive into the world of technology through the eyes of a junior developer! 
    This blog is your go-to place for relatable insights, beginner-friendly 
    tutorials, and personal experiences as I navigate the exciting challenges 
    of web development, software engineering, and programming. Built with 
    Next.js and powered by{' '}
    <a
      href='https://go.clerk.com/fgJHKlt'
      className='text-teal-500 hover:underline'
      target='_blank'
    >
      Clerk
    </a>, 
    this space is where learning meets storytelling, perfect for developers 
    just starting their tech adventure.
  </p>
  <Link
          href={'/search?category=null'}
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
  >
    Explore all posts
  </Link>
</div>

      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>
      <div className='p-3 flex flex-col gap-8 py-7'>
        <RecentPosts limit={9} />
        <Link
          href={'/search?category=null'}
          className='text-lg text-teal-500 hover:underline text-center'
        >
          View all posts
        </Link>
      </div>
    </div>
  );
}