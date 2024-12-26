// pages/index.js
import Navigation from '@/app/components/Navigation'
import HackhouseSection from '@/app/components/HackhouseSection'

export default function LandingPage() {
  return (
    <main className="
      h-auto w-full overflow-y-auto
      md:h-screen md:overflow-y-scroll
      md:snap-y md:snap-mandatory
    ">

      {/* ===================== FIRST SECTION ===================== */}
      <section
        className="
          relative w-full
          h-auto md:h-screen
          bg-[#FAFAFA] text-black
          px-6 md:px-40
          snap-none md:snap-start
        "
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-70 z-0" />
        
        <Navigation />

        <div className="flex flex-col h-full relative z-10">
          {/* Top section with title */}
          <div className="flex-1 pt-12 md:pt-32">
            <div className="relative">
              {/* For mobile, shrink text size; for desktop keep text-9xl */}
              <h1 className="
                text-5xl md:text-9xl
                font-bold leading-none
              ">
                Turing&apos;s<br />
                Dream
              </h1>
              <p
                className="
                  text-lg md:text-3xl font-light
                  mt-6 md:mt-0
                  md:absolute
                  md:top-[170px]
                  md:left-[450px]
                "
              >
                Six-week Residency for<br />
                Programmers to Explore AI deeply
              </p>
            </div>
          </div>

          {/* Bottom section with status and apply now */}
          <div className="
            flex flex-col md:flex-row 
            justify-between 
            items-start md:items-end 
            pb-16 md:pb-32 2xl:pb-48
            gap-12 md:gap-8
          ">
            <div>
              <h2 className="text-2xl md:text-4xl mt-8 md:mt-0">Current status:</h2>
              <ul className="mt-4 md:mt-6 space-y-2 md:space-y-3 text-lg md:text-2xl">
                <li>
                  • Batch 3 starting Jan &apos;25 (
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdPPWvrLZ0fF1ok--3tj6SsDyfhhgtw1q4p_NKQK_uH8WGPFA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    applications open
                  </a>
                  )
                </li>
                <li>• Batch 2 (over)</li>
                <li>• Batch 1 (over)</li>
              </ul>
            </div>

            <div className="text-left md:text-right">
              <p className="text-lg md:text-2xl">
                Are you interested in learning from and <br className="hidden md:block" />
                collaborating with a group of smart, driven <br className="hidden md:block" />
                peers who&apos;re deep into AI like you?
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdPPWvrLZ0fF1ok--3tj6SsDyfhhgtw1q4p_NKQK_uH8WGPFA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block mt-4 md:mt-8
                  px-6 md:px-8
                  py-3 md:py-4
                  bg-black
                  text-white
                  rounded-lg
                  text-lg md:text-2xl
                "
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PROGRAM OVERVIEW SECTION ===================== */}
      <section
        id="program-overview"
        className="
          relative w-full
          h-auto md:h-screen
          bg-black text-white
          px-6 md:px-40
          py-12 2xl:py-24
          snap-none md:snap-start
        "
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-7xl mb-12 md:mb-24">Program Overview</h2>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-24">
            <div className="flex items-baseline">
              <span className="text-7xl md:text-[200px] font-bold leading-none">6</span>
              <span className="text-4xl md:text-8xl font-bold ml-4 md:ml-8">Weeks</span>
            </div>

            <div className="space-y-2 md:space-y-6 text-xl md:text-3xl">
              <p>explore AI deeply</p>
              <p>collaborate with peers</p>
              <p>develop groundbreaking projects</p>
            </div>
          </div>

          <div className="mt-12 md:mt-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="flex items-start gap-4">
              <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z"/>
              </svg>
              <div className="text-xl md:text-3xl">
                <div>Indiranagar,</div>
                <div>Bangalore</div>
              </div>
            </div>

            <div className="max-w-xl text-left md:text-right">
              <h3 className="text-xl md:text-3xl font-medium mb-2 md:mb-4">
                We strongly encourage in-person attendance
              </h3>
              <p className="text-base md:text-xl opacity-80 leading-relaxed">
                as serendipitous cross-field learning and collaboration becomes
                difficult in remote. (This is why we don&apos;t accept online-only attendance.
                You must commit to be in the hackhouse at least a few days in a week)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== BENEFITS SECTION ===================== */}
      <section
        className="
          relative w-full
          h-auto md:h-screen
          bg-[#FAFAFA]
          text-black
          px-6 md:px-40
          py-8 2xl:py-24
          snap-none md:snap-start
        "
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-70 z-0" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-7xl mb-12 md:mb-24">What do I get from the residency?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
            {/* Card 1 */}
            <div className="bg-[#E5E5E5] p-8 md:p-10 rounded-xl max-w-full md:max-w-[350px] lg:max-w-[400px]">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                Focused<br />Learning
              </h3>
              <p className="text-base md:text-xl">
                Six weeks of uninterrupted time to dive into your AI passions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#E5E5E5] p-8 md:p-10 rounded-xl max-w-full md:max-w-[350px] lg:max-w-[400px]">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                Cross-disciplinary<br />Collaboration
              </h3>
              <p className="text-base md:text-xl">
                Collaborate with experts across AI subfields.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#E5E5E5] p-8 md:p-10 rounded-xl max-w-full md:max-w-[350px] lg:max-w-[400px]">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                Inspiring<br />workspace
              </h3>
              <p className="text-base md:text-xl">
                Work from our hackhouse in Indiranagar, Bangalore.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-[#E5E5E5] p-8 md:p-10 rounded-xl max-w-full md:max-w-[350px] lg:max-w-[400px]">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                Free Cloud<br />GPUs
              </h3>
              <p className="text-base md:text-xl">
                Up to $2500 in resources, including H100s when available.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-[#E5E5E5] p-8 md:p-10 rounded-xl max-w-full md:max-w-[350px] lg:max-w-[400px]">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                Lifelong<br />community
              </h3>
              <p className="text-base md:text-xl">
                Be part of an exclusive network of AI pioneers.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-[#E5E5E5] p-8 md:p-10 rounded-xl max-w-full md:max-w-[350px] lg:max-w-[400px]">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
                Expert drop-ins
              </h3>
              <p className="text-base md:text-xl">
                Regular visits from researchers and hackers at <a href="https://nirantk.com/community/" target="_blank" rel="noopener noreferrer" className="underline">IISc Bangalore</a>,
                the <a href="https://nirantk.com/community/" target="_blank" rel="noopener noreferrer" className="underline">GenAI Bangalore community</a>, and the <a href="https://fifthelephant.in/" target="_blank" rel="noopener noreferrer" className="underline">Fifth Elephant community</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHO SHOULD APPLY ===================== */}
      <section
        className="
          relative w-full
          h-auto md:h-screen
          bg-black
          text-white
          px-6 md:px-40
          py-12 md:py-24
          snap-none md:snap-start
        "
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-7xl mb-12 md:mb-24">Who Should Apply?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h3 className="text-2xl md:text-5xl mb-6 md:mb-12">This is for you if:</h3>
              <ul className="space-y-4 md:space-y-6 text-base md:text-2xl">
                <li>
                  • You&apos;re an AI coder or researcher with intermediate to advanced knowledge.
                </li>
                <li>
                  • You&apos;re passionate about AI and willing to commit six weeks to your project.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl md:text-5xl mb-6 md:mb-12">This isn&apos;t for you if:</h3>
              <ul className="space-y-4 md:space-y-6 text-base md:text-2xl">
                <li>
                  • You&apos;re building wrappers on existing APIs or are looking for a tangible outcome
                    like a co-founder.
                </li>
                <li>
                  • This is NOT a startup accelerator or a co-founder matching program.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOUNDER SECTION ===================== */}
      <section
        id="founder"
        className="
          relative w-full
          h-auto md:h-screen
          bg-[#FAFAFA]
          text-black
          px-6 md:px-40
          py-12 md:py-24
          snap-none md:snap-start
        "
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-70 z-0" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-7xl mb-12 md:mb-24">Meet the Founder</h2>

          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
            <div className="w-full md:w-72 h-60 md:h-72 rounded-lg overflow-hidden bg-[#E5E5E5]">
              <img
                src="/images/paras.jpg"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl md:text-5xl mb-2 md:mb-4">Paras Chopra</h3>
              <p className="text-lg md:text-2xl text-gray-600 mb-4 md:mb-8">
                Founder of Wingify, AI Pioneer & Turing&apos;s Dream
              </p>

              <p className="text-base md:text-2xl leading-relaxed">
                He&apos;s a programmer and entrepreneur who&apos;s been working on AI for the last 20 years
                (<a
                  href="https://github.com/Planet-Source-Code/paras-chopra-neural-networks-understanding-using-visual-basic-download-tutorial__1-55011"
                  className="underline"
                >
                  he wrote his first Neural Network 20 years ago
                </a>{" "}
                in Visual Basic :)). He&apos;s also the founder of{" "}
                <a href="https://wingify.com/" className="underline">
                  Wingify
                </a>, a software company that makes{" "}
                <a href="https://vwo.com/" className="underline">
                  VWO
                </a>.
              </p>

              <div className="flex gap-4 mt-6">
                <a href="https://x.com/paraschopra/" className="hover:opacity-80">
                  <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HACKHOUSE GALLERY SECTION ===================== */}
      <HackhouseSection />

      {/* ===================== FAQ SECTION - PART 1 ===================== */}
      <section
        id="faq"
        className="
          relative
          w-full
          h-auto md:h-screen
          bg-black
          text-white
          px-6 md:px-40
          py-12 md:py-24
          snap-none md:snap-start
        "
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-7xl mb-12 md:mb-24">FAQ</h2>

          <div className="space-y-8 md:space-y-16">
            <div>
              <h3 className="text-2xl md:text-4xl mb-4 md:mb-6">What&apos;s the deal?</h3>
              <p className="text-base md:text-2xl leading-relaxed">
                When you join Turing&apos;s Dream, you begin with a six-week residency
                where you build your AI projects. Post that, you become a
                permanent member of an exclusive community comprising all
                previous and current residents of the hackhouse.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-4xl mb-4 md:mb-6">What&apos;s not included?</h3>
              <p className="text-base md:text-2xl leading-relaxed">
                Residency is a self-driven program. So while we provide some
                structure (like daily checkins or weekly huddles), there&apos;s no
                mentorship or a top-down directive. The six-weeks is what you
                make of it.
                <br />
                <br />
                Also, there&apos;s no stipend! No housing or co-living or food
                included. Think of the residency as an unpaid sabbatical. You
                work on your own projects!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ SECTION - PART 2 ===================== */}
      <section
        className="
          relative
          w-full
          h-auto md:h-screen
          bg-black
          text-white
          px-6 md:px-40
          py-12 md:py-24
          snap-none md:snap-start
        "
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />

        <div className="relative z-10">
          <div className="space-y-8 md:space-y-16">
            <div>
              <h3 className="text-2xl md:text-4xl mb-4 md:mb-6">
                What kind of projects can I work on?
              </h3>
              <p className="text-base md:text-2xl leading-relaxed">
                Anything related to AI. Implement a new technique. Train a new
                model from scratch. Benchmark something. Learn and explore an
                obscure idea. Research something new. Build a tool. Hack
                something for fun :)
                <br />
                <br />
                We encourage you to open source the code you end up writing
                during the residency.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-4xl mb-4 md:mb-6">
                Do I need to have a good understanding of AI before applying?
              </h3>
              <p className="text-base md:text-2xl leading-relaxed">
                Yes. We expect you to have an intermediate to advanced
                understanding of one or more domains of AI. You should be able
                to code and have a deep interest in AI. This program is not for
                beginners, but if you&apos;re not sure, you can{" "}
                <a href="#apply" className="underline">
                  apply
                </a>{" "}
                and we&apos;ll evaluate your application.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-4xl mb-4 md:mb-6">I have more questions</h3>
              <p className="text-base md:text-2xl leading-relaxed">
                DM{" "}
                <a href="https://twitter.com/paraschopra" className="underline">
                  @paraschopra on X
                </a>{" "}
                or send them here:{" "}
                <a href="https://superdm.me/paras" className="underline">
                  superdm.me/paras
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER SECTION ===================== */}
      <section
        className="
          relative
          w-full
          h-auto md:h-screen
          bg-black
          text-white
          px-6 md:px-40
          py-12 md:py-24
          snap-none md:snap-start
        "
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />

        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Logo */}
          <h1 className="
            text-6xl md:text-[200px]
            font-bold leading-none
          ">
            Turing&apos;s
            <br />
            Dream
          </h1>

          {/* Bottom content */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-8 md:mt-0">
            {/* Left side - Partners */}
            <div>
              <h2 className="text-3xl md:text-7xl mb-4 md:mb-8">Partners</h2>
              <div className="space-y-2 md:space-y-4 text-base md:text-2xl">
                <p>
                  Cloud GPU Partners:{" "}
                  <a
                    href="https://e2enetworks.com"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    E2ENetworks
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://modal.com"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Modal
                  </a>
                </p>
                <p>
                  Want to partner? Contact me:{" "}
                  <a
                    href="https://superdm.me/paras"
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    superdm.me/paras
                  </a>
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                <a href="https://x.com/paraschopra" className="hover:opacity-80">
                  <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right side - Navigation */}
            <div className="text-right w-full md:w-auto space-y-4 md:space-y-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdPPWvrLZ0fF1ok--3tj6SsDyfhhgtw1q4p_NKQK_uH8WGPFA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-2xl md:text-5xl hover:underline"
              >
                Apply
              </a>
              <a
                href="#program-overview"
                className="block text-2xl md:text-5xl hover:underline"
              >
                About
              </a>
              <a
                href="#faq"
                className="block text-2xl md:text-5xl hover:underline"
              >
                FAQ
              </a>
              <a
                href="/archive"
                className="block text-2xl md:text-5xl hover:underline"
              >
                Archive
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
