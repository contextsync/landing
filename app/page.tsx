import { MemoryStick, Database, ArrowRight, Zap, RefreshCw, ArrowDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SubscriptionForm from "@/components/subscription-form"
import ConversationDemo from "@/components/conversation-demo"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white font-mono">
      {/* Navigation */}
      <header className="border-b border-black/20 dark:border-white/20 bg-white dark:bg-black sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="bg-black dark:bg-white p-1.5">
              <MemoryStick className="h-5 w-5 text-white dark:text-black" />
            </div>
            <span className="text-black dark:text-white">ContextSync</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#examples"
              className="text-sm font-medium text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors uppercase"
            >
              Examples
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors uppercase"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors uppercase"
            >
              How_It_Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-black dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors uppercase"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              className="text-black dark:text-white border-black/20 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-black dark:hover:text-cyan-400 uppercase"
            >
              Log_In
            </Button>
            <Button
              size="sm"
              className="bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-black font-medium uppercase"
            >
              Sign_Up
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-20 relative overflow-hidden border-b border-black/20 dark:border-white/20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,.08)_1px,transparent_1px)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,.20)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.20)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="inline-block bg-black text-white dark:bg-white dark:text-black px-3 py-1 text-sm uppercase font-bold w-fit mx-auto">
                  CONTEXT_SYNC
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-black dark:text-white uppercase">
                  SEAMLESS MEMORY ACROSS ALL AI ASSISTANTS
                </h1>
                <p className="max-w-[600px] text-black/70 dark:text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono mx-auto">
                  ContextSync enables your chatbots and agents to share conversation history across different AI
                  providers. Never repeat yourself again.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4 justify-center">
                  <Button className="gap-1 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-black font-medium uppercase">
                    <Link href="#cta">GET_STARTED</Link><ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-black dark:hover:text-cyan-400 uppercase"
                  >
                    <Link href="#cta">VIEW_DOCS</Link><ArrowDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Example Conversations Section */}
        <section
          id="examples"
          className="w-full py-16 md:py-24 bg-gray-100 dark:bg-zinc-950 border-b border-black/20 dark:border-white/20"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white uppercase">
                  SEE Context_Sync IN ACTION
                </h2>
                <p className="max-w-[900px] text-black/70 dark:text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
                  Experience how seamless context sharing works across different AI assistants.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl mt-12">
              <ConversationDemo />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-20 md:py-32 bg-white dark:bg-black relative overflow-hidden border-b border-black/20 dark:border-white/20"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,.03)_1px,transparent_1px)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block bg-black text-white dark:bg-white dark:text-black px-3 py-1 text-sm uppercase font-bold">
                  FEATURES
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white uppercase">
                  WHY ContextSync?
                </h2>
                <p className="max-w-[900px] text-black/70 dark:text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
                  Powerful features to enhance your AI interactions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-6">
                <div className="bg-black dark:bg-white p-3">
                  <Database className="h-6 w-6 text-white dark:text-black" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white uppercase">UNIFIED_MEMORY</h3>
                <p className="text-center text-black/70 dark:text-white/70 font-mono">
                  Store and access conversation history across different AI providers and models.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-6">
                <div className="bg-black dark:bg-white p-3">
                  <Zap className="h-6 w-6 text-white dark:text-black" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white uppercase">SELECTIVE_SAVING</h3>
                <p className="text-center text-black/70 dark:text-white/70 font-mono">
                  Choose which parts of conversations to save for future reference.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-6">
                <div className="bg-black dark:bg-white p-3">
                  <RefreshCw className="h-6 w-6 text-white dark:text-black" />
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white uppercase">REAL-TIME_SYNC</h3>
                <p className="text-center text-black/70 dark:text-white/70 font-mono">
                  Instantly sync conversation context across all your AI assistants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          className="w-full py-20 md:py-32 bg-gray-100 dark:bg-zinc-950 border-b border-black/20 dark:border-white/20"
        >
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block bg-black text-white dark:bg-white dark:text-black px-3 py-1 text-sm uppercase font-bold">
                  HOW_IT_WORKS
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white uppercase">
                  SIMPLE INTEGRATION, POWERFUL RESULTS
                </h2>
                <p className="max-w-[900px] text-black/70 dark:text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
                  Add our Model Context Protcol (MCP) Server to your AI assistants of choice
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-6">
                <div className="flex h-12 w-12 items-center justify-center bg-cyan-600 dark:bg-cyan-500 text-white dark:text-black font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white uppercase">CONNECT</h3>
                <p className="text-center text-black/70 dark:text-white/70 font-mono">
                  Generate a ContextSync token and add it to Claude, ChatGTP and others.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-6">
                <div className="flex h-12 w-12 items-center justify-center bg-cyan-600 dark:bg-cyan-500 text-white dark:text-black font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white uppercase">SAVE</h3>
                <p className="text-center text-black/70 dark:text-white/70 font-mono">
                  Your AI will now save important conversations or context with simple commands.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-6">
                <div className="flex h-12 w-12 items-center justify-center bg-cyan-600 dark:bg-cyan-500 text-white dark:text-black font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white uppercase">RETRIEVE</h3>
                <p className="text-center text-black/70 dark:text-white/70 font-mono">
                  Any connected AI can retrieve and utilize the saved context.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full py-20 md:py-32 bg-white dark:bg-black relative overflow-hidden border-b border-black/20 dark:border-white/20"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(180deg,rgba(0,0,0,.08)_1px,transparent_1px)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,.20)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,.20)_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block bg-black text-white dark:bg-white dark:text-black px-3 py-1 text-sm uppercase font-bold">
                  PRICING
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white uppercase">
                  CHOOSE YOUR PLAN
                </h2>
                <p className="max-w-[900px] text-black/70 dark:text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
                  Flexible pricing options to fit your needs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
              <div className="flex flex-col border border-black/20 dark:border-white/20 bg-white dark:bg-black p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-black dark:text-white uppercase">STARTER</h3>
                  <p className="text-black/70 dark:text-white/70 font-mono">
                    Perfect for individuals testing the water.
                  </p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold text-black dark:text-white">
                  Free<span className="text-sm font-normal text-black/50 dark:text-white/50">/month</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-black/70 dark:text-white/70 font-mono">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-cyan-600 dark:text-cyan-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>5 AI Assistants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-cyan-600 dark:text-cyan-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>100MB Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-cyan-600 dark:text-cyan-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Basic Support</span>
                  </li>
                </ul>
                <Button
                  asChild
                  className="mt-6 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-black font-medium uppercase"
                >
                  <Link href="#cta">GET_STARTED</Link>
                </Button>
              </div>
              <div className="flex flex-col border border-black/20 dark:border-white/20 bg-white dark:bg-black p-6 relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit bg-cyan-600 dark:bg-cyan-500 px-3 py-1 text-xs font-medium text-white dark:text-black uppercase">
                  POPULAR
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-black dark:text-white uppercase">PRO</h3>
                  <p className="text-black/70 dark:text-white/70 font-mono">For power users</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold text-black dark:text-white">
                  $29<span className="text-sm font-normal text-black/50 dark:text-white/50">/month</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-black/70 dark:text-white/70 font-mono">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-cyan-600 dark:text-cyan-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Unlimited AI Assistants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-cyan-600 dark:text-cyan-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Unlimited Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-cyan-600 dark:text-cyan-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Priority Support</span>
                  </li>
                  {/* <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-cyan-600 dark:text-cyan-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Advanced Analytics</span>
                  </li> */}
                </ul>
                <Button className="mt-6 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-black font-medium uppercase">
                  <Link href="#cta">GET_STARTED</Link>
                </Button>
              </div>
              <div className="flex flex-col border border-black/20 dark:border-white/20 bg-white dark:bg-black p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-black dark:text-white uppercase">ENTERPRISE</h3>
                  <p className="text-black/70 dark:text-white/70 font-mono">
                    For large organizations with custom needs.
                  </p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold text-black dark:text-white">
                  CUSTOM<span className="text-sm font-normal text-black/50 dark:text-white/50">/month</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-black/70 dark:text-white/70 font-mono">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-cyan-600 dark:text-cyan-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Unlimited AI Assistants</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-cyan-600 dark:text-cyan-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Custom Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-cyan-600 dark:text-cyan-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Dedicated Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-cyan-600 dark:text-cyan-400"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Organizational level knowledge</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-transparent border border-black/20 dark:border-white/20 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white uppercase">
                  CONTACT_SALES
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-cyan-600 dark:bg-cyan-500" id="cta">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white dark:text-black uppercase">
                  READY TO UNIFY YOUR AI EXPERIENCE?
                </h2>
                <p className="max-w-[900px] text-white/70 dark:text-black/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-mono">
                  We're almost ready, join our waitlist to get priority access.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                {/* <Button
                  className="gap-1 bg-black hover:bg-zinc-800 dark:bg-black dark:hover:bg-zinc-800 text-white font-medium uppercase"
                  size="lg"
                >
                  GET_STARTED <ArrowRight className="h-4 w-4" />
                </Button> */}

                <SubscriptionForm />

              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/20 dark:border-white/20 py-6 md:py-0 bg-white dark:bg-black">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold">
            <div className="bg-black dark:bg-white p-1.5">
              <MemoryStick className="h-4 w-4 text-white dark:text-black" />
            </div>
            <span className="text-black dark:text-white uppercase">ContextSync</span>
          </div>
          <p className="text-center text-sm text-black/50 dark:text-white/50 md:text-left font-mono">
            &copy; {new Date().getFullYear()} ContextSync. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors uppercase"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors uppercase"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors uppercase"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

