import { Link } from "react-router-dom";
import aboutVideo from "../assets/about.mp4";

function About() {
    return (
        <section
            id="about"
            className="overflow-hidden bg-white px-6 py-24 lg:px-8 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">

                {/* Top Heading */}
                <div className="mb-16 max-w-3xl">

                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#C9A45C]" />

                        <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#C9A45C]">
                            About GolfDryClean
                        </span>
                    </div>

                    <h2 className="text-4xl font-light leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
                        More Than Cleaning.
                        <br />
                        <span className="font-semibold">
                            It's About Care.
                        </span>
                    </h2>

                </div>

                {/* Main Content */}
                <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

                    {/* Visual */}
                    <div className="relative">

                        <div className="relative aspect-[4/5] overflow-hidden bg-[#0B1F3A]">

                            {/* Replace this with your About video later */}
                            <div className="absolute inset-0 flex items-center justify-center">

                                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#16355D] to-[#071426]" />


                                {/* <div className="relative overflow-hidden">
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="h-[500px] w-full object-cover"
                                    >
                                        <source src={aboutVideo} type="video/mp4" />
                                    </video>

                                    <div className="absolute inset-0 bg-[#0B1F3A]/20" />

                                    <div className="absolute bottom-6 left-6 border border-[#C9A45C] bg-[#0B1F3A]/90 px-5 py-3">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A45C]">
                                            100% Care Focused
                                        </p>
                                    </div>
                                </div> */}
                                {/* video block */}
                                <div className="relative overflow-hidden">
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="h-[380px] w-full object-cover sm:h-[500px]"
                                    >
                                        <source src={aboutVideo} type="video/mp4" />
                                    </video>

                                    <div className="absolute inset-0 bg-[#0B1F3A]/20" />

                                    <div className="absolute bottom-4 left-4 border border-[#C9A45C] bg-[#0B1F3A]/90 px-4 py-3 sm:bottom-6 sm:left-6 sm:px-5 sm:py-3">
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C9A45C] sm:text-xs sm:tracking-[0.2em]">
                                            100% Care Focused
                                        </p>
                                    </div>
                                </div>

                            </div>


                            {/* Gold Frame */}
                            <div className="pointer-events-none absolute inset-5 border border-[#C9A45C]/30" />

                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 right-0 bg-[#C9A45C] px-7 py-5 sm:right-6">

                            <p className="text-3xl font-semibold text-[#0B1F3A]">
                                100%
                            </p>

                            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0B1F3A]/70">
                                Care Focused
                            </p>

                        </div>

                    </div>

                    {/* Content */}
                    <div className="lg:pl-8">

                        <p className="text-lg leading-8 text-[#0B1F3A]/70">
                            At <span className="font-semibold text-[#0B1F3A]">GolfDryClean</span>,
                            we believe clothing deserves more than just cleaning.
                            Every fabric has its own character, and every garment deserves
                            the right treatment.
                        </p>

                        <p className="mt-6 text-sm leading-7 text-[#0B1F3A]/55">
                            From everyday wear to your most delicate outfits, our approach
                            combines careful inspection, professional cleaning processes
                            and attention to detail to help your clothes look and feel their
                            best.
                        </p>

                        {/* Values */}
                        <div className="mt-10 grid gap-6 sm:grid-cols-2">

                            <div className="border-l-2 border-[#C9A45C] pl-5">
                                <h3 className="text-sm font-semibold">
                                    Fabric First
                                </h3>

                                <p className="mt-2 text-xs leading-5 text-[#0B1F3A]/50">
                                    The right care for every fabric and garment.
                                </p>
                            </div>

                            <div className="border-l-2 border-[#C9A45C] pl-5">
                                <h3 className="text-sm font-semibold">
                                    Quality Focused
                                </h3>

                                <p className="mt-2 text-xs leading-5 text-[#0B1F3A]/50">
                                    Careful handling and quality checks at every stage.
                                </p>
                            </div>

                            <div className="border-l-2 border-[#C9A45C] pl-5">
                                <h3 className="text-sm font-semibold">
                                    Hygienic Process
                                </h3>

                                <p className="mt-2 text-xs leading-5 text-[#0B1F3A]/50">
                                    Clean, professional and responsible garment care.
                                </p>
                            </div>

                            <div className="border-l-2 border-[#C9A45C] pl-5">
                                <h3 className="text-sm font-semibold">
                                    Doorstep Convenience
                                </h3>

                                <p className="mt-2 text-xs leading-5 text-[#0B1F3A]/50">
                                    Pickup and delivery designed around your schedule.
                                </p>
                            </div>

                        </div>

                        {/* CTA */}
                        <div className="mt-10">

                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-3 border border-[#0B1F3A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[#0B1F3A] transition-all duration-300 hover:bg-[#0B1F3A] hover:text-white"
                            >
                                Discover More

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;