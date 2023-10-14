import CommandCopyButton from '../components/command_copy_button'
import zapzapIcon from '../../public/zapzap-icon.svg'

function Download() {
    return (
        <div id='download'
            className="bg-white min-h-screen flex flex-col items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg md:w-3/5">
                <div className='flex flex-row w-full justify-start items-center gap-x-2'>
                    <img src={zapzapIcon} className="w-6 md:w-12" alt="zapzap logo" />
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-800 ">Download ZapZap</h1>
                </div>

                <p className="text-lg text-gray-700 mb-6 ">
                    Obtenha as versões mais recentes do ZapZap da maneira que desejar!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col justify-between gap-2 bg-green-500 p-4 rounded-lg text-white">
                        <div>
                            <h2 className="text-2xl font-semibold">Flatpak</h2>
                            <p className="text-lg">
                                Obtenha para qualquer distribuição Linux.
                            </p>
                        </div>

                        <CommandCopyButton title='Install' command='flatpak install flathub com.rtosta.zapzap' />

                        <button className="mt-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-full">
                            <a href="https://flathub.org/apps/com.rtosta.zapzap" target='_blank'>
                                Flathub.com
                            </a>
                        </button>
                    </div>
                    <div className="flex flex-col gap-2 bg-blue-500 p-4 rounded-lg text-white">
                        <div>
                            <h2 className="text-2xl font-semibold">Fedora Linux</h2>
                            <p className="text-lg">Prefere um bom .rpm?</p>
                        </div>

                        <CommandCopyButton title='Quick Enable' command='dnf copr enable rafatosta/zapzap' />
                        <CommandCopyButton title='Install' command='dnf install zapzap' />

                        <button className="mt-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full">
                            <a href="https://copr.fedorainfracloud.org/coprs/rafatosta/zapzap/" target="_blank">
                                Fedora Copr
                            </a>
                        </button>
                    </div>
                </div>
                <div className="pt-4 text-gray-600 text-sm flex flex-col justify-center items-center">
                    <p>Este software é licenciado sob a <a className="text-blue-600" href="https://github.com/zapzap-linux/zapzap/blob/main/LICENSE" target='_blank'>GPL versão 3</a>.</p>
                    <p>O código-fonte está disponível no <a className="text-blue-600" href="https://github.com/zapzap-linux/zapzap" target='_blank'>GitHub</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default Download;