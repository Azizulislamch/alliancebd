import { motion } from "framer-motion";
import { Factory, Settings, Wrench, Cpu, Zap } from "lucide-react";
import factoryImg from "../../assets/images/machine.png";

const capabilities = [
    {
        title: "Garment production support",
        desc: "Full-scale manufacturing with quality control at each stage.",
        icon: <Settings className="w-5 h-5" />,
    },
    {
        title: "Maintenance and technical support",
        desc: "Our team keeps machines running smoothly year-round.",
        icon: <Wrench className="w-5 h-5" />,
    },
    {
        title: "Machinery supply and installation",
        desc: "We source and install equipment tailored to your needs.",
        icon: <Cpu className="w-5 h-5" />,
    },
    {
        title: "Production optimization",
        desc: "We improve efficiency and reduce waste on every line.",
        icon: <Zap className="w-5 h-5" />,
    },
];

export default function FactoryCapabilities() {
    return (
        <section className="py-24 bg-[#F9EBE0]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Side: Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="mb-8">
                                <Factory className="w-12 h-12 text-orange-600" />
                            </div>
                            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Factory and machinery capabilities
                            </h2>
                            <p className="text-gray-700 text-lg mb-12 leading-relaxed max-w-xl">
                                We work with modern facilities equipped for precision production.
                                Our network includes mills and factories with the latest technology.
                            </p>
                        </motion.div>

                        {/* Grid for Capabilities */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-12">
                            {capabilities.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="flex items-center gap-3 mb-3 text-orange-600">
                                        {item.icon}
                                        <h3 className="font-bold text-gray-900 text-lg leading-tight">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-3 bg-white border border-gray-200 rounded-lg font-bold text-gray-900 shadow-sm hover:bg-gray-100 transition cursor-pointer"
                        >
                            Details
                        </motion.button>
                    </div>

                    {/* Right Side: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-1/2"
                    >
                        <img
                            src={factoryImg}
                            alt="Industrial machinery"
                            className="w-full h-150 object-cover rounded-xl shadow-lg"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}