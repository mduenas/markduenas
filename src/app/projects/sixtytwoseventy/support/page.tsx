import type { Metadata } from 'next'
import Link from 'next/link'
import { getProjectById } from '@/lib/projects'
import { MortlyDoc, MortlySection } from '@/components/MortlyDoc'

export const metadata: Metadata = {
  title: 'Sixty-Two to Seventy Support',
  description:
    'Support for Sixty-Two to Seventy, a free Social Security claiming-age calculator. Contact markduenas@gmail.com.',
}

const CONTACT_EMAIL = 'markduenas@gmail.com'

const faqs = [
  {
    question: 'Where is my data stored?',
    answer:
      'Nowhere. Sixty-Two to Seventy does not upload what you type, and version 1 does not save it to storage either. Your inputs are held in memory while the app is open and are gone when you close it. There is no account and no copy on a server.',
  },
  {
    question: 'Does Sixty-Two to Seventy need the internet?',
    answer:
      'No. Version 1 makes no network calls. All calculations run on the device, including when it is offline.',
  },
  {
    question: 'Are the results financial advice?',
    answer:
      'No. Results are estimates for education. They are not financial, tax, or legal advice. Confirm your options with the Social Security Administration or a qualified professional before you decide when to claim.',
  },
  {
    question: 'What do the calculator, chart, and breakeven card show?',
    answer:
      'The calculator takes your birth year and your monthly benefit at full retirement age, and shows the benefit at each claiming age from 62 to 70, also as a percent of your full benefit. The chart shows the total you would have received by each age for early, full, and delayed claiming. The breakeven card shows how long you would need to live for waiting to pay more in total.',
  },
  {
    question: 'What do COLA and the discount rate mean?',
    answer:
      "COLA is the yearly cost-of-living increase applied to your benefit. The discount rate lets you compare payments in today's value: a higher rate favors money received sooner. Both are adjustable, so you can see how the breakeven ages move.",
  },
  {
    question: 'What is not included?',
    answer:
      'Income taxes on benefits, the earnings test if you keep working before full retirement age, Medicare premiums, and spousal and survivor benefits are not included.',
  },
  {
    question: 'Is it free?',
    answer:
      'Yes. The app is free and has no in-app purchases. If that ever changes, the privacy policy and this page will be updated first.',
  },
  {
    question: 'Do I need an account?',
    answer: 'No. There is no sign-in, and the app does not ask for your name or email.',
  },
]

export default function SixtyTwoSeventySupportPage() {
  const project = getProjectById('sixtytwoseventy')
  const appStoreUrl = project?.appStoreUrl || ''
  const playStoreUrl = project?.playStoreUrl || ''

  return (
    <MortlyDoc
      appSlug="sixtytwoseventy"
      appName="Sixty-Two to Seventy"
      kicker="Support"
      title="Sixty-Two to Seventy"
      lede="Sixty-Two to Seventy is a free Social Security claiming-age calculator for Android and iOS. It shows the benefit at each age from 62 to 70, the cumulative payout, and the breakeven ages. It works offline and does not collect data."
    >
      <MortlySection title="Contact">
        <p>
          Email Mark Duenas at{' '}
          <a className="text-emerald-400 hover:text-emerald-300" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . Include whether you are on Android or iOS, and what you expected the calculator to show.
        </p>
        <p>
          Privacy policy:{' '}
          <Link href="/projects/sixtytwoseventy/privacy-policy" className="text-emerald-400 hover:text-emerald-300">
            markduenas.com/projects/sixtytwoseventy/privacy-policy
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
          Android package <span className="text-slate-300">com.markduenas.sixtytwoseventy</span>
          <br />
          iOS bundle ID <span className="text-slate-300">com.markduenas.sixtytwoseventy</span>
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
        This page: https://www.markduenas.com/projects/sixtytwoseventy/support/
      </p>
    </MortlyDoc>
  )
}
