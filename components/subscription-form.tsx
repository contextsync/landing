'use client'

import { FormEvent } from 'react'

export default function SubscriptionForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    window.open('https://buttondown.com/contextsync', 'popupwindow')
    const form = e.target as HTMLFormElement
    form.submit()
  }

  return (
    <form
      action="https://buttondown.com/api/emails/embed-subscribe/contextsync"
      onSubmit={handleSubmit}
      className="embeddable-buttondown-form flex flex-col items-center space-y-4 mt-8"
      method="post"
      target="popupwindow"
    >
      <input
        type="email"
        name="email"
        id="bd-email"
        placeholder="Enter your email"
        className="w-full max-w-md px-4 py-2 border border-black/20 dark:border-white/20 rounded-md text-black dark:text-white bg-white dark:bg-black"
        required
      />
      <input
        type="submit"
        value="Join the waitlist"
        className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-black font-bold uppercase rounded-md cursor-pointer"
      />
    </form>
  )
}