import { Link } from "react-router-dom"

const NotFound = () =>{
    return (
        <>
        <section className="bg- dark:bg-zinc-900 ">
    <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <p className="p-3 text-sm font-medium text-green-500 rounded-full bg-green-50 dark:bg-zinc-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-zinc-800 dark:text-white md:text-3xl">Page not found</h1>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400">The page you are looking for doesn't exist. Here are some helpful links:</p>

            <div className="grid grid-cols-2 items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto border">
                
                <button className="dark:text-zinc-800 flex items-center justify-center px-5 py-2 text-sm text-zinc-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-zinc-800 dark:bg-zinc-900 hover:bg-zinc-100 dark:text-zinc-200 dark:border-zinc-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>


                    <span>Go back</span>
                </button>

                <Link to="/panel/dashboard">
                <button className="px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-green-500 rounded-lg shrink-0 sm:w-auto hover:bg-green-600 dark:hover:bg-green-500 dark:bg-green-600">
                    Take me home
                </button>
                </Link>
            </div>
        </div>
    </div>
</section>
        </>
        )
}
export default NotFound