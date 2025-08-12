import Link from 'next/link'
import { Check, Truck, MapPin, Clock } from 'lucide-react'

export default function TransportLogisticsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat"
               style={{backgroundImage: "url('http://fraterworks.com/cdn/shop/products/clement-remond-mb934nV9EvQ-unsplash.jpg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Hero Content */}
            <div className="text-white">
              <p className="text-sm uppercase tracking-wide mb-4 text-green-200">
                TRANSPORT & LOGISTIK
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Zuverlässige Logistiklösungen für Heu und Stroh in ganz Europa
              </h1>
            </div>

            {/* Action Cards */}
            <div className="space-y-4">
              {/* Fleet Info Card */}
              <div className="bg-green-700 text-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">
                  Unser<br />
                  <span className="text-2xl">FUHRPARK</span>
                </h3>
                <a
                  href="#fleet-info"
                  className="inline-block bg-white text-green-700 px-4 py-2 rounded hover:bg-gray-100 transition-colors mt-4"
                >
                  MEHR ERFAHREN
                </a>
              </div>

              {/* Service Areas Card */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-gray-800 font-bold text-lg mb-2">
                  Liefergebiete &<br />
                  <span className="text-2xl">SERVICE</span>
                </h3>
                <a
                  href="#service-areas"
                  className="inline-block bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors mt-4"
                >
                  ZUR ÜBERSICHT
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Professionelle Transport- und Logistiklösungen
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Mit unserem modernen Fuhrpark und erfahrenem Fahrpersonal bieten wir zuverlässige Transportlösungen für Heu und Stroh. Unsere Logistikexperten sorgen für pünktliche Lieferungen in ganz Deutschland und Europa.
            </p>
            <div className="w-24 h-1 bg-green-600 mx-auto mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Fleet Services */}
            <div className="text-center">
              <Truck className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Eigener Fuhrpark</h3>
              <p className="text-gray-600">
                Moderne LKW-Flotte mit speziell ausgerüsteten Aufliegern für den sicheren Transport von Heu- und Strohballen.
              </p>
            </div>

            {/* Coverage Area */}
            <div className="text-center">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Europaweite Lieferung</h3>
              <p className="text-gray-600">
                Zuverlässige Lieferungen in Deutschland, Österreich, Schweiz, Niederlande, Frankreich und weitere europäische Länder.
              </p>
            </div>

            {/* Timing */}
            <div className="text-center">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ganzjährig verfügbar</h3>
              <p className="text-gray-600">
                Kontinuierliche Lieferfähigkeit das ganze Jahr über - planbare Logistik für Ihre Bedürfnisse.
              </p>
            </div>
          </div>

          {/* Logistics Solutions */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Maßgeschneiderte Logistiklösungen
            </h3>
            <p className="text-gray-600">
              Ob Einzellieferungen oder regelmäßige Transporte – wir entwickeln maßgeschneiderte Logistikkonzepte für Ihre Bedürfnisse. Unsere erfahrenen Disponenten optimieren Routen und Ladekapazitäten für maximale Effizienz. Von unserem Lager bis zur Anlieferung an den vom Kunden gewünschten Standort oder Ort stellen wir die Logistikkette sicher und übernehmen diese (von der Verladung Ihres Heus oder Strohs aus unserem Lager, dem Transport, der Entladung bis zur Anlieferung an die vom Kunden gewünschte Adresse).
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Information Section */}
      <section id="fleet-info" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Unser moderner Fuhrpark</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Fleet Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Speziell ausgerüstete Fahrzeuge</h3>
              <p className="text-gray-600 mb-6">
                Unsere LKW-Flotte ist speziell für den Transport von Heu und Stroh konzipiert und wird von hochqualifizierten,
                erfahrenen Fahrern betrieben.
              </p>

              <div className="space-y-4">
                {[
                  "Großraum-LKW mit speziellen Aufliegern für Heu- und Strohballen",
                  "Pritschenauflieger für verschiedene Ballengrößen und -formate",
                  "Moderne Fahrzeugflotte mit regelmäßiger Wartung und Kontrolle",
                  "Erfahrene und geschulte Berufskraftfahrer",
                  "GPS-Tracking für transparente Sendungsverfolgung",
                  "Flexible Ladekapazitäten je nach Kundenbedarf"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="service-areas" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Unsere Liefergebiete
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Germany */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🇩🇪 Deutschland</h3>
              <p className="text-gray-600 mb-4">
                Flächendeckende Belieferung in allen Bundesländern mit optimierten Routen und kurzen Lieferzeiten.
              </p>
              
            </div>

            {/* Austria & Switzerland */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🇦🇹🇨🇭 Österreich & Schweiz</h3>
              <p className="text-gray-600 mb-4">
                Zuverlässige Lieferungen in unsere Nachbarländer mit allen erforderlichen Zollformalitäten.
              </p>
              
            </div>

            {/* Other European Countries */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🇪🇺 Weitere EU-Länder</h3>
              <p className="text-gray-600 mb-4">
                Internationale Logistik für verschiedene europäische Märkte mit lokaler Expertise.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Images */}
            <div className="space-y-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1661830833689-98b6b5ec9339?fm=jpg&q=80&w=3000"
                alt="Hochwertige Heuballen"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1659257193040-de45f66216d2?fm=jpg&q=80&w=3000"
                alt="Professionelle Strohballen"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Advantages */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Ihre Vorteile bei unserer Logistik
              </h2>

              <div className="space-y-6">
                {[
                  "Eigener moderner Fuhrpark für maximale Flexibilität",
                  "Erfahrenes Fahrpersonal mit Spezialisierung auf Agrarrohstoffe",
                  "Europaweite Lieferungen mit allen erforderlichen Genehmigungen",
                  "Professionelle Routenplanung und Disposition",
                  "Transparente Sendungsverfolgung und Kommunikation",
                  "Zuverlässige Lieferzeiten und flexible Terminplanung"
                ].map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
