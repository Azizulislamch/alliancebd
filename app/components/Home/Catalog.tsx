import { motion } from "framer-motion";
import { Shirt, Scissors, Layers, Boxes } from "lucide-react";
import catalogImg from "../../assets/images/Placeholder.png";

const catalogItems = [
    {
        title: "Knitwear",
        description: "Sweaters, t-shirts, and knit garments made to order.",
        icon: <Shirt className="w-6 h-6 text-cyan-600" />,
    },
    {
        title: "Denim and heavy fabrics",
        description: "Durable denim and canvas for pants and jackets.",
        icon: <Layers className="w-6 h-6 text-cyan-600" />,
    },
    {
        title: "Woven fabrics",
        description: "Cotton, blends, and specialty woven materials in stock.",
        icon: <Scissors className="w-6 h-6 text-cyan-600" />,
    },
    {
        title: "Accessories and trims",
        description: "Buttons, zippers, labels, and finishing materials available.",
        icon: <Boxes className="w-6 h-6 text-cyan-600" />,
    },
];

export default function Catalog() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <img
                            src={catalogImg}
                            alt="Clothing Catalog"
                            className="w-full h-125 object-cover rounded-2xl shadow-sm"
                        />
                    </motion.div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-sm font-semibold text-gray-900 mb-4 block">Catalog</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Products and services
                            </h2>
                            <p className="text-gray-600 text-lg mb-12 max-w-xl">
                                We source and manage everything you need for apparel production. From raw materials to finished goods, we handle it all.
                            </p>
                        </motion.div>

                        {/* Catalog Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
                            {catalogItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex flex-col gap-3"
                                >
                                    <div className="flex items-center gap-3">
                                        {item.icon}
                                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 px-10 py-3 border border-gray-200 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition shadow-sm"
                        >
                            Browse
                        </motion.button>
                    </div>

                </div>
            </div>
        </section>
    );
}