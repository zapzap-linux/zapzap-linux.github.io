import laptop from '/laptop-art.svg'

function Home() {
    return (
        <div id="home"
            className='bg-light dark:bg-dark flex flex-col justify-center items-center gap-8 py-20 w-full'>
            <img src={laptop} className="w-64" alt="Laptop logo" />
            <div className='flex flex-col justify-center items-center w-2/3 gap-y-4'>
                <p className="text-4xl lg:text-6xl text-dark dark:text-white font-extrabold">
                    ZapZap
                </p>
                <p className="text-base lg:text-xl text-dark dark:text-white text-center md:w-2/3 lg:w-2/5">
                    A Linux WhatsApp webapp for with a native application experience.
                </p>
            </div>
            <div className='flex flex-row gap-x-6 justify-center items-center'>
                <a href="/#download"
                    className="bg-green-500 hover:bg-green-600 text-light text-md lg:text-sm font-semibold rounded-lg p-3">
                    Get Started
                </a>
                <a href="/#features"
                    className='bg-black/30 hover:bg-black/50 text-light text-md lg:text-sm font-semibold rounded-lg p-3'>
                    Learn More
                </a>
            </div>

        </div>
    );
}

export default Home;
