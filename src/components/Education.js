import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const certifications = [
    {
      title: "Python & Django Web Development",
      platform: "Udemy",
      date: "Janvier 2024"
    },
    {
      title: "Digital Marketing Fundamentals",
      platform: "Udemy",
      date: "Janvier 2024"
    },
    {
      title: "Deep Learning",
      platform: "OpenClassrooms",
      date: "Décembre 2023"
    },
    {
      title: "Internet of Things (IoT)",
      platform: "Udemy",
      date: "Novembre 2023"
    }
  ];

  const education = [
    {
      degree: "Licence Professionnelle en Systèmes Informatiques et Logiciels",
      school: "Institut Supérieur de Management et de Technologie St Salomon",
      location: "Bénin",
      period: "2019-2022"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-[#00FF00]">Formations</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Je m'engage dans un apprentissage continu pour renforcer mes compétences techniques et offrir des solutions à jour avec les dernières avancées.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#00FF00]">Formation Académique</h3>
            {education.map((edu, index) => (
              <div key={index} className="glass-card p-6 hover-card">
                <h4 className="text-xl font-bold">{edu.degree}</h4>
                <p className="text-gray-400 mt-2">{edu.school}</p>
                <p className="text-gray-400">{edu.location}</p>
                <p className="text-[#00FF00] mt-2">{edu.period}</p>
              </div>
            ))}
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[#00FF00]">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-4 hover-card"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold">{cert.title}</h4>
                      <p className="text-gray-400 text-sm">{cert.platform}</p>
                    </div>
                    <span className="text-[#00FF00] text-sm">{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
