'use client'

import { LegalPageLayout } from './LegalPageLayout'

export function TermsOfService() {
  return (
    <LegalPageLayout title="Terms of Service" eyebrow="Legal" updated="31 July 2026">
      <p>
        These Terms of Service ("Terms") govern your booking and use of training courses, workshops, briefings, bootcamps and masterclasses ("Services") offered by WooWoo World Sdn. Bhd. ("WooWoo World", "we", "us", "our") through woowoo.world, woowooworld.co and ancientwisdom.asia. By booking or paying for any Service, you agree to these Terms.
      </p>
      <p>
        We've written this in plain English wherever possible. It is still a legally binding agreement between you and WooWoo World.
      </p>

      <h2>1. Bookings & Payment</h2>
      <p>
        All prices are shown in Malaysian Ringgit (MYR) and are payable in full at the time of booking unless otherwise stated. Payments are processed securely by Stripe. A booking is only confirmed once payment has been successfully received.
      </p>
      <p>
        Discounted pricing (including Eng Lian and partner-company rates, early-bird pricing, and group discounts) is offered on a trust basis. By booking at a discounted rate, you confirm that the information you provide (company, eligibility category, group size) is accurate. We reserve the right to verify eligibility and to charge the difference, or decline entry, where information provided is found to be inaccurate.
      </p>

      <h2>2. Cancellations & Refunds</h2>
      <p>
        We know plans change. This section explains exactly where you stand, depending on how much of a discount you received and how far in advance you cancel.
      </p>

      <h3>2.1 Rolling Early-Notice Window (Automatic WooWoo Tokens)</h3>
      <div className="callout">
        <p>
          Cancel <strong>14 or more days</strong> before the scheduled start of your workshop or event, and you'll automatically receive WooWoo Tokens, no case-by-case review needed, and regardless of how large a discount you received. This is the fastest, simplest way to change your booking, and applies even to Heavily Discounted Products.
        </p>
      </div>

      <h3>2.2 Heavily Discounted Products (50% off or more)</h3>
      <div className="callout">
        <p>
          Any product purchased at a discount of <strong>50% or more off the standard price</strong> is classified as a <strong>Heavily Discounted Product</strong>. Outside the 14-day automatic window in Section 2.1, Heavily Discounted Products are sold on a <strong>strict no-return, no-refund, no-exchange basis</strong>. This includes, but is not limited to, Eng Lian and partner-company pricing, and any stacked discount that reaches 50% or above.
        </p>
      </div>
      <p>
        The only further exception is set out in Section 2.4 below (Circumstances Beyond Your Control), applied at our sole discretion on a case-by-case basis.
      </p>

      <h3>2.3 Standard Discount Products (under 50% off, including full price)</h3>
      <p>
        For any booking discounted at less than 50% off (including bookings paid at full standard price), outside the 14-day automatic window in Section 2.1:
      </p>
      <ul>
        <li>Cancellations made <strong>more than 72 hours</strong> before the scheduled start may be eligible for WooWoo Tokens or, where a cash refund is chosen, a resale-first refund (see Section 3.2).</li>
        <li>Cancellations made <strong>72 hours or less</strong> before the scheduled start are <strong>non-refundable</strong>, as a firm rule. This protects places for a fully-booked cohort and honours venue and catering commitments made on your behalf.</li>
      </ul>

      <h3>2.4 Circumstances Beyond Your Control</h3>
      <p>
        If a delegate is genuinely unable to attend due to circumstances beyond their control (for example, serious illness, bereavement, a natural disaster, or a government-imposed restriction), WooWoo World may, at its sole discretion and on a case-by-case basis, consider a remedy outside the windows above, most commonly WooWoo Tokens. This is a discretionary goodwill provision, not an entitlement.
      </p>

      <h3>2.5 No-Shows</h3>
      <p>
        Delegates who do not attend without cancelling in advance are treated the same as attendees for billing purposes and are not entitled to any refund or Token conversion, regardless of the windows above.
      </p>

      <h3>2.6 Booking Protection (Optional Add-On)</h3>
      <p>
        Where offered at checkout, you may add <strong>Booking Protection</strong> alongside your booking for a fee of <strong>8% of the ticket price</strong> (calculated per seat, so a group booking's protection cost scales with the number of seats protected).
      </p>
      <p>Booking Protection upgrades your cancellation terms by one tier:</p>
      <ul>
        <li>On a <strong>Heavily Discounted Product</strong>, it moves your booking into the same terms as a Standard Discount Product, giving you the 72-hour cash-refund-eligibility window (Section 2.3) that the strict no-return policy would otherwise deny entirely.</li>
        <li>On a <strong>Standard Discount Product</strong>, it removes the 72-hour cutoff entirely, letting you cancel for WooWoo Tokens or a resale-first refund right up until the event starts.</li>
      </ul>
      <p>
        Booking Protection does not cover no-shows under any circumstances (Section 2.5 still applies in full), and the Booking Protection fee itself is non-refundable, regardless of whether you go on to use it.
      </p>

      <h2>3. WooWoo Tokens</h2>
      <p>
        Where a cancellation is eligible for a remedy under Section 2, <strong>WooWoo Tokens will always be offered first, before any cash refund is considered.</strong>
      </p>

      <h3>3.1 Token Bonus</h3>
      <p>
        Choosing WooWoo Tokens over a cash refund is worth more: we credit <strong>110% of the eligible amount</strong> as Tokens. For example, an amount eligible for a RM1,000 refund becomes RM1,100 in Tokens if you choose Tokens instead.
      </p>

      <h3>3.2 Resale-First Cash Refunds</h3>
      <p>
        Where a cash refund is chosen instead of Tokens (available only under Section 2.3, and at our discretion under Section 2.4), we will first attempt to resell the vacated seat. A cash refund is only issued once the seat has been resold. Until then, WooWoo Tokens remain available immediately, without waiting for resale.
      </p>

      <h3>3.3 General Token Terms</h3>
      <ul>
        <li>WooWoo Tokens are a store credit, redeemable against any other WooWoo World product or course.</li>
        <li>WooWoo Tokens have no cash value and cannot be withdrawn or exchanged for money.</li>
        <li>WooWoo Tokens are valid for 12 months from the date of issue, unless we state otherwise in writing.</li>
        <li>WooWoo Tokens are not transferable to a third party unless agreed by us in writing.</li>
      </ul>

      <h2>4. Your Options Instead of Cancelling</h2>
      <p>Before cancelling, consider these alternatives, which we're generally happy to accommodate at no extra cost:</p>
      <ul>
        <li><strong>Transfer your seat</strong> to a colleague from the same company, at no charge, any time before the event.</li>
        <li><strong>Reschedule</strong> to a future running of the same course, where a later date is available.</li>
        <li><strong>Convert to WooWoo Tokens</strong> for use on any other course or workshop, per Section 3.</li>
      </ul>

      <h2>5. HRD Corp Claims</h2>
      <p>
        Certain courses are eligible for claim under HRD Corp (Human Resources Development Corporation, Malaysia), subject to your company being levy-registered and compliant with HRDC requirements. WooWoo World will provide reasonable documentation to support a claim, but approval of any HRDC claim is entirely at HRD Corp's discretion and is not guaranteed by WooWoo World.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        All training materials, workbooks, slide decks, and course content remain the intellectual property of WooWoo World. Delegates may use materials for their own personal or internal business reference but may not reproduce, resell, or distribute them without our written permission.
      </p>

      <h2>7. Conduct at Events</h2>
      <p>
        We expect all delegates to behave professionally and respectfully toward facilitators and fellow delegates. We reserve the right to remove any delegate from a course without refund for conduct that is abusive, disruptive, or otherwise unacceptable.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, WooWoo World's liability to you in connection with any Service is limited to the amount you paid for that Service. We are not liable for indirect or consequential loss, including loss of business, profits, or opportunity.
      </p>

      <h2>9. Force Majeure</h2>
      <p>
        We are not liable for any failure or delay in delivering a Service caused by events beyond our reasonable control, including natural disasters, government action, pandemic-related restrictions, or venue unavailability. Where we must cancel or postpone an event for such reasons, delegates will be offered a place on a rescheduled date or WooWoo Tokens.
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of Malaysia, and any dispute arising from them will be subject to the exclusive jurisdiction of the Malaysian courts.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. The "last updated" date at the top of this page will always reflect the most recent version. Continued use of our Services after a change means you accept the updated Terms.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        WooWoo World Sdn. Bhd.<br />
        SO-26-02, Menara 1, No. 3, Jalan Bangsar, KL Eco City, 59200 Kuala Lumpur, W.P. Kuala Lumpur<br />
        strategy@woowoo.world
      </p>
    </LegalPageLayout>
  )
}
