import { Carousel } from 'flowbite-react';

/* files in public/screenshot*/
export const files = [
    { name: "0.png" },
    { name: "1.png" },
    { name: "2.png" },
    { name: "3.png" },
    { name: "4.png" },
    { name: "5.png" },
];


function Gallery() {
    return (
        <div id="gallery"
            className="bg-light dark:bg-dark min-h-fit flex flex-col items-center justify-center py-16 px-4">
            <div className="w-screen md:w-2/3 flex flex-col items-center justify-center gap-6 p-20 rounded-lg">

                <h1 className="text-4xl lg:text-6xl text-dark dark:text-white font-extrabold">Gallery</h1>
                <p className="text-base lg:text-xl text-dark dark:text-white text-center lg:w-2/5">
                    See some screenshot.
                </p>

                <div className='flex flex-row w-96 px-4 h-64 lg:h-[450px] lg:w-[750px] justify-center items-center'>
                    <Carousel slideInterval={5000} >
                        {files.map((file) => (
                            <img key={file.name} src={'/screenshot/' + file.name} className="h-full" alt={file.name} />

                        ))}
                    </Carousel>
                </div>

            </div>
        </div>);
}

export default Gallery;