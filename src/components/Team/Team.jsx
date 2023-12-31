import Slider from "react-slick";
import { ayman, farabi, price } from "../../../public";
const Team = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold">যাদের অভিজ্ঞতা আমরা কাজে লাগিয়েছি </h2>
                    <p className="text-gray-200 sm:text-xl">প্রতিটি সেক্টরে এইসব মানুষ সফল এবং মেন্টর হিসেবে তাঁরা সবার উপরে</p>
                </div>
                <Slider {...settings}>

                    <div className="m-10">
                        <div className="text-center text-gray-500 main-border p-10 mt-10 ml-10">
                            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="https://rabbil.com/files/rabbil.jpg" alt="Bonnie Avatar" />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                                <a href="https://rabbil.com/">RABBIL HASAN</a>
                            </h3>
                        </div>
                    </div>
                    <div className="m-10">
                        <div className="text-center text-gray-500 main-border p-10 ml-10">
                            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={price} alt="Bonnie Avatar" />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                                <a href="https://www.youtube.com/@JamesPrinceB">James Prince</a>
                            </h3>
                        </div>
                    </div>
                    <div className="m-10">
                        <div className="text-center text-gray-500 main-border p-10 mt-10 ml-10">
                            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={farabi} alt="Bonnie Avatar" />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                                <a href="https://www.youtube.com/@FarabisSmartDiary">Farabi</a>
                            </h3>
                        </div>
                    </div>
                    <div className="m-10">
                        <div className="text-center text-gray-500 main-border p-10 ml-10">
                            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={ayman} alt="Bonnie Avatar" />
                            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                                <a href="https://www.youtube.com/@10msmain">Ayman Sadiq</a>
                            </h3>
                        </div>
                    </div>


                </Slider>
            </div>
        </div>
    );
};

export default Team;