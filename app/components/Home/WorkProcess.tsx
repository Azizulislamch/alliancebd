import { motion } from "framer-motion";
import { NotebookPen, Handshake, ShoppingCart, Award } from "lucide-react";

const steps = [
    {
        title: "Consultation",
        description: "We listen to your needs and understand your specifications",
        icon: <NotebookPen className="w-6 h-6 text-orange-500" />,
    },
    {
        title: "Supplier match",
        description: "We match you with manufacturers who meet your standards",
        icon: <Handshake className="w-6 h-6 text-orange-500" />,
    },
    {
        title: "Order management",
        description: "We negotiate terms and oversee production from start to finish",
        icon: <ShoppingCart className="w-6 h-6 text-orange-500" />,
    },
    {
        title: "Quality check",
        description: "Every batch is tested against your specifications and standards",
        icon: <Award className="w-6 h-6 text-orange-500" />,
    },
];

export default function WorkProcess() {
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // For every step
    const itemVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between flex-col lg:flex-row gap-12 lg:gap-0">

                    {/* Left Side: Title & Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <span className="text-sm font-semibold text-gray-900 mb-4 block">Process</span>
                        <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            How we work
                        </h2>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition shadow-sm"
                        >
                            Discuss
                        </motion.button>
                    </motion.div>

                    {/* Right Side: Steps with Vertical Line */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative flex items-start gap-8 group"
                                >
                                    {/* Vertical Line Logic */}
                                    {index !== steps.length - 1 && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            whileInView={{ height: "100%" }}
                                            transition={{ duration: 0.8, delay: index * 0.2 }}
                                            className="absolute left-5.75 top-12 w-px bg-gray-200 origin-top"
                                        ></motion.div>
                                    )}

                                    {/* Icon Circle */}
                                    <motion.div
                                        whileInView={{ scale: [0, 1.2, 1] }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                        className="relative z-10 shrink-0 w-12 h-12 flex items-center justify-center bg-white border border-gray-100 rounded-md shadow-sm"
                                    >
                                        {step.icon}
                                    </motion.div>

                                    {/* Content */}
                                    <div className="pt-2">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 text-lg max-w-md">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}