export default function LegalNotice() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informations légales</h2>
            <p>
              MEDEGNAN est une entreprise spécialisée dans l'audit stratégique et la transformation d'entreprises.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, vidéos) est la propriété exclusive de MEDEGNAN ou de ses partenaires.
              Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Limitation de responsabilité</h2>
            <p>
              MEDEGNAN décline toute responsabilité pour les dommages directs ou indirects résultant de l'utilisation de ce site.
              Les informations fournies sont à titre informatif et ne constituent pas un conseil juridique ou financier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, veuillez nous contacter via WhatsApp : +229 64 28 08 65
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
