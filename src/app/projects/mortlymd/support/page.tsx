import type { Metadata } from 'next'
import Link from 'next/link'
import { getProjectById } from '@/lib/projects'
import { MortlyDoc, MortlySection } from '@/components/MortlyDoc'

export const metadata: Metadata = {
  title: 'Mortly MD Support',
  description:
    'Support for Mortly MD, a free mortgage savings calculator. Contact markduenas@gmail.com.',
}

const CONTACT_EMAIL = 'markduenas@gmail.com'

const faqs = [
  {
    question: 'Where is my data stored?',
    answer:
      'On the device only. Mortly MD does not upload what you type. Inputs are kept in local app storage and are excluded from device backups, including iCloud Backup and Android Auto Backup. Uninstalling the app, or clearing its storage, removes them. There is no account and no copy on a server.',
  },
  {
    question: 'Does Mortly MD need the internet?',
    answer:
      'No. Version 1 makes no network calls. Payment, payoff, and points calculations run on the device, including when the device is offline.',
  },
  {
    question: 'Are the results financial advice?',
    answer:
      'No. Results are estimates, not a loan offer, tax advice, or a recommendation from a lender. Your actual payment depends on the lender, escrow, fees, and the loan terms. Check the figures with your lender before you decide.',
  },
  {
    question: 'What do the three tabs do?',
    answer:
      'Payment estimates the monthly principal and interest, plus property tax and insurance. Payoff shows what it takes to retire a loan sooner — for example, paying a 30-year loan off in 15 years. Points estimates when mortgage points break even compared with paying a higher rate and no points.',
  },
  {
    question: 'Is it free?',
    answer:
      'Version 1 is free and has no in-app purchases. A Pro unlock may be offered later. If that changes anything described here or in the privacy policy, those pages will be updated first.',
  },
  {
    question: 'Do I need an account?',
    answer: 'No. There is no sign-in, and the app does not ask for your name or email.',
  },
]

export default function MortlySupportPage() {
  const project = getProjectById('mortlymd')
  const appStoreUrl = project?.appStoreUrl || ''
  const playStoreUrl = project?.playStoreUrl || ''

  return (
    <MortlyDoc
      kicker="Support"
      title="Mortly MD"
      lede="Mortly MD is a free mortgage savings calculator for Android and iOS. It estimates a monthly payment, an early payoff, and the break-even point on mortgage points. It works offline and does not collect data."
    >
      <MortlySection title="Contact">
        <p>
          Email Mark Duenas at{' '}
          <a className="text-blue-400 hover:text-blue-300" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . Include whether you are on Android or iOS, and what you expected the calculator to show.
        </p>
        <p>
          Privacy policy:{' '}
          <Link href="/projects/mortlymd/privacy-policy" className="text-blue-400 hover:text-blue-300">
            markduenas.com/projects/mortlymd/privacy-policy
          </Link>
        </p>
      </MortlySection>

      <MortlySection title="Download">
        <p>
          The first release is pending. The store listings exist, and the public links will be added here when they are live. Until then, there is nothing to install from this page.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          {appStoreUrl ? (
            <a href={appStoreUrl} className="btn-primary flex-1 text-center">
              App Store
            </a>
          ) : (
            <span className="btn-secondary flex-1 text-center opacity-80 pointer-events-none">
              App Store — Coming soon
            </span>
          )}
          {playStoreUrl ? (
            <a href={playStoreUrl} className="btn-primary flex-1 text-center">
              Play Store
            </a>
          ) : (
            <span className="btn-secondary flex-1 text-center opacity-80 pointer-events-none">
              Play Store — Coming soon
            </span>
          )}
        </div>
        <p className="text-sm text-slate-500">
          Android package <span className="text-slate-300">com.markduenas.mortlymd</span>
          <br />
          iOS bundle ID <span className="text-slate-300">com.markduenas.mortlymd</span>
        </p>
      </MortlySection>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Common questions</h2>
        {faqs.map((faq) => (
          <div key={faq.question} className="card p-6">
            <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
            <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>

      <p className="text-sm text-slate-500">
        This page: https://www.markduenas.com/projects/mortlymd/support/
      </p>
    </MortlyDoc>
  )
}
