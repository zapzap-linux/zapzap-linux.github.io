import zapiIcon from '/zapzap-icon.svg'

function Features() {
    return (
        <div id="features"
            className="bg-dark dark:bg-light flex flex-col justify-center items-center gap-8 py-20 w-full">
            <div className="flex flex-col justify-center items-center w-2/3 gap-y-4">
                <p className="text-light dark:text-dark text-4xl lg:text-6xl font-extrabold">
                    Features
                </p>
                <p className="text-light dark:text-dark text-base lg:text-xl text-center md:w-2/3 lg:w-2/5">
                    Zapzap aims to facilitate the use of WhatsappWeb on Linux, making it your use experience closer to a native application.
                </p>
            </div>


            <div className='flex flex-row justify-center items-center px-4'>
                <img src={zapiIcon} className="w-80 p-2 hidden lg:flex" alt="Logo" />
                <div>
                    <ul className="list-disc pl-6 text-light dark:text-dark">
                        <li className="mb-2"> <b> Multiple users: </b> use multiple WhatsApp accounts at the same time. </li>
                        <li className="mb-2"> <b> Tray icon: </b> indicates when there are new messages and the ability to customize them. </li>
                        <li className="mb-2"> <b> Media sharing: </b> drag for chat and share photos, videos and documents easily. </li>
                        <li className="mb-2"> <b> Spellchecker: </b> do not write wrong!</li>
                        <li className="mb-2"> <b> Run in the background: </b> Run in the background and initiate along with the system. </li>
                        <li className="mb-2"> <b> Themes: </b> follows the system style (light and dark). </li>
                        <li className="mb-2"> <b> Notifications: </b> native notifications to your distribution. </li>
                        <li className="mb-2"> <b> Personalized Window Decoration: </b> Personalized window decoration. </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Features;