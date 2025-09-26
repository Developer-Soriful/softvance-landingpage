import { services } from "."

const Service = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[48px] lg:gap-[72px] md:mt-[110px] lg:mb-[173px] mx-4 md:mx-10 lg:mx-[120px]">
            {
                services.map((service, index) => (
                    <div className="flex flex-col gap-[19px]" key={service.id}
                        data-aos="fade-up"
                        data-aos-duration="3000"
                    >
                        <div className="service_card_icon">
                            <img src={service.icon} alt={service.title} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="service_card_heading">{service.title}</h3>
                            <p className="service_card_desc">{service.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Service