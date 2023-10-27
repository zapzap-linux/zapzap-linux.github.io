import laptop from '/laptop-art.svg'

function Home() {

    return (
        <div id="home"
            className="bg-light dark:bg-gray-800 min-h-fit flex flex-col items-center justify-center py-16 px-4">
            <div className="w-screen md:w-2/3 flex flex-col items-center justify-center gap-6 p-20 rounded-lg">

                <img src={laptop} className="w-64" alt="Laptop logo" />
                <h1 className="text-4xl lg:text-6xl text-gray-800 dark:text-white font-extrabold">ZapZap</h1>
                <p className="text-base lg:text-xl text-gray-800 dark:text-white text-center lg:w-2/5">
                    Your WhatsApp Desktop for Linux with a native application experience.
                </p>

                <div className='flex flex-row w-screen gap-x-6 justify-center items-center'>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-md py-3 px-4 rounded-lg">
                        <a href="/#download">Get Started</a>
                    </button>
                    <button className='backdrop-blur-sm bg-black/30 text-white font-semibold text-md lg:text-sm py-3 px-4 rounded-lg hover:bg-black/50'>
                        <a href="/#readmore">Learn More</a>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Home;