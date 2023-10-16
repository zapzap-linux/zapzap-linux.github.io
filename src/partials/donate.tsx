import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'

function Donate() {
    return (
        <div id='donate'
            className="bg-white min-h-screen flex flex-col items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg md:w-3/5">
                <div className='flex flex-row w-full justify-start items-center gap-x-2'>
                    <FontAwesomeIcon icon={faCircleDollarToSlot} className='h-8 text-green-500' />
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-800 ">Contribua com o projeto</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center pt-16">
                    <a href="https://www.paypal.com/donate/?business=E7R4BVR45GRC2&no_recurring=0&item_name=ZapZap+-+Whatsapp+Desktop+for+linux&currency_code=USD"
                        target='_blank'>
                        <img alt="Donate" src="https://raw.githubusercontent.com/zapzap-linux/zapzap/d3232c71f76a4df2fa99d5a6c2d5a7b5ac4ceab4/share/logos/PayPal.svg" width="170" />
                    </a>

                    <div className="flex flex-col gap-2 rounded-lg text-gray-700">
                        <h2 className="text-2xl font-semibold">Ko-fi</h2>
                        <a href='https://ko-fi.com/X8X2E1OLG' target='_blank'>
                            <img height='36' src='https://storage.ko-fi.com/cdn/kofi4.png?v=3' alt='Buy Me a Coffee at ko-fi.com' />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
                    <a href="https://nubank.com.br/pagar/3c3r2/LS2hiJJKzv" target='_blank'>
                        <img alt="Pix" src="https://raw.githubusercontent.com/rafatosta/zapzap/main/share/logos/pix.png" width="170" />
                    </a>
                    <a href="https://github.com/sponsors/rafatosta" target='_blank'>
                        <img src="https://raw.githubusercontent.com/rafatosta/zapzap/e80db76a662d66efe3f324646eff5ffcd0424c6e/zapzap/assets/icons/banners/sponsor.svg" width="170" />
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Donate;