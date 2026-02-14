import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | PSPIPES",
  description: "Privacy policy for pspipes.net and Motoclub Connect.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-10">Last updated: February 15, 2026</p>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Overview</h2>
            <p>
              This Privacy Policy describes how PSPIPES (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) collects,
              uses, and protects information when you use pspipes.net and the Motoclub Connect
              application (&quot;Services&quot;). We are committed to protecting your privacy and handling
              your data responsibly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-300">Account Information</strong> — name, email address,
                and profile photo when you register for Motoclub Connect.
              </li>
              <li>
                <strong className="text-slate-300">Social Login Data</strong> — if you sign in via
                Facebook, we receive your public profile information as permitted by Facebook&apos;s
                API.
              </li>
              <li>
                <strong className="text-slate-300">Usage Data</strong> — pages visited, features used,
                and interaction logs to improve the Services.
              </li>
              <li>
                <strong className="text-slate-300">Location Data</strong> — approximate location when
                you use location-based features (with your permission).
              </li>
              <li>
                <strong className="text-slate-300">User-Generated Content</strong> — club information,
                events, and any content you post within the app.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>To provide and maintain the Services</li>
              <li>To manage your account and authenticate your identity</li>
              <li>To send notifications relevant to your clubs and events</li>
              <li>To improve and personalise your experience</li>
              <li>To communicate updates, changes, or support responses</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Data Sharing</h2>
            <p className="mb-3">
              We do not sell your personal data. We may share information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>
                <strong className="text-slate-300">Service Providers</strong> — trusted third parties
                (e.g. Cloudinary for image storage, MongoDB Atlas for database hosting) that process
                data on our behalf under strict confidentiality agreements.
              </li>
              <li>
                <strong className="text-slate-300">Legal Requirements</strong> — when required by law
                or to protect the rights and safety of our users.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Cookies & Tracking</h2>
            <p>
              This website may use cookies and similar technologies to analyse traffic and improve
              user experience. You can control cookie preferences through your browser settings.
              Disabling cookies may affect some functionality of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide the
              Services. You may request deletion of your account and associated data at any time by
              contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict certain processing</li>
              <li>Data portability</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at the address below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Security</h2>
            <p>
              We implement industry-standard security measures including JWT authentication, encrypted
              connections (HTTPS), and restricted database access to protect your data. No method of
              transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Children&apos;s Privacy</h2>
            <p>
              Our Services are not directed at children under the age of 13. We do not knowingly
              collect personal information from children. If you believe we have inadvertently
              collected such data, please contact us and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this
              page with an updated &quot;Last updated&quot; date. Continued use of the Services after changes
              constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Contact</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please reach out via the
              contact section on{" "}
              <Link href="/" className="text-rose-400 hover:text-rose-300 transition-colors">
                pspipes.net
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
