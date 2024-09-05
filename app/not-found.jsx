import Link from "next/link";

export default function Custom404() {
  return (
    <div className="">
      <main className="margin-x margin-y h-[70vh] mt-20 flex items-center justify-center">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold sm:text-9xl ">404</h1>
          <p className="mt-3 ">Oops, something went wrong. 🥲</p>
          <Link href="/" className="font-bold">
            <p className="font-bold hover:text-red-600 my-transition">
              Click here to return to the homepage.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
