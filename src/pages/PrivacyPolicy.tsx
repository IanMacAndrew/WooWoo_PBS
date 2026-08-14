'use client'

import { LegalPageLayout } from './LegalPageLayout'

export function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" eyebrow="Legal" updated="31 July 2026">
      <p>
        WooWoo World Sdn. Bhd. ("WooWoo World", "we", "us", "our"), operator of woowoo.world, woowooworld.co and ancientwisdom.asia, respects your privacy. This Privacy Policy explains what personal data we collect when you use our website or book one of our training courses, workshops, briefings or masterclasses ("Services"), why we collect it, and what rights you have over it.
      </p>
      <p>
        This policy is written to be read and understood by anyone, not just lawyers. If anything is unclear, contact us at the details at the bottom of this page.
      </p>

      <h2>1. What Data We Collect</h2>
      <p>We collect the following categories of personal data:</p>
      <ul>
        <li><strong>Contact details</strong> you give us directly: name, email address, phone number.</li>
        <li><strong>Booking details</strong>: company name, industry/business type (so we can group delegates into workgroups by sector), job designation (for courses with role-based eligibility), and which sales representative referred you, if any.</li>
        <li><strong>Payment information</strong>: we do not store your card details ourselves. All payments are processed securely by Stripe, our third-party payment processor. We receive confirmation of payment and the booking details you provided at checkout, but never your full card number.</li>
        <li><strong>Communications</strong>: any emails, enquiry form submissions, or messages you send us.</li>
        <li><strong>Website usage data</strong>: standard technical data such as browser type, pages visited, and approximate location, collected through our hosting and analytics providers.</li>
      </ul>

      <h2>2. Why We Collect It</h2>
      <ul>
        <li>To process your booking and payment, and confirm your place on a course.</li>
        <li>To arrange delegates into workgroups and cohorts by industry, designation, or eligibility category.</li>
        <li>To verify eligibility for discounted pricing (for example, Eng Lian and partner-company pricing).</li>
        <li>To calculate sales commissions owed to referring representatives.</li>
        <li>To prepare HRD Corp claim documentation for eligible companies.</li>
        <li>To communicate with you about your booking, including schedule changes, venue details, and reminders.</li>
        <li>To improve our Services and website.</li>
      </ul>

      <h2>3. Who We Share Data With</h2>
      <p>
        We share your data only where necessary to run our Services:
      </p>
      <ul>
        <li><strong>Stripe</strong>, to process payments. Stripe has its own privacy policy governing how it handles your payment data.</li>
        <li><strong>HRD Corp (Human Resources Development Corporation, Malaysia)</strong>, where your employer is claiming this training under HRDC and requires attendance/booking records for that purpose.</li>
        <li>Our hosting and infrastructure providers (currently Cloudflare and Supabase), who process data on our behalf under standard hosting arrangements.</li>
      </ul>
      <p>
        We do not sell your personal data to third parties, and we do not share it with anyone for their own marketing purposes without your consent.
      </p>

      <h2>4. How Long We Keep Your Data</h2>
      <p>
        We keep booking and payment records for as long as reasonably necessary to satisfy accounting, tax, and HRD Corp claim requirements (typically up to 7 years), and other personal data for as long as needed to provide our Services or as required by law.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        Under Malaysia's Personal Data Protection Act 2010 (PDPA), you have the right to:
      </p>
      <ul>
        <li>Ask us what personal data we hold about you.</li>
        <li>Ask us to correct inaccurate data.</li>
        <li>Ask us to delete your data, subject to our legal and accounting obligations to retain certain records.</li>
        <li>Withdraw consent for us to use your data for marketing communications at any time.</li>
      </ul>
      <p>To exercise any of these rights, contact us using the details below.</p>

      <h2>6. Security</h2>
      <p>
        We take reasonable technical and organisational measures to protect your personal data against unauthorised access, loss, or misuse. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The "last updated" date at the top of this page will always reflect the most recent version. Continued use of our Services after a change means you accept the updated policy.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        WooWoo World Sdn. Bhd.<br />
        SO-26-02, Menara 1, No. 3, Jalan Bangsar, KL Eco City, 59200 Kuala Lumpur, W.P. Kuala Lumpur<br />
        strategy@woowoo.world
      </p>
    </LegalPageLayout>
  )
}
