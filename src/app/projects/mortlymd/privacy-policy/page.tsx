import type { Metadata } from 'next'
import Link from 'next/link'
import { MortlyDoc, MortlySection } from '@/components/MortlyDoc'

export const metadata: Metadata = {
  title: 'Mortly MD Privacy Policy',
  description:
    'Mortly MD collects no personal data. Privacy policy for the free mortgage savings calculator, effective November 2, 2026.',
}

const EFFECTIVE_DATE = 'November 2, 2026'
const CONTACT_EMAIL = 'markduenas@gmail.com'

export default function MortlyPrivacyPolicyPage() {
  return (
    <MortlyDoc
      kicker="Privacy policy"
      title="Mortly MD"
      lede="Mortly MD collects no personal data. This policy describes version 1 of the app and what happens if a later version changes that."
    >
      <MortlySection title="This policy">
        <p>
          This is the privacy policy for <strong className="text-white">Mortly MD</strong>, a free mortgage savings calculator published by Mark Duenas.
        </p>
        <p>
          It applies to the Android app, package <span className="text-white">com.markduenas.mortlymd</span>, and the iOS app, bundle ID <span className="text-white">com.markduenas.mortlymd</span>.
        </p>
        <p>
          Effective date: <span className="text-white">{EFFECTIVE_DATE}</span>.
        </p>
        <p>
          The portfolio website and other Mark Duenas apps are covered by a separate policy at{' '}
          <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
            markduenas.com/privacy
          </Link>
          . That page mentions Firebase, advertising, and analytics. Those practices do not apply to Mortly MD.
        </p>
      </MortlySection>

      <MortlySection title="Mortly MD collects no personal data">
        <p>
          Version 1 of Mortly MD does not collect, transmit, sell, or share personal information. There is nothing for the developer to store on a server, because the app does not send data anywhere.
        </p>
        <p>In version 1 the app:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>does not require an account, and does not ask for your name, email, or phone number</li>
          <li>does not use analytics or crash reporting</li>
          <li>does not show ads and does not use an advertising identifier</li>
          <li>does not use Firebase or any other cloud, analytics, or advertising service</li>
          <li>does not make network calls</li>
          <li>does not request access to contacts, location, camera, microphone, photos, or tracking</li>
        </ul>
        <p>
          For store questionnaires, the accurate answer for version 1 is that data is not collected.
        </p>
      </MortlySection>

      <MortlySection title="Numbers you type stay on the device">
        <p>
          Loan amount, interest rate, term, taxes, insurance, extra payments, points, and similar inputs are stored only on the device, in local app storage. They are excluded from device backups, including iCloud Backup and Android Auto Backup.
        </p>
        <p>
          Those values are not sent to Mark Duenas or to any third party. Uninstalling the app, or clearing its storage in system settings, removes them. There is no account and no server copy to delete.
        </p>
      </MortlySection>

      <MortlySection title="What the calculator does">
        <p>
          Mortly MD calculates estimates on the device. Payment estimates monthly principal and interest, plus tax and insurance. Payoff estimates what it takes to retire a loan sooner, such as paying a 30-year loan off in 15 years. Points estimates when mortgage points break even.
        </p>
        <p>
          Results are estimates for your own planning. They are not a loan offer, a credit decision, tax advice, or other financial advice.
        </p>
      </MortlySection>

      <MortlySection title="Price and a possible later Pro unlock">
        <p>
          Version 1 is free and has no in-app purchases. Apple and Google are not asked to process a payment for this version, and the app does not receive payment details.
        </p>
        <p>
          A paid Pro unlock may be offered in a later version. If that, or any other change, causes Mortly MD to collect, store, or share information differently than this policy describes, this policy will be updated before that change takes effect. The effective date above will change with it.
        </p>
      </MortlySection>

      <MortlySection title="Children">
        <p>
          Mortly MD is not directed at children under 13, and it does not knowingly collect personal information from anyone, including children.
        </p>
      </MortlySection>

      <MortlySection title="Your choices">
        <p>
          Because the app collects no personal information, there is no profile to access, correct, or download. California residents, and anyone else, can be assured that Mortly MD does not sell personal information. There is no sale to opt out of.
        </p>
        <p>
          To remove inputs from a device, clear the app&apos;s storage or uninstall Mortly MD.
        </p>
      </MortlySection>

      <MortlySection title="Contact">
        <p>
          Privacy questions about Mortly MD go to Mark Duenas at{' '}
          <a className="text-blue-400 hover:text-blue-300" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <p>
          Support: <Link href="/projects/mortlymd/support" className="text-blue-400 hover:text-blue-300">markduenas.com/projects/mortlymd/support</Link>
        </p>
        <p className="text-sm text-slate-500">
          This page: https://www.markduenas.com/projects/mortlymd/privacy-policy/
        </p>
      </MortlySection>
    </MortlyDoc>
  )
}
