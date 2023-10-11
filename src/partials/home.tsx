import laptop from '/laptop-art.svg'

function Home() {

    return (
        <div id="home"
            className="bg-white min-h-screen flex flex-col items-center justify-center py-16 px-4">
            <div className="bg-white md:w-2/3 flex flex-col items-center justify-center">

                <img src={laptop} className="w-80 p-2" alt="Laptop logo" />
                <h1 className="text-xl sm:text-3xl font-bold text-gray-800 ">ZapZap</h1>
                <h1 className="text-xl font-bold text-gray-800 mb-4">Whatsapp Desktop for Linux</h1>
                <p className="text-gray-600 mb-6 text-center w-3/4 sm:w-2/3">
                    O cliente Whatsapp que torna a sua experiência mais fácil, divertida e de maneira nativa no Linux.
                </p>

                <div>
                    <p className="text-gray-600 mb-6">
                        Veja algumas de nossas incríveis funcionalidades:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li className="mb-2">Várias contas: Tenha várias contas de whatsapp ativas ao mesmo tempo.</li>
                        <li className="mb-2">Ícone na bandeja: Indica quando houver novas mensagens.</li>
                        <li className="mb-2">Compartilhamento de Mídia: Compartilhe fotos, vídeos e documentos facilmente.</li>
                        <li className="mb-2">Emojis Divertidos: Expressa suas emoções com uma variedade de emojis.</li>
                    </ul>
                </div>

                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-md py-2 px-4 rounded-full mt-8">
                    <a href="https://flathub.org/apps/com.rtosta.zapzap" target="_blank">Experimente o ZapZap em Flatpak</a>
                </button>
                <a
                    className='text-green-600 hover:text-green-800 text-sm p-2'
                    href="https://copr.fedorainfracloud.org/coprs/rafatosta/zapzap/"
                    target="_blank" > <span className='text-gray-600'>-</span> Fedora Copr  <span className='text-gray-600'>-</span>
                </a>

                <div className="pt-4 text-gray-600 text-xs flex flex-col justify-center items-center">
                    <p>Este software é licenciado sob a <a className="text-blue-600" href="">GPL versão 3</a>.</p>
                    <p>O código-fonte está disponível no <a className="text-blue-600" href="">GitHub</a>.</p>
                </div>
            </div>

        </div>
    );
}


export default Home;