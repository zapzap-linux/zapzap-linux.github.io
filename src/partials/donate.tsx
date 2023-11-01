import pixIcon from '/pix_icon.svg'

function Donate() {
    return (
        <div id="donate"
            className="bg-light dark:bg-dark min-h-fit flex flex-col items-center justify-center py-16 px-4" >
            <div className="w-screen md:w-2/3 flex flex-col items-center justify-center gap-6 p-20 rounded-lg">
                <h1 className="text-4xl lg:text-6xl text-dark dark:text-white font-extrabold">Donate</h1>
                <p className="text-base lg:text-xl text-dark dark:text-white text-center lg:w-2/5">
                    Make a donation and contribute to the project.
                </p>

                <div className='flex flex-col w-full md:flex-row gap-x-6 justify-between items-center'>
                    <button className="w-full mt-2 bg-[#29abe0] hover:bg-blue-500 text-white font-semibold p-4 rounded-lg">
                        <a className="flex justify-center items-center gap-x-2 "
                            href="https://ko-fi.com/rafaeltosta"
                            target="_blank">
                            <img className="h-8 animate-bounce "
                                src="https://storage.ko-fi.com/cdn/whitelogo.svg"
                                alt=" Buy Me a Coffee at ko-fi" />
                            Buy Me a Coffee at ko-fi
                        </a>
                    </button>
                    <button className="w-full mt-2 bg-[#32bcad] hover:bg-[#4ab4a8] text-white font-semibold p-4 rounded-lg">
                        <a className="flex justify-center items-center gap-x-2 "
                            href="https://nubank.com.br/pagar/3c3r2/LS2hiJJKzv"
                            target="_blank">
                            <img className="h-8 motion-safe:animate-bounce" src={pixIcon} alt="pix" />
                            Faça um PIX
                        </a>
                    </button>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 pt-4'>
                    <p className='text-sm text-gray-800'>Others:</p>
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <a href="https://www.paypal.com/donate/?business=E7R4BVR45GRC2&no_recurring=0&item_name=ZapZap+-+Whatsapp+Desktop+for+linux&currency_code=USD"
                            target='_blank'
                            className='text-sm text-gray-800 hover:text-blue-700 hover:font-bold'>PayPal</a>
                        <p>-</p>
                        <a href="https://github.com/sponsors/rafatosta"
                            target='_blank'
                            className='text-sm text-gray-800 hover:text-blue-700 hover:font-bold'>GitHub Sponsor</a>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Donate;