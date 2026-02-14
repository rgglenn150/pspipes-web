import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | PSPIPES",
  description: "Terms of service for pspipes.net and Motoclub Connect.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-slate-400 text-sm mb-10">Last updated: February 15, 2026</p>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using pspipes.net or the Motoclub Connect application
              (&quot;Services&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;).
              If you do not agree to these Terms, please do not use the Services. These Terms apply
              to all visitors, users, and others who access or use the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Description of Services</h2>
            <p>
              PSPIPES provides a personal portfolio website and the Motoclub Connect platform — a
              mobile and web application for motorcycle clubs to manage memberships, events, and
              community communication. Features include club creation, event management, member
              profiles, and location-based services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Eligibility</h2>
            <p>
              You must be at least 13 years of age to use the Services. By using the Services, you
              represent and warrant that you meet this age requirement and that you have the legal
              capacity to enter into these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. User Accounts</h2>
            <p className="mb-3">
              When you create an account with us, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>Provide accurate, complete, and current registration information</li>
              <li>Maintain the security of your password and account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorised use of your account</li>
            </ul>
            <p className="mt-3">
              We reserve the right to suspend or terminate accounts that violate these Terms or that
              have been inactive for an extended period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. User-Generated Content</h2>
            <p className="mb-3">
              You retain ownership of any content you submit, post, or display through the Services
              (&quot;User Content&quot;). By submitting User Content, you grant PSPIPES a non-exclusive,
              worldwide, royalty-free licence to use, display, and distribute that content solely
              for the purpose of operating and improving the Services.
            </p>
            <p>You are solely responsible for your User Content and agree not to post content that:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 mt-3">
              <li>Is unlawful, harmful, threatening, abusive, or harassing</li>
              <li>Infringes any intellectual property or privacy rights of others</li>
              <li>Contains viruses, malware, or other harmful code</li>
              <li>Is false, misleading, or deceptive</li>
              <li>Promotes illegal activities or violates any applicable law</li>
            </ul>
            <p className="mt-3">
              We reserve the right to remove any User Content that violates these Terms without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>Use the Services for any unlawful purpose or in violation of these Terms</li>
              <li>Attempt to gain unauthorised access to any part of the Services or related systems</li>
              <li>Scrape, crawl, or otherwise harvest data from the Services without permission</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Impersonate any person or entity, or falsely represent your affiliation</li>
              <li>Use the Services to send unsolicited communications (spam)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Intellectual Property</h2>
            <p>
              All content, design, code, and materials on pspipes.net and within the Motoclub
              Connect application — excluding User Content — are owned by or licensed to PSPIPES
              and are protected by applicable intellectual property laws. You may not reproduce,
              distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Third-Party Services</h2>
            <p>
              The Services integrate with third-party platforms including Facebook (social login),
              Cloudinary (image storage), and Mapbox (location services). Your use of these
              integrations is subject to the respective third-party terms and privacy policies.
              We are not responsible for the practices of any third-party service providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Disclaimer of Warranties</h2>
            <p>
              The Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
              either express or implied, including but not limited to warranties of merchantability,
              fitness for a particular purpose, or non-infringement. We do not warrant that the
              Services will be uninterrupted, error-free, or free of viruses or other harmful
              components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, PSPIPES shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages arising out of
              or related to your use of the Services, even if advised of the possibility of such
              damages. Our total liability to you for any claim arising from these Terms or the
              Services shall not exceed the amount you paid us in the twelve months preceding the
              claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless PSPIPES and its affiliates from any claims,
              damages, losses, and expenses (including reasonable legal fees) arising from your use
              of the Services, your User Content, or your violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Termination</h2>
            <p>
              We may suspend or terminate your access to the Services at our discretion, with or
              without notice, for conduct that we believe violates these Terms or is harmful to
              other users, us, or third parties. Upon termination, your right to use the Services
              will immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">13. Changes to Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Changes will be posted on
              this page with an updated &quot;Last updated&quot; date. Your continued use of the Services
              after changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">14. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable law.
              Any disputes arising from these Terms or the Services shall be resolved through
              good-faith negotiation wherever possible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">15. Contact</h2>
            <p>
              If you have questions about these Terms, please reach out via the contact section
              on{" "}
              <Link href="/" className="text-rose-400 hover:text-rose-300 transition-colors">
                pspipes.net
              </Link>
              . You may also review our{" "}
              <Link
                href="/privacy-policy"
                className="text-rose-400 hover:text-rose-300 transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
