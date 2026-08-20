import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | Hugo",
  description: "Legal notice and provider identification for hugo.coach.",
};

export default function Impressum() {
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
          Imprint
        </p>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            Information pursuant to § 5 DDG
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            Hugo Suidman
            <br />
            Elisabethkirchstraße 17
            <br />
            10115 Berlin
            <br />
            Germany
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            Contact
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            Email:{" "}
            <a
              href="mailto:hugo@forchiefs.com"
              className="underline underline-offset-4 transition-colors hover:text-[#012c3f]"
            >
              hugo@forchiefs.com
            </a>
            <br />
            Website:{" "}
            <a
              href="https://hugo.coach"
              className="underline underline-offset-4 transition-colors hover:text-[#012c3f]"
            >
              hugo.coach
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            VAT Identification Number
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            VAT identification number pursuant to § 27 a of the German Value
            Added Tax Act (Umsatzsteuergesetz):
            <br />
            DE299005653
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            Responsible for the content pursuant to § 18 (2) MStV
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            Hugo Suidman
            <br />
            Elisabethkirchstraße 17
            <br />
            10115 Berlin
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            Dispute Resolution
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            We are neither willing nor obliged to participate in dispute
            resolution proceedings before a consumer arbitration board.
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
