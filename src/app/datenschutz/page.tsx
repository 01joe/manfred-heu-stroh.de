export default function DatenschutzPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Datenschutzerklärung</h1>
        <div className="w-24 h-1 bg-green-600 mb-8"></div>

        <div className="prose max-w-none text-gray-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Datenschutz auf einen Blick</h2>
          <p className="mb-6">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Allgemeine Hinweise</h3>
          <p className="mb-6">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Datenschutz</h3>
          <p className="mb-6">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
            personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie
            dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Verantwortliche Stelle</h3>
          <p className="mb-6">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <p>
              Friedrich Müller Heu und Stroh<br />
              Pariner Berg 18<br />
              23611 Bad Schwartau<br />
              E-Mail: info@mueller-heu-stroh.de<br />
              Telefon: 0170 7729489
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Datenerfassung auf dieser Website</h2>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Cookies</h3>
          <p className="mb-6">
            Diese Website verwendet nur technisch erforderliche Cookies. Eine Analyse des Nutzerverhaltens findet nicht statt.
          </p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Kontaktformular</h3>
          <p className="mb-6">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
            von Anschlussfragen bei uns gespeichert.
          </p>
        </div>
      </div>
    </div>
  )
}
