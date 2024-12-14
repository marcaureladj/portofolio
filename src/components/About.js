import React from 'react';
import { motion } from 'framer-motion';
import profileImage from './marc.png';
const About = () => {
  const stats = [
    { label: "Années d'expérience", value: "5+" },
    { label: "Projets réalisés", value: "50+" },
    { label: "Certifications", value: "4+" }
  ];

  const contactInfo = [
    { label: "Lieu", value: "Lokossa, Mono, Bénin" },
    { label: "Email", value: "marcaureladj@gmail.com" },
    { label: "Téléphone", value: "+229 95 41 34 47 - +229 97 15 51 " },
    { label: "Langues", value: "Français (Natif), Anglais (Base)" }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            À propos de <span className="text-[#00FF00]">moi</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass-card">
             <img 
                src={profileImage} 
                alt="Marc-Aurel Adjahossou Adiffon"
                className="w-full h-full object-cover"
              />
              
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00FF00]/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#00FF00]/10 rounded-full blur-xl" />
          </motion.div>

          {/* Content section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300">
              Je suis Marc-Aurel Adjahossou Adiffon, un développeur informatique passionné et un créatif avec près de 5 ans d'expérience dans le monde du numérique. Mon expertise couvre le développement de solutions logicielles (web, mobile, desktop, et intelligence artificielle) et la création visuelle (graphisme et montage vidéo). Je suis motivé par le défi de transformer des concepts en projets concrets et de proposer des résultats à forte valeur ajoutée.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-4 text-center"
                >
                  <div className="text-3xl font-bold text-[#00FF00]">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 mt-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-4"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{info.label}</span>
                    <span className="text-white">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-[#00FF00] italic">
                "L'innovation naît de la passion et du travail acharné."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
