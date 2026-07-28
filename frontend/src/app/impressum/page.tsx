import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Hugo",
  description: "Impressum und Anbieterkennzeichnung von hugo.coach.",
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
          Impressum
        </p>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            Angaben gemäß § 5 DDG
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            Hugo Suidman
            <br />
            [Straße und Hausnummer]
            <br />
            [PLZ und Ort]
            <br />
            [Land]
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            Kontakt
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            Telefon: [Telefonnummer]
            <br />
            E-Mail: [E-Mail-Adresse]
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            Umsatzsteuer-Identifikationsnummer
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            [USt-IdNr.]
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            Hugo Suidman
            <br />
            [Straße und Hausnummer]
            <br />
            [PLZ und Ort]
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[24px] font-bold leading-[1.2] text-[#0074b3]">
            Streitschlichtung
          </p>
          <p className="text-[18px] leading-[1.5] text-[#65564a]">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
            vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="px-6 pb-[40px] pt-0 text-center lg:pb-[80px]">
        <p className="text-[15px] leading-[1.3] text-[#94857a]">
          Copyright {new Date().getFullYear()}, All Rights Reserved
        </p>
        <Link
          href="/impressum"
          className="mt-2 inline-block text-[15px] leading-[1.3] text-[#94857a] underline underline-offset-4 transition-opacity hover:opacity-70"
        >
          Impressum
        </Link>
      </footer>
    </main>
  );
}
