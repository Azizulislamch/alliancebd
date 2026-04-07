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
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between flex-col lg:flex-row">

                    {/* Left Side: Title & Button */}
                    <div className="lg:w-1/2">
                        <span className="text-sm font-semibold text-gray-900 mb-4 block">Process</span>
                        <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            How we work
                        </h2>
                        <button className="px-8 py-3 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition shadow-sm">
                            Discuss
                        </button>
                    </div>

                    {/* Right Side: Steps with Vertical Line */}
                    <div className="lg:w-1/2 relative">
                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div key={index} className="relative flex items-start gap-8 group">

                                    {/* Vertical Line Logic */}
                                    {index !== steps.length - 1 && (
                                        <div className="absolute left-5.75 top-12 w-px h-[calc(100%+12px)] bg-gray-200"></div>
                                    )}

                                    {/* Icon Circle */}
                                    <div className="relative z-10 shrink-0 w-12 h-12 flex items-center justify-center bg-white border border-gray-100 rounded-md">
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="pt-2">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 text-lg max-w-md">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}