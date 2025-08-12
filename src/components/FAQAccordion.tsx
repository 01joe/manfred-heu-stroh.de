'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [ 
  {
    question: "Woran erkenne ich gutes Heu?",
    answer: "Gutes Heu erkennt man an der Farbe, an der Zusammensetzung der Gräser, am Geruch, an Stellen durch schlechte Lagerung oder an den äußeren Einwirkungen wie Regen oder eingezogenem Wasser – aber auch an offensichtlichen Merkmalen wie sichtbarem Unkraut oder Grassoden. Wichtig: Heu von schlechter Qualität sollte man nicht verwenden, da sich Sporen von Schimmelpilzen bilden."
  },
  {
    question: "Warum sind die Preise je Ballen so unterschiedlich?",
    answer: "Die Preise richten sich nach der gewünschten Qualität (Stroh zum Streuen oder Füttern), nach dem Format (rund oder eckig, Sondermaß) und nach der Beschaffenheit (lang, geschnitten oder gehäckselt; jedoch für die jeweilige Anwendung auf jeden Fall geeignet)."
  },
  {
    question: "Wie bestimme ich die Inhaltsstoffe von Heu?",
    answer: "In der Regel kann man die Inhaltsstoffe im Heu nur mit einer Laboruntersuchung genau feststellen. Grünes Heu bietet dabei nicht mehr Energie als braunes Heu – was stark Sorten- und Standortabhängig ist. Die Farbe bestimmt lediglich den Carotingehalt und den Zustand der äußeren Schicht."
  },
  {
    question: "Woran erkenne ich gutes Stroh?",
    answer: "Die Stroh-Qualität erkennen Sie an der Farbe (ob goldgelb oder eher gräulich), am Geruch, an Lagerstellen oder äußeren Einwirkungen wie Regen oder eingezogenem Wasser. Wichtig: Offensichtliche Merkmale für eine schlechte Qualität sind sichtbares Unkraut und eine rotbräunliche Verfärbung an der Außenseite."
  },
  {
    question: "Welches ist das beste Heu für Pferde?",
    answer: "Für Pferde eignet sich strukturreiches Heu am besten – mit einem höheren Halm-Anteil zum Blatt-Anteil. Deswegen sollte auch vorzugsweise der erste Schnitt einer Heuernte für Pferde verwendet werden. Dabei wird nach der Blüte für Pferde gemäht."
  },
  {
    question: "Welches Stroh fressen Pferde / Rinder am liebsten?",
    answer: "Bei Pferden wird selten mit Stroh Rohfaser zugefüttert – jedoch fressen Pferde vorzugsweise Weizen- und Gerstenstroh. Bei Rindern ist es wichtig, dass das Futterstroh kurz ist, da die langen Halme bei den Futtermischungen gern übrig bleiben."
  },
  {
    question: "Wie lange hält sich Heu?",
    answer: "Ohne Kompromisse einzugehen hält sich Heu etwa ein Jahr. Bei längerer Lagerung wird Heu alt und es werden die Inhaltsstoffe und Vitamine abgebaut. Wichtig: Überjähriges Heu sollte grundsätzlich nicht an Pferde verfüttert werden."
  },
  {
    question: "Kann Stroh schlecht werden?",
    answer: "Wenn Stroh gut gelagert wird und so kein Wasser in die Ballen laufen oder ziehen kann, ist Stroh über mehrere Jahre lagerbar."
  },
  {
    question: "Wie sollte das Heu gelagert werden?",
    answer: "Idealerweise sollte man Heu unter einem Dach mit Wänden lagern. Falls keine Wände vorhanden sind, sollten zumindest die Wetterseiten geschlossen werden, sodass keine Witterung an das Heu gelangen kann. Zudem sollte man auch sicherstellen, dass keine Feuchtigkeit vom Boden in das Heu einzieht."
  },
  {
    question: "Wie viel Stroh braucht ein Pferd im Monat?",
    answer: "Das ist abhängig von der Heufütterung. Bei frei zugänglichem Raufutter ist eine Strohzufütterung nicht notwendig."
  },
  {
    question: "Warum bietet Ihr keine Silage an?",
    answer: "Heulage und Silage sind auch bei bester Ausführung in der Herstellung immer ein sensibles Gut. Es besteht bei Pferden die Gefahr von Kotwasser und entstehende Leichengifte bei eingepressten Tieren. Um diesen Streitpunkt zu vermeiden, halten wir Abstand von Heulage und Silage."
  },
  {
    question: "Wie lagere ich Stroh am besten?",
    answer: "Idealerweise wird Stroh unter einem Dach gelagert, falls keine Wände vorhanden sind, sollten zumindest die Wetterseiten geschlossen werden um es vor Witterung zu schützen. Zudem kann man auch sicherstellen, dass keine Feuchtigkeit vom Boden in das Stroh zieht."
  }
]

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {faqData.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
          <button
            className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-inset"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium text-gray-800 pr-4">{item.question}</span>
            <div className="text-green-600 flex-shrink-0 transition-transform duration-300">
              {openItems.includes(index) ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          </button>

          <div className={`transition-all duration-300 ease-in-out ${
            openItems.includes(index)
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
