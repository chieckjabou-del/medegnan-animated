import { ArrowUpRight, CheckCircle2, TrendingUp } from "lucide-react";

import "./CaseStudies.css";

const WHATSAPP_LINK =
  "https://wa.me/22964280865?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20sur%20un%20cas%20d%27entreprise";

type CaseStudy = {
  eyebrow: string;
  title: string;
  context: string;
  before: {
    margin: string;
    profitability: string;
    issue: string;
  };
  after: {
    timeline: string;
    margin: string;
    profitability: string;
  };
  impact: string;
  levers: string[];
  testimonial: string;
};

const caseStudies: CaseStudy[] = [
  {
    eyebrow: "Cas anonymisé 01",
    title: "Distribution alimentaire B2B",
    context: "PME confirmée · 4 sites opérationnels · Afrique de l'Ouest",
    before: {
      margin: "2,1 % de marge nette",
      profitability: "58,8 M FCFA/an de rentabilité",
      issue: "Livraisons non facturées, coûts d'import mal pilotés et absence de tableau de bord.",
    },
    after: {
      timeline: "3 mois",
      margin: "6,8 % de marge nette",
      profitability: "190,4 M FCFA/an de rentabilité",
    },
    impact: "131,6 M FCFA d'économies identifiées",
    levers: [
      "Facturation des livraisons",
      "Optimisation des coûts d'import",
      "Fermeture d'un site déficitaire",
      "Pilotage quotidien par KPI",
    ],
    testimonial: "Nous pensions connaître notre entreprise. Le diagnostic a révélé que nous perdions plus de 130 millions par an en fuites invisibles. En 3 mois, nous avons transformé notre rentabilité. C'est un investissement qui s'est remboursé en 2 semaines.",
  },
  {
    eyebrow: "Cas anonymisé 02",
    title: "Commerce de détail multi-sites",
    context: "PME · 3 points de vente · Afrique de l'Ouest",
    before: {
      margin: "3,5 % de marge nette",
      profitability: "42 M FCFA/an de rentabilité",
      issue: "Pertes de stock non mesurées, coûts non ventilés et marges variables selon les produits.",
    },
    after: {
      timeline: "6 mois",
      margin: "9,2 % de marge nette",
      profitability: "124,2 M FCFA/an de rentabilité",
    },
    impact: "82,2 M FCFA d'économies identifiées",
    levers: [
      "Suivi des coûts par point de vente",
      "Réduction des pertes de stock",
      "Optimisation du mix produits",
      "Budget prévisionnel mensuel",
    ],
    testimonial: "Nous avions 3 points de vente et pensions qu'un seul était rentable. En réalité, nous avions des fuites massives partout. Le diagnostic a changé notre vision. Aujourd'hui, tous nos points sont profitables et en croissance.",
  },
  {
    eyebrow: "Cas anonymisé 03",
    title: "PME de fabrication et transformation",
    context: "Petite entreprise · 22 collaborateurs · Afrique de l'Ouest",
    before: {
      margin: "1,8 % de marge nette",
      profitability: "15,3 M FCFA/an de rentabilité",
      issue: "Costing produit imprécis, surcoûts de production et processus commercial désorganisé.",
    },
    after: {
      timeline: "4 mois",
      margin: "8,5 % de marge nette",
      profitability: "80,75 M FCFA/an de rentabilité",
    },
    impact: "65,45 M FCFA d'économies identifiées",
    levers: [
      "Costing produit fiable",
      "Réduction des coûts de production",
      "Structuration du processus de vente",
      "Mise en place d'un système qualité",
    ],
    testimonial: "Je pensais que ma marge était faible parce que le marché était difficile. Le diagnostic a montré que c'était mes processus internes qui coûtaient cher. Nous avons restructuré et maintenant nous sommes rentables.",
  },
  {
    eyebrow: "Cas anonymisé 04",
    title: "Services professionnels B2B",
    context: "PME · 35 collaborateurs · Afrique de l'Ouest",
    before: {
      margin: "4,2 % de marge nette",
      profitability: "27,3 M FCFA/an de rentabilité",
      issue: "Tarifs décorrélés des coûts, clients non rentables et facturation trop administrative.",
    },
    after: {
      timeline: "5 mois",
      margin: "11,8 % de marge nette",
      profitability: "80,24 M FCFA/an de rentabilité",
    },
    impact: "52,94 M FCFA d'économies identifiées",
    levers: [
      "Révision de la tarification",
      "Analyse de rentabilité client",
      "Automatisation de la facturation",
      "Réduction des surcharges administratives",
    ],
    testimonial: "Nous servions des clients qui nous coûtaient de l'argent. Nous n'avions aucune visibilité. Le diagnostic a été révélateur. Nous avons nettoyé notre portefeuille clients et restructuré nos tarifs. Maintenant, chaque client est rentable.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="case-studies-section" aria-labelledby="case-studies-title">
      <div className="case-studies-shell">
        <div className="case-studies-heading">
          <div>
            <p className="case-studies-kicker">Missions documentées</p>
            <h2 id="case-studies-title">Des transformations lisibles, des indicateurs suivis.</h2>
          </div>
          <p className="case-studies-intro">
            Ces cas sont présentés sous forme anonymisée à partir de missions documentées. Les chiffres comparent la situation observée avant l'intervention et les indicateurs suivis après la mise en œuvre du plan d'action.
          </p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <article className="case-study-card" key={study.title}>
              <div className="case-study-card__topline">
                <span className="case-study-eyebrow">{study.eyebrow}</span>
                <span className="case-study-context">{study.context}</span>
              </div>

              <h3>{study.title}</h3>

              <div className="case-study-comparison">
                <div className="case-study-panel case-study-panel--before">
                  <span className="case-study-label">Avant diagnostic</span>
                  <strong>{study.before.margin}</strong>
                  <span>{study.before.profitability}</span>
                  <p>{study.before.issue}</p>
                </div>

                <div className="case-study-arrow" aria-hidden="true">
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </div>

                <div className="case-study-panel case-study-panel--after">
                  <span className="case-study-label">Après mise en œuvre</span>
                  <strong>{study.after.margin}</strong>
                  <span>{study.after.profitability}</span>
                  <p>Premiers indicateurs suivis après {study.after.timeline}.</p>
                </div>
              </div>

              <div className="case-study-impact">
                <TrendingUp size={17} strokeWidth={1.8} aria-hidden="true" />
                <span>{study.impact}</span>
              </div>

              <div className="case-study-levers">
                <span className="case-study-label">Leviers documentés</span>
                <ul>
                  {study.levers.map((lever) => (
                    <li key={lever}>
                      <CheckCircle2 size={15} strokeWidth={1.8} aria-hidden="true" />
                      <span>{lever}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="case-study-testimonial">
                <p>« {study.testimonial} »</p>
                <cite>Retour anonymisé · Direction de l'entreprise</cite>
              </blockquote>
            </article>
          ))}
        </div>

        <div className="case-studies-note">
          <p>
            Les résultats varient selon le périmètre, la qualité des données disponibles et la vitesse d'exécution des recommandations. Ils ne constituent pas une promesse de résultat pour une entreprise non auditée.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="case-studies-cta">
            Échanger sur votre situation
            <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export { caseStudies };
