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
            className="bg-light dark:bg-dark flex flex-col justify-center items-center gap-8 py-20 w-full">
            <div className='flex flex-col justify-center items-center w-2/3 gap-y-4'>
                <p className="text-4xl lg:text-6xl text-dark dark:text-white font-extrabold">
                    Gallery
                </p>
                <p className="text-base lg:text-xl text-dark dark:text-white text-center md:w-2/3 lg:w-2/5">
                    Words, words, words... see some screenshots!
                </p>
            </div>
            <div className='flex flex-row w-96 px-4 h-64 lg:h-[450px] lg:w-[750px] justify-center items-center'>
                <Carousel slideInterval={5000} >
                    {files.map((file) => (
                        <img key={file.name} src={'/screenshot/' + file.name} className="h-full" alt={file.name} />

                    ))}
                </Carousel>
            </div>
        </div>);
}

export default Gallery;
