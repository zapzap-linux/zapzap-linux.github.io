import laptop from '/laptop-art.svg'

function Home() {

    return (
        <div id="home"
            className="bg-white min-h-screen flex flex-col items-center justify-center py-16 px-4">
            <div className="bg-white md:w-2/3 flex flex-col items-center justify-center">

                <img src={laptop} className="w-80 p-2" alt="Laptop logo" />
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 ">ZapZap</h1>
                <h1 className="text-xl font-bold text-gray-800 mb-4">Whatsapp Desktop for Linux</h1>
                <p className="text-gray-600 mb-6 text-center w-3/4 sm:w-2/3">
                    O cliente Whatsapp que torna a sua experiência mais fácil, produtiva e nativa no Linux.
                </p>

                <div>
                    <p className="text-gray-600 mb-6">
                        Veja algumas de nossas incríveis funcionalidades:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li className="mb-2">Múltiplos usuários: Use várias contas de whatsapp ao mesmo tempo.</li>
                        <li className="mb-2">Ícone na bandeja: Indica quando houver novas mensagens.</li>
                        <li className="mb-2">Compartilhamento de Mídia: Arraste para o chat e compartilhe fotos, vídeos e documentos facilmente.</li>
                        <li className="mb-2">Integração com o sistema: Notificações, temas, execução em segundo plano e <a href="" className='text-blue-700 hover:font-bold'>muitos mais</a>.</li>
                    </ul>
                </div>

                <div className='flex flex-row gap-x-6 justify-center items-center mt-8'>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold text-md py-2 px-4 rounded-full">
                        <a href="/#download">Experimente o ZapZap</a>
                    </button>
                    <button className='text-gray-800 font-semibold text-md py-2 px-4 rounded-full hover:bg-slate-100'>
                        <a href="/#readmore">Saiba mais</a>
                    </button>
                </div>
            
            </div>

        </div>
    );
}


export default Home;