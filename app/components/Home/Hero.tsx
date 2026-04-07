import heroImg from "../../assets/images/Banner.png";

export default function Hero() {
    return (
        <section className="relative h-150 flex items-center justify-center text-white">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img
                src={heroImg}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Apparel Sourcing"
            />

            <div className="relative z-20 text-center max-w-3xl px-4">
                <h1 className="text-6xl font-bold mb-6 leading-tight">
                    Your trusted partner in apparel sourcing
                </h1>
                <p className="text-lg mb-5">
                    We connect international buyers with reliable manufacturers across Bangladesh. From product development to final shipment, we handle every detail with precision and care.
                </p>
                <div className="flex justify-center gap-4">
                    <button className="bg-cyan-500 hover:bg-cyan-600 cursor-pointer text-white px-8 py-3 rounded-sm uppercase text-sm font-bold transition">
                        Contact Us
                    </button>
                    <button className="bg-white hover:bg-cyan-100 cursor-pointer text-sky-500 px-8 py-3 rounded-sm uppercase text-sm font-bold transition">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}