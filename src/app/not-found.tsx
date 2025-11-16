import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const notFoundPage = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <h1 className='text-3xl font-bold mb-2'>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist</p>
      <Image
      src='/404-error.png'
      alt='error picture'
      width={500}
      height={500}
      
      />
      <Link href={'/'} className='px-2 py-3.5 bg-sky-500 rounded-3xl font-bold inline-block text-white hover:bg-sky-700 transition duration-500 ease-in-out'>
      Return to Home
      </Link>
    </div>
  );
};

export default notFoundPage;