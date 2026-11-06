import type { Metadata } from 'next'
import Link from 'next/link'
import { MortlyDoc, MortlySection } from '@/components/MortlyDoc'

export const metadata: Metadata = {
  title: 'Sixty-Two to Seventy Privacy Policy',
  description:
    'Sixty-Two to Seventy collects no personal data. Privacy policy for the free Social Security claiming-age calculator, effective November 6, 2026.',
}

const EFFECTIVE_DATE = 'November 6, 2026'
const CONTACT_EMAIL = 'markduenas@gmail.com'

export default function SixtyTwoSeventyPrivacyPolicyPage() {
  return (
    <MortlyDoc
      appSlug="sixtytwoseventy"
      appName="Sixty-Two to Seventy"
      kicker="Privacy policy"
      title="Sixty-Two to Seventy"
      lede="Sixty-Two to Seventy collects no personal data. This policy describes version 1 of the app and what happens if a later version changes that."
    >
      <MortlySection title="This policy">
        <p>
          This is the privacy policy for <strong className="text-white">Sixty-Two to Seventy</strong>, a free Social Security claiming-age calculator published by Mark Duenas.
        </p>
        <p>
          It applies to the Android app, package <span className="text-white">com.markduenas.sixtytwoseventy</span>, and the iOS app, bundle ID <span className="text-white">com.markduenas.sixtytwoseventy</span>. Both are free.
        </p>
        <p>
          Effective date: <span className="text-white">{EFFECTIVE_DATE}</span>.
        </p>
        <p>
          The portfolio website and other Mark Duenas apps are covered by a separate policy at{' '}
          <Link href="/privacy" className="text-emerald-400 hover:text-emerald-300">
            markduenas.com/privacy
          </Link>
          . That page mentions Firebase, advertising, and analytics. Those practices do not apply to Sixty-Two to Seventy.
        </p>
      </MortlySection>

      <MortlySection title="Sixty-Two to Seventy collects no personal data">
        <p>
          Version 1 does not collect, transmit, sell, or share personal information. There is nothing for the developer to store on a server, because the app does not send data anywhere.
        </p>
        <p>In version 1 the app:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>does not require an account, and does not ask for your name, email, or phone number</li>
          <li>does not use analytics or crash reporting</li>
          <li>does not show ads and does not use an advertising identifier</li>
          <li>does not use Firebase or any other cloud, analytics, or advertising service</li>
          <li>does not make network calls, and the Android app does not request the internet permission</li>
          <li>does not request access to contacts, location, camera, microphone, photos, or tracking</li>
        </ul>
        <p>
          For store questionnaires, the accurate answer for version 1 is that data is not collected.
        </p>
      </MortlySection>

      <MortlySection title="Numbers you type stay on the device">
        <p>
          Birth year, benefit amount, cost-of-living increase (COLA), and discount rate are held in memory while the app is open. Version 1 does not write them to storage. The only thing the app remembers is which screen you were on, and only while the app is running.
        </p>
        <p>
          Those values are not sent to Mark Duenas or to any third party. Closing the app clears them. Android backup is turned off for the app. There is no account and no server copy to delete.
        </p>
      </MortlySection>

      <MortlySection title="What the calculator does">
        <p>
          Sixty-Two to Seventy calculates estimates on the device. It shows the monthly benefit at each claiming age from 62 to 70, the breakeven ages for claiming earlier or later, and the total received by each age.
        </p>
        <p>
          Results are estimates for education. They are not financial, tax, or legal advice, and they are not a statement from the Social Security Administration. Taxes, the earnings test, Medicare premiums, and spousal or survivor benefits are not included.
        </p>
      </MortlySection>

      <MortlySection title="Price">
        <p>
          The app is free and has no in-app purchases. Apple and Google are not asked to process a payment, and the app does not receive payment details.
        </p>
        <p>
          If a later version changes anything described here, this policy will be updated before that change takes effect. The effective date above will change with it.
        </p>
      </MortlySection>

      <MortlySection title="Children">
        <p>
          Sixty-Two to Seventy is not directed at children under 13, and it does not knowingly collect personal information from anyone, including children.
        </p>
      </MortlySection>

      <MortlySection title="Your choices">
        <p>
          Because the app collects no personal information, there is no profile to access, correct, or download. California residents, and anyone else, can be assured that Sixty-Two to Seventy does not sell personal information. There is no sale to opt out of.
        </p>
        <p>
          To clear anything the app holds, close it or uninstall it.
        </p>
      </MortlySection>

      <MortlySection title="Contact">
        <p>
          Privacy questions about Sixty-Two to Seventy go to Mark Duenas at{' '}
          <a className="text-emerald-400 hover:text-emerald-300" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
        <p>
          Support: <Link href="/projects/sixtytwoseventy/support" className="text-emerald-400 hover:text-emerald-300">markduenas.com/projects/sixtytwoseventy/support</Link>
        </p>
        <p className="text-sm text-slate-500">
          This page: https://www.markduenas.com/projects/sixtytwoseventy/privacy-policy/
        </p>
      </MortlySection>
    </MortlyDoc>
  )
}
