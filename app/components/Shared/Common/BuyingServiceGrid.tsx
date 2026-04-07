import { motion } from "framer-motion";
import { BookOpen, Target, ShoppingBag, Monitor } from "lucide-react";

const services = [
    {
        title: "Product development and sampling",
        description: "We create samples that match your vision exactly.",
        icon: <BookOpen className="w-8 h-8" />,
    },
    {
        title: "Supplier selection and evaluation",
        description: "We find manufacturers who meet your standards.",
        icon: <Target className="w-8 h-8" />,
    },
    {
        title: "Price negotiation and order placement",
        description: "We secure the best terms for your orders.",
        icon: <ShoppingBag className="w-8 h-8" />,
    },
    {
        title: "Production follow-up and quality inspection",
        description: "We monitor every batch from loom to shipment.",
        icon: <Monitor className="w-8 h-8" />,
    },
];

export default function BuyingServices() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Services</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
                        Buying house services
                    </h2>
                    <p className="text-gray-600 text-lg">
                        We manage every step of your sourcing journey with precision.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}
                            className="group relative p-10 rounded-2xl border border-gray-100 bg-white transition-all duration-500 hover:bg-[#1a9fd4] cursor-pointer shadow-sm hover:shadow-xl"
                        >
                            {/* Icon Container */}
                            <div className="mb-12 text-gray-800 group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-lg group-hover:text-white/90 transition-colors duration-300">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}