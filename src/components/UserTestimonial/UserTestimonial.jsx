import { useState } from "react";
import { testimonials } from "."; // jodi testimonials e FAQ data thake

const UserTestimonial = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col gap-[60px] mb-[100px] lg:mb-[160px] mx-4 md:mx-10 lg:mx-[120px] z-40">
            {/* this is for user testimonial heading part */}
            <div>
                <h1 className="build_heading text-2xl md:text-4xl lg:text-[48px] z-10">Frequently Asked Questions</h1>
                <p className="build_desc">Quick answers to help you get the most out of our app.</p>
            </div>

            {/* this is for user testimonial content part */}
            <div className="flex flex-col gap-4">
                {testimonials.map((testimonial, index) => (
                    <div className="userTestimonial_content flex flex-col gap-6" key={testimonial.id}>
                        <div onClick={() => toggle(index)} className="flex justify-between items-center cursor-pointer">
                            <h2 className="userTestimonial_content_heading">{testimonial.question}</h2>
                            <button className="w-10 cursor-pointer">
                                {openIndex === index ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path opacity="0.8" d="M3 7.5H14" stroke="#212B36" strokeLinecap="round" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                        <path opacity="0.8" d="M8.5 3V13M3.5 8H13.5" stroke="#212B36" strokeLinecap="round" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <p className="userTestimonial_content_desc lg:mx-[64px]">
                            {openIndex === index && testimonial.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserTestimonial;