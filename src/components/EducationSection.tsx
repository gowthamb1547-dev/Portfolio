import { GraduationCap, BadgeCheck } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="pt-12 pb-12 bg-black defer-visibility">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center">
          <h2 className="section-heading text-fluid-h2 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]">Education</h2>
          <div className="section-underline mx-auto mt-3 mb-8" />
        </div>

        {/* Degree and Certification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <div className="glass-card bg-black/40 border border-white/10 rounded-xl p-6 transition duration-500 card-hover opacity-100 translate-y-0">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-white/10 ring-1 ring-white/20 grid place-items-center">
                <GraduationCap className="w-6 h-6 text-sky-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Bachelor of Computer Applications</h3>
                <p className="text-sm text-white/70">Bengaluru North University • 2022 – 2025</p>
              </div>
            </div>
          </div>
          <div className="glass-card bg-black/40 border border-white/10 rounded-xl p-6 transition duration-500 card-hover opacity-100 translate-y-0">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-white/10 ring-1 ring-white/20 grid place-items-center">
                <BadgeCheck className="w-6 h-6 text-violet-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">FULL STACK DEVELOPMENT</h3>
                <p className="text-sm text-white/70">2025</p>
              </div>
            </div>
          </div>
        </div>

        {/* Internships */}
        <div className="space-y-6">
          <h3 className="text-lg md:text-xl text-white">Internships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card bg-black/40 border border-white/10 rounded-xl p-6 transition duration-500 hover:shadow-[0_0_22px_rgba(59,130,246,0.25)] hover:border-blue-400/40">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-white/10 ring-1 ring-white/20" />
                <div>
                <h4 className="text-white">FRONT END DEVELOPER • Rats Technologies</h4>
                  <p className="text-xs text-white/60">3 Jan 2025 – 7 Feb 2025</p>
                  <p className="text-sm text-white/70 mt-1">Developed responsive web interfaces and contributed to MERN-based features, enhancing overall project efficiency.</p>
                </div>
              </div>
            </div>
          </div> {/* <-- Closed the grid div properly */}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
