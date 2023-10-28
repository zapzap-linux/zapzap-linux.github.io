import laptop from '/laptop-art.svg'

function Home() {

    return (
        <div id="home"
            className="bg-light dark:bg-dark min-h-fit flex flex-col items-center justify-center py-16 px-4">
            <div className="w-screen md:w-2/3 flex flex-col items-center justify-center gap-6 p-20 rounded-lg">

                <img src={laptop} className="w-64" alt="Laptop logo" />
                <h1 className="text-4xl lg:text-6xl text-dark dark:text-white font-extrabold">ZapZap</h1>
                <p className="text-base lg:text-xl text-dark dark:text-white text-center lg:w-2/5">
                    Your WhatsApp Desktop for Linux with a native application experience.
                </p>

                <div className='flex flex-row w-screen gap-x-6 justify-center items-center'>
                    <button className="bg-green-500 hover:bg-green-600 text-light text-md lg:text-sm font-semibold rounded-lg h-12 w-24">
                        <a href="/#download">Get Started</a>
                    </button>
                    <button className='bg-black/30 hover:bg-black/50 text-light text-md lg:text-sm font-semibold rounded-lg h-12 w-24'>
                        <a href="/#features">Learn More</a>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Home;