function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  light = false,
  centered = false,
}) {
  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-2xl`}
    >
      {/* Eyebrow */}
      <div
        className={`mb-5 flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-10 bg-[#C9A45C]" />

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A45C]">
          {eyebrow}
        </p>

        {centered && (
          <span className="h-px w-10 bg-[#C9A45C]" />
        )}
      </div>

      {/* Title */}
      <h2
        className={`text-4xl font-light leading-tight tracking-tight sm:text-5xl ${
          light ? "text-white" : "text-[#0B1F3A]"
        }`}
      >
        {title}

        {highlight && (
          <>
            <br />
            <span className="font-semibold">{highlight}</span>
          </>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p
          className={`mt-5 text-sm leading-7 sm:text-base ${
            light ? "text-white/55" : "text-[#0B1F3A]/55"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;

