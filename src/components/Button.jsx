function Button({
    children,
    href,
    type = "button",
    variant = "primary",
    className = "",
}) {
    const baseStyles =
        "group inline-flex items-center justify-center gap-3 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300";

    const variants = {
        primary:
            "bg-[#C9A45C] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white",

        secondary:
            "border border-[#0B1F3A]/20 bg-transparent text-[#0B1F3A] hover:border-[#C9A45C] hover:bg-[#C9A45C]",

        dark:
            "bg-[#0B1F3A] text-white hover:bg-[#C9A45C] hover:text-[#0B1F3A]",

        outline:
            "border border-white/30 text-white hover:border-[#C9A45C] hover:bg-white/10",
    };

    const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={buttonClass}>
                {children}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                </span>
            </a>
        );
    }

    return (
        <button type={type} className={buttonClass}>
            {children}

            <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
            </span>
        </button>
    );
}

export default Button;
