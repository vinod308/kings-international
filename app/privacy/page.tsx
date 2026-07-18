import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Kings International collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy."
        intro="Plain-English version: we collect the bare minimum to do good work, we never sell it, and you can ask us to forget you any time."
        image="/images/kings/manufacturing/tannery-hides.jpg"
        imageAlt="Kings International tannery, Kanpur"
      />

      <section className="bg-cream py-24 sm:py-32">
        <div className="container-site max-w-2xl mx-auto">
          <Reveal type="up">
            <p className="text-[12px] tracking-[0.1em] uppercase text-ink-soft/45 mb-10">Last updated: July 6, 2026</p>

            <div className="flex flex-col gap-10 text-[15.5px] leading-relaxed text-ink-soft">
              <div>
                <h2 className="font-display text-[22px] font-semibold text-ink mb-3">1. What we collect</h2>
                <p className="mb-3">
                  When you contact us through this site, we collect the information you choose to share - typically
                  your name, email, phone number, company, and a description of what you&apos;re sourcing. If you
                  place an order, we additionally collect billing details, invoice records, and production files
                  necessary to deliver the work.
                </p>
                <p>
                  We use basic analytics (Google Analytics or similar) to understand which pages get traffic. This
                  includes anonymised IP addresses, browser type, device type, and pages visited. We do not link this
                  data back to individual visitors.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[22px] font-semibold text-ink mb-3">2. How we use it</h2>
                <ul className="flex flex-col gap-2 list-disc pl-5">
                  <li>To reply to your enquiry and put together a proposal.</li>
                  <li>To manufacture and deliver the order we&apos;ve agreed to, and invoice for it.</li>
                  <li>To improve this website and our service.</li>
                  <li>Occasionally, to send you a relevant update about our products - only if you&apos;ve opted in.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-[22px] font-semibold text-ink mb-3">3. Who sees it</h2>
                <p>
                  Only the team working on your project, our accountants, and the cloud services we use to run the
                  business (Google Workspace, hosting providers, payment processors). We have NDAs with our
                  contractors and never sell, rent, or share your data with anyone for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[22px] font-semibold text-ink mb-3">4. How long we keep it</h2>
                <p>
                  Order and production files for as long as the engagement runs, plus seven years for tax records.
                  Newsletter subscribers until they unsubscribe. Enquiry emails up to two years if you don&apos;t
                  convert into an order.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[22px] font-semibold text-ink mb-3">5. Your rights</h2>
                <p>
                  You can ask us to show you everything we hold about you, correct it, or delete it entirely. Just
                  email{" "}
                  <a href="mailto:works@kings-international.net" className="text-green underline">
                    works@kings-international.net
                  </a>{" "}
                  with the subject line &ldquo;Data request&rdquo; and we&apos;ll act within 30 days.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[22px] font-semibold text-ink mb-3">6. Cookies</h2>
                <p>
                  We use functional cookies (for the site to work) and analytics cookies (to understand traffic). No
                  advertising cookies, no third-party trackers beyond standard analytics.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[22px] font-semibold text-ink mb-3">7. Contact</h2>
                <p>
                  Any questions about this policy, or about the data we hold on you, write to{" "}
                  <a href="mailto:works@kings-international.net" className="text-green underline">
                    works@kings-international.net
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-[var(--line)] flex flex-wrap gap-6">
              <Link href="/contact" className="text-[13px] font-semibold text-ink underline decoration-ink/30 hover:decoration-ink">
                Contact us →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
