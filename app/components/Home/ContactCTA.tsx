import ctaBg from "../../assets/images/Banner.png";

export default function ContactCTA() {
    return (
        <section className="bg-white">
            <div className="mx-auto">
                <div
                    className="relative w-full overflow-hidden min-h-112.5 flex items-center justify-center text-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ctaBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {/* Inner Border Box */}
                    <div className="absolute inset-20 border border-white rounded-xl pointer-events-none"></div>

                    {/* Content */}
                    <div className="relative z-10 px-4">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Ready to start sourcing?
                        </h2>
                        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                            Let us handle your next apparel order from start to finish.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="px-10 py-3 bg-[#0099d4] hover:bg-[#0081b3] text-white font-semibold rounded-lg transition-colors min-w-40 cursor-pointer">
                                Contact
                            </button>
                            <button className="px-10 py-3 bg-white hover:bg-gray-300 text-[#0099d4] font-semibold rounded-lg transition-colors min-w-40 cursor-pointer">
                                Learn
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}