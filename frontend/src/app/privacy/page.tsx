import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Hugo",
  description: "Privacy policy (Datenschutzerklärung) for hugo.coach.",
};

export default function Privacy() {
  return (
    <main className="w-full bg-[#f6f3f1]">
      <section className="mx-auto flex max-w-[800px] flex-col gap-10 px-6 pb-[80px] pt-[120px] lg:pb-[120px] lg:pt-[180px]">
        <Link
          href="/"
          className="text-[15px] leading-[1.3] text-[#94857a] transition-opacity hover:opacity-70"
        >
          ← Back to homepage
        </Link>

        <p className="text-[48px] font-bold leading-[1.1] text-[#012c3f] lg:text-[64px]">
          Privacy Policy
        </p>

        <p className="text-[18px] leading-[1.5] text-[#65564a]">
          Information on the processing of personal data pursuant to Art. 13 and
          Art. 14 of the General Data Protection Regulation (Datenschutz-Grundverordnung,
          DSGVO).
        </p>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            Controller
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            The controller within the meaning of Art. 4 (7) DSGVO is:
            <br />
            <br />
            Hugo Suidman
            <br />
            Elisabethkirchstraße 17
            <br />
            10115 Berlin
            <br />
            Germany
            <br />
            <br />
            Email:{" "}
            <a
              href="mailto:hugo@forchiefs.com"
              className="underline underline-offset-4 transition-colors hover:text-[#012c3f]"
            >
              hugo@forchiefs.com
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            No cookies, no tracking, no analytics
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            This website does not set cookies. It does not store any information
            on your device and does not read any information from it beyond what
            is technically necessary to deliver the pages you request.
            <br />
            <br />
            We use no web analytics, no tracking pixels, no advertising networks
            and no user profiling. No third-party scripts are loaded. Because
            nothing requiring consent is stored on or read from your device, no
            consent banner is displayed (§ 25 (2) TDDDG).
            <br />
            <br />
            The fonts used on this site are served from our own server. No
            connection to Google Fonts or any other external font provider is
            established when you visit this website.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            Hosting and server log files
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            This website is hosted by Vercel Inc., United States
            (&ldquo;Vercel&rdquo;). When you visit this website, your browser
            automatically transmits technical information which Vercel records
            in server log files. This typically includes:
            <br />
            <br />
            – your IP address
            <br />
            – date and time of the request
            <br />
            – the page or file requested
            <br />
            – the referring website, if any
            <br />
            – browser type, browser version and operating system
            <br />
            <br />
            This data is required to deliver the website, to keep it stable and
            to detect and defend against attacks. It is not merged with other
            data sources and is not used to identify you as a person. The legal
            basis is Art. 6 (1) (f) DSGVO; our legitimate interest lies in the
            secure and reliable operation of this website. Log data is stored
            for a limited period and then deleted.
            <br />
            <br />
            Vercel processes this data on our behalf as a processor under Art.
            28 DSGVO. Processing may take place on servers in the United States.
            Appropriate safeguards for such transfers are in place pursuant to
            Art. 44 et seq. DSGVO. Further information:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-[#012c3f]"
            >
              vercel.com/legal/privacy-policy
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            Contacting us by email
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            If you contact us by email, the data you provide (your email
            address, your name and the content of your message) is stored in
            order to process your enquiry and to answer follow-up questions. The
            legal basis is Art. 6 (1) (b) DSGVO where your message relates to
            the performance or initiation of a contract, otherwise Art. 6 (1)
            (f) DSGVO. We delete this data once it is no longer required, unless
            statutory retention obligations apply.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            External links and forms
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            This website contains links to external websites, including a
            contact form hosted on Google Forms. No data is transmitted to those
            providers merely by visiting this website. A connection is only
            established once you actively follow such a link.
            <br />
            <br />
            If you use the Google Form, the data you enter is processed by
            Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
            Ireland, and the privacy policy of Google applies to that
            processing. We have no influence on the content or data processing
            of external websites.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            Your rights
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            You have the following rights regarding your personal data:
            <br />
            <br />
            – right of access (Art. 15 DSGVO)
            <br />
            – right to rectification (Art. 16 DSGVO)
            <br />
            – right to erasure (Art. 17 DSGVO)
            <br />
            – right to restriction of processing (Art. 18 DSGVO)
            <br />
            – right to data portability (Art. 20 DSGVO)
            <br />
            – right to object to processing based on Art. 6 (1) (f) DSGVO (Art.
            21 DSGVO)
            <br />
            <br />
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:hugo@forchiefs.com"
              className="underline underline-offset-4 transition-colors hover:text-[#012c3f]"
            >
              hugo@forchiefs.com
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            Right to lodge a complaint
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            You have the right to lodge a complaint with a supervisory
            authority, in particular in the member state of your residence,
            place of work or the place of the alleged infringement. The
            authority responsible for the controller is:
            <br />
            <br />
            Berliner Beauftragte für Datenschutz und Informationsfreiheit
            <br />
            Alt-Moabit 59–61
            <br />
            10555 Berlin
            <br />
            Germany
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            Changes to this privacy policy
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            We update this privacy policy whenever changes to this website make
            it necessary, for example if analytics, embedded media or other
            third-party services are added in future.
            <br />
            <br />
            Last updated: 20 August 2026
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="px-6 pb-[40px] pt-0 text-center lg:pb-[80px]">
        <p className="text-[15px] leading-[1.3] text-[#94857a]">
          Copyright {new Date().getFullYear()}, All Rights Reserved
        </p>
        <p className="mt-2 text-[15px] leading-[1.3] text-[#94857a]">
          <Link
            href="/impressum"
            className="underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Imprint
          </Link>
          <span className="px-2">·</span>
          <Link
            href="/privacy"
            className="underline underline-offset-4 transition-opacity hover:opacity-70"
          >
            Privacy Policy
          </Link>
        </p>
      </footer>
    </main>
  );
}
