import React, { useEffect, useState } from 'react';
import HeroSectionAnimated from '@/components/animations/HeroSectionAnimated';
import { ResultsGrid } from '@/components/animations/AnimatedCounter';
import { ServiceGrid } from '@/components/animations/ServiceCard';
import { AnimatedTimeline } from '@/components/animations/AnimatedTimeline';
import '@/components/animations/HeroSectionAnimated.css';
import '@/components/animations/AnimatedCounter.css';
import '@/components/animations/ServiceCard.css';
import '@/components/animations/AnimatedTimeline.css';
import '@/styles/global-animations.css';

/**
 * Page d'accueil MEDEGNAN complète
 * Reproduit fidèlement le contenu existant avec animations premium
 */

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Données pour le hero
  const heroData = {
    title: 'Vous perdez de l\'argent\nsans le voir.\nNous le trouvons en 48h.',
    subtitle: 'Nous analysons votre entreprise et identifions précisément les fuites, les failles et les opportunités de croissance immédiate.',
    ctaText: 'Demander mon diagnostic (WhatsApp)',
    ctaLink: 'https://wa.me/22964280865?text=Bonjour%2C%20je%20souhaite%20faire%20le%20diagnostic%20de%20mon%20entreprise',
  };

  // Données pour les résultats
  const resultsData = [
    {
      target: 4000000,
      label: 'FCFA d\'économies en moyenne',
      suffix: ' FCFA',
      icon: '₣',
    },
    {
      target: 150,
      label: 'Heures d\'audit incluses',
      suffix: 'h',
      icon: '⏱',
    },
    {
      target: 98,
      label: 'Taux de satisfaction',
      suffix: '%',
      icon: '★',
    },
    {
      target: 48,
      label: 'Heures pour les résultats',
      suffix: 'h',
      icon: '▶',
    },
  ];

  // Données pour les services - Nouvelle grille tarifaire
  const servicesData = [
    {
      title: 'Micro-entreprise',
      description: '1 à 5 collaborateurs',
      price: '250 000 FCFA',
      features: [
        'Diagnostic Stratégique complet',
        'Analyse financière approfondie',
        'Recommandations actionnables',
        'Rapport détaillé',
      ],
      icon: '▸',
      ctaText: 'Demander',
      ctaLink: 'https://wa.me/22964280865?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Diagnostic%20Strat%C3%A9gique%20Micro-entreprise',
    },
    {
      title: 'Petite entreprise',
      description: '6 à 20 collaborateurs',
      price: '400 000 FCFA',
      features: [
        'Diagnostic Stratégique approfondi',
        'Audit organisationnel',
        'Plan de transformation',
        'Accompagnement initial',
      ],
      icon: '▸',
      ctaText: 'Demander',
      ctaLink: 'https://wa.me/22964280865?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Diagnostic%20Strat%C3%A9gique%20Petite%20entreprise',
    },
    {
      title: 'PME',
      description: '21 à 50 collaborateurs',
      price: '960 000 FCFA',
      features: [
        'Diagnostic Stratégique complet',
        'Audit multi-départements',
        'Modélisation financière',
        'Suivi 60 jours',
      ],
      icon: '▸',
      highlighted: true,
      ctaText: 'Demander',
      ctaLink: 'https://wa.me/22964280865?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Diagnostic%20Strat%C3%A9gique%20PME',
    },
    {
      title: 'PME confirmée',
      description: '51 à 150 collaborateurs',
      price: '1 150 000 FCFA',
      features: [
        'Diagnostic Stratégique approfondi',
        'Audit complet groupe',
        'Restructuration organisationnelle',
        'Accompagnement 90 jours',
      ],
      icon: '▸',
      ctaText: 'Demander',
      ctaLink: 'https://wa.me/22964280865?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Diagnostic%20Strat%C3%A9gique%20PME%20confirm%C3%A9e',
    },
    {
      title: 'Groupe multi-sites',
      description: '150+ collaborateurs',
      price: '2 900 000 FCFA',
      features: [
        'Diagnostic Stratégique complet',
        'Audit multi-sites intégré',
        'Modélisation avancée',
        'Accompagnement 6 mois',
      ],
      icon: '▸',
      ctaText: 'Demander',
      ctaLink: 'https://wa.me/22964280865?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Diagnostic%20Strat%C3%A9gique%20Groupe',
    },
  ];

  // Données pour la timeline
  const timelineSteps = [
    {
      number: 1,
      title: 'Contact WhatsApp',
      description: 'Prise de contact facile et rapide',
      icon: '▸',
    },
    {
      number: 2,
      title: 'Qualification rapide',
      description: 'Appel stratégique pour comprendre votre situation',
      icon: '▸',
    },
    {
      number: 3,
      title: 'Paiement',
      description: 'Investissement adapté à votre diagnostic',
      icon: '▸',
    },
    {
      number: 4,
      title: 'Audit (48h)',
      description: 'Analyse complète et approfondie',
      icon: '▸',
    },
    {
      number: 5,
      title: 'Résultats + Plan',
      description: 'Recommandations concrètes et actionnables',
      icon: '▸',
    },
    {
      number: 6,
      title: 'Accompagnement',
      description: 'Optionnel - mise en œuvre et suivi',
      icon: '▸',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-green-500 to-green-700 z-50"
        style={{ width: `${scrollProgress * 100}%`, transition: 'width 100ms ease-out' }}
      />

      {/* Hero Section */}
      <HeroSectionAnimated
        title={heroData.title}
        subtitle={heroData.subtitle}
        ctaText={heroData.ctaText}
        ctaLink={heroData.ctaLink}
      />

      {/* Section : Zones d'intervention */}
      <section id="zones" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="section-header mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos zones d'intervention
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Présents dans 9 pays d'Afrique francophone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { country: 'Bénin', flag: '🇧🇯' },
              { country: 'Burkina Faso', flag: '🇧🇫' },
              { country: 'Côte d\'Ivoire', flag: '🇨🇮' },
              { country: 'Guinée', flag: '🇬🇳' },
              { country: 'Mali', flag: '🇲🇱' },
              { country: 'Niger', flag: '🇳🇪' },
              { country: 'Sénégal', flag: '🇸🇳' },
              { country: 'Togo', flag: '🇹🇬' },
              { country: 'Cameroun', flag: '🇨🇲' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-green-500 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{item.flag}</div>
                <h3 className="text-lg font-bold text-gray-900">{item.country}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section : Problèmes et Enjeux */}
      <section id="problems" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="section-header mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Les vrais problèmes de votre entreprise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vous travaillez dur, mais l'argent s'échappe. Voici pourquoi.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fuites d\'argent invisibles',
                description: 'Des dépenses inutiles, des processus inefficaces, des collaborateurs non productifs. Vous ne les voyez pas, mais elles coûtent cher.',
              },
              {
                title: 'Pas de visibilité financière',
                description: 'Vous ne savez pas vraiment où va votre argent. Pas de tableau de bord, pas de KPI, juste des chiffres flous.',
              },
              {
                title: 'Risques organisationnels',
                description: 'Pas de système, pas de délégation, pas de croissance. Vous êtes le goulot d\'étranglement de votre entreprise.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-green-500 transition-all duration-300"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="text-4xl mb-4">▸</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section : Mission */}
      <section id="mission" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="section-header mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre mission
            </h2>
            <p className="text-xl text-gray-600">
              Transformer votre entreprise en machine à cash
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-12 rounded-lg border border-green-200">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-green-600">MEDEGNAN CONSULTING</span> est le cabinet de référence de la transformation stratégique en Afrique francophone. Nous aidons les entrepreneurs et les dirigeants à identifier et récupérer l'argent qui s'échappe de leur entreprise.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En 48 heures, nous analysons votre entreprise de A à Z et vous livrons un diagnostic précis avec un plan d'action concret pour augmenter votre rentabilité et votre croissance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nos clients récupèrent en moyenne <span className="font-bold text-green-600">4 millions de FCFA</span> d'économies et augmentent leur rentabilité de <span className="font-bold text-green-600">30% à 50%</span> en 6 mois.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section : Résultats */}
      <section id="results" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="section-header mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos résultats parlent d'eux-mêmes
            </h2>
            <p className="text-xl text-gray-600">
              Des chiffres concrets et mesurables
            </p>
          </div>
          <ResultsGrid results={resultsData} />
        </div>
      </section>

      {/* Section : Processus */}
      <section id="process" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="section-header mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Notre processus simple et rassurant
            </h2>
            <p className="text-xl text-gray-600">
              6 étapes pour récupérer votre argent caché
            </p>
          </div>
          <AnimatedTimeline steps={timelineSteps} orientation="horizontal" />
        </div>
      </section>

      {/* Section : Différenciation */}
      <section id="differentiation" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="section-header mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pourquoi choisir MEDEGNAN ?
            </h2>
            <p className="text-xl text-gray-600">
              Ce qui nous rend différents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Résultats garantis',
                description: 'Nos clients récupèrent en moyenne 4M FCFA. Si vous n\'êtes pas satisfait, nous remboursons.',
              },
              {
                title: 'Rapidité',
                description: 'Diagnostic complet en 48 heures. Pas d\'attente, pas de complications.',
              },
              {
                title: 'Précision',
                description: 'Nous identifions les fuites exactes et les opportunités cachées de votre entreprise.',
              },
              {
                title: 'Accompagnement',
                description: 'Optionnel mais recommandé : nous vous aidons à mettre en place les solutions.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-6 p-8 bg-white rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 text-3xl">✓</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section : Tarification */}
      <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="section-header mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Diagnostic Stratégique
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le diagnostic adapté à votre situation
            </p>
          </div>
          <ServiceGrid services={servicesData} />
        </div>
      </section>

      {/* Section : Réseau de Consultants */}
      <section id="network" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="section-header mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Rejoignez notre réseau
            </h2>
            <p className="text-xl text-gray-600">
              Devenez consultant MEDEGNAN et accédez à notre méthodologie propriétaire
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-12 rounded-lg border border-blue-200">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                MEDEGNAN offre la possibilité aux consultants qualifiés de rejoindre son réseau et d'obtenir une licence d'exploitation de sa méthodologie propriétaire.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En tant que consultant MEDEGNAN, vous bénéficiez de :
              </p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">▸</span>
                  <span>Accès à notre méthodologie de transformation stratégique éprouvée</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">▸</span>
                  <span>Support et formation continue du cabinet</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">▸</span>
                  <span>Accès à nos outils et ressources propriétaires</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 font-bold">▸</span>
                  <span>Réseau d'experts et de partenaires</span>
                </li>
              </ul>
              <div className="pt-6">
                <a
                  href="https://wa.me/22964280865?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20une%20licence%20MEDEGNAN"
                  className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  En savoir plus sur les licences
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section : CTA Final */}
      <section id="final-cta" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à récupérer votre argent caché ?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Les places sont limitées pour garantir une qualité premium et des résultats mesurables.
          </p>
          <a
            href="https://wa.me/22964280865?text=Bonjour%2C%20je%20souhaite%20faire%20le%20diagnostic%20de%20mon%20entreprise"
            className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Réserver votre place maintenant
          </a>
        </div>
      </section>
    </main>
  );
}
