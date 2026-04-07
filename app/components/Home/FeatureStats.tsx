// app/components/home/Features.tsx
import { ShieldCheck, Leaf, Clock, Globe } from "lucide-react";

const features = [
    {
        title: "Quality assurance",
        description: "Strict quality control procedures at every stage of production.",
        icon: <ShieldCheck className="w-10 h-10 text-gray-400" />,
    },
    {
        title: "Ethical sourcing",
        description: "We adhere to fair labor practices and environmental standards.",
        icon: <Leaf className="w-10 h-10 text-gray-400" />,
    },
    {
        title: "On-time delivery",
        description: "Efficient logistics management ensuring your orders arrive on schedule.",
        icon: <Clock className="w-10 h-10 text-gray-400" />,
    },
    {
        title: "Global network",
        description: "Access to a wide range of manufacturers across various regions.",
        icon: <Globe className="w-10 h-10 text-gray-400" />,
    },
];

export default function Features() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title Section */}
                <div className="text-center mb-16">
                    <p className="mb-4 text-gray-900 font-bold">Why</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        What sets us apart
                    </h2>
                    <p className="mb-4 text-gray-900 my-4">We stand behind every garment</p>
                    {/* <div className="w-20 h-1 bg-cyan-500 mx-auto mt-4"></div> */}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:bg-gray-100 flex flex-col items-start"
                        >
                            <div className="mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}