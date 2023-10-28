function Download() {
    return (
        <div id="download"
            className="bg-dark dark:bg-light min-h-fit flex flex-col items-center justify-center px-4">
            <div className="w-screen md:w-2/3 flex flex-col items-center justify-center gap-6 p-20 rounded-lg">
                <h1 className="text-4xl lg:text-6xl text-light dark:text-dark font-extrabold">Get ZapZap</h1>
                <p className="text-base lg:text-xl text-light dark:text-dark text-center lg:w-4/5">
                    Get the official versions of Zapzap
                </p>

                <div className='flex flex-row w-screen gap-x-6 justify-center items-center'>
                    <button className="mt-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg">
                        <a href="https://flathub.org/apps/com.rtosta.zapzap" target='_blank'>
                            Flathub.com
                        </a>
                    </button>
                    <button className="mt-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg">
                        <a href="https://copr.fedorainfracloud.org/coprs/rafatosta/zapzap/" target="_blank">
                            Fedora Copr
                        </a>
                    </button>
                </div>

                <div className="pt-4 text-light dark:text-dark text-sm flex flex-col justify-center items-center">
                    <p className="text-center">This software is licensed under the <a className="text-blue-600" href="https://github.com/zapzap-linux/zapzap/blob/main/LICENSE" target='_blank'>GPL versão 3</a>.</p>
                    <p className="text-center">The source code is available in <a className="text-blue-600" href="https://github.com/zapzap-linux/zapzap" target='_blank'>GitHub</a>.</p>
                </div>

            </div>
        </div>
    );
}

export default Download;