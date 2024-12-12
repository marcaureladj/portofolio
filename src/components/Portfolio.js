import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: "BENILAB SERVICES",
      category: "Site Web Entreprise",
      image: "/path/to/benilab.jpg",
      description: "Site web professionnel pour BENILAB SERVICES, une entreprise informatique et techhub au Bénin. Présentation des services, solutions et formations technologiques.",
      link: "https://benilab-services.com/"
    },
    {
      title: "TOPSHOP MARKET",
      category: "E-commerce",
      image: "/path/to/topshop.jpg",
      description: "Plateforme e-commerce complète permettant aux utilisateurs d'acheter et de vendre des produits en ligne avec un système de paiement sécurisé.",
      link: "https://topshop-market.com/"
    },
    {
      title: "TOPSHOP MARKET Mobile",
      category: "Application Mobile",
      image: "/path/to/topshop-mobile.jpg",
      description: "Version mobile de la plateforme e-commerce TOPSHOP MARKET. Application native offrant une expérience d'achat optimisée sur mobile.",
      status: "Disponible sur Android"
    },
    {
      title: "TeenWell",
      category: "Application Mobile",
      image: "/path/to/teenwell.jpg",
      description: "Application mobile innovante en cours de développement. Solution dédiée au bien-être et à l'épanouissement des adolescents.",
      status: "En développement"
    },
    {
      title: "OPENMIND",
      category: "Librairie Digitale",
      image: "/path/to/openmind.jpg",
      description: "Bibliothèque numérique permettant aux utilisateurs de découvrir, acheter et lire des ebooks. Interface intuitive pour une expérience de lecture optimale.",
      link: "http://ebooks.topshop-market.com/"
    },
    {
      title: "Trends",
      category: "SAAS",
      image: "/path/to/trends.jpg",
      description: "Solution SAAS innovante pour optimiser la présence en ligne des entreprises. Interface moderne avec effets de flou et design minimaliste.",
      link: "https://preview--interface-blur-breeze.lovable.app/"
    }
  ];

  return (
    <section id="work" className="py-20 bg-[#1B4D2E]/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Aperçu de <span className="text-[#00CC00]">mes travaux</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Une sélection de mes projets les plus récents et significatifs en développement web et mobile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-[#1B4D2E]/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-[#1B4D2E]/20 transition-all duration-300">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm text-[#00CC00] bg-[#00CC00]/10 rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                  {project.status && (
                    <span className="inline-block mt-2 px-3 py-1 text-sm bg-[#1B4D2E]/20 rounded-full">
                      {project.status}
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5 }}
                      className="flex items-center text-[#00CC00] hover:text-[#00FF00] transition-colors duration-300"
                    >
                      <span className="mr-2">Voir le projet</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
