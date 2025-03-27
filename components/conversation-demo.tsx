"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Save, Database, ArrowRight } from "lucide-react"

export default function ConversationDemo() {
  const [activeTab, setActiveTab] = useState("openai")
  const [showSavedContext, setShowSavedContext] = useState(false)
  const [showSecondAssistant, setShowSecondAssistant] = useState(false)

  const handleSaveContext = () => {
    setShowSavedContext(true)
    setTimeout(() => {
      setShowSecondAssistant(true)
    }, 1500)
  }

  return (
    <Tabs defaultValue="openai" className="w-full font-mono" onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-2 bg-white dark:bg-black border border-black/20 dark:border-white/20">
        <TabsTrigger
          value="openai"
          className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white dark:data-[state=active]:bg-cyan-500 dark:data-[state=active]:text-black uppercase"
        >
          OpenAI_Assistant
        </TabsTrigger>
        <TabsTrigger
          value="anthropic"
          className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white dark:data-[state=active]:bg-cyan-500 dark:data-[state=active]:text-black uppercase"
        >
          Anthropic_Assistant
        </TabsTrigger>
      </TabsList>
      <TabsContent value="openai" className="mt-4">
        <div className="border border-black/20 dark:border-white/20 bg-white dark:bg-black p-4">
          <div className="flex items-center gap-2 mb-4 border-b border-black/20 dark:border-white/20 pb-2">
            <div className="bg-black dark:bg-white p-1.5">
              <MessageSquare className="h-4 w-4 text-white dark:text-black" />
            </div>
            <h3 className="font-medium text-black dark:text-white uppercase">OpenAI_Assistant</h3>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center border border-black/20 dark:border-white/20 bg-white dark:bg-black text-black/70 dark:text-white/70">
                U
              </div>
              <div className="flex-1 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-3 text-black/70 dark:text-white/70">
                <p>I need to plan a trip to Japan for next spring. Can you help me create an itinerary?</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center border border-black/20 dark:border-white/20 bg-cyan-600 dark:bg-cyan-500 text-white dark:text-black">
                A
              </div>
              <div className="flex-1 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-3 text-black/70 dark:text-white/70">
                <p>
                  I'd be happy to help you plan a trip to Japan for next spring! Here's a suggested 10-day itinerary:
                </p>
                <p className="mt-2">
                  <strong className="text-cyan-600 dark:text-cyan-400">DAYS_1-3: TOKYO</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-black/70 dark:text-white/70">
                  <li>Visit Shibuya Crossing and Meiji Shrine</li>
                  <li>Explore Akihabara and Ueno Park</li>
                  <li>Day trip to Kamakura</li>
                </ul>
                <p className="mt-2">
                  <strong className="text-cyan-600 dark:text-cyan-400">DAYS_4-5: HAKONE</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-black/70 dark:text-white/70">
                  <li>Hakone Open Air Museum</li>
                  <li>Lake Ashi cruise</li>
                  <li>Hot springs experience</li>
                </ul>
                <p className="mt-2">
                  <strong className="text-cyan-600 dark:text-cyan-400">DAYS_6-8: KYOTO</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-black/70 dark:text-white/70">
                  <li>Fushimi Inari Shrine</li>
                  <li>Arashiyama Bamboo Grove</li>
                  <li>Kinkaku-ji (Golden Pavilion)</li>
                </ul>
                <p className="mt-2">
                  <strong className="text-cyan-600 dark:text-cyan-400">DAYS_9-10: OSAKA</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-black/70 dark:text-white/70">
                  <li>Osaka Castle</li>
                  <li>Dotonbori district</li>
                  <li>Day trip to Nara</li>
                </ul>
                <p className="mt-2 text-black/70 dark:text-white/70">
                  Would you like me to provide more details about any specific part of this itinerary?
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center border border-black/20 dark:border-white/20 bg-white dark:bg-black text-black/70 dark:text-white/70">
                U
              </div>
              <div className="flex-1 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-3 text-black/70 dark:text-white/70">
                <p>
                  Save this itinerary to ContextSync, in trips
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center border border-black/20 dark:border-white/20 bg-cyan-600 dark:bg-cyan-500 text-white dark:text-black">
                A
              </div>
              <div className="flex-1 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-3 text-black/70 dark:text-white/70">
                <p>
                  I'll save your Japan itinerary to your shared context. This way, you can access it from any other AI
                  assistant connected to your ContextSync.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <Button
                    onClick={handleSaveContext}
                    size="sm"
                    className="gap-1 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-black font-medium uppercase"
                  >
                    <Save className="h-4 w-4" /> SAVE_TO_CONTEXTSYNC
                  </Button>
                </div>
                {showSavedContext && (
                  <div className="mt-2 p-2 border border-cyan-600/30 dark:border-cyan-500/30 bg-white dark:bg-black text-sm text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    JAPAN_ITINERARY_SAVED [status: OK]
                  </div>
                )}
              </div>
            </div>

            {showSecondAssistant && (
              <div className="mt-6 pt-6 border-t border-black/20 dark:border-white/20">
                <div className="flex items-center gap-2 mb-4">
                  <ArrowRight className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  <h3 className="font-medium text-black dark:text-white uppercase">SWITCH_TO_ANTHROPIC</h3>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setActiveTab("anthropic")}
                    className="ml-auto border-black/20 dark:border-white/20 text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black uppercase"
                  >
                    SWITCH_NOW
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="anthropic" className="mt-4">
        <div className="border border-black/20 dark:border-white/20 bg-white dark:bg-black p-4">
          <div className="flex items-center gap-2 mb-4 border-b border-black/20 dark:border-white/20 pb-2">
            <div className="bg-black dark:bg-white p-1.5">
              <MessageSquare className="h-4 w-4 text-white dark:text-black" />
            </div>
            <h3 className="font-medium text-black dark:text-white uppercase">ANTHROPIC_ASSISTANT</h3>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center border border-black/20 dark:border-white/20 bg-white dark:bg-black text-black/70 dark:text-white/70">
                U
              </div>
              <div className="flex-1 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-3 text-black/70 dark:text-white/70">
                <p>Can you tell me about my upcoming trip?</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center border border-black/20 dark:border-white/20 bg-cyan-600 dark:bg-cyan-500 text-white dark:text-black">
                A
              </div>
              <div className="flex-1 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-3 text-black/70 dark:text-white/70">
                <p>
                  I can see from your shared context that you have a 10-day trip to Japan planned for next spring.
                  Here's the itinerary that was saved:
                </p>

                <p className="mt-2">
                  <strong className="text-cyan-600 dark:text-cyan-400">DAYS_1-3: TOKYO</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-black/70 dark:text-white/70">
                  <li>Visit Shibuya Crossing and Meiji Shrine</li>
                  <li>Explore Akihabara and Ueno Park</li>
                  <li>Day trip to Kamakura</li>
                </ul>
                <p className="mt-2">
                  <strong className="text-cyan-600 dark:text-cyan-400">DAYS_4-5: HAKONE</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-black/70 dark:text-white/70">
                  <li>Hakone Open Air Museum</li>
                  <li>Lake Ashi cruise</li>
                  <li>Hot springs experience</li>
                </ul>
                <p className="mt-2">
                  <strong className="text-cyan-600 dark:text-cyan-400">DAYS_6-8: KYOTO</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-black/70 dark:text-white/70">
                  <li>Fushimi Inari Shrine</li>
                  <li>Arashiyama Bamboo Grove</li>
                  <li>Kinkaku-ji (Golden Pavilion)</li>
                </ul>
                <p className="mt-2">
                  <strong className="text-cyan-600 dark:text-cyan-400">DAYS_9-10: OSAKA</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-black/70 dark:text-white/70">
                  <li>Osaka Castle</li>
                  <li>Dotonbori district</li>
                  <li>Day trip to Nara</li>
                </ul>

                <p className="mt-2 text-black/70 dark:text-white/70">
                  Would you like me to suggest some restaurants or help you with transportation options between these
                  cities?
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center border border-black/20 dark:border-white/20 bg-white dark:bg-black text-black/70 dark:text-white/70">
                U
              </div>
              <div className="flex-1 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-3 text-black/70 dark:text-white/70">
                <p>That's amazing! I didn't have to repeat anything. Can you suggest some transportation options?</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center border border-black/20 dark:border-white/20 bg-cyan-600 dark:bg-cyan-500 text-white dark:text-black">
                A
              </div>
              <div className="flex-1 border border-black/20 dark:border-white/20 bg-white dark:bg-black p-3 text-black/70 dark:text-white/70">
                <p>
                  Yes, the ContextSync allows me to access the context saved by your previous conversation with another
                  assistant. Here are transportation recommendations for your Japan trip:
                </p>

                <p className="mt-2">
                  <strong className="text-cyan-600 dark:text-cyan-400">TOKYO_TO_HAKONE:</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-black/70 dark:text-white/70">
                  <li>Take the Odakyu Romance Car from Shinjuku Station (approx. 85 minutes)</li>
                  <li>Alternative: JR Tokaido Line to Odawara, then bus to Hakone</li>
                </ul>

                <p className="mt-2">
                  <strong className="text-cyan-600 dark:text-cyan-400">HAKONE_TO_KYOTO:</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-black/70 dark:text-white/70">
                  <li>Take bus/train to Odawara Station, then Shinkansen to Kyoto (approx. 3 hours total)</li>
                </ul>

                <p className="mt-2">
                  <strong className="text-cyan-600 dark:text-cyan-400">KYOTO_TO_OSAKA:</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-black/70 dark:text-white/70">
                  <li>JR Special Rapid Service (approx. 30 minutes)</li>
                  <li>Alternative: Hankyu Line from Kawaramachi to Umeda</li>
                </ul>

                <p className="mt-2">
                  <strong className="text-cyan-600 dark:text-cyan-400">TRANSPORTATION_PASS_OPTIONS:</strong>
                </p>
                <ul className="list-disc pl-5 mt-1 text-black/70 dark:text-white/70">
                  <li>Japan Rail Pass (7 or 14 day) - covers most JR lines including Shinkansen</li>
                  <li>ICOCA card for local transit in Kansai region</li>
                  <li>Suica/Pasmo card for Tokyo area</li>
                </ul>

                <p className="mt-2 text-black/70 dark:text-white/70">
                  Would you like me to save these transportation recommendations to your shared context as well?
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

