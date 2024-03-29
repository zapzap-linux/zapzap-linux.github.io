import pixIcon from '/pix_icon.svg'

function Donate() {
    return (
        <div id="donate"
            className='bg-light dark:bg-dark flex flex-col justify-center items-center gap-8 py-20 w-full'>

            <div className='flex flex-col justify-center items-center w-2/3 gap-y-4'>
                <p className="text-4xl lg:text-6xl text-dark dark:text-white font-extrabold">
                    Donate
                </p>
                <p className="text-base lg:text-xl text-dark dark:text-white text-center md:w-2/3 lg:w-2/5">
                    Make contribute by making a donation to the project.
                </p>
            </div>

            <div className='flex flex-col w-2/3 md:flex-row gap-x-6 justify-between items-center'>
                <a href="https://ko-fi.com/rafaeltosta" target="_blank"
                    className="flex justify-center items-center gap-x-2 text-center w-full h-20 mt-2 bg-[#29abe0] hover:bg-blue-500 text-white font-semibold p-4 rounded-lg">
                    <img className="h-8 animate-bounce "
                        src="https://storage.ko-fi.com/cdn/whitelogo.svg"
                        alt=" Buy Me a Coffee at ko-fi" />
                    Buy Me a Coffee at ko-fi
                </a>
                <a className="flex justify-center items-center gap-x-2 text-center w-full h-20 mt-2 bg-[#32bcad] hover:bg-[#4ab4a8] text-white font-semibold p-4 rounded-lg"
                    href="https://nubank.com.br/pagar/3c3r2/LS2hiJJKzv"
                    target="_blank">
                    <img className="h-8 motion-safe:animate-bounce" src={pixIcon} alt="pix" />
                    Faça um PIX
                </a>
            </div>
            
            <div className='flex flex-col justify-center items-center gap-2 pt-4'>
                <p className='text-md text-dark dark:text-light'>Others:</p>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <a href="https://www.paypal.com/donate/?business=E7R4BVR45GRC2&no_recurring=0&item_name=ZapZap+-+Whatsapp+Desktop+for+linux&currency_code=USD"
                        target='_blank'
                        className='text-md text-dark dark:text-light hover:text-blue-700 hover:font-bold'>PayPal</a>
                    <p className='dark:text-white'>-</p>
                    <a href="https://github.com/sponsors/rafatosta"
                        target='_blank'
                        className='text-md text-dark dark:text-light hover:text-blue-700 hover:font-bold'>GitHub Sponsor</a>
                </div>
                
            </div>
        </div >
    );
}

export default Donate;
