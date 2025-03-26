"use client"
import React, { useState, useEffect } from "react";

const images = [
    { src: "https://th.bing.com/th/id/OIP.pzxXinIoivyUUWR87QBxLgHaD4?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", text: "Image 1" },
    { src: "https://th.bing.com/th/id/OIP.k14JkTl5O_hImfhkeCE3HQHaD5?w=335&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", text: "Image 2" },
    { src: "https://th.bing.com/th/id/OIP.uoChKIF4Rx7CZyygBwTRtAHaDA?rs=1&pid=ImgDetMain", text: "Image 3" },
    { src: "https://th.bing.com/th/id/OIP.xddyM5Z5llwe5nz0xAnhvAHaD_?w=327&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", text: "Image 4" }
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div
            className="lg:relative lg:h-96 overflow-hidden rounded-lg shadow-lg"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <img
                src={images[currentIndex].src}
                alt="slider"
                className="lg:absolute inset-0 w-full h-full object-cover"
            />
            <div className="lg:absolute inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
                <p className="text-lg font-semibold text-white">{images[currentIndex].text}</p>
            </div>

            {/* Navigation buttons */}
            <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
                ◀
            </button>
            <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
                ▶
            </button>
        </div>
    );
};

export default ImageSlider;
