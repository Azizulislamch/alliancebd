import { motion } from "framer-motion"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck, faObjectGroup, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import serviceImg from "../../assets/images/Banner.png";

export default function ServiceBrief() {
    const points = [
        {
            title: "Product development and sampling",
            icon: faUserCheck,
        },
        {
            title: "Supplier selection and evaluation",
            icon: faObjectGroup,
        },
        {
            title: "Price negotiation and order placement",
            icon: faFileInvoiceDollar,
        },
    ];

    return (
        <section className="py-20 bg-[#f8eadf] overflow-hidden">
            <div className="container mx-auto px-8 max-w-7xl">
               
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }} 
                    transition={{ duration: 0.6 }}
                    className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                >

                    {/* Left Side: Image */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={serviceImg}
                            alt="Clothing display"
                            className="w-full h-auto rounded-xl shadow-sm object-cover"
                        />
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-sm font-semibold text-gray-800 mb-4 block">Services</span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Professional buying house services
                        </h2>

                        <p className="text-gray-700 text-lg mb-10 leading-relaxed max-w-xl">
                            We handle the complexity of sourcing so you can focus on your business.
                            Our buying house team brings years of experience in connecting buyers with the right manufacturers.
                        </p>

                        <div className="space-y-6 mb-10">
                            {points.map((point, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="shrink-0">
                                        <FontAwesomeIcon icon={point.icon} className="text-xl text-gray-800" />
                                    </div>
                                    <span className="text-lg font-medium text-gray-800">
                                        {point.title}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-white border border-gray-200 px-10 py-3 rounded-lg font-semibold text-gray-900 hover:bg-gray-100 transition shadow-sm cursor-pointer">
                            Explore
                        </button>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}