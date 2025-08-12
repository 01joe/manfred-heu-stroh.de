export default function ImpressumPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Impressum</h1>
        <div className="w-24 h-1 bg-green-600 mb-8"></div>

        <div className="prose max-w-none text-gray-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Angaben gemäß § 5 TMG</h2>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold text-gray-800 mb-2">Friedrich Müller Heu und Stroh</p>
            <p>Pariner Berg 18</p>
            <p>23611 Bad Schwartau</p>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Kontakt</h3>
          <div className="mb-6">
            <p>Telefon: 0170 7729489</p>
            <p>E-Mail: info@mueller-heu-stroh.de</p>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Umsatzsteuer-ID</h3>
          <p className="mb-6">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            [Wird bei Bedarf ergänzt]
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <div className="mb-6">
            <p>Friedrich Müller</p>
            <p>Pariner Berg 18</p>
            <p>23611 Bad Schwartau</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Haftungsausschluss</h2>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Haftung für Inhalte</h3>
          <p className="mb-6">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
            Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Haftung für Links</h3>
          <p className="mb-6">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Urheberrecht</h3>
          <p className="mb-6">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </div>
  )
}
