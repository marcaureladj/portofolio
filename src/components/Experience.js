import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Développeur FullStack Web/Mobile",
      company: "Bénilab Services",
      period: "Novembre 2023 - Mai 2024",
      description: [
        "Développement et maintenance de solutions web et mobiles",
        "Optimisation des tunnels de vente pour augmenter les conversions"
      ]
    },
    {
      title: "Chef Section Graphisme et Formateur",
      company: "Institut Numérique Luda",
      period: "Juin 2019 - Décembre 2019",
      description: [
        "Gestion d'une équipe de graphistes et conception de formations techniques",
        "Création de supports visuels impactants (affiches, branding, etc.)"
      ]
    },
    {
      title: "Graphiste et Monteur Vidéo",
      company: "L'Autre Figaro",
      period: "Mars 2023",
      description: [
        "Élaboration de journaux en InDesign et montage de vidéos éditoriales"
      ]
    },
    {
      title: "Volontaire",
      company: "Campagne de Vaccination COVID-19",
      period: "Avril 2023",
      description: [
        "Gestion des données et statistiques pour l'Hôpital de Zone Lokossa"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mon Parcours <span className="text-[#00FF00]">Professionnel</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Voici un aperçu de mes expériences professionnelles, qui m'ont permis de développer une expertise technique et créative.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-[#00FF00]/20" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00FF00] rounded-full" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="glass-card p-6 hover-card">
                    <span className="text-[#00FF00] text-sm font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{exp.title}</h3>
                    <p className="text-gray-400 mt-1">{exp.company}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#00FF00] mr-2">•</span>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
