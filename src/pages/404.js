import Link from 'next/link';
import Image from "next/image";

export default function Custom404() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center p-4 relative">
        <div>
            <h1 className="text-6xl font-bold mb-4">
                <span className='flex justify-center'>
                    4
                    <Image src="/images/logo/fav-logo.png" width={56} height={56} alt='' priority
                            className='shrink-0 w-14 h-14' />
                    4
                </span>
            </h1>
            <h2 className="text-2xl mb-6">Oops! We missed the shot.</h2>
            <p className="mb-6">The page you’re looking for is out of frame, but our <Link href="/portfolio" className="underline text-primary">Portfolio</Link> is in focus.</p>
            <Link href="/" className="px-6 py-3 bg-primary text-white rounded transition">
                Go Back Home
            </Link>
            <p className="mt-6 text-gray-500">
                You can also explore our Services to see what we offer. 
            </p>
        </div>
    </section>
  );
}
