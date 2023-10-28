import zapiIcon from '/zapzap-icon.svg'

function Features() {
    return (<div id="features"
        className="bg-dark dark:bg-light min-h-fit flex flex-col items-center justify-center px-4">
        <div className="w-screen md:w-2/3 flex flex-col items-center justify-center gap-6 p-20 rounded-lg">
            <h1 className="text-4xl lg:text-6xl text-light dark:text-dark font-extrabold">Features</h1>
            <p className="text-base lg:text-xl text-light dark:text-dark text-center lg:w-4/5">
                Zapzap aims to facilitate the use of WhatsappWeb on Linux, making it your use experience closer to a native application.
            </p>

            <div className='flex flex-row w-screen justify-center items-center px-4'>
                <img src={zapiIcon} className="w-80 p-2 hidden lg:flex" alt="Logo" />
                <div>
                    <ul className="list-disc pl-6 text-light dark:text-dark">
                        <li className="mb-2"><b>Múltiplos usuários:</b> Use várias contas de Whatsapp ao mesmo tempo.</li>
                        <li className="mb-2"><b>Ícone na bandeja:</b> Indica quando houver novas mensagens e a possibilidade de personalizá-los.</li>
                        <li className="mb-2"><b>Compartilhamento de Mídia:</b> Arraste para o chat e compartilhe fotos, vídeos e documentos facilmente.</li>
                        <li className="mb-2"><b>Spellchecker:</b> Nâo escreva errado! </li>
                        <li className="mb-2"><b>Execução em segundo plano:</b> Execute em segundo plano e inicialize junto com o sistema.</li>
                        <li className="mb-2"><b>Temas:</b> Segue o estilo do sistema (claro e escuro).</li>
                        <li className="mb-2"><b>Notificações:</b> Notificações nativas à sua distribuição.</li>
                        <li className="mb-2"><b>Personalized window decoration:</b> Decoração da janela personalizado.</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>);
}

export default Features;